export const ErrorWarningBox = ({ error }) => {
  if (!error) return null;

  return (
    <section>
      <h2>Invalid Calculation</h2>
      <p>{error.response.data.error}</p>
    </section>
  )
};
