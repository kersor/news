import React from 'react'
import styles from './styles.module.css'
import Container from '../container/Container'

interface Props {
  setVisibleSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({
  setVisibleSidebar
}: Props) => {

    const funcOnClickVisibleSidebar = () => {
        document.body.style.overflow = "hidden"
        setVisibleSidebar(prev => true)
    }

    return (
      <div className={styles.wrapper}>
          <Container>
            <div className={styles.container}>
              <div onClick={funcOnClickVisibleSidebar} className={styles.burger}>
                  <img src="/icon/hamburger_bar.svg" alt="" />
              </div>
              <div className={styles.logo}>besider</div>
            </div>
          </Container>
      </div>
    )
}

export default Header