import styled from 'styled-components';

export const StyledForm = styled.main`
  background-color: var(--black);
  
  .form--wrapper {
    flex-flow: column wrap;
    display: flex;
    max-width: var(--site-max-width);
    margin: 0 auto;
    gap: 1rem;
    padding: 1rem;
  }

  .title {
    color: var(--white);
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  .form__description {
    color: var(--white);
    font-size: 1.4rem;
    font-weight: 600;
  }

  .form {
    display: flex;
    flex-flow: column;
    width: 100%;
  }

  fieldset {
    background-color: white;
    border: none;
    margin-bottom: 1rem;
  }

  legend {
    font-size: 1.8rem;
    font-weight: bold;
    background-color: var(--red);
    text-transform: uppercase;
    padding: 0.3rem;
  }

  .form label {
    display: flex;
    flex-flow: column;
    font-size: 1.2rem;
    font-weight: 500;
    gap: 1.5rem;
    margin: 0.5rem 0;
  }

  input[type=number] {
  box-sizing: border-box;
  width: 100%;
  height: 40px; 
  font-size: 1rem;
  padding-left: 0.5rem;
  }

  input:focus {
  outline: auto;
  outline-color: var(--orange);
  }

  select {
    width: 100%;
    height: 40px;
    outline-color: var(--orange);
  }
  
  .form__btn {
    background-color: var(--orange);
    width: 100%;
    border: 0;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s ease;
  }

  .form__btn:hover, .form__btn:focus {
    background-color: var(--dark-orange);
    cursor: pointer;
    font-weight: 700;
    transition: background-color 0.3s ease;
    outline: none;
  }

  @media (min-width: 860px) {
    .form {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
  }

    fieldset {
      background-color: white;
      border: none;
      margin-bottom: 1rem;
      width: 49%;
  }
  }
`
