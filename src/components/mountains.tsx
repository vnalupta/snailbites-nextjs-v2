import { COLOR } from '@/globals/tokens';
import * as styles from "@/components/mountains.css";

const Mountains = () => (
    <section className={styles.wrapper}>
        <div className={styles.mountain}>
            <MountainSVG hex={COLOR.smoke} isBG={true} />
        </div>
        <div className={styles.mountain}>
            <MountainSVG hex={COLOR.ocean} />
        </div>
    </section>
)

type MountainSVGProps = {
    hex: string;
    isBG?: boolean;
}
const MountainSVG = ({ hex, isBG } : MountainSVGProps) => (
    <svg viewBox="0 0 1440 316" xmlns="http://www.w3.org/2000/svg"
        className={isBG ? styles.bg : undefined}>
        <path
            d="M534.068 94.144l245.518 160.161L1150.933 0 1440 316H0z"
            fill={hex}
            fillRule="evenodd"
        />
    </svg>
)

export default Mountains
