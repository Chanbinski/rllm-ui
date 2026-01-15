import React from 'react';

interface ProgressBarProps {
  doneFrac: number;
  currentEpoch: number;
  totalEpochs: number;
  currentBatch: number;
  totalBatches: number | null;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  doneFrac,
  currentEpoch,
  totalEpochs,
  currentBatch,
  totalBatches,
}) => {
  const percentage = Math.min(Math.round(doneFrac * 100), 100);

  return (
    <div className="mb-4 p-4 bg-white border border-gray-200 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Training Progress</span>
        <span className="text-sm font-semibold text-black">{percentage}%</span>
      </div>

      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-2 flex items-center gap-3 text-sm text-gray-600">
        <span>Epoch {currentEpoch + 1}/{totalEpochs}</span>
        {totalBatches && (
          <>
            <span className="text-gray-300">|</span>
            <span>Batch {currentBatch + 1}/{totalBatches}</span>
          </>
        )}
      </div>
    </div>
  );
};
