import { RxHamburgerMenu } from "react-icons/rx";
import { CiDollar } from "react-icons/ci";
import logo from "../../assets/logo.png"
import PropTypes from "prop-types";

const Navbar = ({balance}) => {
    return (
        <div className="w-full bg-[#FFFFFF]/[0.6] backdrop-blur-lg sticky top-0 z-10">
            <div className="navbar max-w-[95%] sm:max-w-[90%] lg:max-w-[81.25%] mx-auto pt-3 sm:pt-5 lg:pt-8 pb-1 sm:pb-2 lg:pb-4">

                <div className="navbar-start w-[20%]">
                    {/* Logo */}
                    <a href="#">
                        <img className="w-12 sm:w-16 h-12 sm:h-16" src={logo} alt="logo" />
                    </a>
                </div>

                <div className="navbar-end w-[80%]">
                    {/* Desktop Menu */}
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>

                    {/* Balance */}
                    <div className="flex items-center gap-2 px-5 py-3 border border-[#1313131A] rounded-xl text-sm sm:text-base font-semibold">
                        <p>${balance}</p>
                        <CiDollar className="w-6 h-6 bg-[#F39E09] rounded-full"/>
                    </div>

                    {/* Hamburger Menu */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <RxHamburgerMenu />
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    balance: PropTypes.number.isRequired,
}

export default Navbar;