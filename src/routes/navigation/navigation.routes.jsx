import { Outlet, Link } from "react-router-dom";

import UserMenu from "../../components/user-menu/user-menu.component";

import './navigation.styles.css';
import { useContext } from "react";
import { UserContext } from "../../contexts/users.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <div className="">
      <div className="navbar bg-base-100 mb-4">
        <div className="flex-1 container mx-auto">
          <Link to={'/'} className="btn btn-ghost text-xl font-heading uppercase">Canyon Logbook</Link>
          <div className="flex items-center justify-center gap-x-2">
            <Link className="nav-link" to={'/about'}>About</Link>
            <Link className="nav-link" to={'/canyons'}>Directory</Link>            
          </div>
        </div>
        <div className="flex-none gap-2">    
        {
          currentUser
          ? <UserMenu />
          : <Link to={'/auth'} className="btn btn-accent">Sign In</Link>
        }                
        </div>
      </div>      
      <Outlet />
    </div>
  )
}

export default Navigation;