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
    title: 'Single Key, Single API',
    Svg: require('@site/static/img/key.svg').default,
    description: (
      <>
        Access all AI models with one unified API key.
        Write your API once, use everywhere.
      </>
    ),
  },
  {
    title: 'Chat Interface',
    Svg: require('@site/static/img/chat.svg').default,
    description: (
      <>
        Easily communicate with our multi-model and multi-modal features
      </>
    ),
  },
  {
    title: 'Model Variety',
    Svg: require('@site/static/img/box.svg').default,
    description: (
      <>
        Access to leading AI models from different providers through a single interface.
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
