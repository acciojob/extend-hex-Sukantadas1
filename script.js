const extendHex = (shortHex) => {
  shortHex = shortHex.replace(/^#/, '').toUpperCase();

  // If the shortHex has only one character per color, repeat each character
  if (shortHex.length === 3) {
    shortHex = shortHex
      .split('')
      .map(char => char + char)
      .join('');
  }

  // Add # prefix and return the extended hex code
  return `#${shortHex}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
