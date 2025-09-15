import React from 'react'
import styles from './styles.module.css'
import Container from '../container/Container'
import { links } from '../../constants/menu'

interface Props {
    visibleSidebar: boolean,
    setVisibleSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileSidebar = ({
    visibleSidebar,
    setVisibleSidebar
}: Props) => {

    const funcOnClickVisibleSidebar = () => {
        document.body.style.overflow = ""
        setVisibleSidebar(prev => false)
    }

    return (
        <div className={`${styles.wrapper} ${visibleSidebar && styles.wrapper_active}`}>
            <Container sx={{height: "100%"}}>
                <div onClick={funcOnClickVisibleSidebar} className={styles.close}><img src="/icon/x.svg" alt="" /></div>
                <div className={styles.body}>
                    <div className={styles.list_link}>
                        {
                            links.map((link: string, index: number) => (
                                <div key={index} className={styles.item_link}>{link}</div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MobileSidebar