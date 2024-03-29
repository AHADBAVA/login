// import './App.css'
// import Login from './Login/Login'
// function App() {

//   return (
//     <>
//       <Login/>
//     </>
//   )
// }

// export default App

// App.js
import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <div>
      <h1>Employee Registration</h1>
      <RegistrationForm />
      <hr />
      <h1>Employee Login</h1>
      <LoginForm />
    </div>
  );
};

export default App;
