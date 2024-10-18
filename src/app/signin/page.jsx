"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';
import axios from 'axios';
import styles from "./page.module.css"
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const searchParams = useSearchParams(); 
  const dispatch = useDispatch();
  const router = useRouter();
  const redirectPath = searchParams.get("redirect") || "/";  // Fallback to home if no redirect
  const signInMessage = redirectPath === "/chatbox" 
  ? "Sign In to open the chatbox" 
  : "Sign In";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.axamine.ignitionnestlabs.in/login', {
        email,
        password,
      });

      const { token, credits } = response.data;
      dispatch(loginSuccess({ token, credits }));
      router.push(redirectPath);  
      
      console.log('Logged in successfully:', response.data);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>{signInMessage}</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={`${styles.button} buttonWithGradient`}>Sign In</button>
        <p className={styles.smallPara}>Don't have a account<Link className={styles.sinUpLink} href={"/signup"}>SIGNUP</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
