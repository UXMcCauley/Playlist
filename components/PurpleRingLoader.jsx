import React from 'react';
import styled from 'styled-components';

const PurpleRingLoader = ({power}) => {
    return (
        <StyledWrapper>
            <div className={`${power ? 'invisible' : 'visible w-[40px] h-[40px] bg-gradient-to-br from-[#212121] to-[#262626] rounded-[50%]'}`}/>
            <div className={`${power ? 'loader' : ''}`} />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .loader {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(45deg, transparent, transparent 30%, #e5f403);
        animation: glow 2s linear infinite;
    }
    @keyframes glow {
        0% {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
            filter: hue-rotate(360deg);
        }
    }
    .loader::before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        background: #212121;
        border-radius: 50%;
        z-index: 1000;
    }
    .loader::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
        border-radius: 50%;
        z-index: 1000;
        z-index: 1;
        filter: blur(20px);
    }`;

export default PurpleRingLoader;
