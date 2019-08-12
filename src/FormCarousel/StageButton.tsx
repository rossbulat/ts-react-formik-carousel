import React from 'react';
import styled from 'styled-components';
import { FormCarousel_StageButton, FormCarousel_StyledStageButton } from './types';

export const StageButton: React.FC<FormCarousel_StageButton> = (props) => {

  const completedColor = '#28a81b';
  const inactiveColor = '#888';
  const activeColor = '#000';

  const StyledButton = styled.button<FormCarousel_StyledStageButton>`
    border: 1px solid ${props => props.complete === true ? `${completedColor} !important` : inactiveColor}; 
    border-radius: 50px;
    color: ${props => props.complete === true ? `${completedColor} !important` : inactiveColor};
    font-size: 1rem;
    padding: 0.45em 1.2em;
    position: relative;
    
    :disabled {
      border-color: ${activeColor};
      color: ${activeColor};
    }

    svg {
      margin-right: 0.5em;
    }

    span {
      bottom: -19px;      
      left: 0px;
      position: absolute;
      text-align: center;
      width: 100%;
    }
  `;

  return (
    <StyledButton
      complete={props.complete}
      disabled={props.active ? true : false}
      onClick={() => { props.toggle(props.index) }}
    >
      {props.icon !== undefined && props.icon}
      {props.label}
      {props.active && <span>&bull;</span>}
    </StyledButton>
  );
}
