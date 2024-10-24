import { logout } from "@/actions/auth";
import NavLink from "./NavLink";
import { getUser } from "@/lib/token";
async function AuthButtons() {
  // Actually check if there's a user!
  const user = await getUser();

  if (user)
    return (
      <button
        onClick={logout}
        type="button"
        // Actually make the logout button work!
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    );

  return (
    <>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </>
  );
}

export default AuthButtons;
