import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures1 = () => (
  <Section title="list" description="list">
    <VerticalFeatureRow
      title="list1"
      description="picture"
      image="https://garlicdelight.com/wp-content/uploads/20210319-reverse-shopping-list-768x768.png"
      imageAlt="list"
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

export { VerticalFeatures1 };
