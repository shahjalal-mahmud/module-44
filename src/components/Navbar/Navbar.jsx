import Link from "../Link/Link";
import PropTypes from 'prop-types';
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/dashboard", name: "Dashboard" },
        { id: 3, path: "/profile", name: "Profile" },
        { id: 4, path: "/courses", name: "Courses" },
        { id: 5, path: "/community", name: "Community" }
    ];

    return (
        <nav className="p-6">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <CgCloseR> </CgCloseR> :
                        <RiMenu2Line></RiMenu2Line>
                }

            </div>
            <ul className="md:flex m-4">{
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Navbar;
