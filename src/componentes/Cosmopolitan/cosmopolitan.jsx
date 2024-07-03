import styles from './cosmopolitan.module.css'

export default function Cosmopolitan() {
    return (
        <div className={styles.drink}>
            <div className={styles.foto}></div>
            <div className={styles.descricao}>
              <h3>
                Cosmopolitan
              </h3>
              <ul>
                <li>Nível de Dificuldade: Medio</li>
                <li>Este drink é servido em um taça.</li>
                <li>Ingredientes: Vodka, Licor de Laranja, Xarope Cramberry e Suco de Limão.</li>
              </ul>
            </div>
        </div>
    )
}