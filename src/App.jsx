import axios from "axios";
import { UserInfo } from "./components/user-info";
import DataSource from "./DesignPatterns/Container/DataSource";
const loader = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
const url = "/users/3";
function App() {
  return (
    <DataSource resourceName={"user"} loader={() => loader(url)}>
      <UserInfo />
    </DataSource>
  );
}

export default App;
