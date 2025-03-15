import React from 'react';
import styled from 'styled-components';

const PowerToggle = ({power, setPower, setPlaying}) => {
    return (
        <StyledWrapper>
            <div className="switch">
                <input id="toggle" type="checkbox" value={power} onChange={() => {
                    setPower(prev => {
                        if (prev) {
                            setPlaying(false);
                            setPower(false);
                        } else {
                            // setPlaying(true);
                            setPower(true);
                        }
                    })
                }}/>
                <label className="toggle" htmlFor="toggle">
                    <i />
                </label>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .switch {
        position: relative;
        width: 60px;
        height: 28px;
        box-sizing: border-box;
        padding: 3px;
        background: #0d0d0d;
        border-radius: 99px;
        box-shadow:
                inset 0 1px 1px 1px rgba(0, 0, 0, 0.5),
                0 1px 0 0 rgba(255, 255, 255, 0.1);
    }
    .switch input[type="checkbox"] {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
    .switch input[type="checkbox"] + label {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        width: 50%;
        height: 100%;
        background: #1b1c1c;
        border-radius: 99px;
        transition: all 0.5s ease-in-out;
    }
    .switch input[type="checkbox"] + label:before {
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        background: #fff;
        border-radius: 50%;
        vertical-align: middle;
        box-shadow:
                0 0 5px 2px rgba(165, 15, 15, 0.9),
                0 0 3px 1px rgba(165, 15, 15, 0.9);
        transition: all 0.5s ease-in-out;
    }

    .switch input[type="checkbox"]:checked + label {
        left: 50%;
        box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
    }
    .switch input[type="checkbox"]:checked + label:before {
        box-shadow:
                0 0 5px 2px rgba(15, 165, 70, 0.9),
                0 0 3px 1px rgba(15, 165, 70, 0.9);
    }`;

export default PowerToggle;
