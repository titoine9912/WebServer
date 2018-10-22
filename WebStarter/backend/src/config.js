let dbFilePath = process.env.NODE_ENV == "production" ? "/.app/data.db" : "data.db";

export {dbFilePath as default};