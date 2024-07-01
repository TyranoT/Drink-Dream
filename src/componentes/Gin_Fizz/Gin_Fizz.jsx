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
                <li>Mais um drink muito simples, refrescante e citrico.</li>
                <li>Este drink é servido em um copo de conhaque ou taça.</li>
                <li>E sua decoração é feita com Twist de Limão Seciliano e Hortelâ/Alecrim.</li>
              </ul>
            </div>
        </div>
    )
}