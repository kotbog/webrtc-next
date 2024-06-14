'use client'
import styles from './styles.module.scss'

interface ButtonIconProps {
    icon?: React.ReactNode;
    label: string;
}

export default function ButtonIcon({icon, label}: ButtonIconProps) {
    return <div>
        {icon}
        <p className={styles.label}>{label}</p>
    </div>
}