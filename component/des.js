import styles from "../styles/des.module.css"

const Des = () => {
    return (<>
        <div className={styles.para}>
            <span>Yoga Changing Lives.</span>
            <span>We Are Changing The Way You Do Yoga</span>
            <span className={styles.btn}>
                <button className={styles.btn1}> Shop Now
                </button>
                <button className={styles.btn1}> Contact Us
                </button>
            </span>
        </div>
    </>
    )
}

export default Des