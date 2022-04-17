import React from 'react'
import coverImage from "../../assets/images/coverImagetransparent.png";
import NavTabs from '../Nav/NavTabs';

function Header(props) {

  return (
    <header>
        <h1 className="developer-name">Claire Rosenfrisk</h1>
        <NavTabs           
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}/>
        <img src={coverImage} className="my-2" style={{ width: "90%" }} alt="cover" />
    </header>
  )
}

export default Header;