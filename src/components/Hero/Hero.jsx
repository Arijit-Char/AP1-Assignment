import * as React from "react";

export default function Hero() {
  return (
    <>
      <main>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab0e9906acf2be59e063c6d2d258f43be40d98fc74e641d969fcc291a565cf37?apiKey=ba1aeac1755d4beeb947d179fb494a3a&"
          alt="Descriptive alt text for the image"
          className="hero-image"
        />
      </main>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image {
          width: 100%;
          max-width: 1220px;
          aspect-ratio: 4.35;
          object-fit: cover;
          object-position: center;
          border-radius: 12px;
          margin-top: 61px;
        }

        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}
