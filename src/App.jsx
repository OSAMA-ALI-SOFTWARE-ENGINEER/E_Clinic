import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Disease" element={<Disease />} />
          <Route path="/Treatment" element={<Treatment />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/add-disease" element={<AddDisease />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
