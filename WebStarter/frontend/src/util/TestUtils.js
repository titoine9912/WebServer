import React from "react";
import {fake} from "sinon";

class Page {

    setComponent(wrapper) {
        this.wrapper = wrapper;
    }

    component() {
        this.wrapper.update();
        return this.wrapper;
    }

    children() {
        return this.component().children();
    }

    find(selector) {
        return this.component().find(selector);
    }

    props() {
        return this.component().props();
    }

}

function KeyEvent(keyCode) {
    return {
        preventDefault: fake(),
        keyCode: keyCode
    };
}

export {Page, KeyEvent};