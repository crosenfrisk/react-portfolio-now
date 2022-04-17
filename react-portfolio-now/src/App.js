import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [categories] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
      ></Header>
      <div>
        
        <main>
          <Content></Content>
        </main>
      </div>
    </div>
  );
}

export default App;
