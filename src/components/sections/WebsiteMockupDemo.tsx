import React from 'react';
import DeviceMockup from '@/components/ui/DeviceMockup';

const WebsiteMockupDemo = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Device Mockup Demo</h2>
          <p className="text-lg text-gray-600">
            Different animation techniques for the website mockup
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* JS-based animation */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[9/16] mb-4">
              <DeviceMockup
                imageSrc="/images/screencapture-mockup.png"
                alt="JS Animation Demo"
                scrollMode="js"
                scrollHeight={65}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">JavaScript Animation</h3>
            <p className="text-gray-600 text-sm">
              Uses Framer Motion for precise control over the animation sequence
            </p>
          </div>
          
          {/* CSS-based animation */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[9/16] mb-4">
              <DeviceMockup
                imageSrc="/images/screencapture-mockup.png"
                alt="CSS Animation Demo"
                scrollMode="css"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">CSS Animation</h3>
            <p className="text-gray-600 text-sm">
              Uses pure CSS keyframe animation, more performant but less control
            </p>
          </div>
          
          {/* Hover-based animation */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="aspect-[9/16] mb-4">
              <DeviceMockup
                imageSrc="/images/screencapture-mockup.png"
                alt="Hover Animation Demo"
                scrollMode="hover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Hover Animation</h3>
            <p className="text-gray-600 text-sm">
              Interactive - hover over the mockup to trigger scrolling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMockupDemo; 