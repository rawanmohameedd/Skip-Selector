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
