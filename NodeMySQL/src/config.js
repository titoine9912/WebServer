let dbFilePath = process.env.NODE_ENV == "PROD" ? "/.app/data.db" : "data.db";

export {dbFilePath as default};