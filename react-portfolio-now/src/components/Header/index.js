import React from 'react'
import coverImage from "../../assets/images/coverImagetransparent.png";
import Nav from '../Nav';

function Header(props) {
  const {categories, setCurrentCategory, currentCategory} = props;

  return (
    <header className="my-5">
        <h1 className="my-5">Claire Rosenfrisk</h1>
        <img src={coverImage} className="my-2" style={{ width: "90%" }} alt="cover" />
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
    </header>
  )
}

export default Header;