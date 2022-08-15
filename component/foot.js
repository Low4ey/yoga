import styles from "../styles/footer.module.css"
const Foot = (props) => {
    return (<>
        <div className={styles.col}>
            <h3>{props.title}</h3>
            <ul className={styles.ul}>
                <li><a className={styles.list} href="#home">Home</a></li>
                <li><a className={styles.list} href="#services">Shop</a></li>
                <li><a className={styles.list} href="#about">About</a></li>
                <li><a className={styles.list} href="#contact">Contact</a></li>
            </ul>
        </div>
    </>
    )
}

export default Foot