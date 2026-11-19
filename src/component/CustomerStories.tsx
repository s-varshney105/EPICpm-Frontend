"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface StoryItem {
  id: string;
  cardType?: "quote" | "stat";
  company: "lendi" | "reddit" | "trivago" | "roblox" | "lumen" | "servicerocket";
  quote?: string;
  author?: string;
  role?: string;
  ctaText?: string;
  ctaLink?: string;
  cardColor: string;
  imageBgColor?: string;
  personImg?: string;
  statNumber?: string;
  statDescription?: string;
}

const stories: StoryItem[] = [
  {
    id: "lendi",
    cardType: "quote",
    company: "lendi",
    quote:
      "Agents in Jira raise the floor for what every team can do. You don't need to be an engineer or an AI expert. If you work in Jira, you get access to the same agentic patterns and automations. That's the real power—capability becomes a property of the system, not just the individual.”",
    author: "MATTHEW HARGREAVES",
    role: "Head of Product Delivery and Automation",
    ctaText: "Read Story →",
    ctaLink: "https://www.atlassian.com/customers/lendi-group",
    cardColor: "#0c66e4",
    imageBgColor: "#dce9fc",
    personImg: "/imgi_18_AT12MXU8.png",
  },
  {
    id: "reddit",
    cardType: "quote",
    company: "reddit",
    quote:
      "Our whole dev pipeline and planning process runs through [Jira]. It's driving a lot of the business.”",
    author: "MATT CHESTER",
    role: "Senior System Engineer",
    ctaText: "Read Story →",
    ctaLink: "#",
    cardColor: "#355e1a",
    imageBgColor: "#d5f29d",
    personImg: "/imgi_20_AT12MVJD.png",
  },
  {
    id: "trivago",
    cardType: "stat",
    company: "trivago",
    cardColor: "#ffea8a",
    statNumber: "200",
    statDescription: "hours saved by Legal each year with Rovo agents",
  },
  {
    id: "roblox",
    cardType: "quote",
    company: "roblox",
    quote:
      "[Jira] makes life easier. [We] can spend time on adding value, not busywork.”",
    author: "JOE COTANT",
    role: "Senior Technical Program Manager",
    ctaText: "Read Story →",
    ctaLink: "https://www.atlassian.com/customers/roblox",
    cardColor: "#7033a8",
    imageBgColor: "#eedcff",
    personImg: "/imgi_22_AT12MVJ3.png",
  },
  {
    id: "lumen",
    cardType: "quote",
    company: "lumen",
    quote:
      "Jira helps our teams stay connected. Plans gives us a single source of truth where we can plan and track different projects across different teams. This brings our non-IT teams into the fold and creates greater visibility and transparency of everyone's work.”",
    author: "ROB MULVANEY",
    role: "Sr. Manager - Agile Transformation Office",
    ctaText: "Read Story →",
    ctaLink: "https://www.atlassian.com/customers/lumen",
    cardColor: "#c04d00",
    imageBgColor: "#fef08a",
    personImg: "/imgi_24_AT12MVJH.png",
  },
  {
    id: "servicerocket",
    cardType: "quote",
    company: "servicerocket",
    quote:
      "Marketing teams manage their work as sprints in Jira. Sprints aren't just for technical teams - they're for marketing and business teams too.”",
    author: "SARAH BROWN",
    role: "Vice President of Marketing",
    ctaText: "Read Story →",
    ctaLink: "https://www.atlassian.com/customers/servicerocket",
    cardColor: "#0c66e4",
    imageBgColor: "#dce9fc",
    personImg: "/imgi_26_AT12MVJM.png",
  },
];

export default function CustomerStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const current = containerRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -480, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 480, behavior: "smooth" });
    }
  };

  return (
    <section className="customer-stories-section">
      {/* 1. Header Title & Subtitle */}
      <div className="stories-top-header">
        <h2 className="stories-main-title">Trusted by teams big and small</h2>
        <p className="stories-main-subtitle">
          Teams of all types turn teamwork into results with Jira.
        </p>
      </div>

      {/* 2. Stats Grey Banner Box */}
      <div className="stories-stats-banner">
        <div className="stat-banner-col">
          <h3 className="stat-banner-number">300,000+</h3>
          <p className="stat-banner-text">
            companies power team collaboration with Atlassian
          </p>
        </div>
        <div className="stat-banner-col">
          <h3 className="stat-banner-number">200+</h3>
          <p className="stat-banner-text">
            countries and territories have companies that use Atlassian
          </p>
        </div>
        <div className="stat-banner-col">
          <h3 className="stat-banner-number">85%</h3>
          <p className="stat-banner-text">
            of Fortune 500 companies use Atlassian products
          </p>
        </div>
      </div>

      {/* 3. Action Row: "Read all stories" Pill + Slider Arrows */}
      <div className="stories-actions-row">
        <a
          href="https://www.atlassian.com/customers"
          target="_blank"
          rel="noopener noreferrer"
          className="read-all-stories-btn"
        >
          Read all stories &rarr;
        </a>

        <div className="slider-controls">
          <button
            type="button"
            className={`slider-btn slider-btn-prev ${!canScrollLeft ? "disabled" : ""}`}
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous stories"
          >
            <ArrowLeft size={18} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            className={`slider-btn slider-btn-next ${!canScrollRight ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next stories"
          >
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="customer-stories-container" ref={containerRef}>
        {stories.map((story) =>
          story.cardType === "stat" ? (
            /* Trivago Stat Card */
            <div
              key={story.id}
              className="story-stat-card"
              style={{ backgroundColor: story.cardColor }}
            >
              <div className="trivago-logo">
                <Image
                  src="/trivago.png"
                  alt="Trivago"
                  width={110}
                  height={30}
                  style={{ height: "28px", width: "auto", objectFit: "contain" }}
                />
              </div>

              <div className="stat-content">
                <h2 className="stat-number">{story.statNumber}</h2>
                <p className="stat-description">{story.statDescription}</p>
              </div>
            </div>
          ) : (
            /* Composite Photo + Overlapping Quote Card */
            <div key={story.id} className="story-card-unit">
              {/* Left Photo Card */}
              <div
                className="story-photo-card"
                style={{ backgroundColor: story.imageBgColor }}
              >
                {story.personImg && (
                  <Image
                    src={story.personImg}
                    alt={story.author || "Customer"}
                    width={185}
                    height={225}
                    className="story-person-img"
                  />
                )}
              </div>

              {/* Right Quote Card */}
              <div
                className="story-quote-card"
                style={{ "--card-color": story.cardColor } as React.CSSProperties}
              >
                {/* Overlapping translucent left strip */}
                <div className="quote-overlap-edge" />

                <div className="quote-card-inner">
                  {/* Company Logo */}
                  <div className="story-company">
                    {story.company === "lendi" && (
                      <Image
                        src="/lendinggroup.svg"
                        alt="Lendi Group"
                        width={140}
                        height={24}
                        style={{ height: "24px", width: "auto", objectFit: "contain" }}
                      />
                    )}

                    {story.company === "reddit" && (
                      <Image
                        src="/reddit.svg"
                        alt="Reddit"
                        width={120}
                        height={28}
                        style={{ height: "26px", width: "auto", objectFit: "contain" }}
                      />
                    )}

                    {story.company === "roblox" && (
                      <Image
                        src="/roblox.svg"
                        alt="Roblox"
                        width={120}
                        height={26}
                        style={{ height: "22px", width: "auto", objectFit: "contain" }}
                      />
                    )}

                    {story.company === "lumen" && (
                      <Image
                        src="/Lumen.svg"
                        alt="Lumen"
                        width={110}
                        height={24}
                        style={{ height: "20px", width: "auto", objectFit: "contain" }}
                      />
                    )}

                    {story.company === "servicerocket" && (
                      <Image
                        src="/service_rocket.svg"
                        alt="Service Rocket"
                        width={140}
                        height={28}
                        style={{ height: "26px", width: "auto", objectFit: "contain" }}
                      />
                    )}
                  </div>

                  {/* Big Quote Mark */}
                  <div className="quote-mark">“</div>

                  {/* Quote Description */}
                  <p className="story-quote">{story.quote}</p>

                  {/* Footer Attribution & Action */}
                  <div className="story-footer">
                    <div className="story-attribution">
                      <span className="author-name">{story.author}</span>,{" "}
                      <span className="author-role">{story.role}</span>
                    </div>
                    {story.ctaLink && (
                      <a
                        href={story.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="story-cta-link"
                      >
                        {story.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
