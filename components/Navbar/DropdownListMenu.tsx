import { AlignLeft } from "lucide-react"
import { Button } from "@/components/ui/button";
import UserIcon from "./UserIcon";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { links } from "@/utils/links";
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";


// test const type string , number
// const test:string = "5"
// const num:number = "5"

// type NavLinks = {
//     href: string;
//     label: string;
// }

// const links:NavLinks[] = [
//     {href: "/", label: "Home"},
//     {href: "/favourite", label: "Favourite"},
//     {href: "/camp", label: "Camp"}
// ]

const DropDownListMenu = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                        <AlignLeft />
                        <UserIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>

                    <DropdownMenuLabel>My Account</DropdownMenuLabel>

                    {/* Already logged out */}
                    <SignedOut>
                        <DropdownMenuItem>
                            <SignInButton mode="modal">
                                <button>Login</button>
                            </SignInButton>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <SignUpButton mode="modal">
                                <button>Register</button>
                            </SignUpButton>
                        </DropdownMenuItem>
                    </SignedOut>

                    {/* Already logged in */}
                    <SignedIn>
                        {
                            // loop element
                            // parameters 3 => items , index, array
                            links.map((item, index) => {
                                return <DropdownMenuItem key={index}>
                                    <Link href={item.href}>{item.label}</Link>
                                </DropdownMenuItem>
                            })
                        }
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <SignOutLinks />
                        </DropdownMenuItem>

                    </SignedIn>


                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
export default DropDownListMenu