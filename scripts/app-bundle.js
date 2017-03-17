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

      config.map([{ route: ['viewOrg', 'viewOrg'], name: 'viewOrg',
        moduleId: './components/viewOrg/viewOrg', nav: true, title: 'View Organization' }, { route: 'createOrg', name: 'createOrg',
        moduleId: './components/createOrg/createOrg', nav: true, title: 'Create Organization' }]);

      this.router = router;
    };

    function App() {
      _classCallCheck(this, App);

      this.messages = {
        color: 'lightslategray',
        'font-size': '1.2em',
        'text-align': 'center'

      };
      this.pStyle = {
        color: 'lightslategray',
        'font-size': '1.2em',
        'text-align': 'center',
        'padding-top': '12px',
        'font-family': 'arial'

      };
      this.emptyNav = {
        'background-color': '#fff',
        'height': '110px',
        'width': '100%',
        'border-bottom': '1px solid lightgray'
      };
      this.sideNav = {
        'background-color': '#fff',

        'height': '50px',
        'width': '200px',
        'margin-top': '-1px',
        'border-right': '1px solid lightgray',
        'border-bottom': '1px solid lightgray',
        'border-top': '1px solid lightgray',
        'display': 'block'
      };
      this.sideNavActive = {
        'background-color': 'rgb(243,243,243)',
        'height': '50px',
        'width': '200px',

        'border-left': '4px solid #8BC34A',

        'display': 'block'
      };
      this.sideNavI = {
        'margin-right': '10px'

      };
      this.mainPage = {
        'height': '500px',
        'width': '80%',
        'background-color': 'white',
        'margin-top': '20px',
        'margin-left': '-30px',
        'border': '1px solid lightgray',

        'border-radius': '3px'
      };
      this.navHeaderActive = {
        'height': '50px',
        'width': '150px',
        'background-color': '#fff',
        'border': 'none',
        'border-left': '2px solid lightgray',
        'box-shadow': '0 10px lightgray',
        'margin-right': '20px',
        'outline': 'none'

      };

      this.heading = "View Organization";
      this.heading2 = "Create Organization";
      this.heading3 = "View Organization2";
      this.organizations = [];
      this.orgName = '';
      this.orgAddress = '';
      this.orgAddress2 = '';
      this.orgCity = '';
      this.orgState = '';
      this.orgZipCode = '';
    }

    App.prototype.addOrg = function addOrg() {
      if (this.orgName) {
        this.organizations.push(new _organization.Organization(this.orgName, this.orgAddress, this.orgAddress2, this.orgCity, this.orgState, this.orgZipCode));
        console.log(this.organizations);
        this.orgName = '';
        this.orgAddress = '';
        this.orgAddess2 = '';
        this.orgCity = '';
        this.orgState = '';
        this.orgZipCode = '';
      }
      var organizations = this.organizations;
      localStorage.setItem("organizations", JSON.stringify(organizations));
      var retrievedData = localStorage.getItem("organizations");
      var organization2 = JSON.parse(retrievedData);
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

    var Organization = exports.Organization = function Organization(name, address, address2, city, state, zipCode) {
        _classCallCheck(this, Organization);

        this.name = name;
        this.address = address;
        this.address2 = address2;
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><form style=\"height:60px;width:100%;background-color:#8bc34a;margin-top:0\" class=\"navbar-form navbar-left\" role=\"search\"><div style=\"margin-top:5px\" class=\"form-group\"><img src=\"http://i.imgur.com/hefSUNd.png\" height=\"50\"> <input style=\"margin-left:50px\" type=\"text\" class=\"form-control\" placeholder=\"Search\"></div><button style=\"margin-top:5.5px\" type=\"submit\" class=\"btn btn-default\">Submit</button> <i style=\"font-size:35px;margin-top:13.5px;margin-right:40px;color:#fff\" class=\"fa fa-user-circle nav navbar-nav navbar-right\" aria-hidden=\"true\"></i></form><div css.bind=\"emptyNav\"><div class=\"sideNav\" style=\"background-color:#fff;float:left;height:50px;width:200px;margin-top:-8px;border-right:1px solid #d3d3d3;border-bottom:1px solid #d3d3d3\"><p css.bind=\"messages\"><i style=\"color:#fff;background-color:orange;border-radius:100%;height:30px;width:31px;margin-top:10px;padding-top:6px;margin-right:10px\" class=\"fa fa-bell\" aria-hidden=\"true\"></i>1 Messages</p></div></div><div class=\"row\"><div class=\"col-md-2 col-sm-2 col-xs-2\"><div css.bind=\"sideNav\"><p css.bind=\"pStyle\">Dashboard</p></div><div css.bind=\"sideNav\"><p css.bind=\"pStyle\">Processes</p></div><div css.bind=\"sideNavActive\"><p css.bind=\"pStyle\">Organizations</p></div><div css.bind=\"sideNav\"><p css.bind=\"pStyle\">People</p></div></div><div class=\"col-md-10 col-sm-10 col-xs-10\"></div><router-view></router-view></div></template>"; });
define('text!styles/styles.css', ['module'], function(module) { module.exports = "body {\r\n    background-color: blue;\r\n}\r\n\r\n.myElement {\r\n   width:100px;\r\n   height: 100px;\r\n   border:1px solid blue;\r\n}\r\n\r\n\r\n\r\n\r\n"; });
define('text!components/viewOrg/viewOrg.html', ['module'], function(module) { module.exports = "<template><div class=\"col-md-2\"></div><div class=\"col-md-10\"><div css.bind=\"mainPage\"><ul style=\"padding:0\"><li style=\"display:inline\"><a href=\"/#/viewOrg\">View Organization</a> <button css.bind=\"navHeaderActive\"><a href=\"/#/createOrg\">Create Organization</a></button></li></ul><h2>${heading}</h2><ul><li id=\"element\" repeat.for=\"organization of organizations\">${organization.name}<br>${organization.address}<br>${organization.city} ${organization.state} ${organization.zipCode}<br><button click.trigger=\"removeOrg(organization)\">Remove</button></li></ul></div></div></template>"; });
define('text!components/createOrg/createOrg.html', ['module'], function(module) { module.exports = "<template><div class=\"col-md-2\"></div><div class=\"col-md-10\"><div css.bind=\"mainPage\"><ul style><li style=\"display:inline;margin-right:20px\" repeat.for=\"row of router.navigation\"><button css.bind=\"navHeaderActive\"><a href.bind=\"row.href\">${row.title}</a></button></li></ul><h1>${heading2}</h1><form submit.trigger=\"addOrg()\"><input type=\"text\" placeholder=\"Name\" value.bind=\"orgName\"><br><br><input type=\"text\" placeholder=\"Address line 1\" value.bind=\"orgAddress\"><br><br><input type=\"text\" placeholder=\"Address line 2\" value.bind=\"orgAddress2\"><br><br><input type=\"text\" placeholder=\"city\" value.bind=\"orgCity\"><select value.bind=\"orgState\"><option value=\"Not Defined\"></option><option value=\"AL\">Alabama</option><option value=\"AK\">Alaska</option><option value=\"AZ\">Arizona</option><option value=\"AR\">Arkansas</option><option value=\"CA\">California</option><option value=\"CO\">Colorado</option><option value=\"CT\">Connecticut</option><option value=\"DE\">Delaware</option><option value=\"DC\">District Of Columbia</option><option value=\"FL\">Florida</option><option value=\"GA\">Georgia</option><option value=\"HI\">Hawaii</option><option value=\"ID\">Idaho</option><option value=\"IL\">Illinois</option><option value=\"IN\">Indiana</option><option value=\"IA\">Iowa</option><option value=\"KS\">Kansas</option><option value=\"KY\">Kentucky</option><option value=\"LA\">Louisiana</option><option value=\"ME\">Maine</option><option value=\"MD\">Maryland</option><option value=\"MA\">Massachusetts</option><option value=\"MI\">Michigan</option><option value=\"MN\">Minnesota</option><option value=\"MS\">Mississippi</option><option value=\"MO\">Missouri</option><option value=\"MT\">Montana</option><option value=\"NE\">Nebraska</option><option value=\"NV\">Nevada</option><option value=\"NH\">New Hampshire</option><option value=\"NJ\">New Jersey</option><option value=\"NM\">New Mexico</option><option value=\"NY\">New York</option><option value=\"NC\">North Carolina</option><option value=\"ND\">North Dakota</option><option value=\"OH\">Ohio</option><option value=\"OK\">Oklahoma</option><option value=\"OR\">Oregon</option><option value=\"PA\">Pennsylvania</option><option value=\"RI\">Rhode Island</option><option value=\"SC\">South Carolina</option><option value=\"SD\">South Dakota</option><option value=\"TN\">Tennessee</option><option value=\"TX\">Texas</option><option value=\"UT\">Utah</option><option value=\"VT\">Vermont</option><option value=\"VA\">Virginia</option><option value=\"WA\">Washington</option><option value=\"WV\">West Virginia</option><option value=\"WI\">Wisconsin</option><option value=\"WY\">Wyoming</option></select><input type=\"text\" placeholder=\"Zip Code\" value.bind=\"orgZipCode\"><br><br><button onclick='location.href=\"/#/viewOrg\"' type=\"submit\">Add</button></form></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map