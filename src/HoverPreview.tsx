import React, { useState } from 'react';

export interface HoverPreviewProps {
  text: string;
  url: string;
  textClassName?: string;
  cardClassName?: string;
}

const HoverPreview: React.FC<HoverPreviewProps> = ({
  text,
  url,
  textClassName = 'underline italic text-lg',
  cardClassName = 'absolute top-full left-0 mt-2 p-4 bg-white shadow-lg rounded-lg border border-gray-200 w-[400px] h-[300px]',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={textClassName}
      >
        {text}
      </a>
      {isHovered && (
        <div className={cardClassName}>
          <iframe
            src={url}
            className="w-full h-full border-0"
            title="URL Preview"
          />
        </div>
      )}
    </div>
  );
};

export default HoverPreview;
