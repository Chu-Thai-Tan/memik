import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "../utils/index";
import { authActions } from "../store/auth-slice";

const Navbar = () => {
  let user = useSelector(
    (state: {
      auth: {
        userProfile: any;
      };
    }) => state.auth.userProfile
  );
  const dispatch = useDispatch();

  if (user === null && localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user") || "{}");
    dispatch(authActions.addUser(user));
  }

  const logOutHandler = () => {
    googleLogout();
    dispatch(authActions.removeUser());
    localStorage.removeItem("user");
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="MeMik"
            layout="responsive"
          />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>
        {user ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-base font-semibold flex items-center">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {user.image && (
              <Link href="/">
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    src={user.image}
                    alt="profile photo"
                  />
                </>
              </Link>
            )}
            <button
              className="px-2 border-2"
              type="button"
              onClick={logOutHandler}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, dispatch)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
