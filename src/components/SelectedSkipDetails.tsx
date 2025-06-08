import type { Skip } from '../types/skip';
import { VisualSkip } from './SkipCard';

interface SelectedSkipDetailsProps {
  skip: Skip;
  maxSize: number;
  onContinue: () => void;
}

export function SelectedSkipDetails({ skip, maxSize, onContinue }: SelectedSkipDetailsProps) {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="bg-amber-100 p-4 rounded-xl">
              <VisualSkip skip={skip} isSelected={true} maxSize={maxSize} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {skip.size} Yard Skip
              </h3>
              <p className="text-gray-600 mb-2">
                {skip.hire_period_days} day hire period
              </p>
              <div className="flex gap-2">
                {skip.allowed_on_road && (
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    ✓ Road Placement OK
                  </span>
                )}
                {skip.allows_heavy_waste && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    ✓ Heavy Waste OK
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">Total inc. VAT</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onContinue}
          className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Continue with {skip.size} Yard Skip
        </button>
      </div>
    </>
  );
} 