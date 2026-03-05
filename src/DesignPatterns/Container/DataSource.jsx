import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

function DataSource({ children, loader = () => {}, resourceName }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await loader();
      setData(res);
    })();
  }, [loader]);
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { [resourceName]: data });
        }
        return child;
      })}
    </>
  );
}

export default DataSource;
