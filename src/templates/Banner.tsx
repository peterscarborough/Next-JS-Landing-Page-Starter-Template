import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="5988 Ambler Dr."
      title1="Mississauga, ON. L4W 2P2"
      subtitle="Cell: 416-917-4999, Tel: 416-550-9682, Fax: 416-800-6133"
      button={
        <Link href="/">
          <Button>Contact us</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
