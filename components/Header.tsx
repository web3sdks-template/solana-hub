import { useAddress, useMetamask, useDisconnect } from "@web3sdks/react";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <Link href="/">
            <img
              src={`/logo.png`}
              alt="Web3sdks Logo"
              className={styles.headerLogo}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
