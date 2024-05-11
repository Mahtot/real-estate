import React, { useContext, useState } from 'react';
import { ModalContext } from '../App';
import { doSignInWithEmailAndPassword, 
  doSignInWithGoogle,
  doCreateUserWithEmailAndPassword, doSendEmailVerification } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

function Login({ onClose }) {
  const {userLoggedIn } = useAuth();
  const { isLogin, setIsLogin } = useContext(ModalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        if (isLogin) {
          // Handle login
          await doSignInWithEmailAndPassword(email, password);
          navigate('/dashboard');
        } else {
          // Handle signup
          await doCreateUserWithEmailAndPassword(email, password);
          await doSendEmailVerification();
          navigate('/dashboard');
        }
        onClose();
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle()
        .then(() => {
          navigate('/dashboard');
        })
        .catch((err) => {
          setErrorMessage(err.message);
          setIsSigningIn(false);
        });
    }
  };

  // if (loading) {
    // Render a loading spinner or message while the AuthProvider is initializing
    // return <div>Loading...</div>;
  // }



  return (
    <div className="modal-container">
      {userLoggedIn && navigate('/')}
      <div className="modal-overlay" onClick={onClose}></div>
   
      <div className="modal-content">
<div className="modal-header">
  <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
  <button className="close-btn" onClick={onClose}>
    &times;
  </button>
</div>
<form onSubmit={handleSubmit} className="modal-form">
  <label>
    Email:
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </label>
  <label>
    Password:
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </label>
  <div className="form-actions">
    <button type="submit" className="submit-btn">
      {isLogin ? 'Login' : 'Sign Up'}
    </button>
    <button type="button" className="toggle-btn" onClick={toggleForm}>
      {isLogin ? 'Sign Up' : 'Login'}
    </button>
  </div>
</form>
</div> 
      </div>
    



  );
}

export default Login;




