import FadeRiseAnimation from './components/fade-rise/faderise'
import SocialsSidebar from './components/sidebar/sidebar'
import StarbackBackground from './components/starback/starback'
import Projects from './data/projects'
import Project from '@components/project/project'
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
        starColor: ['#f3a923', '#7f56d9'],
        quantity: 30,
      }} />

      <div className={styles.hero} style={{ height: 'calc(100vh - 100px)' }}>
        <div className={styles.hero_side}>
          <div className={styles.intro}>
            <h3>Hi, I&apos;m</h3>
            <h1>Landon Harter</h1>
            <p className={styles.intro_subtitle}>I&apos;m a 16 year old full stack web developer based out of Michigan.</p>
          </div>
        </div>
        <div className={styles.hero_side}>

        </div>
      </div>

      <div className={styles.about_hero} id='about'>
        <FadeRiseAnimation options={{ margin: '50px', once: true }} props={{
          className: `${styles.about_hero_side} ${styles.about_hero_side_left}`
        }}>
          <div style={{ marginRight: '15vw' }}>

          </div>
        </FadeRiseAnimation>
        <FadeRiseAnimation delay={0.5} options={{ margin: '50px', once: true }} props={{
          className: styles.about_hero_side
        }}>
          <h3 className={styles.about_title}>About Me</h3>
          <p className={styles.about}>
            I am a 16 year old full stack web developer based out of Michigan and have a strong passion for computers and coding. I have been coding for over 6 years and have worked with 8 programming languages over that time. I am apart of the High School graduating class of 2025 and plan to attend college to pursue computer science.
          </p>
        </FadeRiseAnimation>
      </div>

      <div className={styles.hero} id='projects'>
        <div className={styles.projects_content}>
          <FadeRiseAnimation options={{ margin: '50px', once: true }}>
            <h3>Projects</h3>
          </FadeRiseAnimation>
          <FadeRiseAnimation delay={0.2} options={{ margin: '50px', once: true }}>
            <p className={styles.projects_content_subtitle}>Here is what I&apos;ve been working on...</p>
          </FadeRiseAnimation>

          <div className={styles.projects}>
            {Projects.map((project, index) => <Project project={project} index={index} key={index} />)}
          </div>
        </div>
      </div>
    </main>
  )
}
