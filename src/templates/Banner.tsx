import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="请和我们联系. Please contact us for more info."
      subtitle="contact us."
      button={
        <Link href="https://northlink.netlify.app/">
          <Button>Contact</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
