import { useState } from 'react'
import './App.css'
import SignUpForm from './components/signUpForm';
import Authenticate from './components/authenticate';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App;
