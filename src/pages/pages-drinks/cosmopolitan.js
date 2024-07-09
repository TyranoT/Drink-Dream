import Header from "@/componentes/header/header";
import Head from "next/head";
import React from "react";
import Footer from "@/componentes/Footer/footer";
import styles from "@/styles/cosmopolitan_pag.module.css";

export default function Cosmopolitan_Pag() {
    return(
        <>
            <Head>
                <title>Drink Dream</title>
                <meta name="description" content="Site de Receitas de Coquiteis" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            </Head>
            <main className={styles.main}>
                <Header/>
                <section className={styles.area}>
                    <section className={styles.conteudo}>
                        <div className={styles.imagem}></div>
                        <article className={styles.descricao}>
                            <div className={styles.resumo}>
                                <h2>
                                    Cosmopolitan
                                </h2>
                                <p>
                                    Nível de Dificuldade: Médio
                                </p>
                                <p>
                                    Servido numa taça pequena.
                                </p>
                                <p>
                                    Ingredientes:
                                </p>
                                <ul>
                                    <li>Vodka - 50ml.</li>
                                    <li>Licor de Laranja - 25ml.</li>
                                    <li>Suco de Limão - 30ml.</li>
                                    <li>Xarope de Cramberry - 40ml.</li>
                                    <li>Twist de Casca de Laranja.</li>
                                </ul>
                            </div>
                            <article className={styles.modo}>
                                <h3>Modo de Preparo</h3>
                                <ul className={styles.lista}>
                                    <li>
                                        Pegue uma coqueteleira e adicione todos os ingredientes
                                        e coloque bastante gelo até completar a coqueteleira.
                                    </li>
                                    <li>
                                        Em seguida, agite vigorosamente a coqueteleira para misturar bem.
                                    </li>
                                    <li>
                                        Depois, faça uma dupla coagem na taça e decore a taça com o twist de casca de laranja.
                                    </li>
                                </ul>
                            </article>
                        </article>
                    </section>
                    </section>
                <Footer/>
            </main>
        </>
    )
}