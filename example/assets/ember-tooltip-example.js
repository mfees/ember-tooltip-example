"use strict";



define('ember-tooltip-example/app', ['exports', 'ember-tooltip-example/resolver', 'ember-load-initializers', 'ember-tooltip-example/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-tooltip-example/components/ember-popover', ['exports', 'ember-tooltip-example/config/environment', 'ember-tooltips/components/ember-popover'], function (exports, _environment, _emberPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let _animationDuration = _environment.default.environment === 'test' ? 0 : 200;

  exports.default = _emberPopover.default.extend({ _animationDuration });
});
define('ember-tooltip-example/components/ember-tooltip', ['exports', 'ember-tooltip-example/config/environment', 'ember-tooltips/components/ember-tooltip'], function (exports, _environment, _emberTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let _animationDuration = _environment.default.environment === 'test' ? 0 : 200;

  exports.default = _emberTooltip.default.extend({ _animationDuration });
});
define('ember-tooltip-example/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-tooltip-example/helpers/app-version', ['exports', 'ember-tooltip-example/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;


  const {
    APP: {
      version
    }
  } = _environment.default;

  function appVersion(_, hash = {}) {
    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-tooltip-example/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-tooltip-example/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-tooltip-example/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-tooltip-example/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-tooltip-example/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-tooltip-example/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-tooltip-example/initializers/export-application-global', ['exports', 'ember-tooltip-example/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
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

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("ember-tooltip-example/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-tooltip-example/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-tooltip-example/router', ['exports', 'ember-tooltip-example/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {});

  exports.default = Router;
});
define('ember-tooltip-example/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("ember-tooltip-example/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NctxRurF", "block": "{\"symbols\":[],\"statements\":[[6,\"ul\"],[8],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n      Cats\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n      Cats\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n      Cats\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n      Cats\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n      Cats\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n      Cats\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"li\"],[8],[0,\"\\n    \"],[6,\"a\"],[10,\"href\",\"#\"],[8],[0,\"\\n      Cats\\n      \"],[1,[26,\"ember-tooltip\",null,[[\"text\",\"side\"],[\"Meow\",\"right\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-tooltip-example/templates/application.hbs" } });
});


define('ember-tooltip-example/config/environment', [], function() {
  var prefix = 'ember-tooltip-example';
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

});

if (!runningTests) {
  require("ember-tooltip-example/app")["default"].create({"name":"ember-tooltip-example","version":"0.0.0+c66bd45d"});
}
//# sourceMappingURL=ember-tooltip-example.map
