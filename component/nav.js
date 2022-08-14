import styles from "../styles/nav.module.css"

const Nav = () => {
    return (<>
        <ul className={styles.ul}>
            <li><a className={styles.list} href="#home">Home</a></li>
            <li><a className={styles.list} href="#services">Shop</a></li>
            <li><a className={styles.list} href="#about">About</a></li>
            <li><a className={styles.list} href="#contact">Contact</a></li>
        </ul>
    </>
    )
}

export default Nav