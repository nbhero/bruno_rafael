import { Link } from 'react-router-dom'
import styles from '../components_style/Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.menu}>
      <header className={styles.header}>DEV OPS</header>
        <ul>
            <li className={styles.menu_list}>
                <a href='#' className={styles.menu_list_items}>Home</a>
                <a href='#'className={styles.menu_list_items}>Contato</a>
                <a href='#'className={styles.menu_list_items}>Sobre</a>
            </li>
        </ul>
                
    </nav>
  )
}

export default Navbar