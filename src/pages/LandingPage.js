import React from "react";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
const LandingPage = () => {
  return (
    <main>
      <Banner />
      <main className="max-w-screen-2xl mx-auto">
        <ProductFeed />
      </main>
    </main>
  );
};

export default LandingPage;
