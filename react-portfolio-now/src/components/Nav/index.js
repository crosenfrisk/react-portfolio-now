import React from 'react';

// , { useEffect }
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
      categories = [],
      setCurrentCategory,
      // contactSelected,
      currentCategory,
      // setContactSelected,
    } = props;

  //   useEffect(() => {
  //     document.title = capitalizeFirstLetter(currentCategory.name);
  //   }, [currentCategory]);

  return (
    
    <div>
      <nav>
        <ul className="flex-row">
        {categories.map((category) => (
            <li
              className={`mx-2 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span                 
              onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category.name}
              </span>
            </li>
          ))}

        </ul>
      </nav>
    </div>

    // <header className="flex-row px-1">
    //   <h2>
    //     <a data-testid="link" href="/">
    //       Rosenfrisk Portfolio
    //     </a>
    //   </h2>
    //   <nav>
    //     <ul className="flex-row">
    //       <li className="mx-2">
    //         {/* <a
    //           data-testid="about"
    //           href="#about"
    //           onClick={() => setContactSelected(false)}
    //         >
    //           About Me
    //         </a> */}
    //       </li>
    //       <li className={`mx-2 ${contactSelected && "navActive"}`}>
    //         <span onClick={() => setContactSelected(false)}>Portfolio</span>
    //       </li>
    //       <li className={`mx-2 ${contactSelected && "navActive"}`}>
    //         <span onClick={() => setContactSelected(true)}>Contact</span>
    //       </li>
    //       {categories.map((category) => (
    //         <li
    //           className={`mx-1 ${
    //             currentCategory.name === category.name && "navActive"
    //           }`}
    //           key={category.name}
    //         >
    //           <span
    //             onClick={() => {
    //               setCurrentCategory(category);
    //               setContactSelected(false);
    //             }}
    //           >
    //             {capitalizeFirstLetter(category.name)}
    //           </span>
    //         </li>
    //       ))}
    //       <li className={`mx-2 ${contactSelected && "navActive"}`}>
    //         <span onClick={() => setContactSelected(false)}>Resume</span>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Nav;
