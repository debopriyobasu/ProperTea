import "@/assets/styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "ProperTea | Find the perfect rental",
  description: "Find your dream rental property",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body className="min-h-screen">
            <NavBar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
