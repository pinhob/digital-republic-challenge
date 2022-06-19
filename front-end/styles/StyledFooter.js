import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: var(--black);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem;
  text-align: center;

  a {
    text-decoration: none;
    color: var(--orange);
    font-weight: 600;
  }

  a:hover {
    cursor: pointer;
    text-decoration: underline;
    font-weight: 700;
  }
`;
