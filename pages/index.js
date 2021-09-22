import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Head from 'next/head';

import menu from "../public/menu.svg";
import fechados from "../public/fechados.svg";
import relatorio from "../public/relatorio.svg";

export default function Home() {
  return (
    <div className={styles.container}> 
      <button className={styles.main}></button>
      <header className={styles.header}>
        <div>
          <p>Comandas abertas</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.containerComandas}>
          <div className={styles.item}>
            <p>Comanda 3</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 4</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>

          <div className={styles.item}>
            <p>Comanda 5</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.selecionado}>
          <Image src={menu} alt="Menu" />
        </div>
        <div>
          <Image src={fechados} alt="Fechados" />
        </div>
        <div>
          <Image src={relatorio} alt="Relatorio" />
        </div>
      </footer>
    </div>
  )
}
