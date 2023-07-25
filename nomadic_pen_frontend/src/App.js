import React from "react";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import PostForm from "./components/CreatePost/PostForm";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/posts/create" element={<PostForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
