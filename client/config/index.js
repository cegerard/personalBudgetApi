module.exports = {
    port: process.env.PORT || 8080,
    httpRepository: {
        baseUrl: `http://${process.env.BASE_URL || 'localhost'}:3000/api`
    }
}