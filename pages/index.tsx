import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import Songitem from "../components/Songitem";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
      </Head>

      <Greeting name="Dörte" />
      <Songitem
        title="F Your Purse"
        artist="The Read"
        image="https://images.unsplash.com/photo-1598099947145-e85739e7ca28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
      />
    </div>
  );
}
