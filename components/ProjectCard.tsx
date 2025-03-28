import Image from 'next/image';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const content = (
    <div className={styles.content}>
      <div className={styles.logoWrapper}>
        <Image
          src={project.logo}
          alt={`${project.title} logo`}
          width={24}
          height={24}
          className={styles.logo}
        />
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
    </div>
  );

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {content}
    </a>
  ) : (
    <div className={styles.card}>{content}</div>
  );
};

export default ProjectCard;
