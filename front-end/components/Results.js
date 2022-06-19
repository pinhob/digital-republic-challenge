import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { PaintCanCard } from "./PaintCanCard";

export const Results = () => {
  const [cans, setCans] = useState([]);
  const { paintCans } = useContext(Context);

  const paintCansNumbers = (paintCans) => {
    const neededCansResult = paintCans.data && Object.entries(paintCans.data).filter(([_key, value]) => value > 0);

    setCans(neededCansResult);
  }

  useEffect(() => {
    console.log("RESULTS", paintCans);
    console.log(paintCansNumbers(paintCans))
    console.log(cans)
  }, [paintCans]);

  return (
    <section>
      <h1>Results</h1>
      {
        cans
          ? (
            <>
              {
                cans.map(([key, value]) => (
                  <PaintCanCard size={key} quantity={value} />
                ))
              }
              <button>Buy All</button>
            </>
          )
          : <p>Calculate to get a result</p>
      }
    </section>
  )
};
