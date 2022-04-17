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

  // //   useEffect(() => {
  // //     document.title = capitalizeFirstLetter(currentCategory.name);
  // //   }, [currentCategory]);

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

    
  );
}

export default Nav;
