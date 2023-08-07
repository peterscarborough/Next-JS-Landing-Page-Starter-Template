import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="冻货" description="Frozen Items">
    <VerticalFeatureRow
      title="冻虾"
      description="虾仁，有头虾，去头白虾，去头老虎虾"
      image="https://thekitchencommunity.org/wp-content/uploads/2020/12/Freezer-Burnt-Shrimp.jpg"
      imageAlt="冻虾"
    />
    <VerticalFeatureRow
      title="鱿鱼"
      description="鱿鱼筒，鱿鱼须"
      image="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/6/12/0/squid.jpg.rend.hgtvcom.616.462.suffix/1383078078727.jpeg"
      imageAlt="鱿鱼"
      reverse
    />
    <VerticalFeatureRow
      title="无骨牛肉"
      description="Frozen Boneless Beef"
      image="https://p.globalsources.com/IMAGES/PDT/B1181855913/frozen-beef-trimming-beef-trimming.jpg"
      imageAlt="无骨牛肉"
    />
  </Section>
);

export { VerticalFeatures };
