class Mutate {
  letterCase(
    set: "toLowerCase" | "toUpperCase",
  ): (src: string) => string {
    return (src) => src[set || "trim"]();
  }
}

export const Change = new Mutate();
export default Change;

const toCase = Change.letterCase;
export const lowerCase = toCase("toLowerCase");
export const upperCase = toCase("toUpperCase");
