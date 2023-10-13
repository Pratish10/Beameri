import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/faqs" element={<Home />} /> */}
          {/* <Route path="/contactus" element={<Home />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
