const assert = require('assert');
const http = require('http');
const config = require('../../server/config');
const createApp = require('bb-common/app/create');

describe('Server', () => {

  it('deve redirecionar para o login', (done) => {

    const testPort = 3999;

    const testConfig = Object.assign({}, config, { port: testPort })
    const app = createApp(testConfig);

    const BASE_URL = `http://localhost.bb.com.br:${testPort}`;

    app.on('start', () => {

      http.get(BASE_URL, (res) => {

        assert.equal(302, res.statusCode);
        done();

      });

    });

    app.on('err', (err) => {

      done(err);

    });

  });

});
