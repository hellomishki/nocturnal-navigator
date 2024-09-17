import { render, screen } from '@testing-library/react';
import OwlRobot from '../components/OwlRobot';

describe('OwlRobot', () => {
    it('renders correctly', () => {
        render(<OwlRobot position={{ x: 2, y: 2 }} direction="south" isBumped={false} />);

        const robotElement = screen.getByRole('img', { name: /owl robot/i });
        expect(robotElement).toBeInTheDocument();
    });

    it('applies correct rotation based on direction', () => {
        const { rerender } = render(<OwlRobot position={{ x: 2, y: 2 }} direction="south" isBumped={false} />);

        let robotElement = screen.getByRole('img', { name: /owl robot/i });
        expect(robotElement).toHaveStyle('transform: rotate(0deg)');

        rerender(<OwlRobot position={{ x: 2, y: 2 }} direction="east" isBumped={false} />);
        expect(robotElement).toHaveStyle('transform: rotate(270deg)');
    });

    it('shows speech bubble when bumped', () => {
        render(<OwlRobot position={{ x: 2, y: 2 }} direction="south" isBumped={true} />);

        const speechBubble = screen.getByText(/I'm sorry, I cannot continue in this direction./i);
        expect(speechBubble).toBeInTheDocument();
    });
});