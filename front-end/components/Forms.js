import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { formatWallsDataToApiFormat } from "../utils";
import { Context } from "../context";
import { StyledForm } from "../styles";

export const Forms = () => {
  const { register, handleSubmit } = useForm();
  const { setPaintCans, setError } = useContext(Context);

  const onSubmit = (data) => {
    const wallsData = formatWallsDataToApiFormat(data);

    axios.post('http://localhost:4000/paints/', wallsData)
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
        <h1 className="title">Republic Paint Cans Calculator</h1>
        <div className="form__description">
          <p>Calculate how many Republic Paint Cans you need to paint your walls</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <fieldset>
            <legend>Wall 1:</legend>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              name="height"
              step={0.01}
              required
              {...register("wall_1_height")}
            />
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              name="width"
              step={0.01}
              required
              {...register("wall_1_width")}
            />
            <label htmlFor="doors">Doors:</label>
            <select
              name="doors"
              id="doors"
              defaultValue={"0"}
              {...register("wall_1_doors")}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label htmlFor="windows">Windows:</label>
            <select
              name="windows"
              id="windows"
              defaultValue={"0"}
              {...register("wall_1_windows")}
            >
              <option value="0" >0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Wall 2:</legend>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              name="height"
              step={0.01}
              required
              {...register("wall_2_height")}
            />
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              name="width"
              step={0.01}
              required
              {...register("wall_2_width")}
            />
            <label htmlFor="doors">Doors:</label>
            <select
              name="doors"
              id="doors"
              defaultValue={"0"}
              {...register("wall_2_doors")}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label htmlFor="windows">Windows:</label>
            <select
              name="windows"
              id="windows"
              defaultValue={"0"}
              {...register("wall_2_windows")}
            >
              <option value="0" >0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Wall 3:</legend>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              name="height"
              step={0.01}
              required
              {...register("wall_3_height")}
            />
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              name="width"
              step={0.01}
              required
              {...register("wall_3_width")}
            />
            <label htmlFor="doors">Doors:</label>
            <select
              name="doors"
              id="doors"
              defaultValue={"0"}
              {...register("wall_3_doors")}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label htmlFor="windows">Windows:</label>
            <select
              name="windows"
              id="windows"
              defaultValue={"0"}
              {...register("wall_3_windows")}
            >
              <option value="0" >0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Wall 4:</legend>
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              name="height"
              step={0.01}
              required
              {...register("wall_4_height")}
            />
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              name="width"
              step={0.01}
              required
              {...register("wall_4_width")}
            />
            <label htmlFor="doors">Doors:</label>
            <select
              name="doors"
              id="doors"
              defaultValue={"0"}
              {...register("wall_4_doors")}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label htmlFor="windows">Windows:</label>
            <select
              name="windows"
              id="windows"
              defaultValue={"0"}
              {...register("wall_4_windows")}
            >
              <option value="0" >0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </fieldset>
          <input type="submit" value="Calculate" className="form__btn" />
        </form>
      </div>

    </StyledForm>
  );
};
