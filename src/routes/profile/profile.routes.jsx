import { useContext } from "react";
import { UserContext } from "../../contexts/users.context";

import FormInput from "../../components/form-input/form-input.component";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const { displayName, photoURL, email } = currentUser
  return (
      <div className="w-1/2 mx-auto">
        <h1 className="font-heading">Profile</h1>
        <div className="border-2 border-gray-500 p-6 rounded-xl">
        
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img src={photoURL} alt={displayName + ' profile image'} className="object-cover w-full h-full" />
            </div>
            <h2 className="font-heading text-3xl">{displayName}</h2>
            <span className="font-body text-lg">{email}</span>
          </div>
        </div>
      </div>

  )
}
export default Profile;