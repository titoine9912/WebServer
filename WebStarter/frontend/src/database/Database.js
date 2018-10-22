class Database {

    static get(url, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.makeCallToServer(url, {
            method: "GET"
        }, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError);
    }

    static post(url, content, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.makeCallToServer(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(content)
        }, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError);
    }

    static delete(url, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        Database.makeCallToServer(url, {
            method: "DELETE"
        }, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError);
    }

    static async makeCallToServer(url, options, onStart, onEnd, onSuccess, onNotFound, onServerError, onConnectivityError) {
        try {
            onStart();

            let response = await fetch(url, options);

            if (response.status === 200) {
                let contentType = response.headers.get("Content-Type");
                if (contentType) {
                    if (contentType.toLowerCase().includes("application/json")) {
                        onSuccess(await response.json());
                    } else {
                        onSuccess(await response.text());
                    }
                } else {
                    onSuccess(await response.text());
                }
            }
            else if (response.status === 404) onNotFound();
            else onServerError();

        } catch (e) {
            onConnectivityError();
        } finally {
            onEnd();
        }
    }

}

export default Database;