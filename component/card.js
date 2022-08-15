import Image from "next/image"
import styles from "../styles/card.module.css"

const Card = (props) => {
  return (
    <>
    <div className={styles.crd}>
    <Image
    src={props.url}
    alt="Yimag"
    height={400}
    width={300}
    />
    <p>{props.desc}</p>
    </div>
    </>
  )
}

export default Card