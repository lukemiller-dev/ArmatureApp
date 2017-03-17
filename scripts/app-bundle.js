define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('organization',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Organization = exports.Organization = function Organization(name, address, city, state, zipCode) {
        _classCallCheck(this, Organization);

        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/createOrg/createOrg',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CreateOrg = exports.CreateOrg = function CreateOrg() {
        _classCallCheck(this, CreateOrg);
    };
});
define('components/viewOrg/viewOrg',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ViewOrg = exports.ViewOrg = function ViewOrg() {
    _classCallCheck(this, ViewOrg);
  };
});
define('app',['exports', './organization', './components/createOrg/createOrg', './components/viewOrg/viewOrg', 'aurelia-framework'], function (exports, _organization, _createOrg, _viewOrg, _aureliaFramework) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.App = undefined;

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var App = exports.App = function () {
      App.prototype.configureRouter = function configureRouter(config, router) {
         config.title = 'Aurelia';

         config.map([{ route: ['', 'home'], name: 'home',
            moduleId: './components/home/home', nav: true, title: 'Home' }, { route: 'createOrg', name: 'createOrg',
            moduleId: './components/createOrg/createOrg', nav: true, title: 'Create Organization' }, { route: ['viewOrg', 'viewOrg'], name: 'viewOrg',
            moduleId: './components/viewOrg/viewOrg', nav: true, title: 'View Organization' }]);

         this.router = router;
      };

      function App() {
         _classCallCheck(this, App);

         this.heading = "View Organization";
         this.heading2 = "Create Organization";
         this.heading3 = "View Organization2";
         this.organizations = [];
         this.orgName = '';
      }

      App.prototype.addOrg = function addOrg() {
         if (this.orgName) {
            this.organizations.push(new _organization.Organization(this.orgName));
            console.log(this.organizations);
            this.orgName = '';
         }
      };

      App.prototype.removeOrg = function removeOrg(organization) {
         var index = this.organizations.indexOf(organization);
         if (index !== -1) {
            this.organizations.splice(index, 1);
         }
      };

      return App;
   }();
});
define('components/viewOrg2/viewOrg2',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ViewOrg2 = exports.ViewOrg2 = function ViewOrg2() {
        _classCallCheck(this, ViewOrg2);
    };
});
define('components/home/viewOrg',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ViewOrg = exports.ViewOrg = function ViewOrg() {
        _classCallCheck(this, ViewOrg);

        this.header = "View Organization";
        this.organizations = [];
        this.orgName = '';
    };

    var StyleData = exports.StyleData = function StyleData() {
        _classCallCheck(this, StyleData);

        this.styleString = 'color: red; background-color: blue';

        this.styleObject = {
            color: 'red',
            'background-color': 'blue'
        };
    };
});
define('components/home/home',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ViewOrg = exports.ViewOrg = function ViewOrg() {
        _classCallCheck(this, ViewOrg);

        this.header = "View Organization";
        this.organizations = [];
        this.orgName = '';
    };

    var StyleData = exports.StyleData = function StyleData() {
        _classCallCheck(this, StyleData);

        this.styleString = 'color: red; background-color: blue';

        this.styleObject = {
            color: 'red',
            'background-color': 'blue'
        };
    };
});
define('components/viewOrg/viewOrg2',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ViewOrg2 = exports.ViewOrg2 = function ViewOrg2() {
        _classCallCheck(this, ViewOrg2);
    };
});
define('text!styles/styles.css', ['module'], function(module) { module.exports = ".myElement {\r\n   width:100px;\r\n   height: 100px;\r\n   border:1px solid blue;\r\n}\r\n\r\n\r\n"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><nav><ul><li repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\">${row.title}</a></li></ul></nav><router-view></router-view></template>"; });
define('text!components/viewOrg/viewOrg.html', ['module'], function(module) { module.exports = "<template><h2>${heading3}</h2><ul><li id=\"element\" repeat.for=\"organization of organizations\">${organization.name}</li></ul></template>"; });
define('text!components/createOrg/createOrg.html', ['module'], function(module) { module.exports = "<template><h1>${heading2}</h1><form submit.trigger=\"addOrg()\"><input type=\"text\" value.bind=\"orgName\"> <button type=\"submit\">Add</button></form></template>"; });
define('text!components/viewOrg2/viewOrg2.html', ['module'], function(module) { module.exports = "<template><h2>${heading3}</h2><ul><li repeat.for=\"organization of organizations\">${organization.name}</li></ul></template>"; });
define('text!components/home/viewOrg.html', ['module'], function(module) { module.exports = "<template><h1>${heading}</h1></template>"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><h1>${heading}</h1></template>"; });
define('text!components/viewOrg/viewOrg2.html', ['module'], function(module) { module.exports = "<template><h2>${heading3}</h2><ul><li repeat.for=\"organization of organizations\">${organization.name}</li></ul></template>"; });
//# sourceMappingURL=app-bundle.js.map