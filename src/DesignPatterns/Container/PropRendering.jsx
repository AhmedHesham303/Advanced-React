import { useEffect, useState } from "react";

function PropRendering({ loader = () => {}, render = () => {} }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await loader();
      setData(res);
    })();
  }, [loader]);
  return render(data);
}

export default PropRendering;
