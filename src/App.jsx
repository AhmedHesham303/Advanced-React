import { withCheckingProps } from "./DesignPatterns/HOC/withCheckingProps";
import { UserInfo } from "./components/user-info";
function App() {
  const UserInfoWrapper = withCheckingProps(UserInfo);
  return (
    <>
      <UserInfoWrapper test={"test"} />
    </>
  );
}

export default App;
