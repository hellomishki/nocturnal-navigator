import { renderHook, act } from '@testing-library/react';
import useRobotState from '../hooks/useRobotState';
import { INITIAL_POSITION, INITIAL_DIRECTION } from '../utils/constants';

describe('useRobotState', () => {
    it('initializes with correct initial state', () => {
        const { result } = renderHook(() => useRobotState(INITIAL_POSITION, INITIAL_DIRECTION));

        expect(result.current.position).toEqual(INITIAL_POSITION);
        expect(result.current.direction).toBe(INITIAL_DIRECTION);
        expect(result.current.isBumped).toBe(false);
    });

    it('moves forward correctly', () => {
        const { result } = renderHook(() => useRobotState(INITIAL_POSITION, INITIAL_DIRECTION));

        act(() => {
            result.current.moveForward();
        });

        expect(result.current.position).toEqual({ x: 2, y: 3 });
    });

    it('rotates correctly', () => {
        const { result } = renderHook(() => useRobotState(INITIAL_POSITION, INITIAL_DIRECTION));

        act(() => {
            result.current.rotate('L');
        });

        expect(result.current.direction).toBe('east');

        act(() => {
            result.current.rotate('R');
        });

        expect(result.current.direction).toBe('south');
    });

    it('bumps when trying to move out of bounds', () => {
        const { result } = renderHook(() => useRobotState({ x: 2, y: 4 }, 'south'));

        act(() => {
            result.current.moveForward();
        });

        expect(result.current.isBumped).toBe(true);
        expect(result.current.position).toEqual({ x: 2, y: 4 });
    });
});