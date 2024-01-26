import Image from "next/image";
import styles from "./page.module.css";
import Pokedex from "../component/pokedex";
export default function Home() {
  return (
    <main className={styles.main}>
      { /* 45 pokemon*/}
      <header className={styles.header}>My Pokemon</header>
      <Pokedex />
    </main>
  );
}
