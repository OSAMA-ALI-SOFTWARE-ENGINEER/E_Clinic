import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Disease from "./pages/Disease";
import Treatment from "./pages/Treatment";
import About from "./pages/About";

import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AddDisease from "./pages/AddDisease";
import Login from "./pages/Login";
import AdminPanel from "./dashboard/AdminPanel";
import { Toaster } from "react-hot-toast";
// import Signup from "./pages/Signup";
// import AdminHeader from "./ui/AdminHeader";
import Subscribers from "./components/subscribers/Subscribers";
import NotFoundPage from "./pages/NotFound";

import DiseaseSearch from "./components/TreatementFilterSection/TreatmentFilterSectionMain";
import SingleDisease from "./pages/SingleDisease";

// import AdminDashboard from "./dashboard/AdminDashboard"

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

          <Route path="/add-disease" element={<AddDisease />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AdminPanel />} />
          <Route path="/dashboard/subscribers" element={<Subscribers />} />
          {/* <Route path="/admindashboard/" element={<AdminDashboard />} /> */}

          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route exact path="/DiseaseSearch" element={<DiseaseSearch />} />
          <Route path="/disease/:id" element={<SingleDisease />} />

          {/* 404 page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
