import MediaButtons from "@/src/components/MediaButtons";
import styles from './styles.module.scss'


export default function Index() {


    return <div className="grid grid-cols-[2fr_8fr_1fr] justify-center">
        <MediaButtons muted={false} video={false}/>
        <div>123</div>
        <div>123</div>
    </div>
}