const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const arr = ages
  .map((x) => x * 2)
  .filter((e) => e >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b);
