import type { Skip } from '../types/skip';

interface RoadWarningModalProps {
  show: boolean;
  onClose: () => void;
  onContinue: () => void;
  selectedSkip: Skip;
  alternativeSkips: Skip[];
  onSelectAlternative: (skip: Skip) => void;
}

export function RoadWarningModal({
  show,
  onClose,
  onContinue,
  selectedSkip,
  alternativeSkips,
  onSelectAlternative
}: RoadWarningModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Road Placement Not Available</h3>
            <p className="text-gray-600 mb-6">
              This skip size cannot be placed on public roads. You'll need private space like a driveway.
            </p>
            
            {/* Alternative suggestions */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">Road-friendly alternatives:</p>
              <div className="flex gap-2">
                {alternativeSkips
                  .filter(s => s.allowed_on_road && s.id !== selectedSkip.id)
                  .slice(0, 3)
                  .map(skip => (
                    <button
                      key={skip.id}
                      onClick={() => onSelectAlternative(skip)}
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                    >
                      {skip.size} yard - £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0)}
                    </button>
                  ))
                }
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                onClick={onClose}
              >
                Keep Selection
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={onContinue}
              >
                Continue Anyway
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 