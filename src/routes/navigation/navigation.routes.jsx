import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mb-4">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">Canyon Logbook</Link>
        </div>
        <div className="flex-none gap-2">          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/assets/images/user-icon.svg" alt="user icon"/>
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <button className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </button>
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