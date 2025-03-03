import Button from "../components/Button"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"



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
  return (
    <header>
      <nav className="container mx-auto py-4 flex justify-between items-center">
        {/* logo */}
        <Link to ='/' className="flex flex-col justify-center hover:translate-x-1 delay-200 ease-in-out transition-all">
          <h1 className="font-cursive text-4xl ">
            High Intensity
          </h1>
          <p  className="text-xs tracking-[0.5rem] text-center text-primary">WORK OUT</p>
        </Link>
        {/* nav links */}
        <ul className="flex gap-10 items-center">
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
            ease-in-out cursor-pointer rounded-md"/>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar