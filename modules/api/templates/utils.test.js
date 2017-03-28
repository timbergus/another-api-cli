const test = require('tape');
const { parseBearer } = require('../utils');

test('Parse bearer...', t => {

  let request = {
    headers: {
      authorization: 'Bearer 123456'
    }
  };

  t.plan(1);
  t.same(parseBearer(request), '123456', 'must return the token 123456');
});
