import React, { useCallback, useMemo, useState } from 'react'
import styles from './styles.module.css'
import type { NYTArticle } from '../../scripts/types/news.type'
import Container from '../container/Container'
import ItemNews from '../itemNews/ItemNews'
import { Virtuoso } from 'react-virtuoso'

const LOAD_COUNT = 5

interface Props {
    data: NYTArticle[]
}

const ListNews = ({
    data
}: Props) => {
    const [visibleCount, setVisibleCount] = useState(LOAD_COUNT)
    const [loading, setLoading] = useState(false)
    let date = ""


    const sorted = useMemo(() => {
        return [...data].sort((a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime())
    }, [data])
    
    const groupedIndices: Record<number, string> = {};

    sorted.forEach((news, index) => {
        const groupDate = new Date(news.pub_date).toLocaleDateString("ru-RU")
        if (groupDate !== date) {
            groupedIndices[index] = groupDate
            date = groupDate
        }
    })


    const visibleData = sorted.slice(0, visibleCount)

    const loadMore = () => {
        if (visibleCount >= sorted.length) return
        setLoading(true)
        setTimeout(() => { 
            setVisibleCount((prev) => Math.min(prev + LOAD_COUNT, sorted.length))
            setLoading(false)
        }, 1500)
    }


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.container}>
                    <Virtuoso 
                        style={{ height: "80vh" }}
                        totalCount={visibleData.length}
                        itemContent={(index) => {
                            const news = visibleData[index];
                            const groupHeader = groupedIndices[index];

                            return (
                                <div key={news._id}>
                                    {groupHeader && <h2>News for {groupHeader}</h2>}
                                    <ItemNews news={news} />
                                </div>
                            )
                        }}
                        endReached={loadMore}
                        components={{
                            Footer: () => loading ? (
                                <div className={styles.loading}>
                                    <div className={styles.loading_component}>
                                        <img src="/icon/loading_.svg" alt="" />
                                    </div>
                                </div>
                            ) : null
                        }}
                    />
                </div>
            </Container>
        </div>
    )
}

export default ListNews