import Button from "../components/Button"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react"
import ResponsiveMenu from "./ResponsiveMenu";



const navLinks = [
  {
    id:1,
    path: '/',
    name: "home"

  },
  {
    id: 2,
    path: '/about',
    name: "about"

  },
  {
    id: 3,
    path: '/blog',
    name: "blog"

  },
  {
    id: 4,
    path: '/classes',
    name: "classes"

  },
  {
    id: 5,
    path: '/contact',
    name: "contact"

  },
  {
    id: 6,
    path: '/pricing',
    name: "pricing"

  },
  {
    id: 7,
    path: '/trainers',
    name: "trainers"

  },
];


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav)
  }


  return (
    <header className="border-b-2 border-primary fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto py-4 justify-between items-center flex">
        {/* logo */}
        <Link to ='/' className="flex flex-col justify-center hover:translate-x-1 delay-200 ease-in-out transition-all">
          <h1 className="font-cursive text-4xl ">
            High Intensity
          </h1>
          <p  className="text-xs tracking-[0.5rem] text-center text-primary">WORK OUT</p>
        </Link>
        {/* nav links */}
        <ul className="hidden md:flex gap-6 items-center">
          {
            navLinks.map(({id, path, name}) => (
              <li className="text-white uppercase text-sm hover:text-primary transition-all delay-200
              ease-in-out">
                <NavLink 
                  key={id} 
                  to={path}
                  className={({isActive, isPending}) => (
                    isActive
                    ? "active"
                    : isPending
                    ? "pending"
                    : ""
                  )}
                >
                  {name}
                </NavLink>
              </li>
            ) )
          }
          <Button 
            label="Log In"
            className="bg-primary hover:bg-primary/80 px-8 py-2 hover:scale-105 delay-200 transition-transform
            ease-in-out cursor-pointer rounded-md hidden lg:block"/>
        </ul>
        <button onClick={toggleNav} className="flex md:hidden cursor-pointer">
          {
            nav ?  (
              <IoClose size={30} />
            ) : (
              <LuMenu size={30} />
            )
          }
        </button>
      </nav>

      {/* responsive navbar */}
      <ResponsiveMenu 
        nav={nav}
      />
    </header>
  )
}

export default Navbar