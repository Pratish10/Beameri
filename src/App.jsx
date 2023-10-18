import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./pages/Contactus";
import { Box, CircularProgress } from "@mui/material";

const Home = React.lazy(() => import("./pages/Home"));
const Faqs = React.lazy(() => import("./pages/Faqs"));
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));

const loading = (
  <Box sx={{ display: "flex" }}>
    <CircularProgress sx={{ color: "#f26a5a" }} />
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<>{loading}</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
