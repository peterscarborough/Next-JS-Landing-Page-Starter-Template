import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="请和我们联系. Please contact us for more info."
      subtitle="Tel: 416-917 4999 416-550 9682 {"\n"}Fax: 416-800 6133"
      button={
        <Link href="/">
          <Button>Contact us</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
