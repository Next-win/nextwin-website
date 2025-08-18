"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface MetadataViewerProps {
  enabled?: boolean;
}

export default function MetadataViewer({ enabled = true }: MetadataViewerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [currentMetadata, setCurrentMetadata] = useState<{ title: string; description: string } | null>(null);
  const pathname = usePathname();

  // Only show in development
  useEffect(() => {
    setIsVisible(enabled && process.env.NODE_ENV === 'development');
  }, [enabled]);

  // Get metadata from the actual page head
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const title = document.title || 'No title found';
      const descriptionElement = document.querySelector('meta[name="description"]');
      const description = descriptionElement?.getAttribute('content') || 'No description found';
      
      setCurrentMetadata({ title, description });
    }
  }, [pathname]);

  if (!isVisible) return null;
  
  if (!currentMetadata) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-yellow-500 text-white p-3 rounded-lg shadow-lg max-w-xs">
          <p className="text-sm font-medium">⏳ Loading metadata for: {pathname}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-gray-900 text-white rounded-lg shadow-2xl border border-gray-700 transition-all duration-300 ${
        isMinimized ? 'w-12 h-12' : 'w-96 max-h-80'
      }`}>
        
        {/* Header with toggle */}
        <div className="flex items-center justify-between p-3 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            {!isMinimized && (
              <span className="text-sm font-medium text-gray-300">SEO Metadata</span>
            )}
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded"
            title={isMinimized ? "Show metadata" : "Hide metadata"}
          >
            {isMinimized ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            )}
          </button>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
            {/* Current Page */}
            <div className="text-xs text-gray-400 font-mono">
              {pathname}
            </div>
            
            {/* Title */}
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Title Tag</label>
              <p className="text-sm text-white mt-1 leading-relaxed">
                {currentMetadata.title}
              </p>
              <div className="text-xs text-gray-500 mt-1">
                {currentMetadata.title.length} characters
              </div>
            </div>
            
            {/* Description */}
            <div>
              <label className="text-xs text-gray-400 uppercase tracking-wider">Meta Description</label>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                {currentMetadata.description}
              </p>
              <div className="text-xs text-gray-500 mt-1">
                {currentMetadata.description.length} characters
                {currentMetadata.description.length > 160 && (
                  <span className="text-yellow-400 ml-2">⚠️ Too long</span>
                )}
                {currentMetadata.description.length < 120 && (
                  <span className="text-blue-400 ml-2">💡 Could be longer</span>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-2 pt-2 border-t border-gray-700">
              <button
                onClick={() => navigator.clipboard.writeText(currentMetadata.title)}
                className="text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                title="Copy title"
              >
                Copy Title
              </button>
              <button
                onClick={() => navigator.clipboard.writeText(currentMetadata.description)}
                className="text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded transition-colors"
                title="Copy description"
              >
                Copy Desc
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
