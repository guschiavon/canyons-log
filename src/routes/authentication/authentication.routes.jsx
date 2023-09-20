import { useEffect } from "react";

import { signInWithGoogleRedirect, redirectResponse } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  useEffect(() => {
    redirectResponse()
  }, [])

  return (
    <div className="container mx-auto flex items-center justify-center">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <button className="btn btn-info" onClick={signInWithGoogleRedirect}>Sign In With Google</button>
      </div>
    </div>
  )
}
export default Authentication;