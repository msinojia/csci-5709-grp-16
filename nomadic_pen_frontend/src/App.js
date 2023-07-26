import React from "react";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Header from "./components/Header";
import PostForm from "./components/CreatePost/PostForm";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from "./components/theme";
import ProfilePage from "./components/Profile/ProfilePage";
import TravelGuide from "./components/TravelGuide/TravelGuide";
import TravelGuideArticle from "./components/TravelGuide/TravelGuideArticle";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Reset from "./components/Reset";
import SubscriptionPage from './components/Subscription/SubscriptionPage';
import ManageSubscriptionPage from './components/Subscription/ManageSubscriptionPage';
import PaymentPage from './components/Subscription/PaymentPage';

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
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path='/signup' element={<CreateAccount/>} />
            <Route path='reset' element={<Reset/>} />
            <Route exact path="/travel-guide" element={<TravelGuide/>} />
            <Route exact path="/travel-guide/article/:id" element={<TravelGuideArticle/>} />
            <Route path="/subscribe" element={<SubscriptionPage />} />
            <Route path="/manage-subscription" element={<ManageSubscriptionPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            {/*<Route exact path="/travel-guide/blog" element={<TravelGuideBlog/>} />DO NOT REMOVE */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
