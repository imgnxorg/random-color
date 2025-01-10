class RandomColorGenerator {
  constructor(seed = Math.random()) {
    this.randomColor = this.getRandomColor(seed);
  }

  getRandomColor(seed) {
    const factor = Math.floor(seed * 16777215);
    return `#${factor.toString(16).padStart(6, "0")}`;
  }

  toString() {
    return String(this.randomColor);
  }

  test(testType = "console") {
    const randomColor = this.randomColor;
    if (testType === "console") {
      const RESET = "\x1b[0m";
      const HEX_2_ANSI = `\x1b[48;2;${parseInt(randomColor.slice(1, 3), 16)};${parseInt(randomColor.slice(3, 5), 16)};${parseInt(randomColor.slice(5, 7), 16)}m`;
      console.log(`${HEX_2_ANSI}${randomColor}${RESET}`);
    }
    return randomColor;
  }
}

const generateRandomColor = (seed) => {
  const generator = new RandomColorGenerator(seed);
  return generator.randomColor;
};

export default generateRandomColor;
