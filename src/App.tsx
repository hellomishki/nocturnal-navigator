import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import OwlRobot from './components/OwlRobot';
import Controls from './components/Controls';
import Compass from './components/Compass';
import useRobotState from './hooks/useRobotState';
import { INITIAL_POSITION, INITIAL_DIRECTION } from './utils/constants';

const App: React.FC = () => {
    // Custom hook to manage robot state
    const { position, direction, isBumped, lastMoveTime, moveForward, rotate } = useRobotState(INITIAL_POSITION, INITIAL_DIRECTION);

    // State to manage the robot's trail
    const [trail, setTrail] = useState<{ [key: string]: number }>({
        [`${INITIAL_POSITION.x},${INITIAL_POSITION.y}`]: Date.now()
    });

    // Effect to update and clean up the trail
    useEffect(() => {
        const posKey = `${position.x},${position.y}`;

        // Update the trail with the current position
        setTrail(prevTrail => ({
            ...prevTrail,
            [posKey]: Date.now()
        }));

        // Function to clean up old trail positions
        const cleanupTrail = () => {
            if (lastMoveTime === 0) return; // Don't clean up if no move has been made yet
            const fadeStartTime = lastMoveTime + 2000; // Start fading 2 seconds after the last move
            setTrail(prevTrail => {
                const newTrail = { ...prevTrail };
                Object.entries(newTrail).forEach(([key, timestamp]) => {
                    // Remove trail positions that are older than 4 seconds and not the current position
                    if (key !== posKey && Date.now() - timestamp > 4000 && Date.now() > fadeStartTime) {
                        delete newTrail[key];
                    }
                });
                return newTrail;
            });
        };

        // Set up interval to periodically clean up the trail
        const intervalId = setInterval(cleanupTrail, 100);
        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [position, lastMoveTime]);

    // Handler for forward movement
    const handleMoveForward = () => {
        moveForward();
    };

    // Handler for rotation
    const handleRotate = (direction: 'L' | 'R') => {
        rotate(direction);
    };

    return (
        <div className="min-h-screen bg-sand flex flex-col items-center justify-center p-4">
            <div className="mb-4">
                <Compass direction={direction} />
            </div>
            <div className="relative w-96 h-96 mb-8">
                <Grid trail={trail} lastMoveTime={lastMoveTime} currentPosition={position} />
                <OwlRobot position={position} direction={direction} isBumped={isBumped} />
            </div>
            <Controls onMoveForward={handleMoveForward} onRotateLeft={() => handleRotate('L')} onRotateRight={() => handleRotate('R')} />
        </div>
    );
};

export default App;