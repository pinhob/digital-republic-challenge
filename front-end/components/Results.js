import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import { StyledResults } from "../styles/StyledResults";
import { PaintCanCard } from "./PaintCanCard";

export const Results = () => {
  const [cans, setCans] = useState([]);
  const { paintCans } = useContext(Context);

  const paintCansNumbers = (paintCans) => {
    const neededCansResult = paintCans.data && Object.entries(paintCans.data).filter(([_key, value]) => value > 0);

    setCans(neededCansResult);
  }

  useEffect(() => {
    paintCansNumbers(paintCans)
  }, [paintCans]);

  return (
    <StyledResults>
      <div className="wrapper">
        <h2 className="title">Results</h2>
        {
          cans
            ? (
              <>
                <div className="results__card--wrapper">
                  {
                    cans.map(([key, value]) => (
                      <PaintCanCard size={key} quantity={value} />
                    ))
                  }
                </div>
                <button>Buy All</button>
              </>
            )
            : <p>Calculate to get a result</p>
        }
      </div>
    </StyledResults>
  )
};
