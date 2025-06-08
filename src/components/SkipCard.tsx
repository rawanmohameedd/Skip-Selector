import type { Skip } from "../types/skip";

export const VisualSkip: React.FC<{ skip: Skip; isSelected: boolean; maxSize: number }> = ({ 
  skip, 
  isSelected, 
  maxSize 
}) => {
  const scale = Math.max(0.3, skip.size / maxSize);
  const baseSize = 120;
  const width = baseSize * scale;
  const height = baseSize * scale * 0.6;

  return (
    <div className="relative flex flex-col items-center">
      <div 
        className={`
          relative transition-all duration-300 cursor-pointer
          ${isSelected ? 'transform scale-110' : 'hover:transform hover:scale-105'}
        `}
        style={{ width: width + 40, height: height + 20 }}
      >
        {/* Skip SVG */}
        <svg 
          width={width} 
          height={height} 
          viewBox="0 0 120 72" 
          className={`
            transition-all duration-300
            ${isSelected ? 'drop-shadow-lg' : 'drop-shadow-sm'}
          `}
        >
          <defs>
            <linearGradient id={`skipGradient-${skip.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={isSelected ? "#f59e0b" : "#fbbf24"} />
              <stop offset="100%" stopColor={isSelected ? "#d97706" : "#f59e0b"} />
            </linearGradient>
          </defs>
          
          {/* Skip container */}
          <path
            d="M10 20 L110 20 L100 60 L20 60 Z"
            fill={`url(#skipGradient-${skip.id})`}
            stroke={isSelected ? "#d97706" : "#f59e0b"}
            strokeWidth="2"
          />
          
          {/* Skip sides */}
          <path
            d="M10 20 L20 10 L110 10 L110 20"
            fill={isSelected ? "#fbbf24" : "#fde047"}
            stroke={isSelected ? "#d97706" : "#f59e0b"}
            strokeWidth="1"
          />
          <path
            d="M110 20 L110 10 L100 50 L100 60"
            fill={isSelected ? "#d97706" : "#f59e0b"}
            stroke={isSelected ? "#b45309" : "#d97706"}
            strokeWidth="1"
          />

          {/* Size label */}
          <text
            x="60"
            y="45"
            textAnchor="middle"
            className="fill-white font-bold text-sm"
            style={{ fontSize: `${Math.max(25, 12 * scale)}px` }}
          >
            {skip.size}
          </text>
        </svg>

        {/* Badges */}
        <div className="absolute -top-2 -right-2 flex flex-col gap-1">
          {!skip.allowed_on_road && (
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          )}
          {!skip.allows_heavy_waste && (
            <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Skip info */}
      <div className="text-center mt-2">
        <div className="font-semibold text-gray-800">{skip.size} Yard</div>
        <div className="text-sm text-gray-600">
          £{(skip.price_before_vat * (1 + skip.vat / 100)).toFixed(0)}
        </div>
      </div>
    </div>
  );
};
