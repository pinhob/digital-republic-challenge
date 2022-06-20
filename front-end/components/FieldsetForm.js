export const FieldsetForm = ({ wallNumber, register }) => {
  return (
    <fieldset>
      <legend>Wall {wallNumber}</legend>
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        name="height"
        step={0.01}
        placeholder="Insert your wall height in meters"
        required
        {...register(`wall_${wallNumber}_height`)}
      />
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        name="width"
        step={0.01}
        placeholder="Insert your wall width in meters"
        required
        {...register(`wall_${wallNumber}_width`)}
      />
      <label htmlFor="doors">Doors:</label>
      <select
        name="doors"
        id="doors"
        defaultValue={"0"}
        {...register(`wall_${wallNumber}_doors`)}
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
        {...register(`wall_${wallNumber}_windows`)}
      >
        <option value="0" >0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </fieldset>
  )
};
