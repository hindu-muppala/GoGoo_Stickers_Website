// 🔗 PLUG IN: your WhatsApp number (country code + number, no "+" or spaces)
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Turn the custom request form into a pre-filled WhatsApp message (no backend needed)
document.getElementById("customForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const msg =
    `Hi Dhruv Stickers! Custom sticker request:\n` +
    `Name: ${d.get("name")}\n` +
    `Type: ${d.get("type")}\n` +
    `Quantity: ${d.get("qty")}\n` +
    `Idea: ${d.get("idea")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});
