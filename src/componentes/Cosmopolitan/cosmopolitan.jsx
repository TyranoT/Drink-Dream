import styles from './cosmopolitan.module.css';
import Link from 'next/link';

export default function Cosmopolitan() {
    return (
          <div className={styles.drink}>
                <div className={styles.foto}></div>
                <div className={styles.descricao}>
                  <Link href="pages-drinks/cosmopolitan" className={styles.pag}>
                    <h3>
                      Cosmopolitan
                    </h3>
                  </Link>
                  <ul>
                    <li>Nível de Dificuldade: Medio</li>
                    <li>Este drink é servido em um taça.</li>
                    <li>Ingredientes: Vodka, Licor de Laranja, Xarope Cramberry e Suco de Limão.</li>
                  </ul>
                </div>
          </div>
    )
}