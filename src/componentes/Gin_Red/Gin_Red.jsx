import styles from './Gin_Red.module.css'

export default function Gin_Red() {
    return (
        <div className={styles.drink}>
            <div className={styles.foto}></div>
            <div className={styles.descricao}>
              <h3>
                Gin Red
              </h3>
              <ul>
                <li>Esse drink muito conhecido, refrescante, simples e frutado.</li>
                <li>Este drink é servido numa taça grande.</li>
                <li>E sua decoração é feita com Limão Seciliano, Morango Fresco e Alecrim.</li>
              </ul>
            </div>
        </div>
    )
}