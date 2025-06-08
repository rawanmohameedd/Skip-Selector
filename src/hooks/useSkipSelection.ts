import { useState } from 'react';
import type { Skip } from '../types/skip';

export function useSkipSelection() {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [showRoadWarning, setShowRoadWarning] = useState(false);

  const handleSkipSelection = (skip: Skip) => {
    setSelectedSkipId(skip.id);
    // Only show warning if the selected skip is not allowed on road
    if (!skip.allowed_on_road) {
      setShowRoadWarning(true);
    } else {
      // Close warning if selecting a road-friendly alternative
      setShowRoadWarning(false);
    }
  };

  const handleContinue = (selectedSkip: Skip | undefined) => {
    if (selectedSkip && !selectedSkip.allowed_on_road) {
      setShowRoadWarning(true);
      return;
    }
    // Proceed to next step
    console.log('Continuing with skip:', selectedSkip);
  };

  return {
    selectedSkipId,
    showRoadWarning,
    setShowRoadWarning,
    handleSkipSelection,
    handleContinue
  };
} 