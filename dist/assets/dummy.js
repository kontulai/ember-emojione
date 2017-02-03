"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember-application', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberApplication, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _emberApplication['default'].extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/auto-focus', ['exports', 'ember-auto-focus/components/auto-focus'], function (exports, _emberAutoFocusComponentsAutoFocus) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAutoFocusComponentsAutoFocus['default'];
    }
  });
});
define('dummy/components/click-outside', ['exports', 'ember-click-outside/components/click-outside'], function (exports, _emberClickOutsideComponentsClickOutside) {
  exports['default'] = _emberClickOutsideComponentsClickOutside['default'];
});
define('dummy/components/emoji-picker', ['exports', 'ember-emojione/components/emoji-picker'], function (exports, _emberEmojioneComponentsEmojiPicker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneComponentsEmojiPicker['default'];
    }
  });
});
define('dummy/components/emoji-picker/category', ['exports', 'ember-emojione/components/emoji-picker/category'], function (exports, _emberEmojioneComponentsEmojiPickerCategory) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneComponentsEmojiPickerCategory['default'];
    }
  });
});
define('dummy/components/emoji-picker/label', ['exports', 'ember-emojione/components/emoji-picker/label'], function (exports, _emberEmojioneComponentsEmojiPickerLabel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneComponentsEmojiPickerLabel['default'];
    }
  });
});
define('dummy/components/emoji-picker/tone', ['exports', 'ember-emojione/components/emoji-picker/tone'], function (exports, _emberEmojioneComponentsEmojiPickerTone) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneComponentsEmojiPickerTone['default'];
    }
  });
});
define('dummy/components/scroll-to', ['exports', 'ember-scroll-to-mk2/components/scroll-to'], function (exports, _emberScrollToMk2ComponentsScrollTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberScrollToMk2ComponentsScrollTo['default'];
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember-controller', 'ember-computed', 'ember-string', 'ember-runloop', 'jquery'], function (exports, _emberController, _emberComputed, _emberString, _emberRunloop, _jquery) {
  exports['default'] = _emberController['default'].extend({
    inputStr: 'OMG! :scream:',
    isPickerVisible: false,

    inputStrHtmlSafe: (0, _emberComputed['default'])('inputStr', function () {
      var inputStr = this.get('inputStr');
      return (0, _emberString.htmlSafe)(inputStr);
    }),

    actions: {
      closeEmojiPicker: function closeEmojiPicker() {
        this.set("isPickerVisible", false);
        (0, _jquery['default'])("textarea").focus();
      },

      openEmojiPicker: function openEmojiPicker() {
        var _this = this;

        if (this.get("isPickerVisible")) return;

        (0, _emberRunloop.next)(function () {
          _this.set("isPickerVisible", true);
          (0, _emberRunloop.next)(function () {
            return (0, _jquery['default'])(".eeo-emojiPicker-filter-input").focus();
          });
        });
      },

      selectEmoji: function selectEmoji(emojo) {
        var text = this.get('inputStr') + emojo.shortname;
        this.set('inputStr', text);
      }
    }
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/components/emoji-picker.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/components/emoji-picker.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/components/emoji-picker.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/components/emoji-picker/category.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/components/emoji-picker/category.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/components/emoji-picker/category.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/components/emoji-picker/label.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/components/emoji-picker/label.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/components/emoji-picker/label.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/components/emoji-picker/tone.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/components/emoji-picker/tone.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/components/emoji-picker/tone.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/cp-macros/template-string.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/cp-macros/template-string.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/cp-macros/template-string.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/helpers/inject-emoji.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/helpers/inject-emoji.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/helpers/inject-emoji.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/services/emoji.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/services/emoji.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/services/emoji.js should pass ESLint.\n');
  });
});
define('dummy/ember-emojione/tests/modules/ember-emojione/utils/constants.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-emojione/utils/constants.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-emojione/utils/constants.js should pass ESLint.\n');
  });
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/inject-emoji', ['exports', 'ember-emojione/helpers/inject-emoji'], function (exports, _emberEmojioneHelpersInjectEmoji) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneHelpersInjectEmoji['default'];
    }
  });
  Object.defineProperty(exports, 'injectEmoji', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneHelpersInjectEmoji.injectEmoji;
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember-router', 'dummy/config/environment'], function (exports, _emberRouter, _dummyConfigEnvironment) {

  var MyRouter = _emberRouter['default'].extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  MyRouter.map(function () {});

  exports['default'] = MyRouter;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/emoji', ['exports', 'ember-emojione/services/emoji'], function (exports, _emberEmojioneServicesEmoji) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberEmojioneServicesEmoji['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fH6ZjKdd", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"ember-emojione demo\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/Deveo/ember-emojione\"],[\"flush-element\"],[\"text\",\"Source on GitHub\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Output\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"inject-emoji\"],[[\"get\",[\"inputStrHtmlSafe\"]]],null],true],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Input\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\"],[[\"get\",[\"inputStr\"]]]]],false],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"togglePickerWrapper\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"toggleEmoji\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"openEmojiPicker\"]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"inject-emoji\"],[\":smile:\"],null],true],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n    \"],[\"append\",[\"helper\",[\"emoji-picker\"],null,[[\"selectAction\",\"closeAction\",\"isVisible\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"selectEmoji\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"closeEmojiPicker\"],null],[\"get\",[\"isPickerVisible\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Source\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"inputStr: 'OMG! :scream:',\\n\\ninputStrHtmlSafe: Ember.computed('inputStr', function () {\\n  return Ember.String.htmlSafe(\\n    this.get('inputStr')\\n  );\\n})\\n\\n\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n{{textarea value=inputStr}}\\n\\n{{{inject-emoji inputStrHtmlSafe}}}\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-emojione","version":"0.3.1+7a2cf061"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
