'use client';

import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';
import Image from 'next/image';

import portalIso from '@/public/portal-iso.webp';

interface SplinePortalProps {
  position: {
    top: string;
    bottom: string;
    left: string;
    right: string;
    translateX: string;
    translateY: string;
  };
  scale: number | string;
  width: number;
}

const splineUrl =
  'https://prod.spline.design/LFoSb72iQYYsKVfN/scene.splinecode';

const SplinePortal = ({ position, scale, width }: SplinePortalProps) => {
  return (
    <Suspense
      fallback={
        <Image
          src={portalIso}
          alt=""
          width={400}
          height={200}
          style={{
            position: 'absolute',
            objectFit: 'contain',
            width: '100%',
            height: 'auto',
            zIndex: '-1',
            bottom: '-6%',
            filter: 'opacity(0.75)',
          }}
        />
      }>
      <Spline
        scene={splineUrl}
        style={{
          position: 'absolute',
          zIndex: -100,
          width: `${width}px`,
          height: 'auto',
          top: position.top,
          bottom: position.bottom,
          right: position.right,
          left: position.left,
          transform: `translate(${position.translateX}, ${position.translateY})`,
          scale: scale,
          margin: '0 auto',
        }}
      />
    </Suspense>
  );
};

export default SplinePortal;
