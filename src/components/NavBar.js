import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let navArr = links.map(item => <a href={"#"+item} key = {item}>{item}</a>)

  return (<nav>
    {navArr}
    </nav>
  )
}

export default NavBar;
