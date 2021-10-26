
// Props

import { NavLink } from "react-router-dom";

// {hint} => props.hint 
function GalleryNavigation({galleries}) {
    // console.log(galleries)
    


    return (
        
    <nav>    
        <h1>Galleries</h1>
        <NavLink to="/">Home</NavLink>
       
       { 
       galleries.map((gallery) => 
        <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
        )
       }


    </nav>
    );
}

export default GalleryNavigation;





