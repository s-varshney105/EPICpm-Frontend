
"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <p>
        Atlassian named a Leader in the 2026 Gartner®
        Magic Quadrant™ for Collaborative Work Management.
        <a href="#">
          Find out why in the report
        </a>
      </p>

      <button
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
      >
        <X size={27} />
      </button>
    </div>
  );
}
