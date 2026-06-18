'use client';

import Lottie from 'lottie-react';
import outboundLoaderAnimation from '../../public/assets/outbound-button-loader.json';

export function OutboundLoader() {
  return (
    <span className="flex h-10 w-10 items-center justify-center" aria-hidden="true">
      <Lottie
        animationData={outboundLoaderAnimation}
        autoplay
        loop
        className="outbound-lottie-loader h-10 w-10"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </span>
  );
}
