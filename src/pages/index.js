import Head from "next/head";
import Header from "@/componentes/header/header";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Gin_Red from "@/componentes/Gin_Red/Gin_Red";
import Gin_Fizz from "@/componentes/Gin_Fizz/Gin_Fizz";
import Mojito from "@/componentes/Mojito/mojito";
import Cosmopolitan from "@/componentes/Cosmopolitan/cosmopolitan";
import Sex_On_The_Beach from "@/componentes/Sex-on-the-beach/Sex-on-the-beach";
import Footer from "@/componentes/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Drink Dream</title>
        <meta name="description" content="Site de Receitas de Coquiteis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo-Drink-Dream.png" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <section className={styles.banner}>
          <div className={styles.banner_letrero}>
            <h1>
              Bem-vindo ao Drink Dream
            </h1>
            <p>
              Seu site de receitas dos drinks que tiram seus pés do chão.
            </p>
          </div>
        </section>
        <section className={styles.conteudo}>
          <h2>Os Mais Famosos</h2>
          <div className={styles.cards}>
            <Gin_Red/>
            <Gin_Fizz/>
            <Mojito/>
            <Cosmopolitan/>
            <Sex_On_The_Beach/>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
