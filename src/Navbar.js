import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Web workshop</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Lecture">Lecture</Link>
            </div>
        </nav>
        );
}
 
export default Navbar;