import { defineMcp } from "@lovable.dev/mcp-js";
import getMenuTool from "./tools/get-menu";
import getRestaurantInfoTool from "./tools/get-restaurant-info";

export default defineMcp({
  name: "sokak-kebapcisi-mcp",
  title: "Sokak Kebapçısı MCP",
  version: "0.1.0",
  instructions:
    "Sokak Kebapçısı (Trabzon) hakkında bilgi ve menü sunan araçlar. Menüyü almak için `get_menu`, restoran bilgileri için `get_restaurant_info` kullanın.",
  tools: [getMenuTool, getRestaurantInfoTool],
});
