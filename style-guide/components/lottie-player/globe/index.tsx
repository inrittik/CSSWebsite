import React from "react";
import Lottie from "react-lottie";
import animationData from "./globe.json";

export default function NetworkLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} speed={0.4} />
    </div>
  );
}
