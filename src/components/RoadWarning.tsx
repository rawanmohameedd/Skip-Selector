import React from 'react';

interface RoadWarningProps {
  onChooseDifferentSkip: () => void;
}

export const RoadWarning: React.FC<RoadWarningProps> = ({ onChooseDifferentSkip }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
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
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Road Placement Not Available</h3>
            <p className="text-slate-600 mb-6">
              The skip size you've chosen cannot be placed on public roads due to road safety regulations. Please ensure you have adequate private space or choose a different skip size.
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
                onClick={onChooseDifferentSkip}
              >
                Choose Different Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 