import { Link } from "react-router-dom";

const MyNavLink = ({ to, className, txt }) => {
  return (
    <Link to={to} className={className}>
      {txt}
    </Link>
  );
};

export default MyNavLink;
