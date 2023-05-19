import { Profile } from "./Profile/profile";
import user from './Profile/user.json';
import { Statistics } from "./Statistics/statistics";
import data from "./Statistics/data.json"
import { FriendList } from "./FriendList/friendList";
import friends from "./FriendList/friends.json"
import { TransactionHistory } from "./TransactionHistory/transactionHistory";
import transactions from "./TransactionHistory/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        flexWrap: 'wrap',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user}/>
      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
      
    </div>
  );
};
