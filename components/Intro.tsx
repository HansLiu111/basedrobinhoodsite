"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `"We made GameStop a honeypot for 24 hours."`;

export default function Intro() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px'
  };

  const firstImageStyle = {
    width: '40%',
    height: '40%'
  };

  const secondImageStyle = {
    width: '35%',
    height: '35%'
  };

  const thirdImageStyle = {
    width: '35%',
    height: '35%'
  };

  return (
    <div className="text-center text-lg text-balance sm:w-3/4">
      <TextGenerateEffect words={words} />
      
      <div style={containerStyle}>
        <img
          src="photo_2024-05-22_20-29-09.jpg"
          alt="meme"
          style={firstImageStyle}
        />
        <img
          src="Screenshot 2024-05-22 202429 (1).png"
          alt="meme"
          style={secondImageStyle}
        />
        <img
        src="photo_2024-05-25_09-33-30.jpg"
        alt="meme"
        style={thirdImageStyle}
      />
      </div>
    </div>
  );
}
