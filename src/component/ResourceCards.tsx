"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";

interface ResourceCardItem {
  id: string;
  type: "VIDEO" | "REPORT" | "EBOOK" | "EVENT" | "ANNOUNCEMENT" | "PODCAST";
  meta?: {
    date?: string;
    location?: string;
  };
  title: string;
  ctaText: string;
  ctaLink: string;
  bgColor: string;
  imgSrc: string;
}

const resources: ResourceCardItem[] = [
  {
    id: "1",
    type: "VIDEO",
    title: "Spring release: Agents in EPICpm",
    ctaText: "Watch now →",
    ctaLink: "#",
    bgColor: "#0c66e4",
    imgSrc: "/imgi_29_AT12NBG9.webp",
  },
  {
    id: "2",
    type: "VIDEO",
    title: "Rovo at work: How context and agents move work forward",
    ctaText: "Watch now →",
    ctaLink: "#",
    bgColor: "#3b5d20",
    imgSrc: "/imgi_30_AT12MY6N.png",
  },
  {
    id: "3",
    type: "REPORT",
    title: "How top teams avoid the AI fragmentation tax: State of Teams 2026 Report",
    ctaText: "Read report →",
    ctaLink: "#",
    bgColor: "#b84807",
    imgSrc: "/imgi_31_AT12MY6P.png",
  },
  {
    id: "4",
    type: "EBOOK",
    title: "Inside the agentic enterprise: How Atlassian customers are transforming work right now",
    ctaText: "Read now →",
    ctaLink: "#",
    bgColor: "#6554c0",
    imgSrc: "/imgi_32_AT12MY6O.png",
  },
  {
    id: "5",
    type: "EVENT",
    meta: {
      date: "May 6–7",
      location: "Anaheim, CA",
    },
    title: "Catch the latest from Team '26",
    ctaText: "Watch now →",
    ctaLink: "#",
    bgColor: "#0c66e4",
    imgSrc: "/imgi_33_AT12MY6S.png",
  },
  {
    id: "6",
    type: "ANNOUNCEMENT",
    title: "Inside Atlassian: AI thinking and product news",
    ctaText: "Read now →",
    ctaLink: "#",
    bgColor: "#3b5d20",
    imgSrc: "/imgi_34_AT12MY6R.png",
  },
  {
    id: "7",
    type: "PODCAST",
    title: "Mike Cannon-Brookes on 20VC: SaaS in the AI era",
    ctaText: "Watch now →",
    ctaLink: "#",
    bgColor: "#b84807",
    imgSrc: "/imgi_35_AT12MY6Q.png",
  },
];

export default function ResourceCards() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const currentRef = sliderRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: -cardWidth * 0.75, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: cardWidth * 0.75, behavior: "smooth" });
    }
  };

  return (
    <section className="resource-cards-section">
      <div className="resource-header-row">
        <div className="resource-header-text">
          <h2 className="resource-main-title">Discover the latest for EPICpm</h2>
          <p className="resource-subtitle">
            We’re shipping fast. Stay up-to-date on our latest innovations.
          </p>
        </div>

        <div className="slider-controls">
          <button
            type="button"
            className={`slider-btn slider-btn-prev ${!canScrollLeft ? "disabled" : ""}`}
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous cards"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            className={`slider-btn slider-btn-next ${!canScrollRight ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next cards"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="resource-cards-container" ref={sliderRef}>
        {resources.map((item) => (
          <a
            key={item.id}
            href={item.ctaLink}
            className="resource-card"
            style={{ backgroundColor: item.bgColor }}
          >
            {/* Top Preview Image */}
            <div className="resource-preview">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={300}
                height={220}
                className="resource-card-img"
              />
            </div>

            {/* Bottom Content Area */}
            <div className="resource-content">
              <div>
                <span className="resource-badge">{item.type}</span>

                {item.meta && (
                  <div className="resource-event-meta">
                    {item.meta.date && (
                      <span className="event-meta-item">
                        <Calendar size={13} />
                        {item.meta.date}
                      </span>
                    )}
                    {item.meta.location && (
                      <span className="event-meta-item">
                        <MapPin size={13} />
                        {item.meta.location}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="resource-title">{item.title}</h3>
              </div>
              <span className="resource-cta">{item.ctaText}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
