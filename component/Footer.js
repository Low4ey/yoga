import React from 'react'
import Foot from './foot'
import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <>
        <div className={styles.main}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
            <div className={styles.links}>
                <Foot title="Products" />
                <Foot title="Useful Links" />
            </div>
            <div className={styles.info}>
                <p>121 , Harikesh Nagar ,Madhya Pradesh-444137 , India</p>
                <p>&copy; Yoga Enterprises.</p>
            </div>
        </div>
        </>
    )
}

export default Footer