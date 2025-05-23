"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

type TimelinePhase = {
  id: string;
  title: string;
  subtitle: string;
  tasks: TimelineTask[];
};

type TimelineTask = {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  modalContent: {
    title: string;
    subtitle: string;
    description: string;
    icon?: React.ReactNode;
    bulletPoints: string[];
    conclusion?: string;
  };
};

interface CalendarTimelineProps {
  phases: TimelinePhase[];
  footer?: {
    note?: string;
    buttonText?: string;
    buttonHref?: string;
  };
}

export default function CalendarTimeline({ phases, footer }: CalendarTimelineProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Function to open a specific task detail modal
  const openTaskModal = (modalId: string) => {
    setActiveModal(modalId);
    // Add a hash to the URL without scrolling
    window.history.pushState(null, '', `#${modalId}`);
    // No longer prevent body scrolling when modal is open
  };
  
  // Function to close the task detail modal
  const closeTaskModal = () => {
    setActiveModal(null);
    // Remove the hash from the URL
    window.history.pushState(null, '', window.location.pathname);
    // No need to restore body scrolling
  };
  
  // Function to find a task by its ID
  const findTaskById = (taskId: string): TimelineTask | undefined => {
    for (const phase of phases) {
      const task = phase.tasks.find(task => task.id === taskId);
      if (task) return task;
    }
    return undefined;
  };
  
  // Function to find phase index for a task by ID
  const findPhaseIndexForTask = (taskId: string): number => {
    for (let i = 0; i < phases.length; i++) {
      if (phases[i].tasks.some(task => task.id === taskId)) {
        return i;
      }
    }
    return 0;
  };

  // Function to get a background color for each phase
  const getPhaseColor = (phaseIndex: number): string => {
    const colors = [
      'bg-emerald-50', // Phase 1
      'bg-sky-50',     // Phase 2
      'bg-purple-50',  // Phase 3
      'bg-orange-50'   // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };

  // Function to get a background color for modal header based on phase
  const getModalHeaderColor = (phaseIndex: number): string => {
    const colors = [
      'bg-emerald-50', // Phase 1
      'bg-sky-50',     // Phase 2
      'bg-purple-50',  // Phase 3
      'bg-orange-50'   // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };

  // Function to get text color for modal header based on phase
  const getModalTextColor = (phaseIndex: number): string => {
    const colors = [
      'text-emerald-700', // Phase 1
      'text-sky-700',     // Phase 2
      'text-purple-700',  // Phase 3
      'text-orange-700'   // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };
  
  // Function to get icon background color for modal based on phase
  const getModalIconBgColor = (phaseIndex: number): string => {
    const colors = [
      'bg-emerald-100', // Phase 1
      'bg-sky-100',     // Phase 2
      'bg-purple-100',  // Phase 3
      'bg-orange-100'   // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };
  
  // Function to get icon color for modal based on phase
  const getModalIconColor = (phaseIndex: number): string => {
    const colors = [
      'text-emerald-600', // Phase 1
      'text-sky-600',     // Phase 2
      'text-purple-600',  // Phase 3
      'text-orange-600'   // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };
  
  // Function to get button color for modal based on phase
  const getModalButtonColor = (phaseIndex: number): string => {
    const colors = [
      'bg-emerald-500 hover:bg-emerald-600', // Phase 1
      'bg-sky-500 hover:bg-sky-600',         // Phase 2
      'bg-purple-500 hover:bg-purple-600',   // Phase 3
      'bg-orange-500 hover:bg-orange-600'    // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };

  // Function to get a border color for each phase dot
  const getPhaseDotColor = (phaseIndex: number): string => {
    const colors = [
      'bg-emerald-500', // Phase 1
      'bg-sky-500',     // Phase 2
      'bg-purple-500',  // Phase 3
      'bg-orange-500'   // Phase 4
    ];
    return colors[phaseIndex % colors.length];
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
      {/* Calendar Header */}
      <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">Calendar</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Calendar Content */}
      <div className="p-5">
        {phases.map((phase, phaseIndex) => (
          <div key={phase.id} className="mb-10 last:mb-0">
            {/* Date Header */}
            <div className="flex mb-5">
              <div className="flex flex-col items-start mr-5 w-16">
                <div className="uppercase text-gray-500 text-xs font-medium tracking-wider">
                  {phase.subtitle.includes('Week') ? 
                    phase.subtitle.replace('Week', 'WEEK') : 
                    phase.subtitle}
                </div>
                <div className="text-3xl font-bold text-gray-700">
                  {phaseIndex + 1}
                </div>
              </div>
              
              <div className="flex-1">
                {phase.tasks.map((task, taskIndex) => {
                  // Add dot indicator only for the first task in a phase
                  const showIndicator = taskIndex === 0;
                  
                  return (
                    <div key={task.id} className="relative mb-4 last:mb-0">
                      {showIndicator && (
                        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <div className={`w-3 h-3 ${getPhaseDotColor(phaseIndex)} rounded-full`}></div>
                        </div>
                      )}
                      
                      {taskIndex > 0 && (
                        <div className="absolute -left-10 top-0 bottom-0 transform -translate-x-1/2 w-px bg-gray-300"></div>
                      )}
                      
                      <button 
                        className="w-full text-left" 
                        onClick={() => openTaskModal(task.id)}
                      >
                        <div className={`${getPhaseColor(phaseIndex)} rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100`}>
                          <div className="flex items-center mb-1">
                            <div className="flex-shrink-0 mr-2">
                              {phaseIndex === 3 && task.title.includes('migratie') ? (
                                <span className="inline-block">🚀</span>
                              ) : (
                                <div className={`w-7 h-7 ${getPhaseDotColor(phaseIndex)} bg-opacity-20 rounded-full flex items-center justify-center`}>
                                  <div className={`w-3 h-3 ${getPhaseDotColor(phaseIndex)} rounded-full`}></div>
                                </div>
                              )}
                            </div>
                            <h5 className="font-semibold text-gray-900">{task.title}</h5>
                          </div>
                          <p className="text-sm text-gray-600 pl-9">{task.description}</p>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Calendar Footer */}
      {footer && (
        <div className="bg-gray-50 p-4 flex items-center justify-between border-t border-gray-200">
          {footer.note && (
            <div className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {footer.note}
            </div>
          )}
          
          {footer.buttonText && footer.buttonHref && (
            <Button href={footer.buttonHref} className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2">
              {footer.buttonText}
            </Button>
          )}
        </div>
      )}
      
      {/* Task Detail Modals */}
      {activeModal && (() => {
        const task = findTaskById(activeModal);
        if (!task) return null;
        
        // Find the phase index to apply the right color scheme
        const phaseIndex = findPhaseIndexForTask(activeModal);
        
        return (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={closeTaskModal}></div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
                {/* Modal Header */}
                <div className="relative">
                  <div className={`px-6 py-5 ${getModalHeaderColor(phaseIndex)}`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xl font-bold ${getModalTextColor(phaseIndex)}`}>{task.title}</h3>
                      <button 
                        type="button"
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={closeTaskModal}
                      >
                        <span className="sr-only">Sluiten</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="bg-white px-6 py-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className={`w-12 h-12 ${getModalIconBgColor(phaseIndex)} rounded-full flex items-center justify-center`}>
                        {task.modalContent.icon || (
                          <svg className={`h-6 w-6 ${getModalIconColor(phaseIndex)}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {task.modalContent.subtitle}
                      </h3>
                      <p className="text-gray-600 mb-5">
                        {task.modalContent.description}
                      </p>
                      
                      <ul className="space-y-3 mb-6">
                        {task.modalContent.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <div className={`h-5 w-5 ${getModalIconBgColor(phaseIndex)} rounded-full flex items-center justify-center`}>
                                <svg className={`h-3 w-3 ${getModalIconColor(phaseIndex)}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {task.modalContent.conclusion && (
                        <p className="text-gray-600 border-t border-gray-200 pt-4">
                          {task.modalContent.conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Modal Footer */}
                <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-200">
                  <button 
                    type="button" 
                    className={`px-4 py-2 rounded-md text-white font-medium ${getModalButtonColor(phaseIndex)} focus:outline-none`}
                    onClick={closeTaskModal}
                  >
                    Sluiten
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
} 