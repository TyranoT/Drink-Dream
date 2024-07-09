import Header from "@/componentes/header/header";
import Head from "next/head";
import React from "react";
import Footer from "@/componentes/Footer/footer";
import styles from "@/styles/sex-on.module.css";

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
                                    Sex On The Beach
                                </h2>
                                <p>
                                    Nível de Dificuldade: Díficil
                                </p>
                                <p>
                                    Servido numa taça longa ondulada.
                                </p>
                                <p>
                                    Ingredientes:
                                </p>
                                <ul>
                                    <li>Vodka - 60 ml.</li>
                                    <li>Licor de Pessego - 25 ml.</li>
                                    <li>Suco de Laranja - 150 ml.</li>
                                    <li>Xarope de Grenadine - 10 ml.</li>
                                    <li>Fatia Meia Lua de Laranja.</li>
                                </ul>
                            </div>
                            <article className={styles.modo}>
                                <h3>Modo de Preparo</h3>
                                <ul className={styles.lista}>
                                    <li>
                                        Acrescente gelo na taça, em seguida a voda, o licor e o suco de laranja.
                                    </li>
                                    <li>
                                        Após, mexa os ingredientes.
                                    </li>
                                    <li>
                                        Para finalizar, encoste a ponta da colher da bailarina na borda da taça
                                        fazendo divisa entre o liquido e a taça, nesta divisa acrescente devagar
                                        o xarope de grenadine e deixe ele escorrer até o fundo da taça, decore
                                        a meia lua de laranja na borda da taça e pronto.
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