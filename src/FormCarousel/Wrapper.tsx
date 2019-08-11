import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 40vh;
  width: 100%;
  
  > header {
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 1.5em 0;

    > .separator {
      svg, path {
        fill: #ccc;
      }
    }

    > button {
      margin: 0 1.5em;
      min-width: 150px;
    }
  }

  > div {
    display: flex;
    flex: 1;
    position: relative;

    .hidden {
      display: none;
    }
  }`;


export default Wrapper;