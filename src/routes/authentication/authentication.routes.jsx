import { useEffect } from "react";
import { redirectResponse } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  useEffect(() => {
    redirectResponse()
  }, [])

  return (
    <div className="rounded-md border-2 border-gray-500 w-[400px] mx-auto p-6">
      <SignUpForm />
    </div>
  )
}
export default Authentication;