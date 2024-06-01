import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParagraph } from "../redux/slices/textSlice";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// Define the Body functional component
function Body() {
  const dispatch = useDispatch();
  
  // Select the necessary state properties from the Redux store
  const { quotes, count, includeHTML, loading, error } = useSelector(
    (state) => state.paragraph
  );

  // useEffect hook to dispatch getParagraph action when count or includeHTML changes
  useEffect(() => {
    dispatch(getParagraph({ count, includeHTML }));
  }, [count, includeHTML, dispatch]);

  // If loading, display a backdrop with a circular progress indicator
  if (loading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} // Set the color and zIndex of the backdrop
        open={loading}
      >
        <CircularProgress color="inherit" /> {/* Show a circular progress indicator */}
      </Backdrop>
    );
  
  // If there's an error, display the error message
  if (error !== "") return <div>{error}</div>;

  // Render the quotes in a paragraph element
  return <p className="body">{quotes}</p>;
}

export default Body;
