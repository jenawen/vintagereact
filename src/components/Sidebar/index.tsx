import { useState } from "react";
import "./index.css";
export const Sidebar = () => {
  const [vintage, setVintage] = useState("");

  const handleSelectedVintage = (e: any) => {
    setVintage(e.target.value);
  };

  return (
    <div className="sidebar">
      <form className="sidebar-form">
        Selected Vintage:
        <select
          value={vintage}
          onChange={handleSelectedVintage}
          title="vintages"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        First Second:
        <select value={vintage} onChange={handleSelectedVintage} title="fs">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        Branding:
        <select value={vintage} onChange={handleSelectedVintage} title="b">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        Channel:
        <select value={vintage} onChange={handleSelectedVintage} title="c">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        Source:
        <select value={vintage} onChange={handleSelectedVintage} title="s">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        Association:
        <select value={vintage} onChange={handleSelectedVintage} title="a">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        Annual Fee Group:
        <select value={vintage} onChange={handleSelectedVintage} title="afg">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        Original Credit Line Range:
        <select value={vintage} onChange={handleSelectedVintage} title="ogcred">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </form>
    </div>
  );
};
