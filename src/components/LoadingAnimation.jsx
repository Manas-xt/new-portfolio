import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <DotLottieReact
        src="https://lottie.host/f75a9ecb-b253-451b-a45f-d5b0e431f5e2/zNBM3F4Bjk.lottie"
        loop
        autoplay
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default LoadingAnimation; 