import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <div className="flex justify-between items-center p-3 px-5 shadow-md">
      <Link to='/'>
        <img src="/logo.svg" width={100} height={100} />
      </Link>
      <>
        {
          isSignedIn ? (
            <div className="flex items-center gap-2">
              <Link to='/dashboard'>
                <Button variant='outline'>Dasboard</Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <Link to='auth/sign-in'>
              <Button>Get Started</Button>
            </Link>
          )
        }
      </>
    </div>
  );
};

export default Header;
