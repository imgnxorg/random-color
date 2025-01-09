import rcolor from "./random-color.mjs";

export async function generate() {
  return rcolor();
}

// Export for ES Modules
export default generate;

// Export for CommonJS
if (typeof module !== "undefined" && module.exports) {
  module.exports = generate;
}
