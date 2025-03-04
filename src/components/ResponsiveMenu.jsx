import { NavLink } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import Button from "./Button";

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
  

const ResponsiveMenu = ({ nav, toggleNav }) => {
  return (
    <div
      className={`${
        nav ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-black border-r-2 border-primary/20
       dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl 
       shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <ul className="flex md:hidden gap-6 flex-col mt-12 ml-6">
          {
            navLinks.map(({id, path, name}) => (
              <li className="text-white uppercase text-sm hover:text-primary transition-all delay-200
              ease-in-out font-medium">
                <NavLink 
                  onClick={toggleNav}
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
            ease-in-out cursor-pointer rounded-md block lg:hidden"/>
        </ul>
      </div>
      <div className="footer">
        <h1>
          Made with ❤ by <a href="https://github.com/Joshuakibwage/">Joshua</a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;