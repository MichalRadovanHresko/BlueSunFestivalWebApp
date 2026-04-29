import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/blue-sun-festival/",
  plugins: [react()],
});
