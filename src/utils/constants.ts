/**
 * The size of the grid (both width and height)
 * Used in Grid.tsx for rendering and in useRobotState.ts for boundary checks
 */
export const GRID_SIZE = 5;

/**
 * The initial position of the robot (center of the grid)
 * Used in App.tsx to initialize the robot's position
 */
export const INITIAL_POSITION = { x: 2, y: 2 };

/**
 * The initial direction the robot is facing (south, towards the user)
 * Used in App.tsx to initialize the robot's direction
 */
export const INITIAL_DIRECTION = 'south' as const;

// If any of these constants are not actually used, they should be removed
