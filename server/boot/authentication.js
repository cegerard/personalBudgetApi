module.exports = function(server) {
    // enable authentication
    server.enableAuth({ datasource: 'pb-data' });
};