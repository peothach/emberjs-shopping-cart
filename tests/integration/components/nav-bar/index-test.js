import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs-shopping-cart/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NavBar::Index />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <NavBar::Index>
        template block text
      </NavBar::Index>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
