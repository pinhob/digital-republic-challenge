import styled from 'styled-components';

export const StyledResults = styled.section`
  background-color: var(--light-gray);
  
  .title {
    color: var(--orange);
    font-size: 3rem;
    font-weight: 800;
  }

  .wrapper {
    display: flex;
    flex-flow: column;
    gap: 1vh;
    max-width: var(--site-max-width);
    margin: 0 auto;
    padding: 1rem;
  }

  button {
    align-self: center;
    border: none;
    background-color: var(--blue);
    color: var(--white);
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    width: 50%;
    transition: background-color 0.3s ease;
  }

  button:hover, button:focus {
    background-color: var(--dark-blue);
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.3s ease;
    outline: none;
  }


  @media (min-width: 860px) {
    .results__card--wrapper {
      display: flex;
      flex-flow: row;
      justify-content: space-around;
    }
  }
`;