import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateParagraph, updateIncludeHTML } from "../redux/slices/textSlice";

// Define the Header functional component
function Header() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.paragraph.count); // Select paragraph count from Redux state
  const include = useSelector((state) => state.paragraph.includeHTML); // Select HTML inclusion flag from Redux state

  const [paras, setParas] = useState(count); // Local state for paragraph count input

  // Handler for updating paragraph count
  const handleCount = (e) => {
    setParas(e);
    dispatch(updateParagraph(e)); // Dispatch action to update paragraph count in Redux state
  };

  // Handler for updating HTML inclusion setting
  const handleSelectChange = (e) => {
    if (e === "NO") {
      dispatch(updateIncludeHTML("text")); // Dispatch action to update state to exclude HTML
    } else {
      dispatch(updateIncludeHTML("html")); // Dispatch action to update state to include HTML
    }
  };

  // useEffect hook to log changes to count and include state
  useEffect(() => {
    console.log(count);
    console.log(include);
  }, [include, count]);

  // Render the component
  return (
    <div>
      <h1 className="title">React Text Generator App</h1>
      <hr />

      <div className="header">
        <div className="paragraph">
          <label>Paragraphs</label>
          <div>
            <input
              value={paras} // Set the value of the input to the local state
              onChange={(e) => handleCount(e.target.value)} // Update local and Redux state on change
              min="1"
              type="number"
            />
          </div>
        </div>
        <div className="include">
          <label>Include HTML</label>
          <br />
          <select onChange={(e) => handleSelectChange(e.target.value)}> // Update HTML inclusion setting on change
            <option>NO</option>
            <option>YES</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
