import React from 'react';
import { GRID_SIZE } from '../utils/constants';
import { Position } from '../types';

interface GridProps {
    trail: { [key: string]: number };
    lastMoveTime: number;
    currentPosition: Position;
}

/**
 * Grid component to display the robot's environment and movement trail
 * @param trail - Object representing the robot's trail, with positions as keys and timestamps as values
 * @param lastMoveTime - Timestamp of the last movement
 * @param currentPosition - Current position of the robot
 */
const Grid: React.FC<GridProps> = ({ trail, lastMoveTime, currentPosition }) => {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-1 w-96 h-96 bg-surface-primary p-1">
            {[...Array(GRID_SIZE * GRID_SIZE)].map((_, index) => {
                const x = index % GRID_SIZE;
                const y = Math.floor(index / GRID_SIZE);
                const posKey = `${x},${y}`;
                const isCurrentPosition = x === currentPosition.x && y === currentPosition.y;
                const isInTrail = posKey in trail;
                const timeSinceLastMove = Date.now() - lastMoveTime;

                // Calculate opacity for trail fade effect
                let opacity = 1;
                if (isInTrail && !isCurrentPosition && timeSinceLastMove > 2000) {
                    opacity = Math.max(0, 1 - (timeSinceLastMove - 2000) / 2000);
                }

                // Determine background color based on trail and current position
                const backgroundColor = isInTrail || isCurrentPosition
                    ? `rgba(225, 90, 29, ${opacity})` // Use pop-orange color
                    : 'var(--color-light-orange)';

                return (
                    <div
                        key={index}
                        className="transition-all duration-300"
                        style={{ backgroundColor }}
                        aria-label={isCurrentPosition ? 'Current robot position' : isInTrail ? 'Robot trail' : 'Empty grid cell'}
                    />
                );
            })}
        </div>
    );
};

export default Grid;