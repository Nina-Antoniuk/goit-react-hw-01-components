import user from './user.json';
import './App.css';
import { Profile } from './components/Profile/Profile';
 
function App() {
  return (
    <div className="App">
    <h2>Задание 1 - Профиль социальной сети</h2>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      
      <h2>Задание 2 - Секция статистики</h2>
      
      
      <h2>Задание 3 - Список друзей</h2>
      <h2>Задание 4 - История транзакций</h2>
    </div>
  );
}

export default App;

// package.json "pedeploy": 'yarn run build', "deploy": "??" 

