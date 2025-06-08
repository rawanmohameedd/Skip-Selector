import React from 'react';

interface RoadWarningProps {
  onChooseDifferentSkip: () => void;
}

export const RoadWarning: React.FC<RoadWarningProps> = ({ onChooseDifferentSkip }) => {
  return (
    <div className="border border-red-400 bg-red-900/80 text-red-200 rounded-xl p-6 mb-6">
      <div className="flex items-center mb-2">
        <svg className="h-5 w-5 mr-2 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
        <span className="font-bold text-red-300 text-lg">Road Placement Not Available</span>
      </div>
      <div className="mb-4">
        The skip size that you've chosen can not be placed on public roads due to road safety regulations. Please ensure you have adequate private space or choose a different skip size.
      </div>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
        onClick={onChooseDifferentSkip}
      >
        <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Choose Different Skip
      </button>
    </div>
  );
}; 