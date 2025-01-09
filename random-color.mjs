const generate = function () {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`,
    RESET = "\x1b[0m",
    HEX_2_ANSI = `\x1b[48;2;${parseInt(randomColor.slice(1, 3), 16)};${parseInt(randomColor.slice(3, 5), 16)};${parseInt(randomColor.slice(5, 7), 16)}m`;
  console.log(`${HEX_2_ANSI} ${randomColor} ${RESET}`);
  return randomColor;
};

export default generate;
