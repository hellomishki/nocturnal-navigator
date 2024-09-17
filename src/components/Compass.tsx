import React from 'react';
import { Direction } from '../types';

interface CompassProps {
    direction: Direction;
}

/**
 * Compass component to visually display the current direction of the robot
 * @param direction - Current facing direction of the robot
 */
const Compass: React.FC<CompassProps> = ({ direction }) => {
    // Array of cardinal directions
    const cardinalDirections = ['N', 'E', 'S', 'W'] as const;

    return (
        <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
            <div className="relative w-16 h-16">
                {cardinalDirections.map((label) => (
                    <div
                        key={label}
                        className={`absolute w-5 h-5 flex items-center justify-center
                        ${getPositionClass(label)}
                        ${direction.charAt(0).toUpperCase() === label ? 'text-pop-orange font-bold' : 'text-gray-400'}`}
                    >
                        {label}
                    </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-pop-orange rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

/**
 * Helper function to get the positioning class for each cardinal direction label
 * @param label - Cardinal direction label
 * @returns CSS class string for positioning
 */
const getPositionClass = (label: string): string => {
    switch (label) {
        case 'N': return 'top-0 left-1/2 transform -translate-x-1/2';
        case 'E': return 'right-0 top-1/2 transform -translate-y-1/2';
        case 'S': return 'bottom-0 left-1/2 transform -translate-x-1/2';
        case 'W': return 'left-0 top-1/2 transform -translate-y-1/2';
        default: return '';
    }
};

export default Compass;