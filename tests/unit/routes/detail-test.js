import { module, test } from 'qunit';
import { setupTest } from 'emberjs-shopping-cart/tests/helpers';

module('Unit | Route | detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:detail');
    assert.ok(route);
  });
});
