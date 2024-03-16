import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";
import { includeUser } from "./components/include-user";

const UserInfoWithLoader = includeUser(UserInfo, "3")

function App() {
  return (
    <>
      <UserInfoWithLoader />
    </>
  );
}

export default App;
