
import styles from "../styles/card.module.css";
import Card from "./card";

const Cards = () => {
    var url1 = "/yoga.jpeg"
    return (<>
        <div className={styles.main}>
            <h2>Some Of Our Top Products</h2>
            <div className={styles.cara}>
                <Card url={url1} desc=" HELLO there" />
                <Card url={url1} desc=" HELLO there" />
                <Card url={url1} desc=" HELLO there" />
            </div>
        </div>
    </>)
}
export default Cards