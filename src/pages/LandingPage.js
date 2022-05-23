import React from "react";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
const LandingPage = () => {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Banner />
      <ProductFeed />
    </main>
  );
};

export default LandingPage;
