const Hapi = require('hapi');
const Hoek = require('hoek');
const server = new Hapi.Server()

const PORT = 8080;

server.connection({
  port: PORT
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, docker!');
    }
});

server.start((err) => {
  
  
  if (err) {
    Hoek.assert(err);
  }

  console.log(`Server running at uri: ${server.info.uri}`);
});