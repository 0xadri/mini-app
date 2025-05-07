import { Link } from "react-router-dom";
import MyNavLink from "./MyNavLink";

const NavBar = () => {
  const classBaseNavItem =
    "inline-block py-1 px-1.5 mb-2 ml-2.5 rounded-md border hover:bg-gray-600 hover:border-zinc-400 ";
  const classRegularNavItem = classBaseNavItem + " border-zinc-600";
  const classActiveNavItem = classBaseNavItem + " border-zinc-300";
  return (
    <>
      <header className="w-full mx-auto pt-3 pb-2 px-10 md:px-20 bg-gray-900 text-white">
        <div className="h-9 mb-3">
          <Link to="/" className="float-left">
            <img
              src="/logo-movie-fan_00.png"
              className="max-h-10 max-sm:max-w-35"
              alt="Movie Fan Logo"
            />
          </Link>
          <a
            href="https://github.com/0xadri/ima-kokode"
            target="_blank"
            className="float-right px-3 py-1.5 max-sm:py-2 max-sm:px-2  sm:ml-6 max-sm:text-xs  hover:border-zinc-200 border-zinc-400 bg-gray-800 border font-medium rounded-lg text-sm text-center  hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
          >
            Code Repo
          </a>
        </div>
        <div className="">
          <MyNavLink
            to="/popular-movies"
            txt="🔥 Hottest Movies Of All Time"
            classRegular={classRegularNavItem}
            classActive={classActiveNavItem}
          />
          <MyNavLink
            to="/trending-actors"
            txt="🔥 Trending Actors"
            classRegular={classRegularNavItem}
            classActive={classActiveNavItem}
          />
          <MyNavLink
            to="/trending-tvshows"
            txt="🔥 Trending TV Shows"
            classRegular={classRegularNavItem}
            classActive={classActiveNavItem}
          />
          <MyNavLink
            to="/favorite-movies"
            txt="❤️ Fav Movies"
            classRegular={classRegularNavItem}
            classActive={classActiveNavItem}
          />
          <MyNavLink
            to="/favorite-actors"
            txt="❤️ Fav Actors"
            classRegular={classRegularNavItem}
            classActive={classActiveNavItem}
          />
          <MyNavLink
            to="/favorite-tvshows"
            txt="❤️ Fav TV Shows"
            classRegular={classRegularNavItem}
            classActive={classActiveNavItem}
          />
        </div>
      </header>
    </>
  );
};

export default NavBar;
