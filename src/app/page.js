import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "./component/Pokedex";
export default function Home() {

  return (
    <main className={styles.main}>
      { /* 45 pokemon*/}
      <header>My Pokemon</header>
      <Pokedex />
    </main>
  );
}
