import Link from "next/link";
import React from "react";
import { Auth } from "aws-amplify";
const Navbar = () => {
  const signOutHandler = async () => {
    try {
        await Auth.signOut()
        location.reload();
    }
    catch(err){
        console.log(err);
    }
  };
  return (
    <nav className="navbar w-100 navbar-expand navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          Profile App
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/personalInformation">
                <a className="nav-link">Edit Personal Information</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/professionalInformation">
                <a className="nav-link">Edit Professional Information</a>
              </Link>
            </li>

            <button
              className="btn btn-danger"
              type="button"
              onClick={signOutHandler}
            >
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;