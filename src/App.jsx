import "./App.css";

import Profile from "./components/Profile/Profile";
import userData from "./data/userData.json";

import FriendList from "./components/FriendsList/FriendsList";
import friends from "./data/friendsData.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactionsData.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
