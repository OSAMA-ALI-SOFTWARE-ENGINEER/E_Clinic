import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Disease from "./pages/Disease";
import Treatment from "./pages/Treatment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddDisease from "./pages/AddDisease";
import Login from "./pages/Login";
import AdminPanel from "./dashboard/AdminPanel";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";

import AdminHeader from "./ui/AdminHeader";

// import DiseaseSearch from "./components/TreatementFilterSection/TreatmentFilterSectionMain";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      {/* Toast notification setup */}
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px", fontFamily: "Poppins" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "10px 24px",
            fontWeight: "500",
            background: "white",
            color: "rgb(33, 21, 21)",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          {/* Routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/Disease" element={<Disease />} />
          <Route path="/Treatment" element={<Treatment />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/add-disease" element={<AddDisease />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AdminPanel />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route exact path="/DiseaseSearch" element={<DiseaseSearch />} /> */}

          {/* 404 page */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
