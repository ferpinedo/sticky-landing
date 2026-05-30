"use client";
import { useState } from "react";

import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        background: "#161616",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">FAQ</div>
          <h2
            className="font-heading"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)", color: "#F5F5F5" }}
          >
            PREGUNTAS{" "}
            <span style={{ color: "#FF8100" }}>FRECUENTES</span>
          </h2>
        </div>

        <div
          style={{
            background: "#1E1E1E",
            border: "1px solid #2A2A2A",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
              style={{ borderBottom: i === faqs.length - 1 ? "none" : "1px solid #2A2A2A" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    fontWeight: 600,
                    color: open === i ? "#FF8100" : "#F5F5F5",
                    transition: "color 0.2s",
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    color: "#FF8100",
                    fontSize: 20,
                    transition: "transform 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  style={{
                    padding: "0 24px 20px",
                    fontSize: 15,
                    color: "#888",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
