import {expect} from "chai";

import ArrayUtils from "./ArrayUtils"

it("can remove an element in an array", () => {
    let array = [44, 1266, 7, 55, 13];

    ArrayUtils.remove(array, 2);

    expect(array).to.have.lengthOf(4);
    expect(array).to.not.include(7);
});