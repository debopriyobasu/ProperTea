import React from "react";
import "@/assets/styles/globals.css";
import NavBar from "@/components/Navbar";
export const metadata = {
  title: "ProperTea | Find the perfect rental",
  description: "Find your dream rental property",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
