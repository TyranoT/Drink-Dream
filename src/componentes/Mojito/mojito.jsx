import styles from './mojito.module.css'

export default function Mojito() {
    return (
        <div className={styles.drink}>
            <div className={styles.foto}></div>
            <div className={styles.descricao}>
              <h3>
                Mojito
              </h3>
              <ul>
                <li>Nível de Dificuldade: Fácil</li>
                <li>Este drink é servido em um Long Drink ou Copo Longo.</li>
                <li>Ingredientes: Rum Prata, Xarope de Açúcar, Hortelâ, Suco de Limão, Àgua com Gás.</li>
              </ul>
            </div>
        </div>
    )
}