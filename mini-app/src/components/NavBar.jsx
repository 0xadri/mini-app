import { Link } from "react-router-dom";
import MyNavLink from "./MyNavLink";

const NavBar = () => {
  const classNavItem = "ml-4";
  return (
    <>
      <header className="w-full mx-auto py-5 px-10 mb-5 md:px-20 bg-gray-900 text-white">
        <Link to="/">
          <img
            src="/logo-movie-fan_00.png"
            className="max-h-8 max-sm:max-w-35"
            alt="Movie Fan Logo"
          />
        </Link>

        <MyNavLink
          to="/popular-movies"
          txt="🔥 Hottest Movies Of All Time"
          className={classNavItem}
        />

        <MyNavLink
          to="/trending-actors"
          txt="🔥 Trending Actors"
          className={classNavItem}
        />

        <MyNavLink
          to="/trending-tvshows"
          txt="🔥 Trending TV Shows"
          className={classNavItem}
        />

        <MyNavLink
          to="/favorite-movies"
          txt="❤️ Fav Movies"
          className={classNavItem}
        />

        <MyNavLink
          to="/favorite-actors"
          txt="❤️ Fav Actors"
          className={classNavItem}
        />

        <MyNavLink
          to="/favorite-tvshows"
          txt="❤️ Fav TV Shows"
          className={classNavItem}
        />
      </header>
    </>
  );
};

export default NavBar;
