import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'سيرفر سولايف في الفايف ام',
    Svg: require('@site/static/img/gamepad-svgrepo-com.svg').default,
    description: (
      <>
        سيرفر سولايف في الفايف ام للحياة الواقعية سكربتات وأشياء حصرية وجديدة.
      </>
    ),
  },
  {
    title: 'سيرفر سولايف فايتات',
    Svg: require('@site/static/img/gamepad-svgrepo-com.svg').default,
    description: (
      <>
        سيرفر سولايف في الفايف ام بنظام الفايتات بفكرة جديدة وأشياء حصرية.
      </>
    ),
  },
  {
    title: 'مجتمع سولاي',
    Svg: require('@site/static/img/gamepad-svgrepo-com.svg').default,
    description: (
      <>
        مجتمع سولاي, مختص للألعاب الإلكترونية والدعم الفني للألعاب وسيرفر الفايف ام.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
