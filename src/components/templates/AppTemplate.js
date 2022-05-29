import * as React from "react";
import Footer from "../organisms/Footer";
import MainMenu from "../organisms/MainMenu";
import { Container } from "@mui/material";
import PropTypes from "prop-types";

const AppTemplate = ({ children }) => {
  return (
    <>
      <MainMenu />
      <main>
        <Container sx={{ py: 4 }} maxWidth="md">
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

AppTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppTemplate;
