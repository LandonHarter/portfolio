import { Hackathon } from "@/app/data/hackathons";
import FadeRiseAnimation from "../fade-rise/faderise";
import styles from './hackathon.module.scss';
import Link from "next/link";
import Image from "next/image";

export default function Hackathon(props: { hackathon: Hackathon, index: number }) {
    return (
        <Link href={props.hackathon.link} target='_blank' style={{ textDecoration: 'none' }}>
            <FadeRiseAnimation delay={(props.index / 10) + 0.1} options={{ once: true }} props={{
                className: styles.hackathon_container
            }}>
                <Image src={props.hackathon.image} alt='hackathon' width={100} height={100} style={{
                    borderRadius: '20px',
                    marginBottom: '12px'
                }} />
                <h1 style={{
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    textAlign: 'center',
                }}>{props.hackathon.name}</h1>
            </FadeRiseAnimation>
        </Link>
    );
}