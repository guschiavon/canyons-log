import { Link } from "react-router-dom";
import { ReactComponent as ProfilePlaceholder } from "../../assets/images/user-icon.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext } from "../../contexts/users.context";

const UserMenu = () => {
  const { currentUser } = useContext(UserContext);
  const { displayName, photoURL } = currentUser;
  return (
    <div className="dropdown dropdown-end">      
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <div className="object-contain w-full h-full">
          {
            !currentUser
            ? <ProfilePlaceholder />
            : <img src={photoURL} />
          }
          
          </div>
          
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><span className="text-lg font-body text-yellow-500">{displayName}</span></li>
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