import Link from "next/link";
import React, { Fragment } from "react";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";
import Image from "next/image";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href=" /">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <Fragment>
            <ProfileMenu session={session} />
            <Link href="/create-project">Share Work</Link>
          </Fragment>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
