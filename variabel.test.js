const { tall, tegn, sum1, sum2 } = require("./variabelDatatype");

describe("Variabler og datatyper tester", () => {
  test("Oppgave 1: tall variabel er definert med riktig verdi og datatype", () => {
    expect(tall).toBeDefined();
    expect(tall).toBe(6);
    expect(typeof tall).toBe("number");
  });

  test("Oppgave 2: tegn variabel er definert med riktig verdi og datatype", () => {
    expect(tegn).toBeDefined();
    expect(tegn).toBe("6");
    expect(typeof tegn).toBe("string");
  });

  test("Oppgave 3: sum1 variabel er beregnet korrekt (tall + tall)", () => {
    expect(sum1).toBeDefined();
    expect(sum1).toBe(12); // 6 + 6
    expect(typeof sum1).toBe("number");
  });

  test("Oppgave 4: sum2 variabel er beregnet korrekt (tall + tegn)", () => {
    expect(sum2).toBeDefined();
    expect(sum2).toBe("66"); // 6 + "6" blir string concatenation
    expect(typeof sum2).toBe("string");
  });

  test("Oppgave 5: Datatypen til sum2 er string", () => {
    expect(typeof sum2).toBe("string");
  });

  test("Alle påkrevde variabler er eksportert", () => {
    expect(tall).toBeDefined();
    expect(tegn).toBeDefined();
    expect(sum1).toBeDefined();
    expect(sum2).toBeDefined();
  });
});
