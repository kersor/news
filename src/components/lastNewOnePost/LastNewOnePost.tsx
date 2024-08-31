import React, {FC} from 'react'
import { IPost } from '../../types'
import styles from './LastNewOnePost.module.scss'
import TimeAgo from '../timeAndLogo/TimeAndLogo'
import TimeAndLogo from '../timeAndLogo/TimeAndLogo'


interface ILastNewOnePost {
    lstNewOnePost: IPost
}


const LastNewOnePost: FC<ILastNewOnePost> = ({lstNewOnePost}) => {
    return (
        <div className='flex gap-[50px] max-[1000px]:gap-[20px] max-[650px]:flex-col'>
            <div className='min-w-[600px] h-[270px] rounded-[10px] max-[1200px]:min-w-[400px] max-[1200px]:h-[200px] max-[900px]:min-w-[300px] max-[900px]:h-[150px] max-[800px]:h-full'>
                <img className='w-full h-full object-cover rounded-[10px]' src={lstNewOnePost.urlToImage || ''} alt="" />
            </div>
            <div>
                <TimeAndLogo lstNewOnePost={lstNewOnePost} more={false} />
                <div className='mt-[20px] font-Oswald text-[30px] uppercase font-medium max-[1200px]:text-[20px] max-[1000px]:mt-[10px] max-[900px]:text-[16px]'>{lstNewOnePost.title}</div>
                <div className='text-[14px] mt-[10px] max-[900px]:text-[13px] max-[900px]:mt-[5px]'>{lstNewOnePost.description}...</div>
                <a className={styles.link_full_state} href={lstNewOnePost.url || ''}>Читать далее...</a>
            </div>
        </div>
    )
}

export default LastNewOnePost