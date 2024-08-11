import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Amos Augusto Silangit</h1>
                <p className={styles.description}>I'm a full-stack developer with 2 years of experience using React, NodeJS, and Typescript. Reach out if you'd like to learn more!</p>
                <a href="https://drive.google.com/file/d/1h2RAs2h-_3XeWS41T9rAtUpWsYtOdNga/view?usp=drive_link" className={styles.contactBtn}>Check Resume</a>
            </div>
            <img src={getImageUrl("hero/myself.png")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
