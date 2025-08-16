
import React from 'react';

interface ValueScoreProps {
  score: number;
  size?: 'small' | 'large';
}

const ValueScore: React.FC<ValueScoreProps> = ({ score, size = 'small' }) => {
  const sizeClasses = size === 'large' 
    ? 'text-2xl px-4 py-2' 
    : 'text-sm px-3 py-1';
  
  const textSize = size === 'large' ? 'text-4xl' : 'text-xl';
  const scoreText = size === 'large' ? 'ValueSabi Score' : 'Value Score';

  return (
    <div className="flex items-center gap-3">
        <div className={`bg-emerald-100 text-[#00B074] font-bold rounded-md flex items-center justify-center ${sizeClasses}`}>
            <span className={textSize}>{score}</span>
            <span className="text-xs font-semibold ml-1">/100</span>
        </div>
        {size === 'large' && <span className="text-xl font-semibold text-gray-700">{scoreText}</span>}
    </div>
  );
};

export default ValueScore;
