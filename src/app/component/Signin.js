"use client";
import React from "react";
import styles from "../styles/signinpage.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signin = () => {
  const route = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    route.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Login</p>
        <div className={styles.subcontain}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input type="email" id="email" className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="Password" className={styles.label}>
                Password
              </label>
              <input type="password" className={styles.input} />
            </div>
            <div className={styles.btsn}>
              <button type="submit" className={styles.login}>
                Login
              </button>{" "}
              <Link href="/signup" className={styles.regist}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
