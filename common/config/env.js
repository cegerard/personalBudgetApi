const config = module.exports =  {
    // MongoDB configuration
    MONGODB_USER: process.env.MONGODB_USER || 'admin',
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || 'admin',
    MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
    MONGODB_PORT: process.env.MONGODB_PORT || '27017',
    MONGODB_NAME: process.env.MONGODB_NAME || 'personalBudget'
};

//config.MONGODB_URL = `mongodb://${config.MONGODB_USER}:${config.MONGODB_PASSWORD}@${config.MONGODB_HOST}:${config.MONGODB_PORT}/${config.MONGODB_NAME}` 
