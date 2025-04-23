import React from 'react';

const Grid = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <div className="container h-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Extended container with negative margins to make grid wider than content */}
        <div className="absolute inset-0 -mx-5 sm:-mx-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-full relative w-full">
            {/* Left outside border - solid */}
            <div className="absolute left-0 top-0 bottom-0 border-l border-gray-200/15" style={{ borderWidth: '0.5px' }} />
            
            {/* Right outside border - solid */}
            <div className="absolute right-0 top-0 bottom-0 border-l border-gray-200/15" style={{ borderWidth: '0.5px' }} />
            
            {/* Inside dotted borders */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative h-full" style={{ gridColumn: i + 1 }}>
                <div 
                  className="absolute right-0 top-0 bottom-0 border-gray-200/25" 
                  style={{ 
                    borderWidth: '0.5px',
                    borderStyle: 'dotted',
                    borderSpacing: '4px',
                    backgroundImage: 'linear-gradient(to bottom, rgba(203, 213, 225, 0.25) 50%, rgba(255, 255, 255, 0) 0%)',
                    backgroundPosition: 'right top',
                    backgroundSize: '1px 12px',
                    backgroundRepeat: 'repeat-y',
                    width: '0.5px',
                    borderColor: 'transparent'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid; 