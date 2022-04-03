import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast and Effective',
    Svg: require('@site/static/img/robocaptcha_fast.svg').default,
    description: (
      <>
        Our solution, roboCAPTCHA strives to be an effective means for filtering
        out robocalls and employs a highly configurable call screening solution. 
      </>
    ),
  },
  {
    title: 'Focus on Important Calls',
    Svg: require('@site/static/img/robocaptcha_fast.svg').default,
    description: (
      <>
        Call filtering by roboCAPTCHA will only subject unknown callers who have never
        called before to a screening test.
      </>
    ),
  },
  {
    title: 'Track your Communications',
    Svg: require('@site/static/img/robocaptcha_fast.svg').default,
    description: (
      <>
        Users will be able to view their call history and track their robocall trends
        at one glance.
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
