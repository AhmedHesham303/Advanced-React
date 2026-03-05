import axios from "axios";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);
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

export default CurrentUserLoader;
