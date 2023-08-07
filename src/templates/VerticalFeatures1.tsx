import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures1 = () => (
  <Section title="list" description="list">
    <VerticalFeatureRow
      title="list1"
      description="picture"
      image="/assets/images/list.jpg"
      imageAlt="list"
    />
  </Section>
);

export { VerticalFeatures1 };
