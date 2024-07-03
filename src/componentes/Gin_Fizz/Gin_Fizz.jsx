import styles from './Gin_Fizz.module.css'

export default function Gin_Fizz() {
    return (
        <div className={styles.drink}>
            <div className={styles.foto}></div>
            <div className={styles.descricao}>
              <h3>
                Gin Fizz
              </h3>
              <ul>
                <li>Nível de Dificuldade: Fácil.</li>
                <li>Este drink é servido em um copo de conhaque ou taça.</li>
                <li>Ingredientes: Gin, Xarope de Açúcar, Suco de Limão e Refrigerante de Soda.</li>
              </ul>
            </div>
        </div>
    )
}