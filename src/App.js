import './App.css';
import user from './user.json';
import friends from './friends.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
    <h2 className="title">Задание 1 - Профиль социальной сети</h2>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      
      <h2 className="title">Задание 2 - Секция статистики</h2>
      <Statistics title="Upload stats" stats={statisticalData} />

      <h2 className="title">Задание 3 - Список друзей</h2>
      <FriendList friends={friends} />

      <h2 className="title">Задание 4 - История транзакций</h2>
      <TransactionHistory items={transactions}/>
    </div>
  );
}

export default App;


