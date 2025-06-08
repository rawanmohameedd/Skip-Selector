import type React from "react";
import type { Filters } from "../types/skip";

export const FilterPanel: React.FC<{
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  priceRange: [number, number];
  sizeRange: [number, number];
}> = ({ filters, onFiltersChange, priceRange, sizeRange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter Options</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Heavy Waste Filter */}
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.allowsHeavyWaste}
            onChange={(e) => onFiltersChange({
              ...filters,
              allowsHeavyWaste: e.target.checked
            })}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Heavy Waste OK</span>
        </label>

        {/* Road Placement Filter */}
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.roadPlacement}
            onChange={(e) => onFiltersChange({
              ...filters,
              roadPlacement: e.target.checked
            })}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">Road Placement</span>
        </label>

        {/* Price Range */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-700">Max Price: £{filters.priceRange[1]}</label>
          <input
            type="range"
            min={priceRange[0]}
            max={priceRange[1]}
            value={filters.priceRange[1]}
            onChange={(e) => onFiltersChange({
              ...filters,
              priceRange: [priceRange[0], parseInt(e.target.value)]
            })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Size Range */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-gray-700">Max Size: {filters.sizeRange[1]} yards</label>
          <input
            type="range"
            min={sizeRange[0]}
            max={sizeRange[1]}
            value={filters.sizeRange[1]}
            onChange={(e) => onFiltersChange({
              ...filters,
              sizeRange: [sizeRange[0], parseInt(e.target.value)]
            })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
