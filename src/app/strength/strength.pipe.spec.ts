import { StrengthPipe } from "../strength/strength.pipe";

describe("StrengthPipe", () => {
  it("should display weak if value 5", () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual("5 weak");
  });
  it("should display strong if value 10", () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual("10 strong");
  });

  it("should display unbeliable if value 21", () => {
    let pipe = new StrengthPipe();
    expect(pipe.transform(21)).toEqual("21 unbeliable");
  });
});
