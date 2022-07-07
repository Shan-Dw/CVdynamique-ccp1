import React from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
