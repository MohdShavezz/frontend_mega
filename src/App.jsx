import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/footer/Footer";
import CreateBook from "./pages/books/CreateBook";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Lazy-loaded components
const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));

function Layout({ children }) {
  return (
    <>
      <header style={{ marginBottom: "4rem" }}>
        <Navbar />
      </header>
      <main style={{ flex: 1 }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/CreateBook" element={<CreateBook />} />
          </Routes>
        </Suspense>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
