import { useState, useCallback, useEffect } from 'react';
import { Direction, Position } from '../types';
import { GRID_SIZE } from '../utils/constants';

/**
 * Custom hook to manage the robot's state and movement logic
 * @param initialPosition - Starting position of the robot
 * @param initialDirection - Starting direction of the robot
 * @returns An object containing the robot's current state and movement functions
 */
const useRobotState = (initialPosition: Position, initialDirection: Direction) => {
    // State for robot's position, direction, collision status, and last move time
    const [position, setPosition] = useState<Position>(initialPosition);
    const [direction, setDirection] = useState<Direction>(initialDirection);
    const [isBumped, setIsBumped] = useState(false);
    const [lastMoveTime, setLastMoveTime] = useState<number>(0);

    /**
     * Move the robot forward in its current direction
     * @returns {boolean} Whether the move was successful
     */
    const moveForward = useCallback(() => {
        let moved = false;
        setPosition(prev => {
            const newPos = { ...prev };
            switch (direction) {
                case 'north':
                    if (prev.y > 0) {
                        newPos.y = prev.y - 1;
                        moved = true;
                    } else setIsBumped(true);
                    break;
                case 'south':
                    if (prev.y < GRID_SIZE - 1) {
                        newPos.y = prev.y + 1;
                        moved = true;
                    } else setIsBumped(true);
                    break;
                case 'east':
                    if (prev.x < GRID_SIZE - 1) {
                        newPos.x = prev.x + 1;
                        moved = true;
                    } else setIsBumped(true);
                    break;
                case 'west':
                    if (prev.x > 0) {
                        newPos.x = prev.x - 1;
                        moved = true;
                    } else setIsBumped(true);
                    break;
            }
            return newPos;
        });
        if (moved) {
            setLastMoveTime(Date.now());
        }
        return moved;
    }, [direction]);

    /**
     * Rotate the robot left or right
     * @param {('L'|'R')} instruction - Direction to rotate
     */
    const rotate = useCallback((instruction: 'L' | 'R') => {
        const directions: Direction[] = ['north', 'east', 'south', 'west'];
        setDirection(prev => {
            const currentIndex = directions.indexOf(prev);
            const newIndex = (currentIndex + (instruction === 'R' ? 1 : -1) + 4) % 4;
            return directions[newIndex];
        });
        setLastMoveTime(Date.now());
    }, []);

    // Reset bump state after 2 seconds
    useEffect(() => {
        if (isBumped) {
            const timer = setTimeout(() => setIsBumped(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isBumped]);

    return { position, direction, isBumped, lastMoveTime, moveForward, rotate };
};

export default useRobotState;