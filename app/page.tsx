import Image from 'next/image';

import radial from '@/public/radial.svg';
import Hero from '@/components/home/Hero/Hero';
import HoloText from '@/components/reusable/HoloText/HoloText';
import Features from '@/components/home/Features/Features';
import AvatarModel from '@/components/home/AvatarModel/AvatarModel';
import CallToAction from '@/components/home/CallToAction/CallToAction';

export default function Home() {
  return (
    <main>
      <Image
        src={radial}
        alt=""
        width={2000}
        height={45}
        style={{ position: 'absolute' }}
      />
      <Hero />
      <HoloText text="Make your counterpart as awesome as you are" />
      <Features />
      <HoloText
        text="Build something worth "
        emphasizedText="more than a follower count"
      />
      <AvatarModel />
      <CallToAction />
    </main>
  );
}
