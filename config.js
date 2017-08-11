const env = process.env;
module.exports = {
    PORT: env.PORT || 3000,
    HOST: env.HOST || 'localhost',
    MONGO_HOST: env.MONGO_HOST || "0.0.0.0",
    MONGO_PORT: env.MONGO_PORT || 27017,
    DB_NAME: env.DB_NAME || "test"
};
