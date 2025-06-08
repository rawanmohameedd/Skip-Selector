import { useState, useEffect } from 'react';
import type { Skip, Filters } from '../types/skip';
import { fetchSkips } from '../utils/api';

export function useSkips() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    allowsHeavyWaste: false,
    roadPlacement: false,
    priceRange: [0, 1500],
    sizeRange: [4, 40]
  });

  useEffect(() => {
    const loadSkips = async () => {
      try {
        const data = await fetchSkips("NR32&area=Lowestoft");
        setSkips(data);
        
        // Set initial filter ranges based on data
        const prices = data.map(s => s.price_before_vat * (1 + s.vat / 100));
        const sizes = data.map(s => s.size);
        
        setFilters(prev => ({
          ...prev,
          priceRange: [Math.min(...prices), Math.max(...prices)],
          sizeRange: [Math.min(...sizes), Math.max(...sizes)]
        }));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load skips');
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const filteredSkips = skips.filter(skip => {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    
    if (filters.allowsHeavyWaste && !skip.allows_heavy_waste) return false;
    if (filters.roadPlacement && !skip.allowed_on_road) return false;
    if (totalPrice > filters.priceRange[1]) return false;
    if (skip.size > filters.sizeRange[1]) return false;
    
    return true;
  });

  return {
    skips,
    filteredSkips,
    loading,
    error,
    filters,
    setFilters
  };
} 