import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";
import "../styles/notfound.scss";
import "../styles/topnav.scss";
import "../styles/homepage.scss";
import "../styles/register.scss";
import { ThemeProvider } from "../context/theme";
import { ToastContainer } from "react-toastify";
import TopNav from "../components/nav/TopNav";

export const metadata = {
  title: "Blog website",
  description: "Made by radovanrasha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <TopNav></TopNav>
          <ToastContainer />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
