import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { formatWallsDataToApiFormat } from "../utils";
import { Context } from "../context";
import { StyledForm } from "../styles";
import { FieldsetForm } from "./FieldsetForm";

export const Forms = () => {
  const { register, handleSubmit } = useForm();
  const { setPaintCans, setError } = useContext(Context);

  const onSubmit = (data) => {
    const wallsData = formatWallsDataToApiFormat(data);

    console.log(wallsData);

    axios.post('http://localhost:4242/paints/', wallsData)
      .then((data) => {
        console.log(data);
        setPaintCans(data.data);
        setError(false);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setError(error);
      });
  }

  return (
    <StyledForm>
      <div className="form--wrapper">
        <h1 className="title">Interior Paint Cans Calculator</h1>
        <div className="form__description">
          <p>Calculate how many Republic Paints® cans you need to paint your walls:</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <FieldsetForm wallNumber={1} register={register} />
          <FieldsetForm wallNumber={2} register={register} />
          <FieldsetForm wallNumber={3} register={register} />
          <FieldsetForm wallNumber={4} register={register} />
          <input type="submit" value="Calculate" className="form__btn" />
        </form>
      </div>

    </StyledForm>
  );
};
