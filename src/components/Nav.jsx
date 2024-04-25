import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GiHouse } from "react-icons/gi";

const Nav = () => {

  const links = <>
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Home</NavLink>
    <NavLink to="/update-profile" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Update Profile</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-green-500 border-green-500 border p-2 rounded-xl font-bold' : 'font-bold p-2'}>Contact Us</NavLink>
  </>


  const { logout, userInfo } = useContext(AuthContext)
  return (
    <div className="navbar animate__fadeInDown animate__animated container mx-auto sticky top-0 z-10 my-3 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-semibold text-green-500 text-xl md:text-2xl">
          <div className="md:flex items-center justify-center hidden w-12 h-12 rounded-full bg-green-500">
            <GiHouse className="text-white" />
          </div>
          Dream House</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-3 menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end">

        {
          userInfo ? <><button onClick={() => logout()} className="btn btn-sm md:btn-md mr-3 text-white hover:text-green-500 bg-green-500 btn-ghost">Logout</button>
            <div className="md:w-10 md:h-10 w-8 h-8 tooltip tooltip-left" data-tip={userInfo.displayName}>
              <button><img className="rounded-full w-full h-full" alt="" src={userInfo?.photoURL} /></button>
            </div>
          </>
            :
            <Link to="/login" className="btn  btn-sm md:btn-md text-white hover:text-blue-500 bg-blue-500">Login</Link>
        }


      </div>
    </div>
  );
};

export default Nav;