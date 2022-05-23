import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import CheckoutPage from "./pages/CheckoutPage";
import LandingPage from "./pages/LandingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="search" element={<ProductListPage />} />
          <Route path=":id" element={<ProductDetailPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
