import ButtonIcon from "@/src/components/ButtonIcon";
import styles from './styles.module.scss'

interface MediaButtonsProps {
    muted: boolean,
    video: boolean
}

export default function MediaButtons({muted, video}: MediaButtonsProps) {
    return <div className={styles.main}>
        <ButtonIcon
          label={muted ? 'Unmute' : 'Mute'}
          icon={
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"/>
          }
        />
        <ButtonIcon
          label={video ? 'Stop video' : 'Start video'}
          icon={
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/>
          }
        />
    </div>
}

//icon={

//         }