import SocialsSidebar from './components/sidebar/sidebar'
import StarbackBackground from './components/starback/starback'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <SocialsSidebar />
      <StarbackBackground className={styles.background} options={{
        type: 'line',
        frequency: 5,
        slope: { x: -1, y: 10 },
        directionX: 1,
        speed: 3,
        spread: -10,
        randomOpacity: true,
        backgroundColor: ['#0f0f0f', '#1f1f1f'],
        starColor: ['#ffffff'],
        quantity: 30,
      }} />

    </main>
  )
}
