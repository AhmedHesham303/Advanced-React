import axios from "axios";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

function UserLoader({ id, children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users/${id}`);
      setUser(res.data);
    })();
  }, [id]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
}

export default UserLoader;
