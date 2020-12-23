import React, { MouseEvent, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
    duration?: number;
    color?: string;
};

type RippleDimentions = {
    x: number;
    y: number;
    diameter: number;
};

const useRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
    useLayoutEffect(() => {
        let bounce = 0;
        if (rippleCount > 0) {
            bounce = setTimeout(() => {
                cleanUpFunction();
            }, duration);
        }

        return () => clearTimeout(bounce);
    }, [rippleCount, duration, cleanUpFunction]);
};

export const Ripple: React.FC<Props> = ({ duration = 600, color = '#fff' }) => {
    const [rippleArray, setRippleArray] = useState<RippleDimentions[]>([]);

    useRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = (event: MouseEvent) => {
        const rippleContainer = event.currentTarget?.getBoundingClientRect();
        const diameter = Math.max(rippleContainer.width, rippleContainer.height);
        const x = event.pageX - rippleContainer.x - diameter / 2;
        const y = event.pageY - rippleContainer.y - diameter / 2;
        const newRipple = {
            x,
            y,
            diameter,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <RippleContainer onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <SingleRipple
                            key={'ripple-' + index}
                            duration={duration}
                            color={color}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.diameter,
                                height: ripple.diameter,
                            }}
                        />
                    );
                })}
        </RippleContainer>
    );
};

const RippleContainer = styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

type SingleRippleProp = {
    duration: number;
    color: string;
};

const SingleRipple = styled.span<SingleRippleProp>`
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${(props) => props.color};
    animation: ripple ${(props) => props.duration}ms ease-in-out;
    @keyframes ripple {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
