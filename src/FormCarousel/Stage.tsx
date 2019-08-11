import styled from 'styled-components';
import { FormCarousel_StyledStage } from './types';

export const Stage = styled.div<FormCarousel_StyledStage>`

  @keyframes stage_in_left {    
    from { left: -100%; }
    to { left: 0px; }
  }

  @keyframes stage_in_right {    
    from { left: 100%; }
    to { left: 0px; }
  }

  @keyframes stage_out_left {
    from { left: 0px; }
    to { left: -100%; }
  }

  @keyframes stage_out_right {
    from { left: 0px; }
    to { left: 100%; }
  }

  ${props => props.transition !== undefined
    ? `animation: ${props.transition} 0.75s ease-out;`
    : ``
  }
  animation-fill-mode: forwards;
  height: 100%;
  left: -100%;
  position: absolute;
  text-align: center;
  top: 0px;
  width: 100%;

  form {
    width: 100%;
  }

  .wrap {
    align-items: center;
    display: flex;
    flex: 1;
    flex-flow: row wrap;
    height: 100%;
    justify-content: center;    
    max-width: 1200px;
    width: 100%;
  }

  .textbox {
    -moz-appearance: none;
    -webkit-appearance: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    max-width: 600px;
    padding: 0.5em;
    width: 100%;
  }

  .submit {
    cursor: pointer;
    margin-top: 1rem; 
  }

  .error {
    color: #840000;
    font-weight: 700;
  }
`;

export default Stage;