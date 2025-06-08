import type { Skip } from "../types/skip";

interface Props {
  skip: Skip;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

export const SkipCard: React.FC<Props> = ({ skip, onSelect, isSelected }) => {
  const total_price = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div className={`bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer ${isSelected ? 'ring-4 ring-blue-500' : 'hover:shadow-2xl'}`} onClick={() => onSelect(skip.id)}>
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
        {!skip.allowed_on_road && (
          <div className="absolute bottom-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Not Allowed On The Road
          </div>
        )}
        {!skip.allows_heavy_waste && (
          <div className="absolute top-2 left-2 bg-red-400 text-red-900 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            Heavy Waste Not Allowed
          </div>
        )}
        {skip.imageUrl ? (
          <img 
            src={skip.imageUrl} 
            alt={`Skip size ${skip.size}`} 
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="text-gray-500">No image available</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{skip.size} Yard Skip</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {skip.description || `A ${skip.size} yard skip available for ${skip.hire_period_days} days.`}
        </p>
        <div className="mt-auto">
          <p className="text-green-600 font-extrabold text-3xl mb-4">£{total_price.toFixed(2)}</p>
          <button 
            className={`w-full text-white px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg ${isSelected ? 'bg-blue-700' : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'}`}
            onClick={() => onSelect(skip.id)}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </button>
        </div>
      </div>
    </div>
  );
};
