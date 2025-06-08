import { useEffect, useState } from "react";
import { fetchSkips } from "../utils/api";
import { SkipCard } from "../components/SkipCard";
import type { Skip } from "../types/skip";
import { RoadWarning } from "../components/RoadWarning";

export default function SkipSelector() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);
  const [showRoadWarning, setShowRoadWarning] = useState(false);

  const handleContinue = () => {
    const selectedSkip = skips.find(s => s.id === selectedSkipId);
    if (selectedSkip && !selectedSkip.allowed_on_road) {
      setShowRoadWarning(true);
      return;
    }
    // ...proceed to next step...
  };

  useEffect(() => {
    fetchSkips("NR32&area=Lowestoft").then(data => {
      setSkips(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading skips...</p>;

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

  return (
    <div className="min-w-screen mx-auto px-4 py-10 flex flex-col min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">Choose Your Skip Size</h1>
      {/* Skip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {skips.map(skip => (
          <SkipCard
            key={skip.id}
            skip={skip}
            onSelect={() => setSelectedSkipId(skip.id)}
            isSelected={skip.id === selectedSkipId}
          />
        ))}
      </div>
      {/* Road Placement Warning */}
      {showRoadWarning && (
        <RoadWarning onChooseDifferentSkip={() => setShowRoadWarning(false)} />
      )}


      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">{selectedSkip.size} Yard Skip</span>
            <span className="text-xl font-bold text-green-400">£{(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2)}</span>
            <span className="text-sm text-gray-300">{selectedSkip.hire_period_days} day hire</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="bg-gray-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-700 transition-all duration-300"
              onClick={() => setSelectedSkipId(null)}
            >
              ← Back
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300" onClick={handleContinue}>
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
