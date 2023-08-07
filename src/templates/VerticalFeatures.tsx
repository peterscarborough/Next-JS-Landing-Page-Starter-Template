import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="冻货"
    description="  "
  >
    <VerticalFeatureRow
      title="冻虾"
      description="虾仁，有头虾，去头白虾，去头老虎虾"
      image="/assets/images/feature.svg"
      imageAlt="冻虾"
    />
    <VerticalFeatureRow
      title="鱿鱼"
      description="鱿鱼筒，鱿鱼须"
      image="/assets/images/feature2.svg"
      imageAlt="鱿鱼"
      reverse
    />
    <VerticalFeatureRow
      title="无骨牛肉"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/wuguniurou.jpg"
      imageAlt="无骨牛肉"
    />
  </Section>
);

export { VerticalFeatures };
