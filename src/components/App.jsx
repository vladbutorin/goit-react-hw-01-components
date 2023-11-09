import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/Friends';
import { TransactionHistory } from './Transactions/Transactions';

import user from '../FileJson/user.json';
import data from '../FileJson/data.json';
import friends from '../FileJson/friends.json';
import transactions from '../FileJson/transactions.json';
import { GlobalStyle } from './GlobalStyle ';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
