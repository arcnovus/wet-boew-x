import { computeSoyScriptUrl, normalizeCdtsVersion } from "./wet-utils";

describe("Wet Utils", () => {
  describe("normalizing a CDTS version string", () => {
    it('supports "rn"', () => {
      expect(normalizeCdtsVersion("rn")).toBe("rn");
    });
    it('supports "run"', () => {
      expect(normalizeCdtsVersion("run")).toBe("rn");
    });
    it("supports dot notation", () => {
      expect(normalizeCdtsVersion("4.0.43")).toBe("v4_0_43");
    });
    it("supports underscore with v", () => {
      expect(normalizeCdtsVersion("v4_0_39")).toBe("v4_0_39");
    });
  });
  it("computes the correct soyutils.js url", () => {
    expect(computeSoyScriptUrl({ version: "rn" })).toBe(
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js"
    );
    expect(computeSoyScriptUrl({ version: "run" })).toBe(
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/soyutils.js"
    );
    expect(computeSoyScriptUrl({ version: "4.0.39" })).toBe(
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_39/cdts/compiled/soyutils.js"
    );
    expect(computeSoyScriptUrl({ version: "v4_0_43" })).toBe(
      "https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/compiled/soyutils.js"
    );
  });
  describe("determining cdts script url", () => {
    it("defaults to english to handle the splash page", () => {
      // We default to english when no language is specified in order to support
      // correctly displaying the splash page as per
      // https://cenw-wscoe.github.io/sgdc-cdts/docs/internet-en.html#Splash_page_references
      const expected =
        "https://www.canada.ca/etc/designs/canada/cdts/gcweb/rn/cdts/compiled/wet-en.js";
    });
  });
});
