'use client';

import Color from '@/styles/color.module.scss'
import styled from 'styled-components'

const Mountains = () => (
    <Wrapper>
        <Mountain $bg>
            <MountainSVG hex={Color.smoke} />
        </Mountain>
        <Mountain>
            <MountainSVG hex={Color.ocean} />
        </Mountain>
    </Wrapper>
)

const MountainSVG = ({ hex }:{ hex: string }) => (
    <svg viewBox="0 0 1440 316" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M534.068 94.144l245.518 160.161L1150.933 0 1440 316H0z"
            fill={hex}
            fillRule="evenodd"
        />
    </svg>
)

const Mountain = styled.div<{
        $bg?: boolean;
    }>`
    width: 100vw;
    height: 22vw;
    position: absolute;
    bottom: -2px;

    ${props =>
        !!props.$bg &&
        `
        & > svg {         
            opacity: .2;   
            position: absolute;
            width: 110vw;
            top: 3vw;
            left: -5vw;
            transform: translateY(-1.4vw) translateX(10vw) skew(40deg,6deg) scale(1.4)
        }
    `}
`

const Wrapper = styled.section`
    width: 100vw;
    height: 22vw;
    position: relative;
    overflow: hidden;
`

export default Mountains
