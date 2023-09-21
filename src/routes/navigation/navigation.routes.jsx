import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ProfilePlaceholder } from "../../assets/images/user-icon.svg";

const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mb-4">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost text-xl font-heading uppercase">Canyon Logbook</Link>
          <div className="flex items-center justify-center gap-x-2">
            <Link to={'/about'}>About</Link>
            <Link to={'/directory'}>Directory</Link>
            <Link to={'/donate'}>Donate</Link>
          </div>
        </div>
        <div className="flex-none gap-2">          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <ProfilePlaceholder className="object-contain w-full h-full"/>                
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/profile'} className="justify-between">
                  Profile                  
                </Link>
              </li>
              <li><button>Settings</button></li>
              <li><Link to={'/auth'}>Login</Link></li>
            </ul>
          </div>
        </div>
      </div>      
      <Outlet />
    </div>
  )
}

export default Navigation;