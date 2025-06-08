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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

  return (
    <div className="min-h-screen min-w-screen px-4 py-8 md:py-12 bg-[#f9f9f9]">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Select Your Skip</h1>
          <p className="text-slate-600 text-lg">Choose the perfect size for your needs</p>
        </div>

        {/* Skip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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

        {/* Bottom Action Bar */}
        {selectedSkip && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-slate-800">{selectedSkip.size} Yard Skip</span>
                    <span className="text-sm text-slate-500">{selectedSkip.hire_period_days} day hire</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    £{(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)).toFixed(2)}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    className="px-6 py-3 rounded-lg text-slate-700 hover:bg-slate-100 transition-all duration-300 font-medium"
                    onClick={() => setSelectedSkipId(null)}
                  >
                    Back
                  </button>
                  <button 
                    className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-medium shadow-sm"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
