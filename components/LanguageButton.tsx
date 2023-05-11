import style from './LanguageButton.module.css'
import Image from 'next/image'

interface Props {
    onClick?: () => void;
    src: string;
    alt: string;
    style? : React.CSSProperties;
}

const LanguageButton: React.FC<Props> = ({ onClick, src, alt }) => {
    return (
        <button className={style.btn} onClick={onClick}>
            <div className={style.content}>
                <Image src={src} alt={alt} width={120} height={120}/>
            </div>
        </button>
    )
}

export default LanguageButton;