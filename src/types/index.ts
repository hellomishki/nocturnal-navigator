/**
 * Represents the cardinal directions the robot can face
 */
export type Direction = 'north' | 'east' | 'south' | 'west';

/**
 * Represents a position on the grid
 */
export interface Position {
    x: number;
    y: number;
}