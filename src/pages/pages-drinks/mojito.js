import Header from "@/componentes/header/header";
import Head from "next/head";
import React from "react";
import Footer from "@/componentes/Footer/footer";
import styles from "@/styles/mojito.module.css";

export default function Mojito_Pag() {
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
                                    Mojito
                                </h2>
                                <p>
                                    Nível de Dificuldade: Fácil
                                </p>
                                <p>
                                    Servido em um copo longo.
                                </p>
                                <p>
                                    Ingredientes:
                                </p>
                                <ul>
                                    <li>Rum Prata - 60ml.</li>
                                    <li>Xarope de Açúcar - 30ml.</li>
                                    <li>Suco de Limão - 30ml.</li>
                                    <li>Hortelã - 21 folhas.</li>
                                    <li>Água com Gás - Completar.</li>
                                    <li>Ramo de Hortelã Pequeno.</li>
                                </ul>
                            </div>
                            <article className={styles.modo}>
                                <h3>Modo de Preparo</h3>
                                <ul className={styles.lista}>
                                    <li>
                                        Acrescente o xarope, suco de limão e a folhas da Hortelã
                                        em seguida macere de leve.
                                    </li>
                                    <li>
                                        Em seguida, encha o copo com bastante gelo e acrescente o rum.
                                    </li>
                                    <li>
                                        Em seguida, complete com água com gás e decore com um ramo de Hortelã.
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