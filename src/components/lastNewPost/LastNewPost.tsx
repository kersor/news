import React, {FC} from 'react'
import { IPost } from '../../types'
import { ArrowRight } from 'lucide-react'
import styles from './LastNewPost.module.scss'


interface ILastNewPost {
    lastNewPost: IPost
}


const LastNewPost: FC<ILastNewPost> = ({lastNewPost}) => {
    const url = lastNewPost.url?.slice(8).split('/')[0]
    let logo = ''
    if(url) logo = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${url}`
    console.log(lastNewPost)

    return (
        <div className='flex gap-[50px] max-[1000px]:gap-[20px] max-[650px]:flex-col'>
            <div className='min-w-[600px] h-[270px] rounded-[10px] max-[1200px]:min-w-[400px] max-[1200px]:h-[200px] max-[900px]:min-w-[300px] max-[900px]:h-[150px] max-[800px]:h-full'>
                <img className='w-full h-full object-cover rounded-[10px]' src={lastNewPost.urlToImage || ''} alt="" />
            </div>
            <div>
                <div className='flex items-center gap-[10px]'>
                    {
                        url && <img src={logo} alt="" />
                    }
                    <div className="text-[14px] text-[#474747] font-semibold max-[900px]:text-[12px]">{lastNewPost.source.name}</div>
                    <div className='w-[3px] h-[3px] rounded bg-[silver]'></div>
                    <div className='max-[900px]:text-[12px]'>12 минут назад</div>
                </div>
                <div className='mt-[20px] font-Oswald text-[30px] uppercase font-medium max-[1200px]:text-[20px] max-[1000px]:mt-[10px] max-[900px]:text-[16px]'>{lastNewPost.title}</div>
                <div className='text-[14px] mt-[10px] max-[900px]:text-[13px] max-[900px]:mt-[5px]'>{lastNewPost.description}...</div>
                <a className={styles.link_full_state} href={lastNewPost.url || ''}>Читать далее...</a>
            </div>
        </div>
    )
}

export default LastNewPost