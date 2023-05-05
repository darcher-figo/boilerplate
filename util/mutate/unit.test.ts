import { lowerCase, upperCase, Change } from "./main";

describe("Example Test", function () {
  const MIXEDCASE = "lE1tTeRsAr-EaLL3misCUp_orDow.c";

  it("Changes characters to lower case", function () {
    const LOWERCASE = "le1ttersar-eall3miscup_ordow.c";
    expect(Change.letterCase("toLowerCase")(MIXEDCASE)).toBe(LOWERCASE);
    expect(lowerCase(MIXEDCASE)).toBe(LOWERCASE);
  });

  it("Changes characters to upper case", function () {
    const UPPERCASE = "LE1TTERSAR-EALL3MISCUP_ORDOW.C";
    expect(Change.letterCase("toUpperCase")(MIXEDCASE)).toBe(UPPERCASE);
    expect(upperCase(MIXEDCASE)).toBe(UPPERCASE);
  });
});
