import "./top-nav-bar.sass"

// import "./nav-bar.css";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Link, useRouteMatch, useResolvedPath } from "react-router-dom";


export default function TopNavBar() {

    return <nav className="nav"
    // style={{
    //     fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    // }}
    >
        {/* <Link to="/" className="site-title">Home</Link> */}

        <ul>

            {/* <CustomLink to="/">Home</CustomLink> */}

            <CustomLink to="/">Home</CustomLink>


            {/* <CustomLink to="/faq">FAQ
                <sup className="new">
                    Aug 8
                </sup >
            </CustomLink> */}




        </ul>
    </nav>
}



function CustomLink({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useRouteMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} >{children}</Link>
        </li>
    )
}