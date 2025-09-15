import React, { type PropsWithChildren } from 'react'
import styles from './styles.module.css'

interface Props {
  sx?: any
}

const Container = ({
    children,
    sx
}: PropsWithChildren<Props>) => {
  return (
    <div style={sx} className={styles.container}>{children}</div>
  )
}

export default Container