import ButtonIcon from "@/src/components/ButtonIcon/ButtonIcon";

interface MediaButtonsProps {
    muted: boolean,
    video: boolean
}

export default function MediaButtons({muted, video}: MediaButtonsProps) {
    return <div className={'grid grid-cols-2 grid-rows-1 gap-10'}>
        <ButtonIcon label={muted ? 'Unmute' : 'Mute'}/>
        <ButtonIcon label={video ? 'Stop video' : 'Start video'}/>
    </div>
}

//icon={
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
//                  stroke="currentColor" className="size-6">
//                 <path strokeLinecap="round" strokeLinejoin="round"
//                       d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"/>
//             </svg>
//         }