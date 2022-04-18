import React from 'react'
import NavTabs from '../Nav/NavTabs';

function Header(props) {

  return (
    <header>
        <h1 className="developer-name">Claire Rosenfrisk</h1>
        <NavTabs           
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}/>
    </header>
  )
}

export default Header;