import styles from './mojito.module.css';
import Link from 'next/link';
import Pagina from '@/pages/pages-drinks/mojito';

export default function Mojito() {
    return (
        <div className={styles.drink}>
            <div className={styles.foto}></div>
            <div className={styles.descricao}>
              <Link href="pages-drinks/mojito" className={styles.pag}>
                <h3>
                  Mojito
                </h3>
              </Link>
              <ul>
                <li>Nível de Dificuldade: Fácil</li>
                <li>Este drink é servido em um Long Drink ou Copo Longo.</li>
                <li>Ingredientes: Rum Prata, Xarope de Açúcar, Hortelâ, Suco de Limão, Àgua com Gás.</li>
              </ul>
            </div>
        </div>
    )
}