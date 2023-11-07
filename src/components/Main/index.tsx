import { useEffect, useState } from "react";
import "./index.css";

export const Main = (props: any) => {
  const { data } = props;
  const [vintage, setVintage] = useState("");

  const handleSelectedVintage = (e: any) => {
    setVintage(e.target.value);
  };

  useEffect(() => {
    console.log("DATA IN MAIN", data);
    console.log("row 1", data[0][0]);
  }, [data]);

  //TODO: need to put data into a table
  //* data is object with arrays -> each array value is one row, columns delimited by commas
  //* data[0] is table headers, map(e) into th
  //* map each row in to tr, td

  //TODO: need to create obj that chart js can graph
  //* 4 graphs, x: MonthsOnBook (8), y: ActiveAccountIndication (10), CumlROAAnnualized (20), CumlPreTaxIncome (15), EndingReceivable (12)
  //* grab each column using indexes, ie x: data[1][8] , y: data[1][10] etc
  //* make object using:

  const chart1 = {
    labels: data[1][8],
    datasets: [
      {
        label: "hi",
        data: [{ x: data[1][8], y: data[1][10] }],
      },
    ],
  };

  return (
    <div className="main">
      <h1>Vintage Comparison</h1>
      <form className="main-form">
        Selected Vintage:
        <select
          value={vintage}
          onChange={handleSelectedVintage}
          title="main-vintages"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </form>
    </div>
  );
};
