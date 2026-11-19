import Image from "next/image";

const logos = [
  { name: "Databricks", src: "/databrick.svg", height: 22, width: 130 },
  { name: "Canva", src: "/canva.svg", height: 28, width: 88 },
  { name: "Reddit", src: "/reddit-dark.svg", height: 26, width: 90 },
  { name: "Cisco", src: "/cisco.svg", height: 28, width: 65 },
  { name: "Rippling", src: "/rippling.svg", height: 20, width: 140 },
  { name: "Roblox", src: "/roblox-dark.svg", height: 22, width: 120 },
  { name: "Dropbox", src: "/dropbox.svg", height: 22, width: 110 },
];

export default function LogoBar() {
  // Duplicate logos so the loop is seamless
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="brand-logo-section">
      <div className="brand-logo-container">
        <p className="brand-logo-heading">
          85% of Fortune 500 companies use Atlassian products
        </p>

        <div className="brand-marquee-wrapper">
          <div className="brand-marquee-track">
            {duplicatedLogos.map((logo, idx) => (
              <div
                className="brand-logo-item"
                key={`${logo.name}-${idx}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    height: `${logo.height}px`,
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
