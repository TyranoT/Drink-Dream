import styles from './Sex-on-the-beach.module.css';
import Link from 'next/link';

export default function Sex_On_The_Beach() {
    return (
        <div className={styles.drink}>
            <div className={styles.foto}></div>
            <div className={styles.descricao}>
              <Link href="pages-drinks/sex-on-the-beach" className={styles.pag}>
                <h3>
                  Sex On The Beach
                </h3>
              </Link>
              <ul>
                <li>Nível de Dificuldade: Alto</li>
                <li>Este drink é servido em Copo Long Drink ou Taça Ondulada.</li>
                <li>Ingrdientes: Vodka, Suco de Laranja, Xarope de Grenadine e Licor de Pessego.</li>
              </ul>
            </div>
        </div>
    )
}