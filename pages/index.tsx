import type { NextPage } from "next";
import { useRouter } from "next/router";
import contractAddresses from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <img src={"/web3sdks.svg"} className={styles.icon} />
          <img src={"/sol.png"} className={styles.icon} />
        </div>
        <h1 className={styles.h1}>Solana, meet web3sdks 👋</h1>
        <p className={styles.explain}>
          Explore what you can do with web3sdks&rsquo;s brand new{" "}
          <b>
            <a
              href="https://docs.web3sdks.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.purple}
            >
              Solana SDK
            </a>
          </b>
          .
        </p>

        <hr className={styles.divider} />

        <div className={styles.contractBoxGrid}>
          {contractAddresses.map((c) => (
            <div
              className={styles.contractBox}
              key={c.name}
              onClick={() => router.push(`${c.link}`)}
            >
              <div className={styles.contractImage}>
                <img src={c.icon} />
              </div>
              <h3 className={styles.cardName}>{c.name}</h3>
              <p className={styles.description}>{c.description}</p>
            </div>
          ))}
        </div>

        <a
          className={`${styles.mainButton} ${styles.bigSpacerTop} ${styles.noUnderline}`}
          role="button"
          href="https://docs.web3sdks.com/solana"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default Home;
