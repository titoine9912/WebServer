import {expect} from "chai";

import StateUtils from "./StateUtils"

it("can clone state", () => {
    let state = {id : 1, text : "Sample"};

    let newState = StateUtils.createNew(state);

    expect(newState).to.not.equal(state); //Not be the same object.
    expect(newState).to.deep.equal(state); //But be equal.
});