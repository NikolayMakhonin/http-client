import { assert, describe, it } from 'webrain';
import { ObservableClass } from 'webrain';
describe('browser > main > index', function () {
  it('base', function () {
    assert.ok(ObservableClass);
  });
});