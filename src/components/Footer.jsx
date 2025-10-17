import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="copyright">&copy; 2025 West Travel Inc. All rights reserved</div>
            <div><NavLink aria-label="see the company instagram account" to="#"><FontAwesomeIcon icon="fa-brands fa-instagram" /></NavLink></div>
            <div><NavLink aria-label="see the company twitter or X account " to="#"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></NavLink></div>
        </footer>
    )
}


export default Footer