import { useEffect, useState } from "react";
import { Main } from "../Main";
import { Sidebar } from "../Sidebar";
import "./index.css";
import * as Papa from "papaparse";

export const Wrapper = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("./Data_Test.csv")
      .then((response) => response.text())
      .then((responseText) => {
        // -- parse csv
        const data = Papa.parse(responseText);
        console.log("data:", data);
      });
  }, []);

  console.log(text);

  return (
    <div className="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
};
