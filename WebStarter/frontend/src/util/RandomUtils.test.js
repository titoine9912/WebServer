import {expect} from "chai"

import RandomUtils from "./RandomUtils"

const NB_ATTEMPTS = 1000;

describe("can generate a random number", () => {

    it("without crashing", () => {
        for (let i = 0; i < NB_ATTEMPTS; i++) {
            expect(RandomUtils.generate()).to.be.a("number");
        }
    });

    it("with a lower bound", () => {
        for (let i = 0; i < NB_ATTEMPTS; i++) {
            expect(RandomUtils.generate(50)).to.be.at.least(50);
        }
    });

    it("with a lower bound and a upper bound", () => {
        for (let i = 0; i < NB_ATTEMPTS; i++) {
            expect(RandomUtils.generate(50, 100)).to.be.within(50, 1000);
        }
    });

});