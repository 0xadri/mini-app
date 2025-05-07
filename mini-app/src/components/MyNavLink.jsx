import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, txt, classRegular, classActive }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${classActive}` : `${classRegular}`
      }
    >
      {txt}
    </NavLink>
  );
};

export default MyNavLink;
