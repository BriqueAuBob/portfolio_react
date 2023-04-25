import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import "./assets/scss/main.scss";

// @ts-ignore
import routes from "~react-pages";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

const app = createRoot(document.getElementById("root")!);

app.render(
  <HelmetProvider>
    <Router>
      <Navbar />
      <Helmet titleTemplate="Brandon Clément - %s" />
      <App />
      <Footer />
    </Router>
  </HelmetProvider>
);
