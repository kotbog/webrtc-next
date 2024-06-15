'use client'
import styles from './styles.module.scss'

interface ButtonIconProps {
    icon?: React.ReactNode;
    label: string;
}

export default function ButtonIcon({icon, label}: ButtonIconProps) {
    return <div className={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className={styles.icon}>
            {icon}
        </svg>
        <p className={styles.label}>{label}</p>
    </div>
}