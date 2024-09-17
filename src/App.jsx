import React, { Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import AddProduct from "./pages/AddProduct.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="product-details/:id"
          element={
            <Suspense
              fallback={<h1 className="text-center font-bold">Loading</h1>}
            >
              <ProductDetails />
            </Suspense>
          }
        />
      </Route>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/add-product" element={<AddProduct/>}/>
    </>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
