import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);

function App() {
  return (
    <>
      <UserInfoWrapper propA="test1" blabla={{ a: 1, age: 23 }} />
    </>
  );
}

export default App;
