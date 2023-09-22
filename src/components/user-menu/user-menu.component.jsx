import { Link } from "react-router-dom";
import { ReactComponent as ProfilePlaceholder } from "../../assets/images/user-icon.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const UserMenu = () => {
  return (
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
        <li><button onClick={signOutUser}>Log out</button></li>
      </ul>
    </div>
  )
}

export default UserMenu;