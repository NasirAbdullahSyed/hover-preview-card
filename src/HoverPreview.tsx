import React, { useState, useEffect } from 'react';

export interface HoverPreviewProps {
  text: string;
  url: string;
  textClassName?: string;
  cardClassName?: string;
  showWebsiteName?: boolean;
  showControls?: boolean;
}

const HoverPreview: React.FC<HoverPreviewProps> = ({
  text,
  url,
  textClassName = 'underline italic text-lg',
  cardClassName = 'absolute top-full left-0 mt-1 shadow-lg rounded-lg w-[400px] h-[300px]',
  showWebsiteName = true,
  showControls = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when URL changes or card is reopened
  useEffect(() => {
    setIsLoading(true);
  }, [url, isHovered]);

  const getWebsiteName = (url: string) => {
    try {
      const hostname = new URL(url).hostname;
      return hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  const handleFullscreen = () => {
    if (isFullscreen) {
      setIsHovered(false);
      setIsFullscreen(false);
    } else {
      setIsFullscreen(true);
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  const fullscreenStyles = isFullscreen
    ? 'absolute top-1 left-1 transform w-[calc(100vw-2rem)] h-[calc(100vh-4rem)] z-50'
    : '';

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !isFullscreen && setIsHovered(false)}
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
        <div className={`${cardClassName} ${fullscreenStyles} relative`}>
          {showWebsiteName && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="absolute -top-7 right-13 flex items-center gap-2 z-[40] bg-white/5 backdrop-blur-sm bg-opacity-60 py-1 px-2 rounded-full text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                {getWebsiteName(url)}
              </div>
            </a>
          )}
          {showControls && (
            <div className="absolute -top-7 right-0 flex items-center gap-2 z-[40] bg-white/5 backdrop-blur-sm bg-opacity-60 py-1.5 px-2 text-xs rounded-full">
              <button
                onClick={handleCopyUrl}
                className="w-3 h-3 rounded-full text-white hover:text-white/40 transition-colors cursor-pointer relative"
                title="Copy URL"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
              </button>
              <button
                onClick={handleFullscreen}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer flex items-center justify-center`}
                title={isFullscreen ? "Close" : "Maximize"}
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-expand-icon lucide-expand"><path d="m15 15 6 6" /><path d="m15 9 6-6" /><path d="M21 16v5h-5" /><path d="M21 8V3h-5" /><path d="M3 16v5h5" /><path d="m3 21 6-6" /><path d="M3 8V3h5" /><path d="M9 9 3 3" /></svg>
                )}
              </button>
            </div>
          )}
          <iframe
            src={url}
            className="w-full h-full border-0 rounded-lg"
            title="URL Preview"
            onLoad={() => setIsLoading(false)}
            sandbox='allow-scripts'
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HoverPreview;
