import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (err) {
      console.log(err.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
        <h3>Register User </h3>
        <input
          placeholder="Email..."
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Create User</button>
      </div>
      <br />
      <hr />
      <div>
        <h3>Login</h3>
        <input
          placeholder="email..."
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          placeholder="password..."
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
      <hr />
      <br />
      <h2>User Logged In: {user?.email}</h2>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default App;
