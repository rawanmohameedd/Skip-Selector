import type { Skip } from '../types/skip';
import { VisualSkip } from './SkipCard';

interface SkipComparisonProps {
  skips: Skip[];
  selectedSkipId: number | null;
  onSkipSelect: (skip: Skip) => void;
}

export function SkipComparison({ skips, selectedSkipId, onSkipSelect }: SkipComparisonProps) {
  const maxSize = Math.max(...skips.map(s => s.size));

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Size Comparison ({skips.length} options)
      </h2>
      
      <div className="flex flex-wrap justify-center items-end gap-8 py-4">
        {skips.map(skip => (
          <div
            key={skip.id}
            onClick={() => onSkipSelect(skip)}
            className="cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
          >
            <VisualSkip 
              skip={skip} 
              isSelected={skip.id === selectedSkipId}
              maxSize={maxSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 