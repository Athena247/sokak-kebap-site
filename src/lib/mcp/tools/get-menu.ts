import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const MENU = {
  kebaplar: [
    { name: "Adana Kebap", price: "₺180", description: "Acılı, elde çekilmiş kıyma, mangalda pişer." },
    { name: "Urfa Kebap", price: "₺180", description: "Acısız, elde çekilmiş kıyma." },
    { name: "Tavuk Şiş", price: "₺160", description: "Marine edilmiş tavuk göğsü şişte." },
    { name: "Kuzu Şiş", price: "₺220", description: "Kuzu kuşbaşı, közde." },
    { name: "Karışık Izgara", price: "₺320", description: "Adana, urfa, tavuk, kuzu şiş bir tabakta." },
  ],
  durumler: [
    { name: "Adana Dürüm", price: "₺140" },
    { name: "Tavuk Dürüm", price: "₺120" },
    { name: "Kuzu Dürüm", price: "₺160" },
  ],
  corbalar: [
    { name: "Mercimek Çorbası", price: "₺60" },
    { name: "İşkembe Çorbası", price: "₺80" },
  ],
  tatlilar: [
    { name: "Künefe", price: "₺120" },
    { name: "Sütlaç", price: "₺70" },
  ],
  icecekler: [
    { name: "Ayran", price: "₺25" },
    { name: "Şalgam", price: "₺30" },
    { name: "Çay", price: "₺15" },
  ],
} as const;

export default defineTool({
  name: "get_menu",
  title: "Menüyü getir",
  description: "Sokak Kebapçısı menüsünü döner. Opsiyonel kategori: kebaplar, durumler, corbalar, tatlilar, icecekler.",
  inputSchema: {
    category: z
      .enum(["kebaplar", "durumler", "corbalar", "tatlilar", "icecekler"])
      .optional()
      .describe("Menü kategorisi. Boş bırakılırsa tüm menü döner."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const payload = category ? { [category]: MENU[category] } : MENU;
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
