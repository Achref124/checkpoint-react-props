import './App.css';
import Profile from './Profile/Profile.js';

import React from 'react';
  

function App() {
  const handleName = (name) => {
    alert(`the name of the user is: ${name}`)};
    

  return (
    <div className="App" style={{backgroundImage:'url("https://img.freepik.com/free-photo/maple-leaf-border-background-orange-watercolor-autumn-season_53876-128735.jpg?w=2000")',height:'625px',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
    <Profile handleName={handleName} fullName='Achref ouerfelli' bio='26yo, engineer full stack development' ><img className='img1' src='https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/217730792_4409824815727110_7057865548945378740_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1z5pGoWAdogAX9ctGn2&_nc_ht=scontent.ftun1-2.fna&oh=00_AfAQFRGZKD-t71CDKlftRM13NJDx5lR-8tRUkE6s6cbPew&oe=63EEAB70' alt='achref ouerfelli'></img>
</Profile>
    </div>
  );
}

export default App;
