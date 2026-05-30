import Image from "next/image";
import {
  CameraIcon,
  EllipsisVerticalIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperClipIcon,
  PhoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const waIconColor = "#8696a0";

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
                  background: "#000",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/sticky-logo.png"
                  alt="Sticky"
                  width={36}
                  height={36}
                  style={{
                    objectFit: "cover",
                    padding: 4,
                    backgroundColor: "#000",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div className="wa-contact-name">Sticky</div>
                <div className="wa-contact-status">en línea</div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                }}
              >
                <VideoCameraIcon
                  aria-hidden
                  style={{
                    width: 20,
                    height: 20,
                    color: waIconColor,
                  }}
                />
                <PhoneIcon
                  aria-hidden
                  style={{
                    width: 20,
                    height: 20,
                    color: waIconColor,
                  }}
                />
                <EllipsisVerticalIcon
                  aria-hidden
                  style={{
                    width: 20,
                    height: 20,
                    color: waIconColor,
                  }}
                />
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
                Hazme un sticker de Michael Jordan clavando una canasta
                <div className="wa-bubble-time">9:41</div>
              </div>

              {/* Sticky replies */}
              <div className="wa-bubble wa-bubble-in bubble-anim">
                ¡Va! Ahorita te lo hago
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
                Listo. ¿Hacemos algún cambio?
                <div className="wa-bubble-time">9:42</div>
              </div>

              {/* User reply */}
              <div className="wa-bubble wa-bubble-out bubble-anim">
                ¡Está perfecto!
                <div className="wa-bubble-time">9:42</div>
              </div>
            </div>

            {/* Input bar */}
            <div className="wa-input-bar">
              <FaceSmileIcon
                aria-hidden
                style={{
                  width: 22,
                  height: 22,
                  color: waIconColor,
                  flexShrink: 0,
                }}
              />
              <div className="wa-input-pill">Mensaje</div>
              <PaperClipIcon
                aria-hidden
                style={{
                  width: 22,
                  height: 22,
                  color: waIconColor,
                  flexShrink: 0,
                }}
              />
              <CameraIcon
                aria-hidden
                style={{
                  width: 22,
                  height: 22,
                  color: waIconColor,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "#00a884",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MicrophoneIcon
                  aria-hidden
                  style={{ width: 20, height: 20, color: "#fff" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
