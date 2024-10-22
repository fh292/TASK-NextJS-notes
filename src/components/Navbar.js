import Link from "next/link";

import NavLink from "./NavLink";

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="font-semibold text-xl text-white">
                Our Notes
              </span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">
                Home
              </NavLink>
              <NavLink href="/notes">
                Notes
              </NavLink>
              <NavLink href="/users">
                Users
              </NavLink>

              <>
                <NavLink href="/login">
                  Login
                </NavLink>
                <NavLink href="/register">
                  Register
                </NavLink>
              </>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;