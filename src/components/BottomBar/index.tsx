import styles from './styles.module.scss'
import MediaButtons from "@/src/components/MediaButtons";


export default function BottomBar() {


    return <div className={styles.main}>
        <MediaButtons muted={false} video={false}/>
        <button className={styles.leave}>Leave</button>
    </div>
}