import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div
      className="animate-float"
      style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))" }}
    >
      {/* Side buttons */}
      <div style={{ position: "relative" }}>
        {/* Volume up */}
        <div
          style={{
            position: "absolute",
            left: -4,
            top: 120,
            width: 3,
            height: 28,
            background: "#3a3a3c",
            borderRadius: "3px 0 0 3px",
            zIndex: 10,
          }}
        />
        {/* Volume down */}
        <div
          style={{
            position: "absolute",
            left: -4,
            top: 158,
            width: 3,
            height: 28,
            background: "#3a3a3c",
            borderRadius: "3px 0 0 3px",
            zIndex: 10,
          }}
        />
        {/* Power */}
        <div
          style={{
            position: "absolute",
            right: -4,
            top: 140,
            width: 3,
            height: 50,
            background: "#3a3a3c",
            borderRadius: "0 3px 3px 0",
            zIndex: 10,
          }}
        />

        <div className="phone-frame">
          <div className="dynamic-island" />
          <div className="wa-screen">
            {/* WA Header */}
            <div className="wa-header">
              <div
                className="wa-avatar"
                style={{
                  padding: 4,
                  overflow: "hidden",
                  background: "#1a1a1a",
                }}
              >
                <Image
                  src="/sticky-logo.png"
                  alt="Sticky"
                  width={28}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div className="wa-contact-name">Sticky ✦</div>
                <div className="wa-contact-status">en línea</div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  color: "#8696a0",
                  fontSize: 16,
                }}
              >
                <span>📹</span>
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>

            {/* Messages */}
            <div className="wa-messages">
              <div
                style={{
                  alignSelf: "center",
                  background: "rgba(17,27,33,0.9)",
                  color: "#8696a0",
                  fontSize: 11,
                  padding: "4px 10px",
                  borderRadius: 8,
                  margin: "4px 0 8px",
                  textAlign: "center",
                }}
              >
                Hoy
              </div>

              {/* User asks */}
              <div className="wa-bubble wa-bubble-out bubble-anim">
                Hazme un sticker de Michael Jordan clavando una canasta 🏀
                <div className="wa-bubble-time">9:41</div>
              </div>

              {/* Sticky replies */}
              <div className="wa-bubble wa-bubble-in bubble-anim">
                ¡Va! Ahorita te lo hago 🧡
                <div className="wa-bubble-time">9:41</div>
              </div>

              {/* Typing indicator */}
              <div
                className="wa-bubble wa-bubble-in bubble-anim"
                style={{ padding: "10px 14px" }}
              >
                <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#8696a0",
                        animation: "typingDot 1.2s ease-in-out infinite",
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Sticker result — real image */}
              <div className="bubble-anim" style={{ alignSelf: "flex-start" }}>
                <Image
                  src="/stickers/jordan.webp"
                  alt="Sticker Jordan"
                  width={140}
                  height={140}
                  style={{
                    borderRadius: 12,
                    filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.6))",
                    display: "block",
                  }}
                />
              </div>

              {/* Sticky follow-up */}
              <div className="wa-bubble wa-bubble-in bubble-anim">
                Listo 🏀 ¿Hacemos algún cambio?
                <div className="wa-bubble-time">9:42</div>
              </div>

              {/* User reply */}
              <div className="wa-bubble wa-bubble-out bubble-anim">
                No, está perfecto 🔥
                <div className="wa-bubble-time">9:42</div>
              </div>
            </div>

            {/* Input bar */}
            <div className="wa-input-bar">
              <span style={{ fontSize: 20, color: "#8696a0" }}>😊</span>
              <div className="wa-input-pill">Mensaje</div>
              <span style={{ fontSize: 20, color: "#8696a0" }}>📎</span>
              <span style={{ fontSize: 20, color: "#8696a0" }}>📷</span>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#00a884",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  flexShrink: 0,
                }}
              >
                🎤
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
