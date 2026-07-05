import { defineTool } from "@lovable.dev/mcp-js";

const INFO = {
  name: "Sokak Kebapçısı",
  city: "Trabzon",
  cuisine: "Türk mutfağı — mangal, kebap, dürüm",
  address: "Ortahisar, Trabzon",
  phone: "+90 462 000 00 00",
  hours: {
    "Pazartesi-Cumartesi": "11:00 – 23:00",
    Pazar: "12:00 – 22:00",
  },
  specialties: ["Adana Kebap", "Urfa Kebap", "Tavuk Şiş", "Karışık Izgara"],
};

export default defineTool({
  name: "get_restaurant_info",
  title: "Restoran bilgisi",
  description: "Sokak Kebapçısı hakkında iletişim, adres, açılış saatleri ve öne çıkan lezzetler.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(INFO, null, 2) }],
    structuredContent: INFO,
  }),
});
