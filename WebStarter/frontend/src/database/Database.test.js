import chai, {expect} from "chai";
import {fake} from "sinon";
import sinonChai from "sinon-chai"
import fetch from "fetch-mock"

import Database from "./Database"

chai.use(sinonChai);

const URL = "/api/sample";

function fakeCallbacks() {
    //For callbacks : onStart, onSuccess, onNotFound, onServerError, onConnectivityError
    return [fake(), fake(), fake(), fake(), fake()]
}

function postOptions(body) {
    return {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    };
}

function deleteOptions() {
    return {method: "DELETE"};
}

afterEach(() => {
    fetch.restore();
});

describe("can do a HTTP GET method call", () => {

    it("success", (done) => {
        let response = {id: 1, text: "Sample"};
        fetch.get(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.have.been.called;
                expect(onSuccess).to.have.been.calledWith(response);
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("not found", (done) => {
        let response = {status: 404};
        fetch.get(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("server error", (done) => {
        let response = {status: 500};
        fetch.get(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("connectivity error", (done) => {
        let response = {throws: new Error()};
        fetch.get(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

});

describe("can do a HTTP POST method call", () => {

    it("success", (done) => {
        let request = {text: "Sample"};
        let response = {id: 1, text: "Sample"};
        fetch.post(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.post(
            URL,
            request,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(postOptions(request));

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.have.been.called;
                expect(onSuccess).to.have.been.calledWith(response);
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("not found", (done) => {
        let request = {text: "Sample"};
        let response = {status: 404};
        fetch.post(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.post(
            URL,
            request,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(postOptions(request));

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("server error", (done) => {
        let request = {text: "Sample"};
        let response = {status: 500};
        fetch.post(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.post(
            URL,
            request,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(postOptions(request));

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("connectivity error", (done) => {
        let request = {text: "Sample"};
        let response = {throws: new Error()};
        fetch.post(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.post(
            URL,
            request,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(postOptions(request));

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

});

describe("can do a HTTP DELETE method call", () => {

    it("success", (done) => {
        let response = {id: 1, text: "Sample"};
        fetch.delete(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.delete(
            URL,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(deleteOptions());

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.have.been.called;
                expect(onSuccess).to.have.been.calledWith(response);
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("not found", (done) => {
        let response = {status: 404};
        fetch.delete(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.delete(
            URL,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(deleteOptions());

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("server error", (done) => {
        let response = {status: 500};
        fetch.delete(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.delete(
            URL,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(deleteOptions());

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("connectivity error", (done) => {
        let response = {throws: new Error()};
        fetch.delete(URL, response);

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.delete(
            URL,
            onStart,
            () => {
                expect(fetch.called(URL)).to.be.true;
                expect(fetch.lastOptions(URL)).to.deep.equal(deleteOptions());

                expect(onStart).to.have.been.called;
                expect(onSuccess).to.not.have.been.called;
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

});

describe("can parse", () => {

    it("JSON response", (done) => {
        let response = {id: 1, text: "Sample"};
        fetch.get(URL, {body: response, headers: {"Content-Type": "application/json"}});

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.have.been.called;
                expect(onSuccess).to.have.been.calledWith(response);
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("unknown content-type", (done) => {
        let response = "Sample";
        fetch.get(URL, {body: response, headers: {"Content-Type": "application/unknown"}});

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.have.been.called;
                expect(onSuccess).to.have.been.calledWith(response);
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

    it("anything else", (done) => {
        let response = "Sample";
        fetch.get(URL, {body: response, headers: {}});

        let [onStart, onSuccess, onNotFound, onServerError, onConnectivityError] = fakeCallbacks();

        Database.get(
            URL,
            onStart,
            () => {
                expect(onStart).to.have.been.called;
                expect(onSuccess).to.have.been.called;
                expect(onSuccess).to.have.been.calledWith(response);
                expect(onNotFound).to.not.have.been.called;
                expect(onServerError).to.not.have.been.called;
                expect(onConnectivityError).to.not.have.been.called;

                done();
            },
            onSuccess,
            onNotFound,
            onServerError,
            onConnectivityError
        );
    });

});