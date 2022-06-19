// import { } from '../public/images/republic_logo.png'

import { StyledHeader } from "../styles";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header--wrapper">
        <h1>
          <img src="images/republic_logo.png" alt="Replubic Paints logo" />
          Republic Paints
        </h1>
      </div>
    </StyledHeader>
  )
};
