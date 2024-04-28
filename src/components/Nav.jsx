import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme=localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])
  const handleToggle = (e) => {
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  const links = <>
    <NavLink to="/" className={({ isActive }) => isActive ? 'text-white bg-secondary py-2  px-3 rounded-sm font-bold' : 'font-bold px-3 py-2'}>Home</NavLink>
    <NavLink to="/all-tourist-spots" className={({ isActive }) => isActive ? 'text-white bg-secondary py-2  px-3 rounded-sm font-bold' : 'font-bold px-3 py-2'}>All Tourists Spot</NavLink>
    <NavLink to="/add-tourists-spot" className={({ isActive }) => isActive ? 'text-white bg-secondary py-2  px-3 rounded-sm font-bold' : 'font-bold px-3 py-2'}>Add Tourists Spot</NavLink>
    <NavLink to="/my-list" className={({ isActive }) => isActive ? 'text-white bg-secondary py-2  px-3 rounded-sm font-bold' : 'font-bold px-3 py-2'}>My List</NavLink>
  </>


  const { logout, userInfo } = useContext(AuthContext)
  return (
    <div className="navbar shadow-lg animate__fadeInDown mb-10 animate__animated container mx-auto sticky top-0 z-10 my-3 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow space-y-2 bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost font-semibold text-secondary  text-xl md:text-2xl">
          <div className="md:flex items-center justify-center hidden border-secondary border w-12 h-12 rounded-full">
            <img className="w-10 h-10" src="./logo.svg" alt="" />
          </div>
          Dream <span className="text-primary">Wander</span> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-3 menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end">

        {
          userInfo ? <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={userInfo?.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">

                <li><button className="btn btn-sm md:btn-md btn-ghost">{userInfo.displayName}</button></li>
                <li><button onClick={() => logout()} className="btn btn-sm md:btn-md btn-ghost">Logout</button></li>
              </ul>
            </div>
          </>
            :
            <>
              <Link to="/register" className="btn  btn-sm md:btn-md text-white hover:text-primary bg-secondary">Register</Link>
              <Link to="/login" className="btn ml-3  btn-sm md:btn-md text-white hover:text-primary bg-primary">Login</Link>
            </>
        }
        <label className="cursor-pointer ml-2 grid place-items-center">
          <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>

      </div>
    </div>
  );
};

export default Nav;