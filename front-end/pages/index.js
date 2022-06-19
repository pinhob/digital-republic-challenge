import {
  Footer,
  Header,
  Results,
  ErrorWarningBox
} from "../components";
import { Forms } from "../components/Forms";
import { Context } from "../context";
import { useContext } from "react";

export default function Home() {
  const { error } = useContext(Context);

  return (
    <div>
      <Header />
      <Forms />
      {
        error
          ? <ErrorWarningBox error={error} />
          : <Results />
      }
      <Footer />
    </div>
  )
};
