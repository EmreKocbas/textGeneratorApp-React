import React from "react";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// Define the Form functional component
function Form() {
  return (
    <div>
      <CssBaseline /> {/* Apply baseline CSS to ensure consistent styling across browsers */}
      <Container> {/* Use Material-UI Container for layout consistency */}
        <Header /> {/* Render the Header component */}
        <Body /> {/* Render the Body component */}
        <Footer /> {/* Render the Footer component */}
      </Container>
    </div>
  );
}

export default Form;
