import React from "react";

const ORANGE = "#FF682C";
const BG = "#F8DED4";

const ContactDropdown = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: BG,
      zIndex: 1000,
      overflowY: "auto",
      padding: 0,
      margin: 0,
      fontFamily: 'Poppins, Arial, sans-serif',
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px 48px 0 48px" }}>
        <div style={{color: "ORANGE;"}}>
          Logo Here
        </div>
        <button onClick={onClose} style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: 24, fontSize: 22, fontWeight: 500, padding: "10px 36px", cursor: "pointer" }}>Close</button>
      </div>
      {/* Main content */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", padding: "32px 48px", gap: 48 }}>
        {/* Left: Form and intro */}
        <div style={{ flex: 2, minWidth: 400, textAlign: "left" }}>
          <div style={{ color: "#7A4B3A", fontSize: 18, marginBottom: 12, fontWeight: 400 }}>Contact form</div>
          <div style={{ color: "#7A4B3A", fontSize: 32, fontWeight: 400, marginBottom: 32, lineHeight: 1.2 }}>
            Every good partnership starts with coffee.<br />Let's schedule a meeting now.
          </div>
          <form style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: 32 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>Name*</div>
                <input style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", fontWeight: 400, textAlign: "left" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>First name*</div>
                <input style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", fontWeight: 400, textAlign: "left" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>E-mail</div>
                <input style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", fontWeight: 400, textAlign: "left" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>Phone</div>
                <input style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", fontWeight: 400, textAlign: "left" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>Company</div>
                <input style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", fontWeight: 400, textAlign: "left" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>I am looking for help with *</div>
                <input style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", fontWeight: 400, textAlign: "left" }} />
              </div>
            </div>
            <div>
              <div style={{ color: ORANGE, fontSize: 22, marginBottom: 8, fontWeight: 400, textAlign: "left" }}>Message</div>
              <textarea style={{ width: "100%", border: "none", borderBottom: `2px solid #C9A89E`, background: "transparent", fontSize: 20, marginBottom: 24, outline: "none", color: "#7A4B3A", minHeight: 48, fontWeight: 400, textAlign: "left" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
              <button type="submit" style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: 24, fontSize: 20, fontWeight: 500, padding: "10px 36px", cursor: "pointer" }}>Send</button>
            </div>
          </form>
        </div>
        {/* Right: Contact info */}
        <div style={{ flex: 1, minWidth: 320, display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-start", textAlign: "right" }}>
          <div style={{ color: "#7A4B3A", fontSize: 18, marginBottom: 12, fontWeight: 400 }}>LinkedIn</div>
          <a href="mailto:info@ventriloc.ca" style={{ color: ORANGE, fontSize: 32, fontWeight: 600, textDecoration: "underline", lineHeight: 1.1, marginBottom: 0, textAlign: "right" }}>info@ventriloc.ca</a>
          <div style={{ color: ORANGE, fontSize: 32, fontWeight: 600, textDecoration: "underline", lineHeight: 1.1, textAlign: "right" }}>819-345-3223</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDropdown; 