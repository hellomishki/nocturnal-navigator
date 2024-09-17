import { render, screen } from '@testing-library/react';
import Grid from '../components/Grid';
import { GRID_SIZE } from '../utils/constants';

describe('Grid', () => {
    it('renders correct number of cells', () => {
        render(<Grid trail={{}} lastMoveTime={0} currentPosition={{ x: 2, y: 2 }} />);

        const cells = screen.getAllByRole('cell');
        expect(cells).toHaveLength(GRID_SIZE * GRID_SIZE);
    });

    it('highlights current position', () => {
        render(<Grid trail={{}} lastMoveTime={0} currentPosition={{ x: 2, y: 2 }} />);

        const currentCell = screen.getByRole('cell', { name: /current robot position/i });
        expect(currentCell).toHaveStyle('background-color: rgba(225, 90, 29, 1)');
    });

    it('shows trail', () => {
        const trail = { '1,1': Date.now() - 1000 };
        render(<Grid trail={trail} lastMoveTime={Date.now()} currentPosition={{ x: 2, y: 2 }} />);

        const trailCell = screen.getByRole('cell', { name: /robot trail/i });
        expect(trailCell).toHaveStyle('background-color: rgba(225, 90, 29, 1)');
    });
});