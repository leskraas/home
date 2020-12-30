import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export const MotionDiv: React.FC<HTMLMotionProps<'div'>> = (props) => {
    const { children } = props;
    return <StyledDiv {...props}>{children}</StyledDiv>;
};

const StyledDiv = styled(motion.div)`
    display: flex;
    flex-direction: column;
`;
