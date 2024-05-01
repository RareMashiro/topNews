import { NewsListContainer } from "../../components/newsList/container"
import styles from './styles.module.scss';

export const NewsPage = () => {
    return (
        <>
            <NewsListContainer />
            <div className={styles.refreshPlace}>
                <div id="refresh-button" className={styles.refreshButton}></div>
            </div>
        </>
    )
}