import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      Login, have not account{" "}
      <Link to="/signup" style={{ color: "white" }}>
        Sign Up
      </Link>
    </div>
  );
};

export default index;
