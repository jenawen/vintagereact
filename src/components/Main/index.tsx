import { useState } from "react";
import "./index.css";

export const Main = () => {
  const [vintage, setVintage] = useState("");

  const handleSelectedVintage = (e: any) => {
    setVintage(e.target.value);
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
