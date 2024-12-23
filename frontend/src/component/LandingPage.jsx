import React from "react";
import Navbar from "./landing/Navbar";
import Hero from "./landing/Hero";
import ProductList from "./landing/Product";
import CompaniesSection from "./landing/CompaniesSection";
import ContactForm from "./landing/ContactForm";
import CarSearchSection from "./landing/CarSearchSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
     <Navbar/>

   <Hero/>

     <ProductList/>
     <CompaniesSection/>
     <ContactForm/>
     <CarSearchSection/>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
