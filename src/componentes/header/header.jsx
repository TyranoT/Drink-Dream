import styles from './header.module.css';
import Logo from '../Logo/drink.png';
import Image from 'next/image';
import Link from 'next/link';
import Home from '@/pages';

export default function Header() {
    return(
        <header className={styles.topo}>
          <Image src={Logo} className={styles.logo}/>
          <nav className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="#">Catalogo</Link>
            <Link href="#">Contato</Link>
          </nav>
        </header>
    )
}