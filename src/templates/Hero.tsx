import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">北海</Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'您的最佳冷冻食品供应商\n'}
            <span className="text-primary-500">北海公司</span>
          </>
        }
        description="Chill your success with our frozen delights!"
        button={
          <Link href="/">
            <Button xl>NorthLink Trading Limited</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
