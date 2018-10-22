import {expect} from "chai";

import StringUtils from "./StringUtils"

it("can convert to kebab_case", () => {
    expect(StringUtils.toKebabCase("sample")).to.equal("sample");
    expect(StringUtils.toKebabCase("ASample")).to.equal("a-sample");
    expect(StringUtils.toKebabCase("A_Sample")).to.equal("a-sample");
    expect(StringUtils.toKebabCase("a_sample")).to.equal("a-sample");
    expect(StringUtils.toKebabCase("aSample")).to.equal("a-sample");
    expect(StringUtils.toKebabCase("a-sample")).to.equal("a-sample");
    expect(StringUtils.toKebabCase("A_SAMPLE")).to.equal("a-sample");
});