import React from "react";
import "@/assets/styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "ProperTea | Find the perfect rental",
  description: "Find your dream rental property",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
