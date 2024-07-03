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
                <li>Nível de Dificuldade: Fácil</li>
                <li>Este drink é servido numa taça grande.</li>
                <li>Ingredientes: Gin, Morango, Suco de Limão, Xarope de Açúcar e Agua Tonica.</li>
              </ul>
            </div>
        </div>
    )
}