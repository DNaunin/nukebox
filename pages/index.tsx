import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
      </Head>

      <Greeting name="Dörte" />
    </div>
  );
}
