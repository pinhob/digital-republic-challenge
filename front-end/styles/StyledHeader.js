import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--black);
  color: var(--white);
  
  .header--wrapper {
    max-width: var(--site-max-width);
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    display: flex;
    font-size: 1.5rem;
    gap: 10px;
    text-transform: uppercase;
  }

  h1:hover {
    cursor: pointer;
    color: var(--red);
    font-weight: 800;
  }
`;