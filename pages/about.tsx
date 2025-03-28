import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Christoffert MOUSSOUNDA</h1>
        <div className={styles.subtitle}>
          Technical Lead & Full Stack Developer
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I'm a Technical Lead from Pointe-Noire, Congo , with a
              passion for crafting elegant solutions to complex problems. My
              journey in software engineering has led me from building robust
              applications to leading cross-functional teams at Ginov.
            </p>
            <p className={styles.paragraph}>
              With a foundation in with an academic background in computer
              science and continuous learning through technical certifications,
              I've grown into a full-stack role where I architect solutions
              using modern technologies. My current focus is on microservices
              architecture and event-driven systems, while mentoring others and
              fostering a culture of continuous learning.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Ginov</span> as
              Technical Lead, where I guide architecture and oversee full-stack
              development. I lead a cross-functional team, implementing
              microservices architecture and integrating Kafka for improved
              system performance.
            </p>
            <p className={styles.paragraph}>
              Previously as a Full Stack Developer at Ginov, I worked on
              modernizing legacy systems and developing new applications like
              Copileo, Daxium Connect, and Qwisti, focusing on clean, scalable
              code and best practices.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
            <p className={styles.paragraph}>
              My technical toolkit includes{' '}
              <span className={styles.highlight}>TypeScript</span>,{' '}
              <span className={styles.highlight}>React</span>,{' '}
              <span className={styles.highlight}>Vue.js</span>,{' '}
              <span className={styles.highlight}>Node.js</span>,{' '}
              <span className={styles.highlight}>Express</span>,{' '}
              <span className={styles.highlight}>Next.js</span>,{' '}
              <span className={styles.highlight}>NestJS</span>,{' '}
              <span className={styles.highlight}>Tailwind CSS</span>, and{' '}
              <span className={styles.highlight}>SASS</span>. I'm experienced
              with both <span className={styles.highlight}>SQL</span> and{' '}
              <span className={styles.highlight}>NoSQL</span> databases, and
              comfortable with Docker containerization. On the back-end, I have
              expertise in building RESTful APIs, authentication systems, and
              scalable architectures.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              When I'm not coding, you'll find me exploring new technologies,
              watching anime, or playing basketball. I'm also passionate about
              mentoring junior developers and contributing to team growth.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
