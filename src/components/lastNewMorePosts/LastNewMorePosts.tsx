import React, { FC } from 'react'
import { IPost } from '../../types'
import TimeAndLogo from '../timeAndLogo/TimeAndLogo'
import styles from './LastNewMorePosts.module.scss'

interface ILastNewMorePost {
    lstNewMorePost: IPost[]
}


const LastNewMorePosts: FC<ILastNewMorePost> = ({lstNewMorePost}) => {
    console.log(lstNewMorePost)
  return (
    <div className={`grid grid-cols-4 gap-[8px] mt-[10px] max-[700px]:grid-cols-2 max-[700px]:gap-y-[20px]`}>
        {
            lstNewMorePost.map(item => (
                <a className={styles.block} href={item.url || ''}>
                    <img className='max-w-[300px] w-full h-[300px] object-cover rounded-[10px] max-[1000px]:h-[250px] max-[800px]:h-[180px]' src={item.urlToImage || ''} alt="" />
                    <TimeAndLogo lstNewOnePost={item} more={true} />
                    <div className='font-Oswald pr-[10px] h-[20px] whitespace-nowrap overflow-hidden text-ellipsis'>{item.title}</div>
                    <div className={`text-[12px] mt-[10px] ${styles.description}`}>{item.description}</div>
                </a>
            ))
        }
    </div>
  )
}

export default LastNewMorePosts