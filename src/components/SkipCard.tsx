import type { Skip } from "../types/skip";

interface Props {
  skip: Skip;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export const SkipCard: React.FC<Props> = ({ skip, onSelect, isSelected }) => {
  const total_price = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-sm border border-slate-200 
        transition-all duration-300 overflow-hidden flex flex-col h-full w-full
        cursor-pointer hover:shadow-md
        ${isSelected ? 'ring-2 ring-blue-500 border-blue-500' : ''}
      `} 
      onClick={() => onSelect(skip.id)}
    >
      <div className="relative w-full h-40 bg-slate-50 flex items-center justify-center">
        {!skip.allowed_on_road && (
          <div className="absolute bottom-2 left-2 bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Not Allowed On Road
          </div>
        )}
        {!skip.allows_heavy_waste && (
          <div className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            No Heavy Waste
          </div>
        )}
        {skip.imageUrl ? (
          <img 
            src={skip.imageUrl} 
            alt={`Skip size ${skip.size}`} 
            className="max-h-full max-w-full object-contain p-4"
          />
        ) : (
          <div className="text-slate-400">No image available</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-slate-800">{skip.size} Yard Skip</h3>
          <span className="text-sm text-slate-500">{skip.hire_period_days} days</span>
        </div>
        <p className="text-slate-600 text-sm mb-4 flex-grow">
          {skip.description || `A ${skip.size} yard skip available for ${skip.hire_period_days} days.`}
        </p>
        <div className="mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-slate-500 text-sm">Total Price</span>
            <span className="text-2xl font-bold text-blue-600">£{total_price.toFixed(2)}</span>
          </div>
          <button 
            className={`
              w-full px-4 py-2.5 rounded-lg text-sm font-medium
              transition-all duration-300
              ${isSelected 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }
            `}
            onClick={() => onSelect(skip.id)}
          >
            {isSelected ? 'Selected' : 'Select Skip'}
          </button>
        </div>
      </div>
    </div>
  );
};
