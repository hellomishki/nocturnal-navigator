import React from 'react';

interface ControlsProps {
    onMoveForward: () => void;
    onRotateLeft: () => void;
    onRotateRight: () => void;
}

/**
 * Controls component for robot movement and rotation
 *
 * @param onMoveForward - Callback function for forward movement
 * @param onRotateLeft - Callback function for left rotation
 * @param onRotateRight - Callback function for right rotation
 */
const Controls: React.FC<ControlsProps> = ({ onMoveForward, onRotateLeft, onRotateRight }) => {
    return (
        <div className="flex flex-col items-center">
            <button
                onClick={onMoveForward}
                className="bg-surface-brand text-white font-bold py-2 px-4 rounded mb-2 hover:bg-opacity-80 transition-colors"
                aria-label="Move Forward"
            >
                Move Forward (F)
            </button>
            <div className="flex space-x-2">
                <button
                    onClick={onRotateLeft}
                    className="bg-surface-secondary text-text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors"
                    aria-label="Rotate Left"
                >
                    Rotate Left (L)
                </button>
                <button
                    onClick={onRotateRight}
                    className="bg-surface-secondary text-text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors"
                    aria-label="Rotate Right"
                >
                    Rotate Right (R)
                </button>
            </div>
        </div>
    );
};

export default Controls;