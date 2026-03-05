import axios from "axios";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

function ResourceLoader({ resourceUrl, resourcesName, children }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await axios.get(resourceUrl);
      setData(res.data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { [resourcesName]: data });
        }
        return child;
      })}
    </>
  );
}

export default ResourceLoader;
