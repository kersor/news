import React from 'react'
import styles from './styles.module.css'
import Container from '../container/Container'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <Container>
            <div className={styles.container}>
                <div className={styles.networks}>
                    <div>Log In</div>
                    <div>About Us</div>
                    <div>Publishers</div>
                    <div>Sitemap</div>
                </div>
                <div className={styles.powered}>
                    <div>Powered by</div>
                    <img src="/photo/Screenshot.png" alt="Screenshot" />
                </div>
                <div className={styles.copyright}>© 2023 Besider. Inspired by Insider</div>
            </div>
        </Container>
    </div>
  )
}

export default Footer