export default function PhoneMockup() {
  return (
    <div className="animate-float" style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))" }}>
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
              <div className="wa-avatar">🍊</div>
              <div style={{ flex: 1 }}>
                <div className="wa-contact-name">Sticky ✦</div>
                <div className="wa-contact-status">en línea</div>
              </div>
              <div style={{ display: "flex", gap: 14, color: "#8696a0", fontSize: 16 }}>
                <span>📹</span>
                <span>📞</span>
                <span>⋮</span>
              </div>
            </div>

            {/* Messages */}
            <div className="wa-messages">
              {/* System message */}
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
                  maxWidth: "80%",
                }}
              >
                Hoy
              </div>

              {/* Example 1 */}
              <div className="wa-bubble wa-bubble-out bubble-anim">
                Hazme un sticker de mi perro como grafitero 🐶
                <div className="wa-bubble-time">9:41</div>
              </div>

              <div className="wa-bubble wa-bubble-in bubble-anim">
                Va, mándame la foto 🧡
                <div className="wa-bubble-time">9:41</div>
              </div>

              {/* Photo bubble (user sent) */}
              <div className="wa-photo-bubble bubble-anim">
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 32 }}>🐕</div>
                  <div style={{ fontSize: 10, color: "#8696a0", marginTop: 4 }}>foto.jpg</div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 6,
                    right: 8,
                    fontSize: 10,
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  9:42
                </div>
              </div>

              <div className="wa-bubble wa-bubble-in bubble-anim">
                Listo, aquí está tu sticker 🎨
                <div className="wa-bubble-time">9:42</div>
              </div>

              {/* Sticker result */}
              <div className="wa-sticker-bubble bubble-anim">🐶🎨</div>

              {/* Example 2 */}
              <div className="wa-bubble wa-bubble-out bubble-anim">
                Ponle texto que diga &quot;modo lunes&quot;
                <div className="wa-bubble-time">9:43</div>
              </div>

              <div className="wa-bubble wa-bubble-in bubble-anim">
                Hecho 😎
                <div className="wa-bubble-time">9:43</div>
              </div>

              {/* Sticker 2 */}
              <div className="wa-sticker-bubble bubble-anim" style={{ position: "relative" }}>
                <div style={{ fontSize: 60, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}>😑</div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 900,
                    color: "white",
                    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                    letterSpacing: "0.05em",
                  }}
                >
                  MODO LUNES
                </div>
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
