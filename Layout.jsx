import { Outlet, Link } from "react-router-dom";
function Layout() {
    return (
        <>
            <nav>
               <a> <Link to="/" id="home">Home</Link></a>
               <a> <Link to="/contact"id="contact">Contact</Link></a>
               <a> <Link to="/blogs"id="blogs">Blogs</Link></a>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;