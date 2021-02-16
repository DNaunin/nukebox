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
        title="Escape (The Pina Colada Song)"
        artist="Rupert Holmes"
        image="https://images.unsplash.com/photo-1607446045710-d5a8fd9bc1db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBpbmElMjBjb2xhZGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Songitem
        title="Drunken Lullabies"
        artist="Flogging Molly"
        image="https://images.unsplash.com/photo-1522590018573-8f925fe0acf1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
      />
      <Songitem
        title="Coffee Mug"
        artist="Descendents"
        image="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZmZlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Songitem
        title="Don't Stop Believing"
        artist="Journey"
        image="https://images.unsplash.com/photo-1612512836264-5e58fab88bf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dWZvfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Songitem
        title="The Passenger"
        artist="Iggy Pop"
        image="https://images.unsplash.com/photo-1498543963509-a9c181fed309?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGFzc2VuZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
      <Songitem
        title="I'm Still Standing"
        artist="Elton John"
        image="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cm9ja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}
