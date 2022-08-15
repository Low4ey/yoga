import styles from "../styles/des.module.css"

const Des = () => {
    return (<>
        <div className={styles.para}>
            <p>Yoga Changing Lives.</p>
            <p>We Are Changing The Way You Do Yoga</p>
            <div className={styles.btn}>
                <button className={styles.btn1}> Shop Now
                </button>
                <button className={styles.btn1}> Contact Us
                </button>
            </div>
        </div>
    </>
    )
}

export default Des