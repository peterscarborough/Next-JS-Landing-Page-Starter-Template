import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures1 = () => (
  <Section title="list" description="list">
    <VerticalFeatureRow
      title="list1"
      description="https://docs.google.com/spreadsheets/d/1cCG2CT8h4B10qXw7PMdM2VXs4kdV8rQqt-K3XkHApZs/edit?pli=1#gid=0"
      image="/assets/images/northlinklp.jpg"
      imageAlt="list"
    />
  </Section>
  <h1 className="title">Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
);

export { VerticalFeatures1 };
