import React from 'react';
import { Direction, Position } from '../types';
import OwlRobotSvg from './OwlRobotSvg';
import SpeechBubble from './SpeechBubble';

interface OwlRobotProps {
    position: Position;
    direction: Direction;
    isBumped: boolean;
}

/**
 * OwlRobot component representing the robot on the grid
 * @param position - Current position of the robot
 * @param direction - Current facing direction of the robot
 * @param isBumped - Whether the robot has bumped into a wall
 */
const OwlRobot: React.FC<OwlRobotProps> = ({ position, direction, isBumped }) => {
    // Map directions to rotation degrees
    const rotationDegrees: Record<Direction, number> = {
        'south': 0,
        'west': 90,
        'north': 180,
        'east': 270
    };

    return (
        <div
            className={`absolute transition-all duration-300 ease-in-out ${isBumped ? 'animate-bump' : ''}`}
            style={{
                top: `${position.y * 20}%`,
                left: `${position.x * 20}%`,
                width: '20%',
                height: '20%',
            }}
        >
            <SpeechBubble isVisible={isBumped} />
            <div
                style={{
                    transform: `rotate(${rotationDegrees[direction]}deg)`,
                    width: '100%',
                    height: '100%',
                    transition: 'transform 300ms ease-in-out',
                }}
            >
                <OwlRobotSvg className="w-full h-full text-pop-orange" />
            </div>
        </div>
    );
};

export default OwlRobot;