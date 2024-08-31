import { Link } from "react-router-dom";

function CustomLink({ to, children }) {
  return (
    <Link to={to} className="text-gray-700 hover:text-primary cursor-pointer">
      {children}
    </Link>
  );
}

export default CustomLink;
