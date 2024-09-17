import React from 'react';

interface SpeechBubbleProps {
    isVisible: boolean;
}

/**
 * SpeechBubble component to display a message when the robot bumps into a wall
 * @param isVisible - Boolean to control the visibility of the speech bubble
 */
const SpeechBubble: React.FC<SpeechBubbleProps> = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg p-2 shadow-md">
            <div className="text-xs text-center whitespace-nowrap">
                Negative, I cannot continue in this direction.
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-300"></div>
        </div>
    );
};

export default SpeechBubble;