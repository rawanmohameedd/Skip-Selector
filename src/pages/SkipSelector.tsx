import { useSkips } from '../hooks/useSkips';
import { useSkipSelection } from '../hooks/useSkipSelection';
import { FilterPanel } from '../components/FilterPanel';
import { SkipComparison } from '../components/SkipComparison';
import { SelectedSkipDetails } from '../components/SelectedSkipDetails';
import { RoadWarningModal } from '../components/RoadWarningModal';

export default function SkipSelector() {
  const {
    filteredSkips,
    loading,
    error,
    filters,
    setFilters
  } = useSkips();

  const {
    selectedSkipId,
    showRoadWarning,
    setShowRoadWarning,
    handleSkipSelection,
    handleContinue
  } = useSkipSelection();

  if (loading) {
    return (
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-xl flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-xl flex items-center justify-center p-8">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-2">Error Loading Skips</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const selectedSkip = filteredSkips.find(skip => skip.id === selectedSkipId);
  const maxSize = Math.max(...filteredSkips.map(s => s.size));

  return (
    <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Choose Your Perfect Skip
        </h1>
        <p className="text-gray-600 text-lg">
          Visual size comparison • Smart filtering • Instant selection
        </p>
      </div>

      {/* Filters */}
      <FilterPanel
        filters={filters}
        onFiltersChange={setFilters}
        priceRange={[0, 1500]}
        sizeRange={[4, 40]}
      />

      {/* Skip Comparison */}
      <SkipComparison
        skips={filteredSkips}
        selectedSkipId={selectedSkipId}
        onSkipSelect={handleSkipSelection}
      />

      {/* Selected Skip Details */}
      {selectedSkip && (
        <SelectedSkipDetails
          skip={selectedSkip}
          maxSize={maxSize}
          onContinue={() => handleContinue(selectedSkip)}
        />
      )}

      {/* Road Warning Modal */}
      {selectedSkip && (
        <RoadWarningModal
          show={showRoadWarning}
          onClose={() => setShowRoadWarning(false)}
          onContinue={() => handleContinue(selectedSkip)}
          selectedSkip={selectedSkip}
          alternativeSkips={filteredSkips}
          onSelectAlternative={handleSkipSelection}
        />
      )}
    </div>
  );
}
