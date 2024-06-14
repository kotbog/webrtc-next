import Index from "@/src/components/BottomBar";
import styles from './styles.module.scss'

export default function Room() {
    return <div className={styles.main}>
        <div className={'bg-amber-200'}>123</div>
        <div className={'bg-blue-600'}>123</div>
        <Index />
    </div>
}