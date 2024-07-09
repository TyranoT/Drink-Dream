import Header from "@/componentes/header/header";
import Head from "next/head";
import React from "react";
import Footer from "@/componentes/Footer/footer";
import styles from "@/styles/gin-red.module.css";

export default function GinRed_Pag() {
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
                                    Gin Red
                                </h2>
                                <p>
                                    Nível de Dificuldade: Fácil
                                </p>
                                <p>
                                    Servido numa taça grande.
                                </p>
                                <p>
                                    Ingredientes:
                                </p>
                                <ul>
                                    <li>Gin - 60ml.</li>
                                    <li>Xarope de Açúcar - 30ml.</li>
                                    <li>Suco de Limão - 30ml.</li>
                                    <li>Morango - 8 un.</li>
                                    <li>Água Tônica - Completar.</li>
                                </ul>
                            </div>
                            <article className={styles.modo}>
                                <h3>Modo de Preparo</h3>
                                <ul className={styles.lista}>
                                    <li>
                                        Acrescente o xarope, suco de limão e os morangos dentro da coqueteleira
                                        em seguida, macere bem.
                                    </li>
                                    <li>
                                        Após, macerar coloque bastante gelo e o gin, bata vigorosamente.
                                    </li>
                                    <li>
                                        Para finalizar, coloque bastante gelo na taça e faça dupla coagem dos
                                        ingredientes da coqueteleira para a taça, complete com água tonica e decore.
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