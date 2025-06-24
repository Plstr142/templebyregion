'use client'
import { SignOutButton } from "@clerk/nextjs"
import { Toaster , toast } from "sonner"

const SignOutLinks = () => {

  const handleLogOut = () => {
    toast("Logout Succesfully!!");
  }

  return (
    <>
        <SignOutButton redirectUrl="/">
            <button onClick={handleLogOut} className="w-full cursor-pointer text-gray-500">Logout</button>
        </SignOutButton>
        <Toaster />
    </>
  )
}
export default SignOutLinks