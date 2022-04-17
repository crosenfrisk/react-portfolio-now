import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./Header";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // eslint-disable-next-line no-unused-vars
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    //TODO return default page add here
  }
    

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Header   currentPage={currentPage}
        handlePageChange={handlePageChange}/>
        {/* Here we are calling the renderPage method which will return a component  */}
        { renderPage() }
      </div>
    );
  }