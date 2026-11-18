"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";

export default function Navbar() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeaturesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      {/* Atlassian left blue block */}
      <a href="/" className="atlassian-logo-block" aria-label="Atlassian">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF">
          {/* Top solid layer */}
          <path
            d="M12 2.5L21.2 7.2L12 11.9L2.8 7.2Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* 3 stacked layers underneath */}
          <path
            d="M3 11L12 15.5L21 11"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 14.8L12 19.3L21 14.8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18.6L12 23.1L21 18.6"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <div className="nav-container">
        {/* Left: Jira logo + Menu links */}
        <div className="nav-left">
          <a href="/" className="logo">
            <span className="logo-text">EPICpm</span>
          </a>

          {!searchOpen && (
            <nav className="nav-links">
            <div className="nav-dropdown-wrapper" 
            ref={dropdownRef}
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
             >
              <button
                type="button"
                className={`nav-link-dropdown ${featuresOpen ? "active" : ""}`}
                onClick={() => setFeaturesOpen((prev) => !prev)}
                aria-expanded={featuresOpen}
              >
                Features{" "}
                <ChevronDown
                  size={14}
                  className={`chevron ${featuresOpen ? "open" : ""}`}
                />
              </button>

              {featuresOpen && (
                <div className="dropdown-menu">
                  <a
                    href="#all-features"
                    className="dropdown-item"
                    onClick={() => setFeaturesOpen(false)}
                  >
                    All Features
                  </a>
                  <a
                    href="#rovo"
                    className="dropdown-item"
                    onClick={() => setFeaturesOpen(false)}
                  >
                    Rovo in EPICpm
                  </a>
                  <a
                    href="#agents"
                    className="dropdown-item"
                    onClick={() => setFeaturesOpen(false)}
                  >
                    Agents in EPICpm
                  </a>
                </div>
              )}
            </div>

            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={`nav-link-dropdown ${solutionsOpen ? "active" : ""}`}
                onClick={() => setSolutionsOpen((prev) => !prev)}
                aria-expanded={solutionsOpen}
              >
                Solutions{" "}
                <ChevronDown
                  size={14}
                  className={`chevron ${solutionsOpen ? "open" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="dropdown-menu solutions-menu">
                  {/* Column 1: TEAMS */}
                  <div className="dropdown-col">
                    <span className="dropdown-col-title">TEAMS</span>
                    <a href="#marketing" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Marketing</a>
                    <a href="#engineering" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Engineering</a>
                    <a href="#design" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Design</a>
                    <a href="#operations" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Operations</a>
                    <a href="#it" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>IT</a>
                  </div>

                  {/* Column 2: USE CASES */}
                  <div className="dropdown-col">
                    <span className="dropdown-col-title">USE CASES</span>
                    <a href="#getting-started" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Getting started</a>
                    <a href="#planning" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Planning</a>
                    <a href="#campaign-management" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Campaign Management</a>
                    <a href="#agile" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Agile Project Management</a>
                    <a href="#program-management" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Program Management</a>
                  </div>

                  {/* Column 3: COMPANY SIZE */}
                  <div className="dropdown-col">
                    <span className="dropdown-col-title">COMPANY SIZE</span>
                    <a href="#enterprise" className="dropdown-item" onClick={() => setSolutionsOpen(false)}>Enterprise</a>
                  </div>
                </div>
              )}
            </div>
            <a href="#guides">Guides</a>
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setTemplatesOpen(true)}
              onMouseLeave={() => setTemplatesOpen(false)}
            >
              <button
                type="button"
                className={`nav-link-dropdown ${templatesOpen ? "active" : ""}`}
                onClick={() => setTemplatesOpen((prev) => !prev)}
                aria-expanded={templatesOpen}
              >
                Templates{" "}
                <ChevronDown
                  size={14}
                  className={`chevron ${templatesOpen ? "open" : ""}`}
                />
              </button>

              {templatesOpen && (
                <div className="dropdown-menu templates-menu">
                  <a href="#all-templates" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    All templates
                  </a>
                  <a href="#software-dev" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Software Development
                  </a>
                  <a href="#finance" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Finance
                  </a>
                  <a href="#marketing" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Marketing
                  </a>
                  <a href="#design" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Design
                  </a>
                  <a href="#sales" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Sales
                  </a>
                  <a href="#operations" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Operations
                  </a>
                  <a href="#service-mgmt" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Service Management
                  </a>
                  <a href="#hr" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    HR
                  </a>
                  <a href="#legal" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    Legal
                  </a>
                  <a href="#it-operations" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    IT Operations
                  </a>

                  <div className="dropdown-divider" />

                  <a href="#service-management" className="dropdown-item" onClick={() => setTemplatesOpen(false)}>
                    EPICpm Service Management
                  </a>
                </div>
              )}
            </div>
            <a href="#pricing">Pricing</a>
          </nav>
          )}
        </div>

        {/* Right: Search bar when open, else normal action buttons */}
        {searchOpen ? (
          <div className="search-active-bar">
            <div className="search-input-pill">
              <input
                type="text"
                placeholder='Search or ask anything like "How much does EPICpm cost?"'
                className="search-field"
                autoFocus
              />
              <Search size={18} className="search-field-icon" />
            </div>

            <button
              type="button"
              className="search-close-btn"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="nav-actions">
            <button
              className="search-btn"
              aria-label="Search"
              type="button"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} />
            </button>

            <span className="nav-divider" />

            <a href="/login" className="login-btn">
              Sign in
            </a>

            <a href="/signup" className="nav-cta">
              Get it free
            </a>
          </div>
        )}
      </div>

      {(featuresOpen || solutionsOpen || templatesOpen || searchOpen) && (
        <div
          className="nav-backdrop"
          onClick={() => {
            setFeaturesOpen(false);
            setSolutionsOpen(false);
            setTemplatesOpen(false);
            setSearchOpen(false);
          }}
        />
      )}
    </header>
  );
}
