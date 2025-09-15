import { memo } from 'react'
import styles from './styles.module.css'
import type { NYTArticle } from '../../scripts/types/news.type'

interface Props {
    news: NYTArticle
}

const ItemNews = ({
    news
}: Props) => {
    const imageUrl = news.multimedia?.[0]?.url
        ? `https://www.nytimes.com/${news.multimedia[0].url}`
        : `/photo/no-photo--lg.png` // undefined тоже можно, главное - не ломать img

    const date = new Date(news.pub_date);

    const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    const formatted = new Intl.DateTimeFormat("en-US", options).format(date);

    return (
        <a href={news.web_url} target="_blank" className={styles.wrapper}>
            <div className={styles.photo}>
                {imageUrl ? (
                    <img src={imageUrl} alt={news.headline.main} />
                ) : (
                    <div className={styles.placeholder}>No image</div>
                )}
            </div>  
            <div className={styles.info}>
                <div className={styles.info_author}>{news.source}</div>
                <div className={styles.info_desc}>{news.abstract}</div>
                <div className={styles.info_date}>{formatted}</div>
            </div>
        </a>
    )
}

export default memo(ItemNews)