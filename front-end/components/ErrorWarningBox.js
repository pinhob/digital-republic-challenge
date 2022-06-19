import { StyledErrorWarningBox, StyledWrapper } from "../styles";

export const ErrorWarningBox = ({ error }) => {
  if (!error) return null;

  return (
    <StyledErrorWarningBox>
      <StyledWrapper>
        <h2>⚠️ Invalid Calculation</h2>
        <p>{error.response.data.error}</p>
      </StyledWrapper>
    </StyledErrorWarningBox>
  )
};
