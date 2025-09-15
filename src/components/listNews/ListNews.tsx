import { useMemo, useState } from 'react'
import styles from './styles.module.css'
import type { NYTArticle } from '../../scripts/types/news.type'
import Container from '../container/Container'
import ItemNews from '../itemNews/ItemNews'
import { Virtuoso } from 'react-virtuoso'

const LOAD_COUNT = 10

interface Props {
    data: NYTArticle[]
    setParams: React.Dispatch<React.SetStateAction<{
        year: number;
        month: number;
    }>>
    params: {
        year: number;
        month: number;
    }
}

const ListNews = ({
    data,
    setParams,
    params
}: Props) => {
    const [visibleCount, setVisibleCount] = useState(LOAD_COUNT)
    const [loading, setLoading] = useState(false)


    const sorted = useMemo(() => {
        return [...data].sort((a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime())
    }, [data])
    
    const groupedIndices = useMemo(() => {
        let date = ''
        const result: Record<number, string> = {}
        sorted.forEach((news, index) => {
            const groupDate = new Date(news.pub_date).toLocaleDateString("ru-RU")
            if (groupDate !== date) {
                result[index] = groupDate
                date = groupDate
            }
        })
        return result
    }, [sorted])



    const visibleData = useMemo(() => sorted.slice(0, visibleCount), [sorted, visibleCount])

    const loadMore = () => {
        if (visibleCount < sorted.length) {
            setLoading(true)
            setTimeout(() => {
                setVisibleCount(v => Math.min(v + LOAD_COUNT, sorted.length))
                setLoading(false)
            }, 500)
        } else {
            setLoading(true)
            if (params.month === 1) {
                setParams(prev => ({ year: prev.year - 1, month: 12 }))
            } else {
                setParams(prev => ({ ...prev, month: prev.month - 1 }))
            }
        }
    }



    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.container}>
                    <Virtuoso 
                        style={{ height: "80vh" }}
                        itemContent={(index, news) => {
                            const groupHeader = groupedIndices[index];

                            return (
                                <div key={news._id}>
                                    {groupHeader && <h2 className={styles.title_date}>News for {groupHeader}</h2>}
                                    <ItemNews news={news} />
                                </div>
                            )
                        }}
                        data={visibleData}
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