'use strict';

define('dummy/tests/acceptance/smoke-test', ['exports', 'qunit', 'dummy/tests/helpers/module-for-acceptance'], function (exports, _qunit, _dummyTestsHelpersModuleForAcceptance) {

  (0, _dummyTestsHelpersModuleForAcceptance['default'])('Acceptance | smoke test');

  var m = undefined;

  (0, _qunit.test)('visiting /', function callee$0$0(assert) {
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return regeneratorRuntime.awrap(visit('/'));

        case 2:

          m = "`emojione` should be available in the global namespace";
          assert.ok(emojione, m);

        case 4:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  });
});
/* global emojione */
define('dummy/tests/acceptance/smoke-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - acceptance/smoke-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/smoke-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('dummy/tests/controllers/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember-runloop'], function (exports, _emberRunloop) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    (0, _emberRunloop['default'])(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/page-object/component', ['exports', 'dummy/tests/page-object'], function (exports, _dummyTestsPageObject) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports.jquery = jquery;
  exports['default'] = component;

  // A helper to leverage jQuery for page component queries

  function jquery(callback) {
    var errorIfMissing = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return {
      isDescriptor: true,

      get: function get() {
        var $el = (0, _dummyTestsPageObject.findElement)(this);

        if (errorIfMissing && !$el.length) {
          throw new Error('Element ' + this.scope + ' not found.');
        }

        return callback($el);
      }
    };
  }

  function component() {
    var scope = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var descriptor = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // If a descriptor is passed as the first arg
    if (scope === Object(scope)) {
      descriptor = scope;
      scope = null;
    }

    return _extends({}, scope ? { scope: scope, itemScope: scope } : {}, { // inject the scope only if it was provided

      $: jquery(function ($el) {
        return $el;
      }),
      blur: jquery(function ($el) {
        return $el.blur();
      }),
      checked: jquery(function ($el) {
        return $el.is(':checked');
      }),
      click: (0, _dummyTestsPageObject.clickable)(),
      contains: jquery(function ($el) {
        return function (selector) {
          return $el.find(selector).length > 0;
        };
      }, false),
      disabled: jquery(function ($el) {
        return $el.is('[disabled]');
      }),
      exists: jquery(function ($el) {
        return $el.length > 0;
      }, false), // false: don't spit an error if element isn't found
      fill: (0, _dummyTestsPageObject.fillable)(),
      focus: jquery(function ($el) {
        return $el.focus();
      }),
      index: jquery(function ($el) {
        return $el.index();
      }),
      hasClass: jquery(function ($el) {
        return function (className) {
          return $el.hasClass(className);
        };
      }),
      isVisible: (0, _dummyTestsPageObject.isVisible)(),
      text: (0, _dummyTestsPageObject.text)(),
      value: (0, _dummyTestsPageObject.value)()

    }, descriptor);
  }
});
define('dummy/tests/helpers/page-object/component.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/page-object/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/page-object/component.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember-runloop', 'dummy/app', 'dummy/config/environment'], function (exports, _emberRunloop, _dummyApp, _dummyConfigEnvironment) {
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _extends({}, _dummyConfigEnvironment['default'].APP, attrs);

    (0, _emberRunloop['default'])(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/emoji-picker-test', ['exports', 'ember-qunit', 'ember-cli-page-object', 'dummy/tests/pages/components/emoji-picker', 'ember-cli-chai/qunit', 'ember-emojione/emoji-defs', 'sinon', 'ember-test-helpers/wait'], function (exports, _emberQunit, _emberCliPageObject, _dummyTestsPagesComponentsEmojiPicker, _emberCliChaiQunit, _emberEmojioneEmojiDefs, _sinon, _emberTestHelpersWait) {

  var component = (0, _emberCliPageObject.create)(_dummyTestsPagesComponentsEmojiPicker['default']);
  var m = undefined;

  (0, _emberQunit.moduleForComponent)('emoji-picker', 'Integration | Component | emoji picker', {
    integration: true,
    beforeEach: function beforeEach() {
      component.setContext(this);
    },

    afterEach: function afterEach() {
      component.removeContext();
    }
  });

  (0, _emberQunit.test)('it renders', (0, _emberCliChaiQunit.withChai)(function (expect) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    this.set("dummyAction", function () {});

    this.render(Ember.HTMLBars.template({
      'id': '7a8Sx+fr',
      'block': '{"statements":[["append",["helper",["emoji-picker"],null,[["selectAction"],[["helper",["action"],[["get",[null]],["get",["dummyAction"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    m = "Should exist after rendering.";
    expect(component.exists, m)['true'];

    m = "Should have 1369 emoji";
    expect(component.emoji().count, m).equal(1369);

    m = "Should have 8 categories";
    expect(component.categories().count, m).equal(8);

    m = "Category 0 title should be 'Smileys & People'";
    expect(component.categories(0).title.text, m).equal('Smileys & People');

    m = "Category 0 should contain 225 emoji";
    expect(component.categories(0).emoji().count, m).equal(225);

    m = "Category 1 title should be 'Animals & Nature'";
    expect(component.categories(1).title.text, m).equal('Animals & Nature');

    m = "Category 1 should contain 225 emoji";
    expect(component.categories(1).emoji().count, m).equal(160);

    m = "Category 2 title should be 'Food & Drink'";
    expect(component.categories(2).title.text, m).equal('Food & Drink');

    m = "Category 2 should contain 225 emoji";
    expect(component.categories(2).emoji().count, m).equal(85);

    m = "Category 3 title should be 'Activity'";
    expect(component.categories(3).title.text, m).equal('Activity');

    m = "Category 3 should contain 225 emoji";
    expect(component.categories(3).emoji().count, m).equal(69);

    m = "Category 4 title should be 'Travel & Places'";
    expect(component.categories(4).title.text, m).equal('Travel & Places');

    m = "Category 4 should contain 225 emoji";
    expect(component.categories(4).emoji().count, m).equal(118);

    m = "Category 5 title should be 'Objects'";
    expect(component.categories(5).title.text, m).equal('Objects');

    m = "Category 5 should contain 225 emoji";
    expect(component.categories(5).emoji().count, m).equal(180);

    m = "Category 6 title should be 'Symbols'";
    expect(component.categories(6).title.text, m).equal('Symbols');

    m = "Category 6 should contain 225 emoji";
    expect(component.categories(6).emoji().count, m).equal(275);

    m = "Category 7 title should be 'Flags'";
    expect(component.categories(7).title.text, m).equal('Flags');

    m = "Category 7 should contain 225 emoji";
    expect(component.categories(7).emoji().count, m).equal(257);
  }));

  (0, _emberQunit.test)('it should trigger an action when emoji is clicked', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var actionSpy = _sinon['default'].spy();
    this.setProperties({ actionSpy: actionSpy });

    this.render(Ember.HTMLBars.template({
      'id': 'Nak4qoYH',
      'block': '{"statements":[["append",["helper",["emoji-picker"],null,[["selectAction"],[["helper",["action"],[["get",[null]],["get",["actionSpy"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    component.emoji(0).click();

    m = "Action should've been called once";
    expect(actionSpy.calledOnce, m).ok;

    m = "Action should've been called with the grinning emoji definition";
    expect(actionSpy.calledWith(_emberEmojioneEmojiDefs['default'].grinning), m).ok;
  }));

  (0, _emberQunit.test)('it should trigger the close action when emoji is clicked and shouldCloseOnSelect is true', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var selectSpy = _sinon['default'].spy();
    var closeSpy = _sinon['default'].spy();
    this.setProperties({ selectSpy: selectSpy, closeSpy: closeSpy, shouldCloseOnSelect: true });

    this.render(Ember.HTMLBars.template({
      'id': 'K+wf8mFF',
      'block': '{"statements":[["append",["helper",["emoji-picker"],null,[["selectAction","closeAction","shouldCloseOnSelect"],[["helper",["action"],[["get",[null]],["get",["selectSpy"]]],null],["helper",["action"],[["get",[null]],["get",["closeSpy"]]],null],["get",["shouldCloseOnSelect"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    component.emoji(0).click();

    m = "Select action should've been called once";
    expect(selectSpy.calledOnce, m).ok;

    m = "Select action should've been called with the grinning emoji definition";
    expect(selectSpy.calledWith(_emberEmojioneEmojiDefs['default'].grinning), m).ok;

    m = "Close action should've been called once";
    expect(closeSpy.calledOnce, m).ok;

    this.set('shouldCloseOnSelect', false);

    component.emoji(0).click();

    m = "After second click, elect action should've been called twice";
    expect(selectSpy.calledTwice, m).ok;

    m = "After second click, close action should've been called once";
    expect(closeSpy.calledOnce, m).ok;
  }));

  (0, _emberQunit.test)('it should switch tones', (0, _emberCliChaiQunit.withChai)(function (expect) {
    this.set("dummyAction", function () {});

    this.render(Ember.HTMLBars.template({
      'id': '7a8Sx+fr',
      'block': '{"statements":[["append",["helper",["emoji-picker"],null,[["selectAction"],[["helper",["action"],[["get",[null]],["get",["dummyAction"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    m = "Initially should contain toneless emoji";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m)['true'];

    m = "Initially should not contain toned emoji";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m + ' (trying tone 1)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m + ' (trying tone 2)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m + ' (trying tone 3)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m + ' (trying tone 4)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m + ' (trying tone 5)')['false'];

    component.tones(1).click();

    m = "Should contain tone 1 emoji after click on tone 1";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m)['true'];

    m = "Should not contain emoji of other tones after click on tone 1";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m + ' (trying toneless)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m + ' (trying tone 2)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m + ' (trying tone 3)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m + ' (trying tone 4)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m + ' (trying tone 5)')['false'];

    component.tones(2).click();

    m = "Should contain tone 1 emoji after click on tone 2";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m)['true'];

    m = "Should not contain emoji of other tones after click on tone 2";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m + ' (trying toneless)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m + ' (trying tone 1)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m + ' (trying tone 3)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m + ' (trying tone 4)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m + ' (trying tone 5)')['false'];

    component.tones(3).click();

    m = "Should contain tone 1 emoji after click on tone 3";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m)['true'];

    m = "Should not contain emoji of other tones after click on tone 3";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m + ' (trying toneless)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m + ' (trying tone 1)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m + ' (trying tone 2)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m + ' (trying tone 4)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m + ' (trying tone 5)')['false'];

    component.tones(4).click();

    m = "Should contain tone 1 emoji after click on tone 4";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m)['true'];

    m = "Should not contain emoji of other tones after click on tone 4";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m + ' (trying toneless)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m + ' (trying tone 1)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m + ' (trying tone 2)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m + ' (trying tone 3)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m + ' (trying tone 5)')['false'];

    component.tones(5).click();

    m = "Should contain tone 1 emoji after click on tone 5";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m)['true'];

    m = "Should not contain emoji of other tones after click on tone 5";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m + ' (trying toneless)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m + ' (trying tone 1)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m + ' (trying tone 2)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m + ' (trying tone 3)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m + ' (trying tone 4)')['false'];

    component.tones(0).click();

    m = "Should contain toneless emoji after clicking on tone 0";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v:"]'), m)['true'];

    m = "Should not contain toned emoji after clicking on tone 0";
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone1:"]'), m + ' (trying tone 1)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone2:"]'), m + ' (trying tone 2)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone3:"]'), m + ' (trying tone 3)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone4:"]'), m + ' (trying tone 4)')['false'];
    expect(component.contains('.eeo-emojiPicker-category-emoji-emojo[title^=":v_tone5:"]'), m + ' (trying tone 5)')['false'];
  }));

  (0, _emberQunit.test)('it should filter emoji', (0, _emberCliChaiQunit.withChai)(function callee$0$0(expect) {
    var actionSpy;
    return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          actionSpy = _sinon['default'].spy();

          this.setProperties({ actionSpy: actionSpy });

          this.render(Ember.HTMLBars.template({
            'id': 'Nak4qoYH',
            'block': '{"statements":[["append",["helper",["emoji-picker"],null,[["selectAction"],[["helper",["action"],[["get",[null]],["get",["actionSpy"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
            'meta': {}
          }));

          m = "Initially should contain 1369 emoji";
          expect(component.emoji().filterBy('isVisible')).length(1369);

          component.filterInput.fill("fo");
          context$1$0.next = 8;
          return regeneratorRuntime.awrap((0, _emberTestHelpersWait['default'])());

        case 8:

          m = "Should contain 93 emoji after filling 'fo' into search field";
          expect(component.emoji().filterBy('isVisible')).length(93);

        case 10:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
  }));

  (0, _emberQunit.test)('it should trigger an action when tone is changed', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var toneActionSpy = _sinon['default'].spy();
    this.setProperties({ toneActionSpy: toneActionSpy, dummyAction: function dummyAction() {} });

    this.render(Ember.HTMLBars.template({
      'id': 'U1tLBt3Y',
      'block': '{"statements":[["append",["helper",["emoji-picker"],null,[["selectAction","toneSelectAction"],[["helper",["action"],[["get",[null]],["get",["dummyAction"]]],null],["helper",["action"],[["get",[null]],["get",["toneActionSpy"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    component.tones(3).click();

    m = "Action should've been called once";
    expect(toneActionSpy.calledOnce, m).ok;

    m = "Action should've been called with '3'";
    expect(toneActionSpy.calledWith('3'), m).ok;

    component.tones(3).click();

    m = "Action should not be called again if skin tone isn't changed.";
    expect(toneActionSpy.calledOnce, m).ok;
  }));
});
define('dummy/tests/integration/components/emoji-picker-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/emoji-picker-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/emoji-picker-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/page-object', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  exports.attribute = _emberCliPageObject.attribute;
  exports.clickOnText = _emberCliPageObject.clickOnText;
  exports.clickable = _emberCliPageObject.clickable;
  exports.collection = _emberCliPageObject.collection;
  exports.contains = _emberCliPageObject.contains;
  exports.count = _emberCliPageObject.count;
  exports.create = _emberCliPageObject.create;
  exports.fillable = _emberCliPageObject.fillable;
  exports.selectable = _emberCliPageObject.fillable;
  exports.hasClass = _emberCliPageObject.hasClass;
  exports.is = _emberCliPageObject.is;
  exports.isHidden = _emberCliPageObject.isHidden;
  exports.isVisible = _emberCliPageObject.isVisible;
  exports.notHasClass = _emberCliPageObject.notHasClass;
  exports.property = _emberCliPageObject.property;
  exports.text = _emberCliPageObject.text;
  exports.triggerable = _emberCliPageObject.triggerable;
  exports.value = _emberCliPageObject.value;
  exports.visitable = _emberCliPageObject.visitable;
  exports['default'] = {
    attribute: _emberCliPageObject.attribute,
    clickOnText: _emberCliPageObject.clickOnText,
    clickable: _emberCliPageObject.clickable,
    collection: _emberCliPageObject.collection,
    contains: _emberCliPageObject.contains,
    count: _emberCliPageObject.count,
    create: _emberCliPageObject.create,
    fillable: _emberCliPageObject.fillable,
    hasClass: _emberCliPageObject.hasClass,
    is: _emberCliPageObject.is,
    isHidden: _emberCliPageObject.isHidden,
    isVisible: _emberCliPageObject.isVisible,
    notHasClass: _emberCliPageObject.notHasClass,
    property: _emberCliPageObject.property,
    selectable: _emberCliPageObject.fillable,
    text: _emberCliPageObject.text,
    triggerable: _emberCliPageObject.triggerable,
    value: _emberCliPageObject.value,
    visitable: _emberCliPageObject.visitable
  };
  Object.defineProperty(exports, 'buildSelector', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.buildSelector;
    }
  });
  Object.defineProperty(exports, 'findElementWithAssert', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElementWithAssert;
    }
  });
  Object.defineProperty(exports, 'findElement', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.findElement;
    }
  });
  Object.defineProperty(exports, 'getContext', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.getContext;
    }
  });
  Object.defineProperty(exports, 'fullScope', {
    enumerable: true,
    get: function get() {
      return _emberCliPageObject.fullScope;
    }
  });
});
define('dummy/tests/pages/components/emoji-picker', ['exports', 'ember-cli-page-object', 'dummy/tests/helpers/page-object/component'], function (exports, _emberCliPageObject, _dummyTestsHelpersPageObjectComponent) {
  exports['default'] = (0, _dummyTestsHelpersPageObjectComponent['default'])('.eeo-emojiPicker', {
    emoji: (0, _emberCliPageObject.collection)({
      itemScope: '.eeo-emojiPicker-category-emoji-emojo',
      item: (0, _dummyTestsHelpersPageObjectComponent['default'])()
    }),

    categories: (0, _emberCliPageObject.collection)({
      itemScope: '.eeo-emojiPicker-category',
      item: (0, _dummyTestsHelpersPageObjectComponent['default'])({
        title: (0, _dummyTestsHelpersPageObjectComponent['default'])('.eeo-emojiPicker-category-title'),
        emoji: (0, _emberCliPageObject.collection)({
          scope: '.eeo-emojiPicker-category-emoji',
          itemScope: '.eeo-emojiPicker-category-emoji-emojo',
          item: (0, _dummyTestsHelpersPageObjectComponent['default'])()
        })
      })
    }),

    tones: (0, _emberCliPageObject.collection)({
      scope: '.eeo-emojiPicker-tones',
      itemScope: '.eeo-emojiPicker-tone',
      item: (0, _dummyTestsHelpersPageObjectComponent['default'])()
    }),

    filterInput: (0, _dummyTestsHelpersPageObjectComponent['default'])('.eeo-emojiPicker-filter-input')
  });
});
define('dummy/tests/pages/components/emoji-picker.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - pages/components/emoji-picker.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pages/components/emoji-picker.js should pass ESLint.\n');
  });
});
define('dummy/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/helpers/inject-emoji-test', ['exports', 'dummy/helpers/inject-emoji', 'qunit', 'ember-cli-chai/qunit', 'ember-string', 'ember-string-ishtmlsafe-polyfill', 'ember-get-config'], function (exports, _dummyHelpersInjectEmoji, _qunit, _emberCliChaiQunit, _emberString, _emberStringIshtmlsafePolyfill, _emberGetConfig) {

  (0, _qunit.module)('Unit | Helper | inject emoji', {
    beforeEach: function beforeEach() {
      this.subject = _dummyHelpersInjectEmoji['default'].create();
    },

    afterEach: function afterEach() {
      delete _emberGetConfig['default']['ember-emojione'];
    }
  });

  var m = undefined;

  (0, _qunit.test)('it should inject emoji into a simple string', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var inputStr = "<p>Foo :scream_cat: 🤓 <span>Bar :)</span></p>";
    var expected = "<p>Foo <span class=\"emojione emojione-1f640\" title=\":scream_cat:\">🙀</span> <span class=\"emojione emojione-1f913\" title=\":nerd_face:\">🤓</span> <span>Bar :)</span></p>";
    var result = this.subject.compute([inputStr]);

    m = "Result should contain emoji";
    expect(result, m).equal(expected);
  }));

  (0, _qunit.test)('it should inject emoji into an html-safe string, returning an html-safe string', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var inputStr = (0, _emberString.htmlSafe)("<p>Foo :scream_cat: 🤓 <span>Bar :)</span></p>");
    var expected = "<p>Foo <span class=\"emojione emojione-1f640\" title=\":scream_cat:\">🙀</span> <span class=\"emojione emojione-1f913\" title=\":nerd_face:\">🤓</span> <span>Bar :)</span></p>";
    var result = this.subject.compute([inputStr]);

    m = "Result should contain emoji";
    expect(result.toString(), m).equal(expected);

    m = "Result should be html-safe";
    expect((0, _emberStringIshtmlsafePolyfill['default'])(result), m)['true'];
  }));

  (0, _qunit.test)('it should respect emojione settings from env', (0, _emberCliChaiQunit.withChai)(function (expect) {
    _emberGetConfig['default']['ember-emojione'] = {
      emojione: {
        imagePathSVG: 'SVG.svg',
        imageType: 'svg',
        imageTitleTag: false,
        unicodeAlt: false,
        ascii: true
      }
    };

    var inputStr = "<p>Foo :scream_cat: 🤓 <span>Bar :)</span></p>";
    var expected = "<p>Foo <object class=\"emojione\" data=\"SVG.svg1f640.svg?v=2.2.7\" type=\"image/svg+xml\" standby=\":scream_cat:\">:scream_cat:</object> <img class=\"emojione\" alt=\":nerd_face:\"  src=\"SVG.svg1f913.svg?v=2.2.7\"/> <span>Bar :)</span></p>";
    var result = this.subject.compute([inputStr], { emojione: { sprites: false } });

    expect(result).equal(expected);
  }));

  (0, _qunit.test)('it should respect emojione settings from named argument `emojione`', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var options = {
      emojione: {
        imagePathSVG: 'SVGLOL',
        imageType: 'svg',
        imageTitleTag: false,
        sprites: false,
        unicodeAlt: false,
        ascii: true
      }
    };

    var inputStr = "<p>Foo :scream_cat: 🤓 <span>Bar :)</span></p>";
    var expected = "<p>Foo <object class=\"emojione\" data=\"SVGLOL1f640.svg?v=2.2.7\" type=\"image/svg+xml\" standby=\":scream_cat:\">:scream_cat:</object> <img class=\"emojione\" alt=\":nerd_face:\"  src=\"SVGLOL1f913.svg?v=2.2.7\"/> <span>Bar :)</span></p>";
    var result = this.subject.compute([inputStr], options);

    expect(result).equal(expected);
  }));

  (0, _qunit.test)('use from JS', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var inputStr = ":D";
    var options = { emojione: { ascii: true } };
    var expected = "<span class=\"emojione emojione-1f603\"  title=\":D\">😃</span>";
    var result = (0, _dummyHelpersInjectEmoji.injectEmoji)(inputStr, options);

    expect(result).equal(expected);
  }));

  (0, _qunit.test)('it should parse code blocks', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var inputStr = "<p>Foo :scream_cat: 🤓 <em>Bar :)</em> <code>some :pig_nose: code</code></p>\n<pre><code class=\"language-js\">\nasdf :crocodile: asdf\n</code></pre>";
    var expected = "<p>Foo <span class=\"emojione emojione-1f640\" title=\":scream_cat:\">🙀</span> <span class=\"emojione emojione-1f913\" title=\":nerd_face:\">🤓</span> <em>Bar :)</em> <code>some <span class=\"emojione emojione-1f43d\" title=\":pig_nose:\">🐽</span> code</code></p>\n<pre><code class=\"language-js\">\nasdf <span class=\"emojione emojione-1f40a\" title=\":crocodile:\">🐊</span> asdf\n</code></pre>";
    var options = { regexToSkip: false };
    var result = this.subject.compute([inputStr], options);

    expect(result).equal(expected);
  }));

  (0, _qunit.test)('it should ignore code blocks', (0, _emberCliChaiQunit.withChai)(function (expect) {
    var inputStr = "<p>Foo :scream_cat: 🤓 <em>Bar :)</em> <code>some :pig_nose: code</code></p>\n<pre><code class=\"language-js\">\nasdf :crocodile: asdf\n</code></pre>";
    var expected = "<p>Foo <span class=\"emojione emojione-1f640\" title=\":scream_cat:\">🙀</span> <span class=\"emojione emojione-1f913\" title=\":nerd_face:\">🤓</span> <em>Bar :)</em> <code>some :pig_nose: code</code></p>\n<pre><code class=\"language-js\">\nasdf :crocodile: asdf\n</code></pre>";
    var result = this.subject.compute([inputStr]);

    expect(result).equal(expected);
  }));

  (0, _qunit.test)('edge cases', (0, _emberCliChaiQunit.withChai)(function (expect) {
    m = "Empty string";
    expect(this.subject.compute(['']), m).equal('');

    m = "`false`";
    expect(this.subject.compute([null]), m).equal('');

    m = "`null`";
    expect(this.subject.compute([null]), m).equal('');

    m = "`undefined` 1";
    expect(this.subject.compute([undefined]), m).equal('');

    m = "`undefined` 2";
    expect(this.subject.compute([]), m).equal('');

    m = "number";
    expect(this.subject.compute([2]), m).equal('2');
  }));
});
/*, skip*/
define('dummy/tests/unit/helpers/inject-emoji-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/inject-emoji-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/inject-emoji-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/emoji-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:emoji', 'Unit | Service | emoji', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('dummy/tests/unit/services/emoji-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/emoji-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/emoji-test.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
