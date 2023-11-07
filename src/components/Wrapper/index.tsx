/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Main } from "../Main";
import { Sidebar } from "../Sidebar";
import "./index.css";
import * as Papa from "papaparse";

export const Wrapper = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("./Data_Test.csv")
      .then((response) => response.text())
      .then((responseText) => {
        // -- parse csv
        const data = Papa.parse(responseText);

        setData(data.data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <Main data={data} />
    </div>
  );
};
