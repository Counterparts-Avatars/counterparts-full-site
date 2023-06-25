import features from '@/content/features';
import SingleFeature from './SingleFeature';
import styles from './Features.module.scss';

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      {features.map((feature, i) => (
        <SingleFeature
          key={i}
          index={i}
          head={feature.head}
          text={feature.text}
          character={feature.image}
        />
      ))}
    </section>
  );
};

export default Features;
