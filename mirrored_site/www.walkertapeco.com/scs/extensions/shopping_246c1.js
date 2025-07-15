function getSearchURLParams(url)
{
    if(typeof url !== "string") {
        return {};
    }
   var urlSplit = url.split("?");
   if(urlSplit.length < 2) {
       return {};
   }
   return _.object(_.map(urlSplit[1].split("&"), function(params) {
       return params.split("=");
   }));
}
var jQuery = require("jQuery");
function getSuitelet(script, deploy) {
   return {"customscript_ns_sc_ext_sl_advancedsignup:customdeploy_ns_sc_ext_sl_advancedsignup":"/app/site/hosting/scriptlet.nl?script=1604&deploy=1&compid=8359882&ns-at=AAEJ7tMQBgxNU0b8VtoRvtC17Py1PxALRArtqJ50StAKMg49aWM","customscript_ns_sc_ext_sl_newsletter_sp:customdeploy_ns_sc_ext_sl_newsletter_sp":"/app/site/hosting/scriptlet.nl?script=1639&deploy=1&compid=8359882&ns-at=AAEJ7tMQmj20_k1U_7nqvFPryGuNJ7Z-8tlHTRX0COt3yPmS3c4","customscript_ns_sc_sl_contact_us_form:customdeploy_ns_sc_sl_contact_us_form":"/app/site/hosting/scriptlet.nl?script=2035&deploy=1&compid=8359882&ns-at=AAEJ7tMQvmBalRoiAA2Q0dC3rqjIRd_v518pkUDEqxft_SUtHb4","customscript_ns_sc_sl_itembadges:customdeploy_ns_sc_sl_itembadges":"/app/site/hosting/scriptlet.nl?script=1635&deploy=1&compid=8359882&ns-at=AAEJ7tMQIdFVfAyGvTcqspTa7bSt6q7ncJMX3TFYyCeY2m8519k"}[script + ":" + deploy];
}
var xhrFactory = jQuery.ajaxSettings.xhr;
jQuery.ajaxSettings.xhr = function() {
   var xhr = xhrFactory.apply(this, arguments);
   var open = xhr.open;
   xhr.open = function () {
        var url = arguments[1];
        var assocParams = getSearchURLParams(url);
        if(assocParams.hasOwnProperty("script") && assocParams.hasOwnProperty("deploy")) {
            var hashed = getSuitelet(assocParams["script"], assocParams["deploy"]);
            if(hashed) {
                var hashedParams = getSearchURLParams(hashed);
                var keys = Object.keys(assocParams);
                for (var i=0;   i<keys.length; i++) {
                    var key = keys[i];
                    var value = assocParams[key];
                    if(!hashedParams.hasOwnProperty(key))
                    {
                        hashed += "&" + key + "=" + value;
                    }
                }
                arguments[1] = hashed;
            }
        }
        return open.apply(this, arguments);
    }
    return xhr;
}
var extensions = {};
extensions['SuiteCommerce.AdvancedSignUp.1.0.5'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/AdvancedSignUp/1.0.5/' + asset;
};
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Configuration"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Configuration", ["require", "exports", "SuiteCommerce.AdvancedSignUp.Common.Configuration"], function (require, exports, Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccessPointsConfiguration = /** @class */ (function (_super) {
        __extends(AccessPointsConfiguration, _super);
        function AccessPointsConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(AccessPointsConfiguration, "urlPath", {
            get: function () {
                return this.get('advancedsignup.general.urlpath');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessPointsConfiguration, "headerLinkText", {
            get: function () {
                return this.get('advancedsignup.general.headerlinktext');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessPointsConfiguration, "loginFormText", {
            get: function () {
                return this.get('advancedsignup.general.loginformtext');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccessPointsConfiguration, "loginFormLink", {
            get: function () {
                return this.get('advancedsignup.general.loginformlink');
            },
            enumerable: true,
            configurable: true
        });
        return AccessPointsConfiguration;
    }(Configuration_1.Configuration));
    exports.AccessPointsConfiguration = AccessPointsConfiguration;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Header.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Header.View", ["require", "exports", "Backbone", "sc_advancedsignup_header.tpl", "SuiteCommerce.AdvancedSignUp.AccessPoints.Configuration"], function (require, exports, Backbone_1, header, AccessPoints_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HeaderView = /** @class */ (function (_super) {
        __extends(HeaderView, _super);
        function HeaderView(options) {
            var _this = _super.call(this, options) || this;
            // The template of this view uses the same classes as SuiteCommerce header because we are copying the view, we want to keep their styles if they were modified.
            _this.template = header;
            return _this;
        }
        HeaderView.prototype.getContext = function () {
            return {
                registerLink: AccessPoints_Configuration_1.AccessPointsConfiguration.urlPath,
                registerLinkLabel: AccessPoints_Configuration_1.AccessPointsConfiguration.headerLinkText
            };
        };
        return HeaderView;
    }(Backbone_1.View));
    exports.HeaderView = HeaderView;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Header"/>
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Header", ["require", "exports", "SuiteCommerce.AdvancedSignUp.AccessPoints.Header.View"], function (require, exports, AccessPoints_Header_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var layoutComponent = container.getComponent('Layout');
            layoutComponent.addChildView('Header.Profile', function () { return new AccessPoints_Header_View_1.HeaderView(layoutComponent); });
        },
    };
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Login.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Login.View", ["require", "exports", "Backbone", "sc_advancedsignup_login.tpl", "SuiteCommerce.AdvancedSignUp.AccessPoints.Configuration"], function (require, exports, Backbone_1, login, AccessPoints_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoginView = /** @class */ (function (_super) {
        __extends(LoginView, _super);
        function LoginView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = login;
            return _this;
        }
        LoginView.prototype.generateTextAndLink = function () {
            var textAndLink = AccessPoints_Configuration_1.AccessPointsConfiguration.loginFormText;
            textAndLink = textAndLink.replace('[[link]]', "<a class=\"advancedsignup-login-link\" data-touchpoint=\"home\" data-hashtag=\"" + AccessPoints_Configuration_1.AccessPointsConfiguration.urlPath + "\" href=\"#\"> " + AccessPoints_Configuration_1.AccessPointsConfiguration.loginFormLink + " </a>");
            return textAndLink;
        };
        LoginView.prototype.getContext = function () {
            return {
                registrationTextAndLink: this.generateTextAndLink()
            };
        };
        return LoginView;
    }(Backbone_1.View));
    exports.LoginView = LoginView;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Login"/>
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Login", ["require", "exports", "SuiteCommerce.AdvancedSignUp.AccessPoints.Login.View"], function (require, exports, AccessPoints_Login_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var loginRegisterComponent = container.getComponent('LoginRegisterPage');
            loginRegisterComponent.addChildView('Login', function () { return new AccessPoints_Login_View_1.LoginView(loginRegisterComponent); });
        },
    };
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Register.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Register.View", ["require", "exports", "Backbone", "sc_advancedsignup_register.tpl", "SuiteCommerce.AdvancedSignUp.AccessPoints.Configuration"], function (require, exports, Backbone_1, register, AccessPoints_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegisterView = /** @class */ (function (_super) {
        __extends(RegisterView, _super);
        function RegisterView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = register;
            return _this;
        }
        RegisterView.prototype.generateTextAndLink = function () {
            var textAndLink = AccessPoints_Configuration_1.AccessPointsConfiguration.loginFormText;
            textAndLink = textAndLink.replace('[[link]]', "<a class=\"advancedsignup-register-link\" data-touchpoint=\"home\" data-hashtag=\"" + AccessPoints_Configuration_1.AccessPointsConfiguration.urlPath + "\" href=\"#\"> " + AccessPoints_Configuration_1.AccessPointsConfiguration.loginFormLink + " </a>");
            return textAndLink;
        };
        RegisterView.prototype.getContext = function () {
            return {
                registrationTextAndLink: this.generateTextAndLink()
            };
        };
        return RegisterView;
    }(Backbone_1.View));
    exports.RegisterView = RegisterView;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.AccessPoints.Register"/>
define("SuiteCommerce.AdvancedSignUp.AccessPoints.Register", ["require", "exports", "SuiteCommerce.AdvancedSignUp.AccessPoints.Register.View"], function (require, exports, AccessPoints_Register_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var loginRegisterComponent = container.getComponent('LoginRegisterPage');
            loginRegisterComponent.addChildViews(loginRegisterComponent.LRP_VIEW, {
                'Register': {
                    'AdvancedSingUpAccessPoint': {
                        childViewIndex: 1,
                        childViewConstructor: function () { return new AccessPoints_Register_View_1.RegisterView(loginRegisterComponent); }
                    }
                }
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Common.Configuration"/>
define("SuiteCommerce.AdvancedSignUp.Common.Configuration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var environment = null;
    var Configuration = /** @class */ (function () {
        function Configuration() {
        }
        Object.defineProperty(Configuration, "environment", {
            set: function (environmentComponent) {
                environment = environmentComponent;
            },
            enumerable: true,
            configurable: true
        });
        Configuration.get = function (key) {
            if (environment) {
                return environment.getConfig(key);
            }
            console.error('Please set the Environment Component in the Configuration.');
            return null;
        };
        return Configuration;
    }());
    exports.Configuration = Configuration;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Common.InstrumentationHelper"/>
define("SuiteCommerce.AdvancedSignUp.Common.InstrumentationHelper", ["require", "exports", "SuiteCommerce.AdvancedSignUp.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueueNameSuffix = '-AdvancedSignUp';
    var ExtensionVersion = '1.0.5';
    var ComponentArea = 'SC Advanced Sign Up';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (environment) {
            Instrumentation_1.default.initialize({
                environment: environment,
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                }
            });
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Utils"/>
define("SuiteCommerce.AdvancedSignUp.Utils", ["require", "exports", "Utils"], function (require, exports, UtilSC) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.isSingleDomain = function () {
            return UtilSC.isSingleDomain();
        };
        Utils.getCountries = function () {
            return SC.ENVIRONMENT.siteSettings.countries;
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.AdvancedSignUp.Instrumentation.Log", ["require", "exports", "SuiteCommerce.AdvancedSignUp.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Instrumentation.Logger"/>
define("SuiteCommerce.AdvancedSignUp.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.AdvancedSignUp.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] }
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { },
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Instrumentation.MockAppender"/>
define("SuiteCommerce.AdvancedSignUp.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Instrumentation"/>
define("SuiteCommerce.AdvancedSignUp.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.AdvancedSignUp.Instrumentation.Logger", "SuiteCommerce.AdvancedSignUp.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration", ["require", "exports", "SuiteCommerce.AdvancedSignUp.Common.Configuration"], function (require, exports, Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegistrationFormConfiguration = /** @class */ (function (_super) {
        __extends(RegistrationFormConfiguration, _super);
        function RegistrationFormConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RegistrationFormConfiguration, "urlPath", {
            get: function () {
                return this.get('advancedsignup.general.urlpath');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "formFields", {
            get: function () {
                var fields = this.get('advancedsignup.form.fields');
                fields = fields ? fields : [];
                if (fields.length > 0) {
                    fields = fields.map(function (field) {
                        field.internalid = field.internalid.trim();
                        return field;
                    });
                }
                return fields;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "formHeader", {
            get: function () {
                return this.get('advancedsignup.message.formheader');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "formTitle", {
            get: function () {
                return this.get('advancedsignup.message.formtitle');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "formSubTitle", {
            get: function () {
                return this.get('advancedsignup.message.formsubtitle');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "submitButtonLabel", {
            get: function () {
                return this.get('advancedsignup.message.submitbuttonlabel');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "confirmationTitle", {
            get: function () {
                return this.get('advancedsignup.message.confirmationtitle');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "confirmationMessage", {
            get: function () {
                return this.get('advancedsignup.message.confirmationmessage');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "requiredFieldWarning", {
            get: function () {
                return this.get('advancedsignup.message.requiredfieldwarning');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "submitError", {
            get: function () {
                return this.get('advancedsignup.message.submiterror');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "fileTooLarge", {
            get: function () {
                return this.get('advancedsignup.message.filetoolarge');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "country", {
            get: function () {
                return this.get('advancedsignup.form.country');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "marketingSubscription", {
            get: function () {
                return this.get('advancedsignup.form.marketingsubscription');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormConfiguration, "marketingSubscriptionLabel", {
            get: function () {
                return this.get('advancedsignup.form.marketingsubscriptionlabel') || 'Yes, Please sign me up for exclusive offers and promotions';
            },
            enumerable: true,
            configurable: true
        });
        return RegistrationFormConfiguration;
    }(Configuration_1.Configuration));
    exports.RegistrationFormConfiguration = RegistrationFormConfiguration;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Collection", ["require", "exports", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Model", "Backbone"], function (require, exports, RegistrationForm_Field_Model_1, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldCollection = /** @class */ (function (_super) {
        __extends(FieldCollection, _super);
        function FieldCollection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(FieldCollection.prototype, "model", {
            get: function () {
                return RegistrationForm_Field_Model_1.FieldModel;
            },
            enumerable: true,
            configurable: true
        });
        return FieldCollection;
    }(Backbone_1.Collection));
    exports.FieldCollection = FieldCollection;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldModel = /** @class */ (function (_super) {
        __extends(FieldModel, _super);
        function FieldModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(FieldModel.prototype, "internalid", {
            get: function () {
                return this.get('internalid').trim();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldModel.prototype, "label", {
            get: function () {
                return this.get('label').trim();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldModel.prototype, "fieldtype", {
            get: function () {
                return this.get('fieldtype').trim();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldModel.prototype, "placeholder", {
            get: function () {
                return this.get('placeholder').trim();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldModel.prototype, "required", {
            get: function () {
                return this.get('required');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FieldModel.prototype, "pattern", {
            get: function () {
                return this.get('pattern').trim();
            },
            enumerable: true,
            configurable: true
        });
        FieldModel.prototype.setTypeEvaluation = function () {
            var fieldType = this.fieldtype.replace(' ', '');
            this.set('is' + fieldType, true);
        };
        return FieldModel;
    }(Backbone_1.Model));
    exports.FieldModel = FieldModel;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.View", ["require", "exports", "Backbone", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration", "sc_advancedsignup_registrationform_field.tpl", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Model", "SuiteCommerce.AdvancedSignUp.Utils", "underscore"], function (require, exports, Backbone_1, RegistrationForm_Configuration_1, fieldTemplate, RegistrationForm_Model_1, Utils_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FileTypes = [
        'image/png',
        'image/jpeg',
        'application/pdf'
    ];
    var FieldView = /** @class */ (function (_super) {
        __extends(FieldView, _super);
        function FieldView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = fieldTemplate;
            _this.events = {
                'blur input': 'blurEvent',
                'change input[type="file"]': 'manageFile',
                'click *[id^=\'advancedsignup-registrationform-field-clear-\']': 'emptyFile',
            };
            _this.model = options.model;
            _this.parentModel = options.parentModel;
            return _this;
        }
        FieldView.prototype.blurEvent = function (event) {
            var field = this.model.internalid;
            if (this.model.fieldtype !== RegistrationForm_Model_1.FieldTypes.File) {
                this.parentModel.set(field, event.target.value);
                this.parentModel.isValid(field);
            }
        };
        FieldView.prototype.manageFile = function (event) {
            var _this = this;
            if (event.target && event.target.files && event.target.files[0]) {
                this.deleteError(event.target.name);
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(event.target.files[0]);
                reader_1.onload = function () {
                    var acceptedExtension = _this.isExtensionAccepted(event.target.files[0].type);
                    if (acceptedExtension && event.target.files[0].size < 10 * 1000 * 1000) {
                        _this.parentModel.set(event.target.name, reader_1.result);
                        _this.parentModel.isValid(event.target.name);
                    }
                    else if (!acceptedExtension) {
                        _this.emptyFile(event);
                        _this.displayError(event.target.name, 'There was a problem with your file.');
                    }
                    else {
                        _this.emptyFile(event);
                        _this.displayError(event.target.name, RegistrationForm_Configuration_1.RegistrationFormConfiguration.fileTooLarge);
                    }
                };
            }
            else {
                this.emptyFile(event);
            }
        };
        FieldView.prototype.emptyFile = function (event) {
            if (event.target && event.target.name) {
                this.parentModel.set(event.target.name, '');
            }
            else if (event.currentTarget && event.currentTarget.name) {
                this.parentModel.set(event.currentTarget.name, '');
                $("#advancedsignup-registrationform-field-" + event.currentTarget.name).val('');
            }
        };
        FieldView.prototype.displayError = function (field, message) {
            $("[data-input='" + field + "']").append("<p class=\"advancedsignup-registrationform-message-error\">" + message + "</p>");
        };
        FieldView.prototype.deleteError = function (field) {
            $("[data-input='" + field + "'] p.advancedsignup-registrationform-message-error").remove();
        };
        FieldView.prototype.isExtensionAccepted = function (format) {
            return FileTypes.indexOf(format) !== -1;
        };
        FieldView.prototype.setCountriesOptions = function () {
            var siteCountries = Utils_1.Utils.getCountries();
            var formCountries = RegistrationForm_Configuration_1.RegistrationFormConfiguration.country;
            var countryOptions = '';
            if (formCountries.length > 0) {
                formCountries.forEach(function (formCountry) {
                    var foundCountry = _.find(siteCountries, function (country) {
                        return formCountry === country.name;
                    });
                    if (foundCountry) {
                        countryOptions += "<option value=\"" + foundCountry.code + "\">" + foundCountry.name + "</option>";
                    }
                });
            }
            this.model.set('countryOptions', countryOptions);
        };
        FieldView.prototype.setStatesOptions = function () {
            var siteCountries = Utils_1.Utils.getCountries();
            var selectedCountry = $('select[type="country"]').val() || RegistrationForm_Configuration_1.RegistrationFormConfiguration.country[0];
            var stateOptions = '';
            var foundCountry = _.find(siteCountries, function (country) {
                return selectedCountry === country.code || selectedCountry === country.name;
            });
            if (foundCountry && foundCountry.states && foundCountry.states.length > 0) {
                foundCountry.states.forEach(function (state) {
                    stateOptions += "<option value=\"" + state.code + "\">" + state.name + "</option>";
                });
            }
            this.model.set('stateOptions', stateOptions);
        };
        FieldView.prototype.getContext = function () {
            this.model.setTypeEvaluation();
            if (this.model.fieldtype === RegistrationForm_Model_1.FieldTypes.Country) {
                this.setCountriesOptions();
            }
            if (this.model.fieldtype === RegistrationForm_Model_1.FieldTypes.State) {
                this.setStatesOptions();
            }
            return this.model;
        };
        return FieldView;
    }(Backbone_1.View));
    exports.FieldView = FieldView;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.RegistrationForm.Model", ["require", "exports", "Backbone", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration"], function (require, exports, Backbone_1, RegistrationForm_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldTypes;
    (function (FieldTypes) {
        FieldTypes["Heading"] = "Heading";
        FieldTypes["Checkbox"] = "Checkbox";
        FieldTypes["Date"] = "Date";
        FieldTypes["TextInput"] = "Text Input";
        FieldTypes["Country"] = "Country";
        FieldTypes["State"] = "State";
        FieldTypes["Email"] = "Email Address";
        FieldTypes["Telephone"] = "Telephone";
        FieldTypes["ZIP"] = "ZIP";
        FieldTypes["TextArea"] = "Text Area";
        FieldTypes["Number"] = "Number";
        FieldTypes["File"] = "File Upload";
    })(FieldTypes = exports.FieldTypes || (exports.FieldTypes = {}));
    var RegistrationFormModel = /** @class */ (function (_super) {
        __extends(RegistrationFormModel, _super);
        function RegistrationFormModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.url = '/app/site/hosting/scriptlet.nl?script=customscript_ns_sc_ext_sl_advancedsignup&deploy=customdeploy_ns_sc_ext_sl_advancedsignup';
            _this.validations = {};
            return _this;
        }
        RegistrationFormModel.prototype.setUpModel = function () {
            var _this = this;
            RegistrationForm_Configuration_1.RegistrationFormConfiguration.formFields.forEach(function (field) {
                if (field.internalid) {
                    _this.set(field.internalid, '');
                    _this.setUpValidations(field);
                }
            });
        };
        RegistrationFormModel.prototype.setUpValidations = function (field) {
            this.validations[field.internalid] = [{
                    required: field.required,
                    msg: RegistrationForm_Configuration_1.RegistrationFormConfiguration.requiredFieldWarning.replace('[[field]]', field.label)
                }];
            if (field.pattern) {
                this.validations[field.internalid].push({
                    pattern: field.pattern,
                    msg: field.fielderrormessage
                });
            }
            else if (field.fieldtype === FieldTypes.Email) {
                this.validations[field.internalid].push({
                    pattern: 'email',
                    msg: field.fielderrormessage
                });
            }
            else if (field.fieldtype === FieldTypes.Telephone) {
                this.validations[field.internalid].push({
                    minLength: 7,
                    msg: field.fielderrormessage
                });
            }
        };
        Object.defineProperty(RegistrationFormModel.prototype, "domain", {
            set: function (domain) {
                this.set('domain', domain);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormModel.prototype, "subsidiary", {
            set: function (subsidiary) {
                this.set('subsidiary', subsidiary);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RegistrationFormModel.prototype, "validation", {
            get: function () {
                return this.validations;
            },
            enumerable: true,
            configurable: true
        });
        return RegistrationFormModel;
    }(Backbone_1.Model));
    exports.RegistrationFormModel = RegistrationFormModel;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.AdvancedSignUp.RegistrationForm.View", ["require", "exports", "Backbone", "sc_advancedsignup_registrationform.tpl", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Collection", "Backbone.CollectionView", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Model", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.View", "underscore", "SuiteCommerce.AdvancedSignUp.Utils", "SuiteCommerce.AdvancedSignUp.Instrumentation"], function (require, exports, Backbone_1, registrationFormTemplate, RegistrationForm_Configuration_1, RegistrationForm_Field_Collection_1, BackboneCollectionView, RegistrationForm_Model_1, RegistrationForm_Field_View_1, _, Utils_1, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegistrationFormView = /** @class */ (function (_super) {
        __extends(RegistrationFormView, _super);
        function RegistrationFormView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = registrationFormTemplate;
            _this.events = {
                'submit form': 'createCustomer',
                'change select[type="country"]': 'updateStates',
            };
            var environment = options.container.getComponent('Environment');
            _this.model = options.model || new RegistrationForm_Model_1.RegistrationFormModel({
                domain: _this.getSCDomain(environment),
                subsidiary: _this.getDefaultSubsdiary(environment)
            });
            _this.title = RegistrationForm_Configuration_1.RegistrationFormConfiguration.formHeader;
            _this.displayForm = true;
            Backbone_1.Validation.bind(_this);
            _this.model.setUpModel();
            _this.logFormLoaded();
            return _this;
        }
        Object.defineProperty(RegistrationFormView.prototype, "childViews", {
            get: function () {
                var formFields = RegistrationForm_Configuration_1.RegistrationFormConfiguration.formFields;
                if (RegistrationForm_Configuration_1.RegistrationFormConfiguration.marketingSubscription) {
                    formFields.push({ fieldtype: 'Checkbox',
                        internalid: 'globalsubscriptionstatus',
                        label: RegistrationForm_Configuration_1.RegistrationFormConfiguration.marketingSubscriptionLabel,
                        placeholder: '',
                        required: false,
                        pattern: '',
                        fielderrormessage: ''
                    });
                }
                return {
                    'RegistrationForm.Fields': {
                        Fields: {
                            childViewIndex: 10,
                            childViewConstructor: function FieldsChildView() {
                                return new BackboneCollectionView({
                                    childView: RegistrationForm_Field_View_1.FieldView,
                                    collection: new RegistrationForm_Field_Collection_1.FieldCollection(formFields),
                                    childViewOptions: { parentModel: this.model },
                                });
                            },
                        },
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        RegistrationFormView.prototype.createCustomer = function (event) {
            var _this = this;
            event.preventDefault();
            var promise = this.saveForm(event);
            if (!this.model.isValid()) {
                this.scrollToValidationErrors('[data-validation-error="block"]');
                this.enableSubmitButton();
            }
            else if (promise) {
                var formSubmit_1 = Instrumentation_1.default.getLog('formSubmit');
                formSubmit_1.startTimer();
                promise
                    .done(function (response) {
                    if (response.status === 'SUCCESS') {
                        formSubmit_1.endTimer();
                        formSubmit_1.setParameters({
                            activity: 'Time to create the customer',
                            totalTime: formSubmit_1.getElapsedTimeForTimer(),
                        });
                        formSubmit_1.submit();
                        _this.displaySuccessMessage();
                    }
                    else {
                        _this.displayErrorMessage();
                        _this.scrollToValidationErrors('.advancedsignup-registrationform-message-error');
                    }
                });
            }
        };
        RegistrationFormView.prototype.updateStates = function (event) {
            var siteCountries = Utils_1.Utils.getCountries();
            var selectedCountryCode = event.target.value;
            var foundCountry = _.find(siteCountries, function (country) {
                return selectedCountryCode === country.code;
            });
            var formViews = this.getChildViewInstance('RegistrationForm.Fields', 'Fields');
            // @ts-ignore
            formViews.childCells.forEach(function (childView) {
                if (childView.model.fieldtype === 'State') {
                    childView.render();
                }
            });
        };
        RegistrationFormView.prototype.enableSubmitButton = function () {
            this.$('.advancedsignup-registrationform-button').prop('disabled', false);
        };
        RegistrationFormView.prototype.displaySuccessMessage = function () {
            this.displayForm = false;
            this.render();
        };
        RegistrationFormView.prototype.displayErrorMessage = function () {
            var $errorMessage = this.$('[data-error-bin-message]');
            $errorMessage.addClass('advancedsignup-registrationform-message-error');
            $errorMessage.text(RegistrationForm_Configuration_1.RegistrationFormConfiguration.submitError).show();
        };
        RegistrationFormView.prototype.scrollToValidationErrors = function (selector) {
            var offset = jQuery(selector).offset();
            jQuery('html').animate({
                scrollTop: offset ? offset.top : 0,
            }, 600);
        };
        RegistrationFormView.prototype.getDefaultSubsdiary = function (environment) {
            var subsidiaries = environment.getSiteSetting().subsidiaries;
            var defaultSubsidiary = _.find(subsidiaries, function (subsidiary) {
                return subsidiary.isdefault === 'T';
            });
            return defaultSubsidiary.internalid;
        };
        RegistrationFormView.prototype.getSCDomain = function (environment) {
            var homeUrl = environment.getConfig().siteSettings.touchpoints.home;
            var match = homeUrl.match(/:\/\/((?:www[0-9]?\.)?.[^/:]+)/i);
            if (match !== null && match.length === 2 && typeof match[1] === 'string' && match[1].length > 0) {
                return match[1];
            }
            return null;
        };
        RegistrationFormView.prototype.logFormLoaded = function () {
            var logUsage = Instrumentation_1.default.getLog('formLoaded');
            logUsage.setParameters({
                activity: 'Extension form loaded',
                message: JSON.stringify(RegistrationForm_Configuration_1.RegistrationFormConfiguration.formFields)
            });
            logUsage.submit();
        };
        RegistrationFormView.prototype.getContext = function () {
            return {
                formHeader: RegistrationForm_Configuration_1.RegistrationFormConfiguration.formHeader,
                formTitle: RegistrationForm_Configuration_1.RegistrationFormConfiguration.formTitle,
                formSubTitle: RegistrationForm_Configuration_1.RegistrationFormConfiguration.formSubTitle,
                submitButtonLabel: RegistrationForm_Configuration_1.RegistrationFormConfiguration.submitButtonLabel,
                confirmationTitle: RegistrationForm_Configuration_1.RegistrationFormConfiguration.confirmationTitle,
                confirmationMessage: RegistrationForm_Configuration_1.RegistrationFormConfiguration.confirmationMessage,
                displayForm: this.displayForm,
            };
        };
        return RegistrationFormView;
    }(Backbone_1.View));
    exports.RegistrationFormView = RegistrationFormView;
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.RegistrationForm"/>
define("SuiteCommerce.AdvancedSignUp.RegistrationForm", ["require", "exports", "SuiteCommerce.AdvancedSignUp.RegistrationForm.View", "SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration"], function (require, exports, RegistrationForm_View_1, RegistrationForm_Configuration_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var pageTypeComponent = container.getComponent('PageType');
            this.registerPageType(pageTypeComponent);
        },
        registerPageType: function (pageTypeComponent) {
            pageTypeComponent.registerPageType({
                name: 'ext-advsu-page',
                routes: [RegistrationForm_Configuration_1.RegistrationFormConfiguration.urlPath],
                view: RegistrationForm_View_1.RegistrationFormView,
                defaultTemplate: {
                    name: 'suitecommerce_advancedsignup.tpl',
                    displayName: 'Advanced Sign Up',
                    thumbnail: ''
                }
            });
        }
    };
});
/// <amd-module name="SuiteCommerce.AdvancedSignUp.Shopping"/>
define("SuiteCommerce.AdvancedSignUp.Shopping", ["require", "exports", "SuiteCommerce.AdvancedSignUp.RegistrationForm", "SuiteCommerce.AdvancedSignUp.AccessPoints.Header", "SuiteCommerce.AdvancedSignUp.Common.Configuration", "SuiteCommerce.AdvancedSignUp.Utils", "SuiteCommerce.AdvancedSignUp.Common.InstrumentationHelper", "underscore"], function (require, exports, RegistrationForm, Header, Configuration_1, Utils_1, InstrumentationHelper_1, _) {
    "use strict";
    return {
        mountToApp: function (container) {
            var environment = container.getComponent('Environment');
            var registrationSettings = environment.getSiteSetting('registration');
            if (registrationSettings.registrationmandatory === 'F' && Utils_1.Utils.isSingleDomain()) {
                Configuration_1.Configuration.environment = environment;
                // Existing customers only
                if (registrationSettings.registrationallowed === 'F') {
                    var layout_1 = container.getComponent('Layout');
                    var userProfile_1 = container.getComponent('UserProfile');
                    _.defer(function () {
                        userProfile_1.getUserProfile().then(function (profile) {
                            if (layout_1 && !profile.isloggedin) {
                                layout_1.removeChildView('Header.Profile');
                                Header.mountToApp(container);
                            }
                        });
                    });
                }
                InstrumentationHelper_1.InstrumentationHelper.initializeInstrumentation(environment);
                RegistrationForm.mountToApp(container);
            }
        }
    };
});
};
extensions['NetSuite.Columns.1.0.3'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/NetSuite/Columns/1.0.3/' + asset;
};
/// <amd-module name="SuiteCommerce.Columns.Column.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Columns.Column.Collection", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColumnCollection = /** @class */ (function (_super) {
        __extends(ColumnCollection, _super);
        function ColumnCollection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ColumnCollection;
    }(Backbone_1.Collection));
    exports.ColumnCollection = ColumnCollection;
});
/// <amd-module name="SuiteCommerce.Columns.Column.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Columns.Column.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColumnModel = /** @class */ (function (_super) {
        __extends(ColumnModel, _super);
        function ColumnModel(option) {
            return _super.call(this, option) || this;
        }
        Object.defineProperty(ColumnModel.prototype, "image", {
            get: function () {
                return this.get('image');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "imageAlt", {
            get: function () {
                return this.get('imageAlt');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "imageResizeId", {
            get: function () {
                return this.get('imageResizeId') || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "caption", {
            get: function () {
                return this.get('caption');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "text", {
            get: function () {
                return this.get('text');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "buttonText", {
            get: function () {
                return this.get('buttonText');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "buttonLink", {
            get: function () {
                return this.get('buttonLink');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "target", {
            get: function () {
                var option = this.get('openInNewTab');
                return option && option === 'T' ? '_blank' : '_self';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "hasText", {
            get: function () {
                var HTMLTagsRegex = /<[^>]+>/gi;
                return this.text ? !!this.text.replace(HTMLTagsRegex, '') : false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "hasButton", {
            get: function () {
                return !!this.buttonText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColumnModel.prototype, "hasContent", {
            get: function () {
                return !!this.image || this.hasText;
            },
            enumerable: true,
            configurable: true
        });
        return ColumnModel;
    }(Backbone_1.Model));
    exports.ColumnModel = ColumnModel;
});
/// <amd-module name="SuiteCommerce.Columns.Column.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Columns.Column.View", ["require", "exports", "Backbone", "sc_columns_column.tpl", "SuiteCommerce.Columns.Instrumentation"], function (require, exports, Backbone_1, columnTemplate, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ColumnView = /** @class */ (function (_super) {
        __extends(ColumnView, _super);
        function ColumnView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = columnTemplate;
            _this.events = {
                'click [data-action="navigate-to-url"]': 'navigateToUrl',
            };
            _this.model = options.model;
            return _this;
        }
        ColumnView.prototype.navigateToUrl = function () {
            var buttonUsageLog = Instrumentation_1.default.getLog('buttonUsageLog' + new Date().getTime());
            buttonUsageLog.setParameter('activity', 'Usage of the button in column');
            buttonUsageLog.submit();
        };
        ColumnView.prototype.getContext = function () {
            return {
                image: this.model.image,
                hasImage: !!this.model.image,
                imageResizeId: this.model.imageResizeId,
                buttonLink: this.model.buttonLink,
                buttonText: this.model.buttonText,
                hasButton: this.model.hasButton,
                hasText: this.model.hasText,
                alt: this.model.imageAlt,
                title: this.model.imageAlt,
                caption: this.model.caption,
                text: this.model.text,
                isCaptionPadding: !!this.model.caption && !!this.model.image,
                isTextPadding: this.model.hasText && (!!this.model.image || !!this.model.caption),
                target: this.model.target,
            };
        };
        return ColumnView;
    }(Backbone_1.View));
    exports.ColumnView = ColumnView;
});
/// <amd-module name="SuiteCommerce.Columns.ColumnsCCT.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Columns.ColumnsCCT.Model", ["require", "exports", "Backbone", "jQuery", "SuiteCommerce.Columns.Column.Collection", "SuiteCommerce.Columns.Column.Model"], function (require, exports, Backbone_1, jQuery, Column_Collection_1, Column_Model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CCTFields;
    (function (CCTFields) {
        CCTFields["header"] = "custrecord_cct_ns_cols_header";
        CCTFields["textColor"] = "custrecord_cct_ns_cols_color";
        CCTFields["textAlign"] = "custrecord_cct_ns_cols_textalign";
        CCTFields["fullWidth"] = "custrecord_cct_ns_cols_fullwidth";
        CCTFields["openInNewTab"] = "custrecord_cct_ns_cols_newtab";
        CCTFields["imageResizeId"] = "custrecord_cct_ns_cols_image_resize_id";
        CCTFields["col1Image"] = "custrecord_cct_ns_cols_1_image";
        CCTFields["col1ImageAlt"] = "custrecord_cct_ns_cols_1_alt";
        CCTFields["col1Caption"] = "custrecord_cct_ns_cols_1_caption";
        CCTFields["col1Text"] = "custrecord_cct_ns_cols_1_text";
        CCTFields["col1ButtonText"] = "custrecord_cct_ns_cols_1_buttontext";
        CCTFields["col1ButtonLink"] = "custrecord_cct_ns_cols_1_buttonlink";
        CCTFields["col2Image"] = "custrecord_cct_ns_cols_2_image";
        CCTFields["col2ImageAlt"] = "custrecord_cct_ns_cols_2_alt";
        CCTFields["col2Caption"] = "custrecord_cct_ns_cols_2_caption";
        CCTFields["col2Text"] = "custrecord_cct_ns_cols_2_text";
        CCTFields["col2ButtonText"] = "custrecord_cct_ns_cols_2_buttontext";
        CCTFields["col2ButtonLink"] = "custrecord_cct_ns_cols_2_buttonlink";
        CCTFields["col3Image"] = "custrecord_cct_ns_cols_3_image";
        CCTFields["col3ImageAlt"] = "custrecord_cct_ns_cols_3_alt";
        CCTFields["col3Caption"] = "custrecord_cct_ns_cols_3_caption";
        CCTFields["col3Text"] = "custrecord_cct_ns_cols_3_text";
        CCTFields["col3ButtonText"] = "custrecord_cct_ns_cols_3_buttontext";
        CCTFields["col3ButtonLink"] = "custrecord_cct_ns_cols_3_buttonlink";
    })(CCTFields = exports.CCTFields || (exports.CCTFields = {}));
    var CCTModel = /** @class */ (function (_super) {
        __extends(CCTModel, _super);
        function CCTModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CCTModel.prototype, "header", {
            get: function () {
                return this.getSetting(CCTFields.header);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "textColor", {
            get: function () {
                return this.getSetting(CCTFields.textColor);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "textAlign", {
            get: function () {
                return this.getSetting(CCTFields.textAlign);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "fullWidth", {
            get: function () {
                return this.getSetting(CCTFields.fullWidth);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "isExtraPadding", {
            get: function () {
                return this.fullWidth !== 'T';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "openInNewTab", {
            get: function () {
                return this.getSetting(CCTFields.openInNewTab);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "columns", {
            get: function () {
                if (!this.get('columns')) {
                    this.columns = new Column_Collection_1.ColumnCollection();
                }
                return this.get('columns');
            },
            set: function (columns) {
                this.set('columns', columns);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "hasContent", {
            get: function () {
                return !this.header && this.columns.size() === 0;
            },
            enumerable: true,
            configurable: true
        });
        CCTModel.prototype.addProperties = function (properties) {
            this.set(properties);
            this.updateColumnsContent();
        };
        CCTModel.prototype.updateColumnsContent = function () {
            var columns = [this.column1, this.column2, this.column3];
            columns = columns.filter(function (column) {
                return column.hasContent;
            });
            this.columns.reset(columns);
        };
        Object.defineProperty(CCTModel.prototype, "column1", {
            get: function () {
                return new Column_Model_1.ColumnModel({
                    buttonLink: this.getSetting(CCTFields.col1ButtonLink),
                    buttonText: this.getSetting(CCTFields.col1ButtonText),
                    caption: this.getSetting(CCTFields.col1Caption),
                    image: this.getImageUrl(CCTFields.col1Image),
                    imageAlt: this.getSetting(CCTFields.col1ImageAlt),
                    imageResizeId: this.getSetting(CCTFields.imageResizeId),
                    text: this.getSetting(CCTFields.col1Text),
                    openInNewTab: this.openInNewTab,
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "column2", {
            get: function () {
                return new Column_Model_1.ColumnModel({
                    buttonLink: this.getSetting(CCTFields.col2ButtonLink),
                    buttonText: this.getSetting(CCTFields.col2ButtonText),
                    caption: this.getSetting(CCTFields.col2Caption),
                    image: this.getImageUrl(CCTFields.col2Image),
                    imageAlt: this.getSetting(CCTFields.col2ImageAlt),
                    imageResizeId: this.getSetting(CCTFields.imageResizeId),
                    text: this.getSetting(CCTFields.col2Text),
                    openInNewTab: this.openInNewTab,
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CCTModel.prototype, "column3", {
            get: function () {
                return new Column_Model_1.ColumnModel({
                    buttonLink: this.getSetting(CCTFields.col3ButtonLink),
                    buttonText: this.getSetting(CCTFields.col3ButtonText),
                    caption: this.getSetting(CCTFields.col3Caption),
                    image: this.getImageUrl(CCTFields.col3Image),
                    imageAlt: this.getSetting(CCTFields.col3ImageAlt),
                    imageResizeId: this.getSetting(CCTFields.imageResizeId),
                    text: this.getSetting(CCTFields.col3Text),
                    openInNewTab: this.openInNewTab,
                });
            },
            enumerable: true,
            configurable: true
        });
        CCTModel.prototype.getImageUrl = function (field) {
            var imageId = this.getSetting(field);
            return imageId &&
                this.get(field + "_url") &&
                this.get(field + "_url").indexOf(imageId) !== -1
                ? this.get(field + "_url")
                : '';
        };
        CCTModel.prototype.getSetting = function (field) {
            return jQuery.trim(this.get(field));
        };
        return CCTModel;
    }(Backbone_1.Model));
    exports.CCTModel = CCTModel;
});
/// <amd-module name="SuiteCommerce.Columns.ColumnsCCT.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Columns.ColumnsCCT.View", ["require", "exports", "Backbone.CollectionView", "CustomContentType.Base.View", "SuiteCommerce.Columns.ColumnsCCT.Model", "sc_columns_cct.tpl", "SuiteCommerce.Columns.ColumnsCCT.Configuration", "SuiteCommerce.Columns.Column.View", "SuiteCommerce.Columns.Instrumentation"], function (require, exports, BackboneCollectionView, CustomContentTypeBaseView, ColumnsCCT_Model_1, columnsCCTTemplate, ColumsCCT_Configuration_1, Column_View_1, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CCTView = /** @class */ (function (_super) {
        __extends(CCTView, _super);
        function CCTView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = columnsCCTTemplate;
            _this.container = options.container;
            _this.model = new ColumnsCCT_Model_1.CCTModel();
            _this.columnsView = new BackboneCollectionView({
                childView: Column_View_1.ColumnView,
                collection: _this.model.columns,
            });
            _this.setupListeners();
            return _this;
        }
        CCTView.prototype.setupListeners = function () {
            var _this = this;
            this.model.columns.on('reset', function () { return _this.columnsView.render(); });
        };
        CCTView.prototype.install = function (settings, contextData) {
            _super.prototype.install.call(this, settings, contextData);
            this.parseSettings(settings);
            if (this.model.columns.size() > 0) {
                this.logQuantityOfColumns();
            }
            return jQuery.Deferred().resolve();
        };
        CCTView.prototype.logQuantityOfColumns = function () {
            var quantityOfColumnsLog = Instrumentation_1.default.getLog('quantityOfColumnsLog');
            quantityOfColumnsLog.setParameters({
                activity: 'Quantity of Columns used',
                instanceCount: this.model.columns.size(),
            });
            quantityOfColumnsLog.submit();
        };
        CCTView.prototype.update = function (settings) {
            _super.prototype.update.call(this, settings);
            this.parseSettings(settings);
            return jQuery.Deferred().resolve();
        };
        CCTView.prototype.parseSettings = function (settings) {
            this.model.addProperties(settings);
        };
        CCTView.prototype.validateContextDataRequest = function () {
            return true;
        };
        Object.defineProperty(CCTView.prototype, "childViews", {
            get: function () {
                var _this = this;
                return {
                    'NetSuite.ColumnsCCT.Column.View': function () {
                        return _this.columnsView;
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        CCTView.prototype.getContext = function () {
            return {
                header: this.model.header,
                isEmpty: this.model.hasContent,
                textColorClass: ColumsCCT_Configuration_1.CCTConfiguration.getTextColorClass(this.model.textColor),
                textAlignClass: ColumsCCT_Configuration_1.CCTConfiguration.getTextAlignClass(this.model.textAlign),
                isExtraPadding: this.model.isExtraPadding,
                gridClass: "grid-" + this.model.columns.size(),
                gridPhoneClass: "grid-xs-" + this.model.columns.size(),
            };
        };
        return CCTView;
    }(CustomContentTypeBaseView));
    exports.CCTView = CCTView;
});
/// <amd-module name="SuiteCommerce.Columns.ColumnsCCT"/>
define("SuiteCommerce.Columns.ColumnsCCT", ["require", "exports", "SuiteCommerce.Columns.ColumnsCCT.View"], function (require, exports, ColumnsCCT_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var cmsComponent = container.getComponent('CMS');
            if (cmsComponent) {
                cmsComponent.registerCustomContentType({
                    id: 'cct_netsuite_columns',
                    view: ColumnsCCT_View_1.CCTView,
                    options: {
                        container: container,
                    },
                });
            }
        },
    };
});
/// <amd-module name="SuiteCommerce.Columns.ColumnsCCT.Configuration"/>
define("SuiteCommerce.Columns.ColumnsCCT.Configuration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TEXT_COLOR_CLASS = {
        1: '',
        2: 'columnscct-text-color-dark',
        3: 'columnscct-text-color-light',
    };
    var TEXT_ALIGN_CLASS = {
        1: 'columnscct-text-align-left',
        2: 'columnscct-text-align-center',
    };
    var CCTConfiguration = /** @class */ (function () {
        function CCTConfiguration() {
        }
        CCTConfiguration.getTextColorClass = function (option) {
            return TEXT_COLOR_CLASS[option] || '';
        };
        CCTConfiguration.getTextAlignClass = function (option) {
            return TEXT_ALIGN_CLASS[option] || TEXT_ALIGN_CLASS[1]; //default value is 1
        };
        return CCTConfiguration;
    }());
    exports.CCTConfiguration = CCTConfiguration;
});
/// <amd-module name="SuiteCommerce.Columns.Common.InstrumentationHelper"/>
define("SuiteCommerce.Columns.Common.InstrumentationHelper", ["require", "exports", "SuiteCommerce.Columns.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueueNameSuffix = '-Columns';
    var ExtensionVersion = '1.0.2';
    var ComponentArea = 'SC Columns';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (environment) {
            Instrumentation_1.default.initialize({
                environment: environment,
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                },
            });
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.Columns.Instrumentation.FallbackLogger"/>
define("SuiteCommerce.Columns.Instrumentation.FallbackLogger", ["require", "exports", "jQuery", "Url"], function (require, exports, jQuery, Url) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var queueErrorTemp = [];
    var queueInfoTemp = [];
    var FallbackLogger = /** @class */ (function () {
        function FallbackLogger(options) {
            var _this = this;
            this.options = options;
            if (!this.isEnabled()) {
                return;
            }
            this.isWaiting = false;
            setInterval(function () {
                _this.processQueues(true);
            }, 60000);
            window.addEventListener('beforeunload', function () {
                _this.processQueues(false);
            });
        }
        Object.defineProperty(FallbackLogger.prototype, "environment", {
            get: function () {
                if (this.options.environment) {
                    return this.options.environment;
                }
                console.error('Please initialize instrumentation with the Environment Component.');
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FallbackLogger.prototype, "queueErrorName", {
            get: function () {
                return "queueError" + this.options.queueNameSuffix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FallbackLogger.prototype, "queueInfoName", {
            get: function () {
                return "queueInfo" + this.options.queueNameSuffix;
            },
            enumerable: true,
            configurable: true
        });
        FallbackLogger.prototype.info = function (obj) {
            if (!this.isEnabled()) {
                return;
            }
            var objWrapper = obj;
            objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
            objWrapper.message = "clientSideLogDateTime: " + new Date().toISOString();
            if (this.isWaiting) {
                queueInfoTemp.push(objWrapper);
            }
            else {
                var queueInfo = JSON.parse(localStorage.getItem(this.queueInfoName)) || [];
                queueInfo.push(objWrapper);
                localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfo));
            }
        };
        FallbackLogger.prototype.error = function (obj) {
            if (!this.isEnabled()) {
                return;
            }
            var objWrapper = obj;
            objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
            objWrapper.message = "clientSideLogDateTime: " + new Date().toISOString();
            if (this.isWaiting) {
                queueErrorTemp.push(objWrapper);
            }
            else {
                var queueError = JSON.parse(localStorage.getItem(this.queueErrorName)) || [];
                queueError.push(objWrapper);
                localStorage.setItem(this.queueErrorName, JSON.stringify(queueError));
            }
        };
        FallbackLogger.prototype.processQueues = function (isAsync) {
            if (!this.isEnabled()) {
                return;
            }
            var parsedURL = new Url().parse(SC.ENVIRONMENT.baseUrl);
            var product = SC.ENVIRONMENT.BuildTimeInf.product;
            var url = parsedURL.schema + "://" + parsedURL.netLoc + "/app/site/hosting/scriptlet.nl" +
                ("?script=customscript_" + product.toLowerCase() + "_loggerendpoint") +
                ("&deploy=customdeploy_" + product.toLowerCase() + "_loggerendpoint");
            var queueError = JSON.parse(localStorage.getItem(this.queueErrorName));
            var queueInfo = JSON.parse(localStorage.getItem(this.queueInfoName));
            if ((queueInfo && queueInfo.length > 0) ||
                (queueError && queueError.length > 0)) {
                this.isWaiting = true;
                var data = {
                    type: product,
                    info: queueInfo,
                    error: queueError,
                };
                if (navigator.sendBeacon) {
                    this.sendDataThroughUserAgent(url, data);
                }
                else {
                    this.sendDataThroughAjaxRequest(url, data, isAsync);
                }
            }
        };
        FallbackLogger.prototype.isEnabled = function () {
            return !this.environment.isPageGenerator();
        };
        FallbackLogger.prototype.sendDataThroughUserAgent = function (url, data) {
            var successfullyTransfer = navigator.sendBeacon(url, JSON.stringify(data));
            if (successfullyTransfer) {
                this.clearQueues();
            }
            else {
                this.appendTemp();
            }
        };
        FallbackLogger.prototype.sendDataThroughAjaxRequest = function (url, data, isAsync) {
            var _this = this;
            jQuery
                .ajax({
                url: url,
                data: JSON.stringify(data),
                type: 'POST',
                async: isAsync,
            })
                .done(function () { return _this.clearQueues(); })
                .fail(function () { return _this.appendTemp(); });
        };
        FallbackLogger.prototype.clearQueues = function () {
            localStorage.setItem(this.queueErrorName, JSON.stringify(queueErrorTemp));
            localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfoTemp));
            queueErrorTemp.length = 0;
            queueInfoTemp.length = 0;
            this.isWaiting = false;
        };
        FallbackLogger.prototype.appendTemp = function () {
            var queueErrorStr = localStorage.getItem(this.queueErrorName);
            var queueInfoStr = localStorage.getItem(this.queueInfoName);
            if (queueErrorTemp.length > 0) {
                var queueError = queueErrorStr == null ? [] : JSON.parse(queueErrorStr);
                localStorage.setItem(this.queueErrorName, JSON.stringify(queueError.concat(queueErrorTemp)));
            }
            if (queueInfoTemp.length > 0) {
                var queueInfo = queueInfoStr == null ? [] : JSON.parse(queueInfoStr);
                localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfo.concat(queueInfoTemp)));
            }
            this.isWaiting = false;
        };
        return FallbackLogger;
    }());
    exports.FallbackLogger = FallbackLogger;
});
/// <amd-module name="SuiteCommerce.Columns.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.Columns.Instrumentation.Log", ["require", "exports", "SuiteCommerce.Columns.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return (!!navigator.userAgent.match(/Trident/g) ||
                !!navigator.userAgent.match(/MSIE/g));
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.Columns.Instrumentation.Logger"/>
define("SuiteCommerce.Columns.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.Columns.Instrumentation.FallbackLogger", "SuiteCommerce.Columns.Instrumentation.MockAppender"], function (require, exports, Instrumentation_FallbackLogger_1, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger').LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] },
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return new Instrumentation_FallbackLogger_1.FallbackLogger(this.options);
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.Columns.Instrumentation.MockAppender"/>
define("SuiteCommerce.Columns.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.prototype.ready = function () {
            return true;
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        MockAppender.prototype.start = function (action, options) {
            return options;
        };
        MockAppender.prototype.end = function (startOptions, options) { };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.Columns.Instrumentation"/>
define("SuiteCommerce.Columns.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.Columns.Instrumentation.Logger", "SuiteCommerce.Columns.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.Columns.EntryPoint"/>
define("SuiteCommerce.Columns.EntryPoint", ["require", "exports", "SuiteCommerce.Columns.ColumnsCCT", "SuiteCommerce.Columns.Common.InstrumentationHelper"], function (require, exports, ColumnsCCT, InstrumentationHelper_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            InstrumentationHelper_1.InstrumentationHelper.initializeInstrumentation(container.getComponent('Environment'));
            ColumnsCCT.mountToApp(container);
        },
    };
});
};
extensions['CXExtensibility.CoreContent.1.0.5'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/CXExtensibility/CoreContent/1.0.5/' + asset;
};
// Types references for VSCode Intellisense
/// <reference path="../../../../../node_modules/@types/jquery/index.d.ts"/>
/// <reference path="../../../../../node_modules/@types/underscore/index.d.ts"/>
/**
 * @typedef {import("./types").Item} Item Data for single item to display in the merchandising zone
 * @typedef {import("./types").ItemImage} ItemImage Container for image url and alt text
 * @typedef {import("./types").Settings} Settings Sidepanel settings
 */
define('CXExtensibility.CoreContent.CMSMerchzoneCCT.View', [
    'CustomContentType.Base.View',
    'cxextensibility_corecontent_cmsmerchzonecct.tpl',
    'Utils',
    'jQuery',
    'underscore',
], /**
 * @param {JQueryStatic} $
 * @param {_.UnderscoreStatic} _
 */ function (CustomContentTypeBaseView, template, Utils, $, _) {
    'use strict';
    var displayModes = {
        HORIZONTAL: '1',
        VERTICAL: '2',
        GRID: '3',
    };
    var isMobile = false;
    return CustomContentTypeBaseView.extend({
        template: template,
        /**@type {Settings}*/
        settings: null,
        initialize: function () {
            this._initialize();
            this.on('afterViewRender', function () {
                var merchRule = this.settings.custrecord_merchzone_merchrule;
                isMobile = window.matchMedia("(max-width: 767px)").matches
                if (merchRule && merchRule !== '') {
                    this.fetchMerchZoneEndpoint(merchRule);
                }
            });
        },
        /**
         * Fetch merchzone information from SMT CMS endpoint
         * @param {string | number} merchzoneId Merchzone ID to fetch
         */
        fetchMerchZoneEndpoint: function fetchMerchZoneEndpoint(merchzoneId) {
            $.ajax({
                url: '/api/cms/v2/merchzones/' + merchzoneId,
            }).done(
                function (res) {
                    this.fetchItems(res.data[0].queryString);
                }.bind(this)
            );
        },
        /**
         * Fetch items from items enddpoint returned from merchzone endpoint
         * @param {string} itemsEndpoint
         */
        fetchItems: function fetchItems(itemsEndpoint) {
            $.ajax({
                url: itemsEndpoint,
            }).done(
                function (res) {
                    var itemDetails = _.map(
                        res.items,
                        function (item) {
                            /** @type {Item} */
                            var formattedItem = {
                                name: item.storedisplayname2 || item.displayname,
                                price: item.onlinecustomerprice_formatted,
                                link: '/' + item.urlcomponent,
                                image: this.getDefaultImage(item.itemimages_detail),
                            };
                            return formattedItem;
                        }.bind(this)
                    );
                    this.renderMerchzone(itemDetails);
                }.bind(this)
            );
        },
        /**
         * Render item info to template
         * @param {Item[]} items
         */
        renderMerchzone: function renderMerchzone(items) {
            if (items.length === 0) {
                return;
            }
            var heading = this.settings.custrecord_merchzone_heading || '';
            if (heading.length === 0) {
                this.$('.cms-merchzone-heading').remove();
            } else {
                this.$('.cms-merchzone-heading').text(heading);
            }
            _.each(
                items,
                function (item) {
                    var template = this.$('#item-template').contents().clone();
                    template.find('.item-name').text(item.name);
                    template.find('.item-price').text(item.price);
                    template.find('.item-link').attr('href', item.link);
                    template.find('.item-name').attr('href', item.link);
                    template.find('.cms-merchzone-see-more').attr('href', item.link);
                    template.find('.item-image').attr('src', item.image.url);
                    template.find('.item-image').attr('alt', item.image.altimagetext);
                    this.$('.cms-merchzone-slider').append(template);
                },
                this
            );
            var sliderRendered = this.$('.cms-merchzone-slider').parent().hasClass('bx-viewport');
            var displayMode = this.settings.custrecord_merchzone_display_mode.toString();
            if (displayMode !== displayModes.GRID) {
                if (sliderRendered) {
                    return;
                }
                this.renderSlider();
            } else {
                this.renderGrid();
            }
        },
        renderSlider: function renderSlider() {
            var displayMode = this.settings.custrecord_merchzone_display_mode || displayModes.HORIZONTAL;
            var mode = displayMode.toString() === displayModes.VERTICAL ? 'vertical' : 'horizontal';
            var numItems = isMobile ? 1 : parseInt(this.settings.custrecord_merchzone_numitems) || 4;
            var merchzoneWidth = this.$('.cms-merchzone-slider').width();
            var slideWidth = Math.floor(merchzoneWidth / numItems);
            var sliderOptions = {
                mode: mode,
                minSlides: numItems,
                maxSlides: numItems,
                slideWidth: slideWidth,
                moveSlides: 1,
                pager: false,
                nextText:
                    '<a class="cms-merchzone-slider-next cms-merchzone-' +
                    mode +
                    '-control"><span class="control-text">' +
                    _('next').translate() +
                    '</span> <i class="carousel-next-arrow"></i></a>',
                prevText:
                    '<a class="cms-merchzone-slider-prev cms-merchzone-' +
                    mode +
                    '-control"><i class="carousel-prev-arrow"></i> <span class="control-text">' +
                    _('prev').translate() +
                    '</span></a>',
            };
            Utils.initBxSlider(this.$('.cms-merchzone-slider'), sliderOptions);
            this.$('.item-image-wrapper').css({ 'min-height': slideWidth + 'px' });
            if (displayMode === displayModes.VERTICAL) {
                this.$('.bx-wrapper').css({ margin: '0 auto' });
            }
            // Fix incorrect height when SCA rerenders the slider
            setTimeout(
                function () {
                    var itemHeight = this.$('.cms-merchzone-item').height();
                    this.$('.bx-viewport').css({ 'min-height': itemHeight });
                }.bind(this)
            );
        },
        renderGrid: function renderGrid() {
            var merchzoneWidth = this.$('.cms-merchzone-slider').width();
            var numItems = isMobile ? 1 : parseInt(this.settings.custrecord_merchzone_numitems) || 3;
            this.$('.cms-merchzone-slider').removeClass('cms-merchzone-slider').addClass('cms-merchzone-grid');
            this.$('.cms-merchzone-grid > li').css({
                width: Math.floor(merchzoneWidth / numItems),
            });
        },
        /**
         * Get the default image or first image found if not available
         * @param {Object} itemimages The object contained in the item's itemimages_detail key
         * @returns {ItemImage}
         */
        getDefaultImage: function getDefaultImage(itemimages) {
            /**
             * Flatten method taken from SCA Utils
             * @param {Object} images
             * @returns {ItemImage[]}
             */
            function flattenImages(images) {
                if ('url' in images && 'altimagetext' in images) {
                    return [images];
                }
                return _.flatten(
                    _.map(images, function (item) {
                        if (_.isArray(item)) {
                            return item;
                        }
                        return flattenImages(item);
                    })
                );
            }
            var imageData = flattenImages(itemimages);
            var defaultImage = _.find(imageData, function (image) {
                var match = image.url.match(/.*\.default\.[A-Za-z]*/i);
                return !!match && match[0] === image.url;
            });
            return defaultImage || imageData[0];
        },
        contextDataRequest: [],
        validateContextDataRequest: function () {
            return true;
        },
        getContext: function () {
            return {
                merchRule: this.settings.custrecord_merchzone_merchrule,
                displayMode: this.settings.custrecord_merchzone_display_mode,
                numItems: this.settings.custrecord_merchzone_numitems,
            };
        },
    });
});
// @module CXExtensibility.CoreContent.CMSMerchzoneCCT
// An example cct that shows a message with the price, using the context data from the item
// Use: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/service.ss'))
// to reference services or images available in your extension assets folder
define('CXExtensibility.CoreContent.CMSMerchzoneCCT', ['CXExtensibility.CoreContent.CMSMerchzoneCCT.View'], function (
    CMSMerchzoneCCTView
) {
    'use strict';
    return {
        mountToApp: function mountToApp(container) {
            var environment = container.getComponent('Environment');
            environment.setTranslation('fr_CA', [{ key: 'See More', value: 'Voir Plus' }]);
            environment.setTranslation('es_ES', [{ key: 'See More', value: 'Ver Más' }]);
            container.getComponent('CMS').registerCustomContentType({
                // this property value MUST be lowercase
                id: 'CMS_MERCHZONETWO',
                // The view to render the CCT
                view: CMSMerchzoneCCTView,
            });
        },
    };
});
define('CXExtensibility.CoreContent.CoreContentModule', [
    'CXExtensibility.CoreContent.CMSMerchzoneCCT',
], function (CMSMerchzoneCCT) {
    'use strict';
    return {
        mountToApp: function mountToApp(container) {
            CMSMerchzoneCCT.mountToApp(container);
        },
    };
});
};
extensions['SuiteCommerce.CustomFields.1.1.4'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/CustomFields/1.1.4/' + asset;
};
/// <amd-module name="SuiteCommerce.CustomFields.Instrumentation.Helper"/>
define("SuiteCommerce.CustomFields.Instrumentation.Helper", ["require", "exports", "SuiteCommerce.CustomFields.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComponentArea = 'SC Custom Fields';
    exports.ExtensionVersion = '1.1.4';
    exports.QueueNameSuffix = '-CustomFields';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (container) {
            Instrumentation_1.default.initialize({
                environment: container.getComponent('Environment'),
                queueNameSuffix: exports.QueueNameSuffix,
            });
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.CustomFields.JavaScript.Utils"/>
define("SuiteCommerce.CustomFields.JavaScript.Utils", ["require", "exports", "Utils"], function (require, exports, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.formatDate = function (receivedDate, dateFormat) {
            var newDate = dateFormat;
            var monthReplaced = false;
            var date = new Date(receivedDate);
            var replaceMonth = function (monthLength, format) {
                var matched = newDate.match(monthLength);
                if (matched && !monthReplaced) {
                    monthReplaced = true;
                    return newDate.replace(monthLength, date.toLocaleString('en-us', { month: format }));
                }
                return newDate;
            };
            var ua = navigator.userAgent;
            var isOldIe = ua.indexOf('MSIE ') > -1;
            if (isOldIe) {
                return receivedDate;
            }
            newDate = newDate.replace('yyyy', date.toLocaleString('en-us', { year: 'numeric' }));
            newDate = newDate.replace('yy', date.toLocaleString('en-us', { year: '2-digit' }));
            newDate = newDate.replace('dd', date.toLocaleString('en-us', { day: '2-digit' }));
            newDate = newDate.replace('d', date.toLocaleString('en-us', { day: 'numeric' }));
            newDate = replaceMonth('mmmm', 'long');
            newDate = replaceMonth('mmm', 'short');
            newDate = replaceMonth('mm', '2-digit');
            newDate = replaceMonth('m', 'numeric');
            return newDate;
        };
        // @method urlIsAbsolute @param {String} url @returns {Boolean}
        Utils.isUrlAbsolute = function (url) {
            return /^https?:\/\//.test(url);
        };
        // @method getAbsoluteUrl @param {String} file @returns {String}
        Utils.getAbsoluteUrl = function (file, isServices2) {
            return Utils_1.getAbsoluteUrl(file, isServices2);
        };
        Utils.translate = function (text) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return Utils_1.translate.apply(void 0, [text].concat(params));
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
/// <amd-module name="SuiteCommerce.CustomFields.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.CustomFields.Instrumentation.Log", ["require", "exports", "SuiteCommerce.CustomFields.Instrumentation.Logger", "SuiteCommerce.CustomFields.Instrumentation.Helper"], function (require, exports, Instrumentation_Logger_1, Instrumentation_Helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.defaultParametersToSubmit = {
                componentArea: Instrumentation_Helper_1.ComponentArea,
                extensionVersion: Instrumentation_Helper_1.ExtensionVersion,
            };
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                parametersToSubmit: this.defaultParametersToSubmit || {},
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign({}, defaultAttributes, attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return (!!navigator.userAgent.match(/Trident/g) ||
                !!navigator.userAgent.match(/MSIE/g));
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.CustomFields.Instrumentation.Logger"/>
define("SuiteCommerce.CustomFields.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.CustomFields.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] },
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { },
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.CustomFields.Instrumentation.MockAppender"/>
define("SuiteCommerce.CustomFields.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.prototype.ready = function () {
            return true;
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        MockAppender.prototype.start = function (action, options) {
            return options;
        };
        MockAppender.prototype.end = function (startOptions, options) { };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.CustomFields.Instrumentation"/>
define("SuiteCommerce.CustomFields.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.CustomFields.Instrumentation.Logger", "SuiteCommerce.CustomFields.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var log = new Instrumentation_Log_1.Log({ label: label });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.CustomFields.Utils"/>
define("SuiteCommerce.CustomFields.Utils", ["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomFieldsUtils = /** @class */ (function () {
        function CustomFieldsUtils() {
        }
        CustomFieldsUtils.compileText = function (textInput, variables) {
            var text = textInput || '';
            _(variables || {}).each(function (value, name) {
                var regex = new RegExp("{{" + name + "}}", 'g');
                text = text.replace(regex, value);
            });
            return text;
        };
        return CustomFieldsUtils;
    }());
    exports.CustomFieldsUtils = CustomFieldsUtils;
});
/// <amd-module name="SuiteCommerce.CustomFields.PDP.Configuration"/>
define("SuiteCommerce.CustomFields.PDP.Configuration", ["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var environment = null;
    var DataMarkupTypes;
    (function (DataMarkupTypes) {
        DataMarkupTypes["JsonLd"] = "JSON-LD";
    })(DataMarkupTypes = exports.DataMarkupTypes || (exports.DataMarkupTypes = {}));
    var Configuration = /** @class */ (function () {
        function Configuration() {
        }
        Configuration.setEnvironment = function (environmentComponent) {
            environment = environmentComponent;
        };
        Configuration.getFieldsFromConfiguration = function () {
            var _this = this;
            var fieldsArray = [];
            var fieldsArrayUnparsed = Configuration.get('customFields.pdp.fields', []);
            fieldsArrayUnparsed.forEach(function (unparsedField) {
                fieldsArray.push({
                    nameInConfiguration: unparsedField.fieldid,
                    fieldText: unparsedField.fieldid,
                    fieldsToParse: [],
                    schema: unparsedField.schema,
                    show: unparsedField.show,
                    hideFromQuickView: unparsedField.hideFromQuickView,
                    parsedText: '',
                    visible: false,
                });
            });
            fieldsArray.forEach(function (fieldObject) {
                var fieldsToParse = _this.parseField(fieldObject.fieldText);
                fieldObject.fieldsToParse = fieldsToParse;
            });
            return fieldsArray;
        };
        Configuration.get = function (key, defaultValue) {
            if (environment) {
                var configValue = environment.getConfig(key);
                if (_.isUndefined(configValue) && !_.isUndefined(defaultValue)) {
                    return defaultValue;
                }
                return configValue;
            }
            console.error('Please set the Environment Component in the Configuration.');
            return null;
        };
        Configuration.parseField = function (fieldText) {
            var regexForParse = /\[\[(.+?)\]\]/g;
            var matches = fieldText.match(regexForParse);
            matches = matches ? matches : [];
            matches = matches.map(function (field) {
                return field.replace(']]', '').replace('[[', '');
            });
            return matches;
        };
        Object.defineProperty(Configuration, "structuredDataMarkupType", {
            get: function () {
                return this.get('structureddatamarkup.type');
            },
            enumerable: true,
            configurable: true
        });
        return Configuration;
    }());
    exports.Configuration = Configuration;
});
/// <amd-module name="SuiteCommerce.CustomFields.PDP.Main.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.CustomFields.PDP.Main.View", ["require", "exports", "Backbone", "suitecommerce_customfields_pdp_field.tpl", "SuiteCommerce.CustomFields.Instrumentation"], function (require, exports, Backbone_1, pdpFieldsTpl, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PDPFieldsView = /** @class */ (function (_super) {
        __extends(PDPFieldsView, _super);
        function PDPFieldsView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = pdpFieldsTpl;
            _this.isQuickView = !!options.isQuickView;
            _this.model.on('childSelected', function () {
                _this.render();
            });
            return _this;
        }
        PDPFieldsView.prototype.logFieldsQuantity = function (quantity) {
            var log = Instrumentation_1.default.getLog('usage');
            var SECTION = this.isQuickView ? 'Quick View' : 'PDP';
            log.setParameters({
                activity: "Show custom " + SECTION + " fields.",
                instanceCount: quantity,
            });
            log.submit();
        };
        PDPFieldsView.prototype.getContext = function () {
            var model = this.model;
            var fieldList = model.get('fieldsList');
            var fieldsToShow = fieldList.filter(function (field) {
                return field.show;
            });
            var fieldQuantityToShow = fieldsToShow.length;
            this.logFieldsQuantity(fieldQuantityToShow);
            return {
                field: fieldsToShow,
                showContainer: fieldQuantityToShow > 0,
            };
        };
        return PDPFieldsView;
    }(Backbone_1.View));
    exports.PDPFieldsView = PDPFieldsView;
});
/// <amd-module name="SuiteCommerce.CustomFields.PDP.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.CustomFields.PDP.Model", ["require", "exports", "Backbone", "SuiteCommerce.CustomFields.PDP.Configuration", "underscore"], function (require, exports, Backbone_1, PDP_Configuration_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PDPModel = /** @class */ (function (_super) {
        __extends(PDPModel, _super);
        function PDPModel(modelAttributes) {
            var _this = _super.call(this, modelAttributes) || this;
            _this.isQuickView = !!modelAttributes.isQuickView;
            _this.fieldsList = PDP_Configuration_1.Configuration.getFieldsFromConfiguration();
            _this.itemInfo = _this.pdp.getItemInfo().item;
            _this.fieldsForJsonLd = {};
            _this.updateFields();
            if (PDP_Configuration_1.Configuration.structuredDataMarkupType === PDP_Configuration_1.DataMarkupTypes.JsonLd) {
                _this.addJsonLdValues();
            }
            _this.pdp.on('afterOptionSelection', function () {
                _this.updateFields();
                _this.trigger('childSelected');
            });
            return _this;
        }
        Object.defineProperty(PDPModel.prototype, "pdp", {
            get: function () {
                return this.get('pdp');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PDPModel.prototype, "fieldsList", {
            get: function () {
                return this.get('fieldsList');
            },
            set: function (fieldsList) {
                this.set('fieldsList', fieldsList);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PDPModel.prototype, "itemInfo", {
            get: function () {
                return this.get('itemInfo');
            },
            set: function (itemInfo) {
                this.set('itemInfo', itemInfo);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PDPModel.prototype, "childItemInfo", {
            get: function () {
                return this.pdp.getSelectedMatrixChilds();
            },
            enumerable: true,
            configurable: true
        });
        PDPModel.prototype.updateFields = function () {
            var _this = this;
            var fieldList = this.fieldsList;
            fieldList.forEach(function (fieldObject) {
                var show = fieldObject.show, hideFromQuickView = fieldObject.hideFromQuickView, fieldText = fieldObject.fieldText, fieldsToParse = fieldObject.fieldsToParse;
                fieldObject.show = !!(show && (!_this.isQuickView || !hideFromQuickView));
                if (fieldObject.show) {
                    fieldObject.parsedText = _this.replaceFromFieldList(fieldText, fieldsToParse);
                    if (fieldObject.schema) {
                        _this.populateJsonLdValues(fieldObject);
                    }
                    fieldObject.visible = fieldObject.show && _this.updateVisibility(fieldsToParse);
                }
            });
            this.fieldsList = fieldList;
        };
        PDPModel.prototype.replaceFromFieldList = function (fieldText, stringList) {
            var _this = this;
            var resultText = fieldText;
            stringList.forEach(function (replaceValue) {
                var replaceString = _this.getItemInfoFieldValue(replaceValue);
                resultText = resultText
                    .split("[[" + replaceValue + "]]")
                    .join("" + replaceString);
            });
            return resultText;
        };
        PDPModel.prototype.updateVisibility = function (propertyList) {
            var _this = this;
            var foundProperties = false;
            propertyList.forEach(function (property) {
                var fieldValue = _this.getItemInfoFieldValue(property);
                if ((fieldValue && fieldValue !== '&nbsp;') || fieldValue === 0) {
                    foundProperties = true;
                }
            });
            return foundProperties;
        };
        PDPModel.prototype.getItemInfoFieldValue = function (fieldId) {
            var itemInfo = this.itemInfo;
            var childItemInfo = this.childItemInfo;
            if (childItemInfo.length === 1) {
                return childItemInfo[0][fieldId] || itemInfo[fieldId] || '';
            }
            return itemInfo[fieldId] || '';
        };
        PDPModel.prototype.populateJsonLdValues = function (fieldObject) {
            var _this = this;
            var fieldValue = '';
            fieldObject.fieldsToParse.forEach(function (field) {
                fieldValue += _this.getItemInfoFieldValue(field);
            });
            this.fieldsForJsonLd[fieldObject.schema] = fieldValue;
        };
        PDPModel.prototype.addJsonLdValues = function () {
            var _this = this;
            this.pdp.modifyViewJsonLd('ProductDetails.Full.View', function (json) {
                var extendedJson = _.extend(json, _this.fieldsForJsonLd);
                return jQuery.Deferred().resolve(extendedJson);
            });
        };
        return PDPModel;
    }(Backbone_1.Model));
    exports.PDPModel = PDPModel;
});
/// <amd-module name="SuiteCommerce.CustomFields.PDP"/>
define("SuiteCommerce.CustomFields.PDP", ["require", "exports", "SuiteCommerce.CustomFields.PDP.Configuration", "SuiteCommerce.CustomFields.PDP.Main.View", "SuiteCommerce.CustomFields.PDP.Model"], function (require, exports, PDP_Configuration_1, PDP_Main_View_1, PDP_Model_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            PDP_Configuration_1.Configuration.setEnvironment(container.getComponent('Environment'));
            var pdp = container.getComponent('PDP');
            if (pdp) {
                this.addCustomFields(pdp);
            }
        },
        addCustomFields: function (pdp) {
            this.addCustomFieldsToPDP(pdp);
            this.addCustomFieldsToQuickViews(pdp);
        },
        addCustomFieldsToPDP: function (pdp) {
            pdp.addChildView('Product.Sku', this.pdpFieldsViewConstructor(pdp));
        },
        addCustomFieldsToQuickViews: function (pdp) {
            pdp.addChildViews(pdp.PDP_QUICK_VIEW, {
                'Product.Sku': {
                    'CustomFields.PDPFields': {
                        childViewIndex: 11,
                        childViewConstructor: this.pdpFieldsViewConstructor(pdp, true),
                    },
                },
            });
        },
        pdpFieldsViewConstructor: function (pdp, isQuickView) {
            if (isQuickView === void 0) { isQuickView = false; }
            return function () {
                var model = new PDP_Model_1.PDPModel({
                    pdp: pdp,
                    isQuickView: isQuickView,
                });
                return new PDP_Main_View_1.PDPFieldsView({
                    model: model,
                    isQuickView: isQuickView,
                });
            };
        },
    };
});
/// <amd-module name="SuiteCommerce.CustomFields.PDP.Main"/>
define("SuiteCommerce.CustomFields.PDP.Main", ["require", "exports", "SuiteCommerce.CustomFields.PDP", "SuiteCommerce.CustomFields.Instrumentation.Helper"], function (require, exports, PDPFields, Instrumentation_Helper_1) {
    "use strict";
    var Module = {
        mountToApp: function (container) {
            Instrumentation_Helper_1.InstrumentationHelper.initializeInstrumentation(container);
            PDPFields.mountToApp(container);
        },
    };
    return Module;
});
};
extensions['NetSuite.FeaturedCategory.1.3.0'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/NetSuite/FeaturedCategory/1.3.0/' + asset;
};
/// <amd-module name="SuiteCommerce.FeaturedCategory.Common.Configuration"/>
define("SuiteCommerce.FeaturedCategory.Common.Configuration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var environment = null;
    var Configuration = /** @class */ (function () {
        function Configuration() {
        }
        Object.defineProperty(Configuration, "environment", {
            set: function (environmentComponent) {
                environment = environmentComponent;
            },
            enumerable: true,
            configurable: true
        });
        Configuration.get = function (key, defaultValue) {
            if (environment) {
                return environment.getConfig(key);
            }
            console.error('Please set the Environment Component in the Configuration.');
            return null;
        };
        return Configuration;
    }());
    exports.Configuration = Configuration;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Common.InstrumentationHelper"/>
define("SuiteCommerce.FeaturedCategory.Common.InstrumentationHelper", ["require", "exports", "SuiteCommerce.FeaturedCategory.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueueNameSuffix = '-FeaturedCategory';
    var ExtensionVersion = '1.3.0';
    var ComponentArea = 'SC Featured Category';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (environment) {
            Instrumentation_1.default.initialize({
                environment: environment,
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                }
            });
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Common.Utils"/>
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define("SuiteCommerce.FeaturedCategory.Common.Utils", ["require", "exports", "underscore", "SuiteCommerce.FeaturedCategory.Common.Configuration"], function (require, exports, _, Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var profile = null;
    var RegistrationType;
    (function (RegistrationType) {
        // no login, no register, checkout as guest only
        RegistrationType["disabled"] = "disabled";
        // login, register, guest
        RegistrationType["optional"] = "optional";
        // login, register, no guest
        RegistrationType["required"] = "required";
        // login, no register, no guest
        RegistrationType["existing"] = "existing";
    })(RegistrationType || (RegistrationType = {}));
    function stringFormat(text) {
        var continuationText = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            continuationText[_i - 1] = arguments[_i];
        }
        return text.replace(/\$\((\d+)\)/g, function (match, number) {
            if (typeof continuationText[number] !== 'undefined') {
                return continuationText[number].toString();
            }
            return match.toString();
        });
    }
    function isUrlAbsolute(url) {
        return /^https?:\/\//.test(url);
    }
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.imageFlatten = function (images) {
            var _this = this;
            var result = [];
            if ('url' in images && 'altimagetext' in images) {
                return [images];
            }
            Object.getOwnPropertyNames(images).forEach(function (key) {
                if (_.isArray(images[key])) {
                    result.push(images[key]);
                }
                else {
                    result.push(_this.imageFlatten(images[key]));
                }
            });
            return _.flatten(result);
        };
        Utils.getThemeAbsoluteUrlOfNonManagedResources = function (defaultValue, file) {
            if (!file) {
                file = '';
                if (SC.ENVIRONMENT.isExtended) {
                    file = SC.ENVIRONMENT.themeAssetsPath || '';
                }
                else if (SC.ENVIRONMENT.BuildTimeInf && SC.ENVIRONMENT.BuildTimeInf.isSCLite) {
                    if (SC.CONFIGURATION.unmanagedResourcesFolderName) {
                        file = "site/" + SC.CONFIGURATION.unmanagedResourcesFolderName + "/";
                    }
                    else {
                        file = 'default/';
                    }
                }
                file += defaultValue;
            }
            return Utils.getAbsoluteUrl(file);
        };
        Utils.translate = function (text) {
            var continuationText = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                continuationText[_i - 1] = arguments[_i];
            }
            if (!text) {
                return '';
            }
            // Turns the arguments object into an array
            var parameters = [];
            // Checks the translation table
            var result = SC.Translations && SC.Translations[text] ? SC.Translations[text] : text;
            if (continuationText && continuationText.length && result) {
                var firstParameter = continuationText[0];
                if (_.isArray(firstParameter) && firstParameter.length) {
                    parameters = firstParameter;
                }
                else {
                    parameters = _.map(continuationText, function (param) {
                        return _.escape(param);
                    });
                }
            }
            result = stringFormat.apply(void 0, __spreadArrays([result], parameters));
            return result;
        };
        Utils.getAbsoluteUrl = function (file) {
            if (file === void 0) { file = ''; }
            var base_url = (SC && SC.ENVIRONMENT && SC.ENVIRONMENT.baseUrl) || '';
            var fileReplace = file;
            if (base_url && !isUrlAbsolute(fileReplace)) {
                return base_url.replace('{{file}}', fileReplace);
            }
            return file;
        };
        Utils.addParamsToUrl = function (baseUrl, params, avoidDoubleRedirect) {
            if (avoidDoubleRedirect) {
                var newParams_1 = {};
                _.each(params, function (paramValue, paramKey) {
                    newParams_1['__' + paramKey] = paramValue;
                });
                params = newParams_1;
            }
            // We get the search options from the config file
            if (baseUrl && !_.isEmpty(params)) {
                var paramString = jQuery.param(params);
                var joinString = baseUrl.indexOf('?') !== -1 ? '&' : '?';
                return baseUrl + joinString + paramString;
            }
            return baseUrl;
        };
        Utils.hidePrices = function () {
            if (this.userProfileData) {
                return (this.getRegistrationType() !== RegistrationType.disabled &&
                    Configuration_1.Configuration.get('siteSettings.requireloginforpricing', 'F') === 'T' &&
                    !this.userProfileData.isloggedin);
            }
            //SCA <19.1
            var ProfileModel = require('Profile.Model');
            return ProfileModel.getInstance().hidePrices();
        };
        Utils.getRegistrationType = function () {
            // registrationmandatory is 'T' when customer registration is disabled
            if (Configuration_1.Configuration.get('siteSettings.registration.registrationmandatory', null) === 'T') {
                return RegistrationType.disabled;
            }
            if (Configuration_1.Configuration.get('siteSettings.registration.registrationoptional', null) === 'T') {
                return RegistrationType.optional;
            }
            if (Configuration_1.Configuration.get('siteSettings.registration.registrationallowed', null) === 'T') {
                return RegistrationType.required;
            }
            return RegistrationType.existing;
        };
        Object.defineProperty(Utils, "userProfileData", {
            get: function () {
                if (profile) {
                    return profile;
                }
                return null;
            },
            set: function (profileData) {
                profile = profileData;
            },
            enumerable: true,
            configurable: true
        });
        return Utils;
    }());
    exports.Utils = Utils;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Button.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Button.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonModel = /** @class */ (function (_super) {
        __extends(ButtonModel, _super);
        function ButtonModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ButtonModel.prototype, "buttonText", {
            get: function () {
                return this.get('buttonText') || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonModel.prototype, "buttonLink", {
            get: function () {
                return this.get('buttonLink');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonModel.prototype, "customUrl", {
            get: function () {
                return this.get('customUrl');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonModel.prototype, "fullurl", {
            get: function () {
                return this.get('fullurl');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonModel.prototype, "buttonStyle", {
            get: function () {
                return this.get('buttonStyle');
            },
            enumerable: true,
            configurable: true
        });
        ButtonModel.prototype.updateButtonSettings = function (properties) {
            this.set(properties);
        };
        return ButtonModel;
    }(Backbone_1.Model));
    exports.ButtonModel = ButtonModel;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Button.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Button.View", ["require", "exports", "Backbone", "sc_featuredcategory_button.tpl"], function (require, exports, Backbone_1, featuredCategoryButtonTemplate) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonView = /** @class */ (function (_super) {
        __extends(ButtonView, _super);
        function ButtonView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = featuredCategoryButtonTemplate;
            _this.model.on('reset sync add remove change destroy', function () {
                _this.render();
            });
            return _this;
        }
        ButtonView.prototype.getContext = function () {
            var buttonText = this.model.buttonText;
            var buttonLink = this.model.customUrl ? this.model.customUrl : this.model.fullurl;
            return {
                buttonText: buttonText,
                buttonLink: buttonLink,
                buttonStyle: this.model.buttonStyle,
                showButton: !!buttonText && !!buttonLink,
            };
        };
        return ButtonView;
    }(Backbone_1.View));
    exports.ButtonView = ButtonView;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.CCTConfiguration"/>
define("SuiteCommerce.FeaturedCategory.CCTConfiguration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ButtonStyleOptions = {
        '1': 'button-style-one',
        '2': 'button-style-two',
        '3': 'button-style-three',
    };
    var HeaderPositionOptions = {
        '1': 'left',
        '2': 'right',
        '3': 'center',
    };
    var SortFieldOptions = {
        '1': { sortfieldname: 'relevance', direction: 'desc' },
        '2': { sortfieldname: 'pricelevel5', direction: 'asc' },
        '3': { sortfieldname: 'pricelevel5', direction: 'desc' },
        '4': { sortfieldname: 'custitem_ns_sc_ext_ts_7_amount', direction: 'desc' },
        '5': { sortfieldname: 'custitem_ns_sc_ext_ts_30_amount', direction: 'desc' },
        '6': { sortfieldname: 'custitem_ns_sc_ext_ts_90_amount', direction: 'desc' },
        '7': { sortfieldname: 'custitem_ns_sc_ext_ts_365_amount', direction: 'desc' },
        '8': { sortfieldname: 'custitem_ns_sc_ext_ts_7_quantity', direction: 'desc' },
        '9': { sortfieldname: 'custitem_ns_sc_ext_ts_30_quantity', direction: 'desc' },
        '10': { sortfieldname: 'custitem_ns_sc_ext_ts_90_quantity', direction: 'desc' },
        '11': { sortfieldname: 'custitem_ns_sc_ext_ts_365_quantity', direction: 'desc' },
    };
    var NumberOfItemsOptions = {
        '1': 2, '2': 4, '3': 6, '4': 8, '5': 10, '6': 12, '7': 14, '8': 16, '9': 18, '10': 20, '11': 22, '12': 24
    };
    var ColumnsPerRowSupportedOptions = {
        '1': 12, '2': 6, '3': 4, '4': 3
    };
    var ColumnsPerRowSupportedPhoneOptions = {
        '1': 12, '2': 6
    };
    var CCTConfiguration = /** @class */ (function () {
        function CCTConfiguration() {
        }
        CCTConfiguration.getButtonStyle = function (option) {
            return ButtonStyleOptions[option] ? ButtonStyleOptions[option] : '1';
        };
        CCTConfiguration.getHeaderPosition = function (option) {
            return HeaderPositionOptions[option] ? HeaderPositionOptions[option] : '';
        };
        CCTConfiguration.getSortField = function (option) {
            return SortFieldOptions[option] ? SortFieldOptions[option] : SortFieldOptions['1'];
        };
        CCTConfiguration.getNumberOfItems = function (option, defaultOption) {
            if (NumberOfItemsOptions[option])
                return NumberOfItemsOptions[option];
            return NumberOfItemsOptions[defaultOption];
        };
        CCTConfiguration.getColumnsPerRow = function (option) {
            return ColumnsPerRowSupportedOptions[option] ? ColumnsPerRowSupportedOptions[option] : ColumnsPerRowSupportedOptions['3'];
        };
        CCTConfiguration.getColumnsPerRowPhone = function (option) {
            return ColumnsPerRowSupportedPhoneOptions[option] ? ColumnsPerRowSupportedPhoneOptions[option] : ColumnsPerRowSupportedPhoneOptions['1'];
        };
        return CCTConfiguration;
    }());
    exports.CCTConfiguration = CCTConfiguration;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Model", ["require", "exports", "Backbone", "SuiteCommerce.FeaturedCategory.Item.Collection", "SuiteCommerce.FeaturedCategory.CCTConfiguration", "SuiteCommerce.FeaturedCategory.Common.Utils"], function (require, exports, Backbone_1, Item_Collection_1, FeaturedCategory_Configuration_1, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CCTFields;
    (function (CCTFields) {
        CCTFields["showName"] = "custrecord_cct_ns_featcatcct_showname";
        CCTFields["desktopQty"] = "custrecord_cct_ns_featcatcct_desktopqty";
        CCTFields["headerLink"] = "custrecord_cct_ns_featcatcct_headerlink";
        CCTFields["sort"] = "custrecord_cct_ns_featcatcct_sort";
        CCTFields["mobileItems"] = "custrecord_cct_ns_featcatcct_mobileitems";
        CCTFields["showPrice"] = "custrecord_cct_ns_featcatcct_showprice";
        CCTFields["buttonStyle"] = "custrecord_cct_ns_featcatcct_buttonstyle";
        CCTFields["buttonText"] = "custrecord_cct_ns_featcatcct_buttontext";
        CCTFields["customUrl"] = "custrecord_cct_ns_featcatcct_customurl";
        CCTFields["columns"] = "custrecord_cct_ns_featcatcct_columns";
        CCTFields["mobileCol"] = "custrecord_cct_ns_featcatcct_mobilecol";
        CCTFields["categoryId"] = "custrecord_cct_ns_featcatcct_categoryid";
        CCTFields["category"] = "custrecord_cct_ns_featcatcct_category";
        CCTFields["header"] = "custrecord_cct_ns_featcatcct_header";
        CCTFields["headerAlign"] = "custrecord_cct_ns_featcatcct_headeralign";
    })(CCTFields = exports.CCTFields || (exports.CCTFields = {}));
    var FeaturedCategoryModel = /** @class */ (function (_super) {
        __extends(FeaturedCategoryModel, _super);
        function FeaturedCategoryModel(options) {
            var _this = _super.call(this, options) || this;
            if (options) {
                _this.environment = options.container.getComponent('Environment');
            }
            return _this;
        }
        Object.defineProperty(FeaturedCategoryModel.prototype, "urlRoot", {
            get: function () {
                var urlRoot;
                urlRoot = Utils_1.Utils.getAbsoluteUrl(getExtensionAssetsPath('services/FeaturedCategory.Service.ss'));
                if (this.categoryId) {
                    urlRoot = Utils_1.Utils.addParamsToUrl(urlRoot, {
                        categoryId: this.categoryId,
                    });
                }
                return urlRoot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "fullUrl", {
            get: function () {
                return this.get('fullurl');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "name", {
            get: function () {
                return this.get('name') || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "categoryId", {
            get: function () {
                return this.get(CCTFields.category) || this.get(CCTFields.categoryId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "headerText", {
            get: function () {
                return this.get(CCTFields.header) || '';
            },
            set: function (headerText) {
                this.set(CCTFields.header, headerText);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "customUrl", {
            get: function () {
                return this.get(CCTFields.customUrl);
            },
            set: function (url) {
                this.set(CCTFields.customUrl, url);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "headerPosition", {
            get: function () {
                var headerAlign = this.get(CCTFields.headerAlign);
                return headerAlign ? FeaturedCategory_Configuration_1.CCTConfiguration.getHeaderPosition(headerAlign) : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "hasHeader", {
            get: function () {
                return !!this.headerText;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "headerAllowLink", {
            get: function () {
                return this.get(CCTFields.headerLink) === 'T';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "showItemPrice", {
            get: function () {
                return this.get(CCTFields.showPrice) === 'T';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "showItemName", {
            get: function () {
                return this.get(CCTFields.showName) === 'T';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "buttonText", {
            get: function () {
                return this.get(CCTFields.buttonText);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "buttonStyle", {
            get: function () {
                var buttonStyle = this.get(CCTFields.buttonStyle);
                return buttonStyle ? FeaturedCategory_Configuration_1.CCTConfiguration.getButtonStyle(buttonStyle) : '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "itemSorting", {
            get: function () {
                var sort = this.get(CCTFields.sort);
                if (sort) {
                    return FeaturedCategory_Configuration_1.CCTConfiguration.getSortField(sort);
                }
                return;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "colsPerRow", {
            get: function () {
                return FeaturedCategory_Configuration_1.CCTConfiguration.getColumnsPerRow(this.get(CCTFields.columns));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "colsPerRowPhone", {
            get: function () {
                return FeaturedCategory_Configuration_1.CCTConfiguration.getColumnsPerRowPhone(this.get(CCTFields.mobileCol));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "items", {
            get: function () {
                if (!this.get('items')) {
                    this.items = new Item_Collection_1.ItemCollection(null, {
                        environment: this.environment
                    });
                }
                return this.get('items');
            },
            set: function (items) {
                this.set('items', items);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "headerIsHtml", {
            get: function () {
                return this.isHTML(this.headerText);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FeaturedCategoryModel.prototype, "numberOfItems", {
            get: function () {
                var numberOfItems = FeaturedCategory_Configuration_1.CCTConfiguration.getNumberOfItems(this.get(CCTFields.desktopQty), '6');
                if (jQuery(window).width() < 768) {
                    numberOfItems = FeaturedCategory_Configuration_1.CCTConfiguration.getNumberOfItems(this.get(CCTFields.mobileItems), '2');
                }
                return numberOfItems;
            },
            enumerable: true,
            configurable: true
        });
        FeaturedCategoryModel.prototype.addProperties = function (properties) {
            this.set(properties);
        };
        FeaturedCategoryModel.prototype.isHTML = function (stringToCheck) {
            var divWrapper = document.createElement('div');
            var childNodes;
            var parsedHtml;
            divWrapper.innerHTML = stringToCheck;
            childNodes = divWrapper.childNodes;
            if (childNodes.length > 0) {
                parsedHtml = this.htmlDecode(this.headerText);
                this.headerText = parsedHtml;
                return true;
            }
            return false;
        };
        FeaturedCategoryModel.prototype.htmlDecode = function (input) {
            var e = document.createElement('textarea');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
        };
        return FeaturedCategoryModel;
    }(Backbone_1.Model));
    exports.FeaturedCategoryModel = FeaturedCategoryModel;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.View", ["require", "exports", "jQuery", "CustomContentType.Base.View", "Backbone.CollectionView", "SuiteCommerce.FeaturedCategory.Model", "SuiteCommerce.FeaturedCategory.Button.View", "SuiteCommerce.FeaturedCategory.Button.Model", "SuiteCommerce.FeaturedCategory.Instrumentation", "sc_featuredcategory_cct.tpl", "SuiteCommerce.FeaturedCategory.Item.View"], function (require, exports, jQuery, CustomContentTypeBaseView, BackboneCollectionView, FeaturedCategory_Model_1, FeaturedCategory_Button_View_1, FeaturedCategory_Button_Model_1, Instrumentation_1, featuredCategoryTemplate, Item_View_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FeaturedCategoryView = /** @class */ (function (_super) {
        __extends(FeaturedCategoryView, _super);
        function FeaturedCategoryView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = featuredCategoryTemplate;
            _this.container = options.container;
            _this.buttonView = new FeaturedCategory_Button_View_1.ButtonView({ model: new FeaturedCategory_Button_Model_1.ButtonModel() });
            _this.model = new FeaturedCategory_Model_1.FeaturedCategoryModel({ container: _this.container });
            _this.setupListeners();
            return _this;
        }
        FeaturedCategoryView.prototype.setupListeners = function () {
            var _this = this;
            this.model.on('reset sync add remove change destroy', function () {
                _this.updateCategoryButtonSettings();
                _this.render();
            });
            this.model.items.on('reset sync add remove change destroy', function () { return _this.render(); });
        };
        FeaturedCategoryView.prototype.install = function (settings, contextData) {
            _super.prototype.install.call(this, settings, contextData);
            this.parseSettings(settings);
            this.fetchFeaturedCategoryData();
            return jQuery.Deferred().resolve();
        };
        FeaturedCategoryView.prototype.update = function (settings) {
            _super.prototype.update.call(this, settings);
            this.parseSettings(settings);
            this.clearItems();
            this.fetchFeaturedCategoryData();
            return jQuery.Deferred().resolve();
        };
        FeaturedCategoryView.prototype.parseSettings = function (settings) {
            this.model.addProperties(settings);
        };
        FeaturedCategoryView.prototype.fetchFeaturedCategoryData = function () {
            if (this.model.categoryId) {
                this.fetchItemCollection();
                this.fetchFeaturedCategoryModel();
            }
        };
        FeaturedCategoryView.prototype.fetchItemCollection = function () {
            this.model.items.setURLForSearchApi({
                limit: this.model.numberOfItems,
                sortingField: this.model.itemSorting,
                commerceCategoryId: this.model.categoryId
            });
            var fetchItemInformationLog = Instrumentation_1.default.getLog('fetchItemInformationLog');
            fetchItemInformationLog.startTimer();
            this.model.items.fetch().done(function () {
                fetchItemInformationLog.endTimer();
                fetchItemInformationLog.setParameters({
                    activity: 'Time it takes to fetch the item data',
                    totalTime: fetchItemInformationLog.getElapsedTimeForTimer(),
                });
                fetchItemInformationLog.submit();
            });
        };
        FeaturedCategoryView.prototype.fetchFeaturedCategoryModel = function () {
            if (this.model.buttonText) {
                var fetchCommerceCategoryDataLog_1 = Instrumentation_1.default.getLog('fetchCommerceCategoryDataLog');
                fetchCommerceCategoryDataLog_1.startTimer();
                this.model.fetch().done(function () {
                    fetchCommerceCategoryDataLog_1.endTimer();
                    fetchCommerceCategoryDataLog_1.setParameters({
                        activity: 'Time it takes to fetch the Category data',
                        totalTime: fetchCommerceCategoryDataLog_1.getElapsedTimeForTimer(),
                    });
                    fetchCommerceCategoryDataLog_1.submit();
                });
            }
        };
        FeaturedCategoryView.prototype.updateCategoryButtonSettings = function () {
            this.buttonView.model.updateButtonSettings({
                buttonText: this.model.buttonText,
                customUrl: this.model.customUrl,
                fullurl: this.model.fullUrl,
                buttonStyle: this.model.buttonStyle
            });
        };
        FeaturedCategoryView.prototype.validateContextDataRequest = function () {
            return true;
        };
        FeaturedCategoryView.prototype.logGoToCategory = function () {
            var categoryButtonUsageLog = Instrumentation_1.default.getLog('categoryButtonUsage');
            categoryButtonUsageLog.setParameters({
                activity: 'Redirect to category button click',
            });
            categoryButtonUsageLog.submit();
        };
        FeaturedCategoryView.prototype.clearItems = function () {
            this.model.items.reset();
        };
        Object.defineProperty(FeaturedCategoryView.prototype, "childViews", {
            get: function () {
                var _this = this;
                return {
                    'FeaturedCategory.Items.View': function () {
                        return new BackboneCollectionView({
                            childView: Item_View_1.ItemView,
                            collection: _this.model.items,
                            childViewOptions: {
                                colsPerRow: _this.model.colsPerRow,
                                colsPerRowPhone: _this.model.colsPerRowPhone,
                                showItemName: _this.model.showItemName,
                                showItemPrice: _this.model.showItemPrice,
                            },
                        });
                    },
                    'FeaturedCategory.Button.View': function () {
                        return _this.buttonView;
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        FeaturedCategoryView.prototype.getContext = function () {
            if (!this.model.customUrl) {
                this.model.customUrl = this.model.fullUrl;
            }
            return {
                customUrl: this.model.customUrl,
                hasHeader: this.model.hasHeader,
                hasItems: this.model.items.size() > 0,
                headerAllowLink: this.model.headerAllowLink,
                headerIsHtml: this.model.headerIsHtml,
                headerPosition: this.model.headerPosition,
                headerText: this.model.headerText
            };
        };
        return FeaturedCategoryView;
    }(CustomContentTypeBaseView));
    exports.FeaturedCategoryView = FeaturedCategoryView;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.FeaturedCategory"/>
define("SuiteCommerce.FeaturedCategory.FeaturedCategory", ["require", "exports", "SuiteCommerce.FeaturedCategory.View"], function (require, exports, FeaturedCategory_View_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeaturedCategoryModuleCCT = {
        mountToApp: function (container) {
            this.registerCCT(container);
        },
        registerCCT: function (container) {
            var cmsComponent = container.getComponent('CMS');
            cmsComponent.registerCustomContentType({
                id: 'cct_netsuite_featuredcategorycct',
                view: FeaturedCategory_View_1.FeaturedCategoryView,
                options: {
                    container: container,
                },
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.FeaturedCategory.Instrumentation.Log", ["require", "exports", "SuiteCommerce.FeaturedCategory.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Instrumentation.Logger"/>
define("SuiteCommerce.FeaturedCategory.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.FeaturedCategory.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] }
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { },
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Instrumentation.MockAppender"/>
define("SuiteCommerce.FeaturedCategory.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.prototype.ready = function () {
            return true;
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        MockAppender.prototype.start = function (action, options) {
            return options;
        };
        MockAppender.prototype.end = function (startOptions, options) { };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Instrumentation"/>
define("SuiteCommerce.FeaturedCategory.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.FeaturedCategory.Instrumentation.Logger", "SuiteCommerce.FeaturedCategory.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Item.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Item.Collection", ["require", "exports", "underscore", "Backbone", "SuiteCommerce.FeaturedCategory.Item.Model", "SuiteCommerce.FeaturedCategory.Item.Configuration", "SuiteCommerce.FeaturedCategory.Common.Utils", "SuiteCommerce.FeaturedCategory.Common.Configuration"], function (require, exports, _, Backbone_1, Item_Model_1, Item_Configuration_1, Utils_1, Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemCollection = /** @class */ (function (_super) {
        __extends(ItemCollection, _super);
        function ItemCollection(elements, options) {
            var _this = _super.call(this, elements, options) || this;
            _this.model = Item_Model_1.ItemModel;
            if (options) {
                _this.environment = options.environment;
            }
            return _this;
        }
        ItemCollection.prototype.setURLForSearchApi = function (searchApiOptions) {
            var searchApiUrl = '/api/items';
            var searchParams = _.extend({
                limit: searchApiOptions.limit,
                commercecategoryid: searchApiOptions.commerceCategoryId,
            }, this.getSortFieldParam(searchApiOptions.sortingField), this.getFieldsetParam(), this.getSessionSearchApiParams());
            if (this.isPCVEnabled()) {
                _(searchParams).extend(this.getPCVParam());
            }
            this.url = Utils_1.Utils.addParamsToUrl(searchApiUrl, searchParams);
        };
        ItemCollection.prototype.getSortFieldParam = function (sortingField) {
            var sortFieldName = '';
            var sortFields = Item_Configuration_1.ItemConfiguration.siteSettingsSortfield;
            for (var i = 0; i < sortFields.length; i += 1) {
                var sortField = sortFields[i];
                if (sortField.sortfieldname === sortingField.sortfieldname) {
                    sortFieldName = sortField.sortfieldname + ":" + sortingField.direction;
                    break;
                }
            }
            return {
                sort: sortFieldName || 'relevance'
            };
        };
        ItemCollection.prototype.getFieldsetParam = function () {
            var customFieldset = Item_Configuration_1.ItemConfiguration.getFieldSetID;
            var fieldsetName = Item_Configuration_1.ItemConfiguration.activeFieldset;
            return {
                fieldset: customFieldset || fieldsetName || 'search'
            };
        };
        ItemCollection.prototype.getSessionSearchApiParams = function () {
            var searchApiParams = {};
            var sessionInfo = this.environment.getSession();
            var locale = (sessionInfo.language && sessionInfo.language.locale) || '';
            var language = '';
            var country = '';
            var currency = (sessionInfo.currency && sessionInfo.currency.code) || '';
            var priceLevel = sessionInfo.priceLevel || '';
            var localeTokens;
            if (locale.indexOf('_') >= 0) {
                localeTokens = locale.split('_');
                language = localeTokens[0];
                country = localeTokens[1];
            }
            else {
                language = locale;
            }
            // SET API PARAMS
            if (language) {
                searchApiParams.language = language;
            }
            if (country) {
                searchApiParams.country = country;
            }
            if (currency) {
                searchApiParams.currency = currency;
            }
            searchApiParams.pricelevel = priceLevel;
            // No cache
            if (_(window.location.search).parseUrlOptions().nocache === 'T') {
                searchApiParams.nocache = 'T';
            }
            return searchApiParams;
        };
        ItemCollection.prototype.isPCVEnabled = function () {
            return Configuration_1.Configuration.get('siteSettings.isPersonalizedCatalogViewsEnabled') || false;
        };
        ItemCollection.prototype.getPCVParam = function () {
            return {
                use_pcv: 'T'
            };
        };
        ItemCollection.prototype.parse = function (response) {
            return _(response.items).compact() || null;
        };
        return ItemCollection;
    }(Backbone_1.Collection));
    exports.ItemCollection = ItemCollection;
});
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Item.Configuration", ["require", "exports", "SuiteCommerce.FeaturedCategory.Common.Configuration"], function (require, exports, Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemConfiguration = /** @class */ (function (_super) {
        __extends(ItemConfiguration, _super);
        function ItemConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ItemConfiguration, "imageNotAvailable", {
            get: function () {
                return this.get('imageNotAvailable');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfiguration, "activeFieldset", {
            get: function () {
                return this.get('searchApiMasterOptions.Facets.fieldset');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfiguration, "siteSettingsSortfield", {
            get: function () {
                return this.get('siteSettings.sortfield');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfiguration, "getFieldSetID", {
            get: function () {
                return this.get('featuredcategory.fieldset') || '';
            },
            enumerable: true,
            configurable: true
        });
        return ItemConfiguration;
    }(Configuration_1.Configuration));
    exports.ItemConfiguration = ItemConfiguration;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Item.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Item.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemModel = /** @class */ (function (_super) {
        __extends(ItemModel, _super);
        function ItemModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ItemModel.prototype, "displayName", {
            get: function () {
                return this.get('storedisplayname2') || this.get('displayname') || this.get('itemid') || '';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemModel.prototype, "urlComponent", {
            get: function () {
                return this.get('urlcomponent');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemModel.prototype, "internalId", {
            get: function () {
                return this.get('internalid');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemModel.prototype, "itemImagesDetail", {
            get: function () {
                return this.get('itemimages_detail');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemModel.prototype, "matrixChildItemsDetail", {
            get: function () {
                return this.get('matrixchilditems_detail');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemModel.prototype, "priceLevel1Formatted", {
            get: function () {
                return this.get('pricelevel1_formatted');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemModel.prototype, "onlineCustomerPriceDetail", {
            get: function () {
                return this.get('onlinecustomerprice_detail');
            },
            enumerable: true,
            configurable: true
        });
        return ItemModel;
    }(Backbone_1.Model));
    exports.ItemModel = ItemModel;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.Item.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedCategory.Item.View", ["require", "exports", "Backbone", "SuiteCommerce.FeaturedCategory.Instrumentation", "SuiteCommerce.FeaturedCategory.Common.Utils", "SuiteCommerce.FeaturedCategory.Item.Configuration", "sc_featuredcategory_item.tpl"], function (require, exports, Backbone_1, Instrumentation_1, Utils_1, Item_Configuration_1, featuredCategoryItemTpl) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemView = /** @class */ (function (_super) {
        __extends(ItemView, _super);
        function ItemView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = featuredCategoryItemTpl;
            _this.colsPerRow = options.colsPerRow;
            _this.colsPerRowPhone = options.colsPerRowPhone;
            _this.showItemPrice = options.showItemPrice;
            _this.showItemName = options.showItemName;
            return _this;
        }
        ItemView.prototype.logQuickAddButton = function () {
            var quickAddButtonUsageLog = Instrumentation_1.default.getLog('quickAddButtonUsageLog');
            quickAddButtonUsageLog.setParameters({
                activity: 'Quick add button pressed',
            });
            quickAddButtonUsageLog.submit();
        };
        ItemView.prototype.getImageData = function () {
            var unavailableImgLink = 'img/no_image_available.jpeg';
            var itemImagesDetail = this.model.itemImagesDetail || {};
            itemImagesDetail = itemImagesDetail.media || itemImagesDetail;
            var images = Utils_1.Utils.imageFlatten(itemImagesDetail);
            return images.length ? images[0] : {
                url: Utils_1.Utils.getThemeAbsoluteUrlOfNonManagedResources(unavailableImgLink, Item_Configuration_1.ItemConfiguration.imageNotAvailable),
                altimagetext: Utils_1.Utils.translate('Image not available'),
            };
        };
        ItemView.prototype.getItemPrice = function () {
            if (Utils_1.Utils.hidePrices()) {
                return '';
            }
            var matrixDetail = this.model.matrixChildItemsDetail;
            if (matrixDetail && matrixDetail.length > 0) {
                var min = 0;
                var max = 0;
                var minFormatted = '';
                var maxFormatted = '';
                for (var i = 0; i < matrixDetail.length; i += 1) {
                    var priceDetail = matrixDetail[i].onlinecustomerprice_detail;
                    var price = priceDetail && (priceDetail.onlinecustomerprice || priceDetail.pricelevel1) || 0;
                    var priceFormatted = priceDetail && (priceDetail.onlinecustomerprice_formatted || priceDetail.pricelevel1_formatted) || '';
                    if (price > 0 && (price < min || min === 0)) {
                        min = price;
                        minFormatted = priceFormatted;
                    }
                    if (price > max) {
                        max = price;
                        maxFormatted = priceFormatted;
                    }
                }
                if (min > 0 && max > 0 && min !== max) {
                    return minFormatted + " " + Utils_1.Utils.translate('to') + " " + maxFormatted;
                }
            }
            var priceData = this.model.onlineCustomerPriceDetail;
            return priceData && priceData.onlinecustomerprice_formatted || this.model.priceLevel1Formatted || '';
        };
        ItemView.prototype.getContext = function () {
            var displayName = this.model.displayName;
            var imgData = this.getImageData();
            var itemPrice = this.getItemPrice();
            var itemLink = this.model.urlComponent ?
                "/" + this.model.urlComponent : "/product/" + this.model.internalId;
            return {
                displayName: displayName,
                itemPrice: itemPrice,
                itemLink: itemLink,
                renderItem: !!(displayName && imgData && imgData.url),
                imageUrl: imgData ? imgData.url : '',
                imageAlt: imgData ? imgData.altimagetext : '',
                colsPerRow: this.colsPerRow,
                colsPerRowPhone: this.colsPerRowPhone,
                showItemName: this.showItemName,
                showItemPrice: this.showItemPrice,
            };
        };
        return ItemView;
    }(Backbone_1.View));
    exports.ItemView = ItemView;
});
/// <amd-module name="SuiteCommerce.FeaturedCategory.EntryPoint"/>
define("SuiteCommerce.FeaturedCategory.EntryPoint", ["require", "exports", "SuiteCommerce.FeaturedCategory.Common.InstrumentationHelper", "SuiteCommerce.FeaturedCategory.FeaturedCategory", "SuiteCommerce.FeaturedCategory.Common.Configuration", "SuiteCommerce.FeaturedCategory.Common.Utils"], function (require, exports, InstrumentationHelper_1, FeaturedCategory_1, Configuration_1, Utils_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var environment = container.getComponent('Environment');
            var userProfile = container.getComponent('UserProfile');
            if (userProfile) {
                userProfile
                    .getUserProfile()
                    .then(function (userProfileData) {
                    Utils_1.Utils.userProfileData = userProfileData;
                });
            }
            InstrumentationHelper_1.InstrumentationHelper.initializeInstrumentation(environment);
            this.initializeConfiguration(environment);
            FeaturedCategory_1.FeaturedCategoryModuleCCT.mountToApp(container);
        },
        initializeConfiguration: function (environment) {
            Configuration_1.Configuration.environment = environment;
        }
    };
});
};
extensions['SuiteCommerce.FeaturedProduct.1.2.0'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/FeaturedProduct/1.2.0/' + asset;
};
/// <amd-module name="SC.FeaturedProduct.Common.Configuration"/>
define("SC.FeaturedProduct.Common.Configuration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var environment = null;
    var Configuration = /** @class */ (function () {
        function Configuration() {
        }
        Object.defineProperty(Configuration, "environment", {
            set: function (environmentComponent) {
                environment = environmentComponent;
            },
            enumerable: true,
            configurable: true
        });
        Configuration.get = function (key, defaultValue) {
            if (environment) {
                return environment.getConfig(key);
            }
            console.error('Please set the Environment Component in the Configuration.');
            return null;
        };
        Configuration.getFieldSetID = function () {
            return this.get('featuredproduct.fieldset') || '';
        };
        return Configuration;
    }());
    exports.Configuration = Configuration;
});
/// <amd-module name="SC.FeaturedProduct.Common.Utils"/>
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define("SC.FeaturedProduct.Common.Utils", ["require", "exports", "underscore", "jQuery", "SC.FeaturedProduct.Common.Configuration"], function (require, exports, _, jQuery, Common_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var profile = null;
    var RegistrationType;
    (function (RegistrationType) {
        // no login, no register, checkout as guest only
        RegistrationType["disabled"] = "disabled";
        // login, register, guest
        RegistrationType["optional"] = "optional";
        // login, register, no guest
        RegistrationType["required"] = "required";
        // login, no register, no guest
        RegistrationType["existing"] = "existing";
    })(RegistrationType || (RegistrationType = {}));
    function stringFormat(text) {
        var continuationText = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            continuationText[_i - 1] = arguments[_i];
        }
        return text.replace(/\$\((\d+)\)/g, function (match, number) {
            if (typeof continuationText[number] !== 'undefined') {
                return continuationText[number].toString();
            }
            return match.toString();
        });
    }
    function isUrlAbsolute(url) {
        return /^https?:\/\//.test(url);
    }
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.trim = function (text) {
            return jQuery.trim(text);
        };
        Utils.resizeImage = function (sizes, url, size) {
            var resize = _.where(sizes, { name: size })[0];
            url = url || '';
            if (resize) {
                return url + (url.indexOf('?') !== -1 ? '&' : '?') + resize.urlsuffix;
            }
            return url;
        };
        Utils.getThemeAbsoluteUrlOfNonManagedResources = function (defaultValue, file) {
            if (!file) {
                file = '';
                if (SC.ENVIRONMENT.isExtended) {
                    file = SC.ENVIRONMENT.themeAssetsPath || '';
                }
                else if (SC.ENVIRONMENT.BuildTimeInf && SC.ENVIRONMENT.BuildTimeInf.isSCLite) {
                    if (SC.CONFIGURATION.unmanagedResourcesFolderName) {
                        file = "site/" + SC.CONFIGURATION.unmanagedResourcesFolderName + "/";
                    }
                    else {
                        file = 'default/';
                    }
                }
                file += defaultValue;
            }
            return Utils.getAbsoluteUrl(file);
        };
        Utils.getAbsoluteUrl = function (file) {
            if (file === void 0) { file = ''; }
            var base_url = (SC && SC.ENVIRONMENT && SC.ENVIRONMENT.baseUrl) || '';
            var fileReplace = file;
            if (base_url && !isUrlAbsolute(fileReplace)) {
                return base_url.replace('{{file}}', fileReplace);
            }
            return file;
        };
        Utils.imageFlatten = function (images) {
            var result = [];
            if ('url' in images && 'altimagetext' in images) {
                return [images];
            }
            Object.getOwnPropertyNames(images).forEach(function (key) {
                if (_.isArray(images[key])) {
                    result.push(images[key]);
                }
                else {
                    result.push(Utils.imageFlatten(images[key]));
                }
            });
            return _.flatten(result);
        };
        Utils.addParamsToUrl = function (baseUrl, params, avoidDoubleRedirect) {
            if (avoidDoubleRedirect) {
                var new_params_1 = {};
                _.each(params, function (param_value, param_key) {
                    new_params_1['__' + param_key] = param_value;
                });
                params = new_params_1;
            }
            // We get the search options from the config file
            if (baseUrl && !_.isEmpty(params)) {
                var paramString = jQuery.param(params);
                var join_string = baseUrl.indexOf('?') !== -1 ? '&' : '?';
                return baseUrl + join_string + paramString;
            }
            return baseUrl;
        };
        Utils.translate = function (text) {
            var continuationText = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                continuationText[_i - 1] = arguments[_i];
            }
            if (!text) {
                return '';
            }
            // Turns the arguments object into an array
            var parameters = [];
            // Checks the translation table
            var result = SC.Translations && SC.Translations[text] ? SC.Translations[text] : text;
            if (continuationText && continuationText.length && result) {
                var firstParameter = continuationText[0];
                if (_.isArray(firstParameter) && firstParameter.length) {
                    parameters = firstParameter;
                }
                else {
                    parameters = _.map(continuationText, function (param) {
                        return _.escape(param);
                    });
                }
            }
            result = stringFormat.apply(void 0, __spreadArrays([result], parameters));
            return result;
        };
        Utils.hidePrices = function () {
            if (this.userProfileData) {
                return (this.getRegistrationType() !== RegistrationType.disabled &&
                    Common_Configuration_1.Configuration.get('siteSettings.requireloginforpricing', 'F') === 'T' &&
                    !this.userProfileData.isloggedin);
            }
            //SCA <19.1
            var ProfileModel = require('Profile.Model');
            return ProfileModel.getInstance().hidePrices();
        };
        Utils.getRegistrationType = function () {
            // registrationmandatory is 'T' when customer registration is disabled
            if (Common_Configuration_1.Configuration.get('siteSettings.registration.registrationmandatory', null) === 'T') {
                return RegistrationType.disabled;
            }
            if (Common_Configuration_1.Configuration.get('siteSettings.registration.registrationoptional', null) === 'T') {
                return RegistrationType.optional;
            }
            if (Common_Configuration_1.Configuration.get('siteSettings.registration.registrationallowed', null) === 'T') {
                return RegistrationType.required;
            }
            return RegistrationType.existing;
        };
        Object.defineProperty(Utils, "userProfileData", {
            get: function () {
                if (profile) {
                    return profile;
                }
                return null;
            },
            set: function (profileData) {
                profile = profileData;
            },
            enumerable: true,
            configurable: true
        });
        return Utils;
    }());
    exports.default = Utils;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Common.DependencyProvider"/>
define("SuiteCommerce.FeaturedProduct.Common.DependencyProvider", ["require", "exports", "underscore", "Backbone.CachedModel"], function (require, exports, _, BackboneCachedModelModule) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BackboneCachedModel = getDependency(BackboneCachedModelModule);
    function getDependency(module) {
        if (isTranspiledModule(module)) {
            return module[Object.keys(module)[0]];
        }
        return module;
    }
    function isTranspiledModule(module) {
        var moduleKeys = Object.keys(module);
        return !_.isFunction(module) && moduleKeys.length === 1;
    }
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Common.InstrumentationHelper"/>
define("SuiteCommerce.FeaturedProduct.Common.InstrumentationHelper", ["require", "exports", "SuiteCommerce.FeaturedProduct.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueueNameSuffix = '-FeaturedProduct';
    var ExtensionVersion = '1.2.0';
    var ComponentArea = 'Featured Product';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (environment) {
            Instrumentation_1.default.initialize({
                environment: environment,
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                },
            });
        };
        InstrumentationHelper.log = function (parameters) {
            var log = Instrumentation_1.default.getLog(parameters.activity.replace(' ', ''));
            log.setParameters(parameters);
            log.submit();
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="NetSuite.FeaturedProduct.FeaturedProductCCT.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("NetSuite.FeaturedProduct.FeaturedProductCCT.View", ["require", "exports", "underscore", "netsuite_featuredproduct_featuredproductcct.tpl", "SC.FeaturedProduct.Common.Utils", "SC.FeaturedProduct.Common.Configuration", "CustomContentType.Base.View", "SuiteCommerce.FeaturedProduct.Item.Collection", "SuiteCommerce.FeaturedProduct.Common.InstrumentationHelper", "SuiteCommerce.FeaturedProduct.Instrumentation"], function (require, exports, _, template, Common_Utils_1, Common_Configuration_1, CustomContentTypeBaseView, Item_Collection_1, InstrumentationHelper_1, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FeaturedProductCCTView = /** @class */ (function (_super) {
        __extends(FeaturedProductCCTView, _super);
        function FeaturedProductCCTView(options) {
            var _this = _super.call(this, options) || this;
            _this.contextDataRequest = ['item'];
            _this.template = template;
            _this.events = {
                'click [data-action="sc-fp-open-product-page"]': 'openProductPage',
            };
            _this.TO = Common_Utils_1.default.translate('to');
            _this.AVAILABLE = Common_Utils_1.default.translate('Available');
            _this.BTN_STYLE_MAP = {
                1: 'button-style-one',
                2: 'button-style-two',
            };
            if (options) {
                _this.container = options.container;
                _this.environment = _this.container.getComponent('Environment');
            }
            _this.on('afterViewRender', function () {
                var productId = Common_Utils_1.default.trim(_this.settings.custrecord_ns_sc_ext_fp_product ||
                    _this.settings.custrecord_ns_sc_ext_fp_productid);
                if (!!productId &&
                    (!_this.renderedProductData || productId !== _this.renderedProductData.id)) {
                    _this.loadProduct(productId);
                }
                else {
                    _this.renderData(_this.renderedProductData);
                }
            });
            return _this;
        }
        FeaturedProductCCTView.prototype.install = function (settings, contextData) {
            var result = _super.prototype.install.call(this, settings, contextData);
            this.getData();
            this.logSettings();
            return result;
        };
        FeaturedProductCCTView.prototype.update = function (settings) {
            var result = _super.prototype.update.call(this, settings);
            this.getData();
            return result;
        };
        FeaturedProductCCTView.prototype.getData = function () {
            var btnLink = "/product/" + Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_product ||
                this.settings.custrecord_ns_sc_ext_fp_productid);
            var ribbonText = Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_ribbontxt);
            var btnStyleClass = this.BTN_STYLE_MAP[this.settings.custrecord_ns_sc_ext_fp_btnstyle];
            var hasBtnText = !!Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_btntxt);
            var hasRibbonText = !!Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_ribbontxt);
            this.productData = {};
            this.productData.btnStyleClass = btnStyleClass;
            this.productData.btnLink = btnLink;
            this.productData.btnText = Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_btntxt);
            this.productData.hasBtnText = hasBtnText;
            this.productData.ribbonText = ribbonText;
            this.productData.hasRibbonText = hasRibbonText;
            this.productData.target =
                Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_newwindow) === 'T'
                    ? '_blank'
                    : '_self';
            this.productData.showPrice =
                Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_hideprice) === 'F';
            this.productData.showItemAvailability =
                Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_hideavailability) ===
                    'F';
        };
        FeaturedProductCCTView.prototype.logSettings = function () {
            InstrumentationHelper_1.InstrumentationHelper.log({
                activity: 'Hide price',
                subType: this.productData.showPrice ? 'Disabled' : 'Enabled',
            });
            InstrumentationHelper_1.InstrumentationHelper.log({
                activity: 'Hide availability',
                subType: this.productData.showItemAvailability ? 'Disabled' : 'Enabled',
            });
            InstrumentationHelper_1.InstrumentationHelper.log({
                activity: 'Ribbon text defined',
                subType: this.productData.hasRibbonText ? 'defined' : 'undefined',
            });
            InstrumentationHelper_1.InstrumentationHelper.log({
                activity: 'Call to action style',
                subType: this.productData.btnStyleClass == 'button-style-one'
                    ? 'Primary'
                    : 'Secondary',
            });
        };
        FeaturedProductCCTView.prototype.validateContextDataRequest = function () {
            return true;
        };
        FeaturedProductCCTView.prototype.getContext = function () {
            return {
                btnStyleClass: this.productData.btnStyleClass,
                btnLink: this.productData.btnLink,
                btnText: this.productData.btnText,
                hasBtnText: this.productData.hasBtnText,
                ribbonText: this.productData.ribbonText,
                hasRibbonText: this.productData.hasRibbonText,
                target: this.productData.target,
                showPrice: this.productData.showPrice,
                showItemAvailability: this.productData.showItemAvailability,
            };
        };
        FeaturedProductCCTView.prototype.renderData = function (data) {
            if (data && this.isValidItem) {
                this.$('.featuredproductcct-layout-invalid-item-message').hide();
                this.setImageSrc(data);
                this.$('.product-name').text(data.name);
                this.$('.product-description').html(data.description);
                this.$('.product-formatted-price').html(data.formattedPrice);
                if (data.inStock) {
                    this.$('.product-in-stock, .product-qty-available').show();
                    if (data.quantityAvailable) {
                        this.$('.product-qty-available-number').text(this.AVAILABLE + ': ' + data.quantityAvailable);
                    }
                }
                else {
                    this.$('.product-out-of-stock').show();
                }
                this.$('.featuredproductcct-layout-row').show();
            }
            else {
                this.$('.featuredproductcct-layout-invalid-item-message').show();
                this.$('.featuredproductcct-layout-row').hide();
            }
        };
        FeaturedProductCCTView.prototype.setImageSrc = function (data) {
            var imgSrc = Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_displayimg_url) ||
                data.imgSrc;
            if (this.settings.custrecord_ns_sc_ext_fp_displayimg_url) {
                InstrumentationHelper_1.InstrumentationHelper.log({
                    activity: 'Image product changed',
                });
            }
            imgSrc = this.setImageSize(imgSrc);
            this.$('.product-image').attr('src', imgSrc);
            this.$('.product-image').attr('alt', data.imgAltText);
            this.$('.product-image').attr('title', data.imgAltText);
        };
        FeaturedProductCCTView.prototype.setImageSize = function (imgSrc) {
            var targetSizeName = Common_Utils_1.default.trim(this.settings.custrecord_ns_sc_ext_fp_imageresizeid);
            if (!targetSizeName)
                return imgSrc;
            var availableSizes = Common_Configuration_1.Configuration.get('siteSettings.imagesizes');
            return Common_Utils_1.default.resizeImage(availableSizes, imgSrc, targetSizeName);
        };
        FeaturedProductCCTView.prototype.getProductImage = function (productData) {
            var src = '';
            var altText = '';
            var itemImagesDetail;
            var images;
            if (productData) {
                itemImagesDetail = (productData.get('itemimages_detail') ||
                    {});
                images = this.imageFlatten(itemImagesDetail);
                if (images.length) {
                    src = images[0].url;
                    altText = images[0].altimagetext;
                }
                else {
                    src = Common_Utils_1.default.getThemeAbsoluteUrlOfNonManagedResources('img/no_image_available.jpeg', Common_Configuration_1.Configuration.get('imageNotAvailable'));
                    altText = 'Image not available';
                }
            }
            return {
                src: src,
                altText: altText,
            };
        };
        FeaturedProductCCTView.prototype.imageFlatten = function (images) {
            var _this = this;
            if ('url' in images && 'altimagetext' in images) {
                return [images];
            }
            return _.flatten(_.map(images, function (item) {
                if (_.isArray(item)) {
                    return item;
                }
                return _this.imageFlatten(item);
            }));
        };
        FeaturedProductCCTView.prototype.renderProduct = function (productData, id) {
            var imgData = this.getProductImage(productData);
            var price = this.getItemPrice(productData);
            this.renderedProductData = {
                id: id,
                name: productData.getName(),
                quantityAvailable: productData.get('quantityavailable'),
                inStock: productData.get('isinstock'),
                description: productData.getDescription(),
                formattedPrice: price,
                imgSrc: imgData.src,
                imgAltText: imgData.altText,
            };
            this.renderData(this.renderedProductData);
        };
        FeaturedProductCCTView.prototype.getItemPrice = function (productData) {
            var min;
            var max;
            var minFormatted;
            var maxFormatted;
            var priceData;
            var matrixChildItemsDetail = productData.get('matrixchilditems_detail');
            if (Common_Utils_1.default.hidePrices()) {
                return '';
            }
            if (matrixChildItemsDetail && matrixChildItemsDetail.length > 0) {
                min = 0;
                max = 0;
                minFormatted = '';
                maxFormatted = '';
                _.each(matrixChildItemsDetail, function (itemDetail) {
                    var priceDetail = itemDetail.onlinecustomerprice_detail;
                    var price = priceDetail && (priceDetail.onlinecustomerprice || priceDetail.pricelevel1) || 0;
                    var priceFormatted = priceDetail && (priceDetail.onlinecustomerprice_formatted || priceDetail.pricelevel1_formatted) ||
                        '0';
                    if (price > 0 && (price < min || min === 0)) {
                        min = price;
                        minFormatted = priceFormatted;
                    }
                    if (price > max) {
                        max = price;
                        maxFormatted = priceFormatted;
                    }
                });
                if (min > 0 && max > 0 && min !== max) {
                    return minFormatted + " " + this.TO + " " + maxFormatted;
                }
            }
            priceData = productData.get('onlinecustomerprice_detail') || {};
            return (priceData && priceData.onlinecustomerprice_formatted ||
                productData.pricelevel1_formatted ||
                '');
        };
        FeaturedProductCCTView.prototype.loadProduct = function (id) {
            var _this = this;
            var itemCollection = new Item_Collection_1.default(null, {
                environment: this.environment,
                ids: [id],
            });
            var log = Instrumentation_1.default.getLog('CCTloadingtime');
            log.startTimer();
            itemCollection
                .fetch()
                .done(function () {
                var item;
                if (itemCollection.length && !itemCollection.models[0].isMatrixChild()) {
                    item = itemCollection.models[0];
                    _this.isValidItem = true;
                    _this.renderProduct(item, id);
                }
                else {
                    _this.isValidItem = false;
                    _this.renderData();
                }
                _this.logSubmission(log, 'success');
            })
                .fail(function () {
                _this.isValidItem = false;
                _this.renderData();
                _this.logSubmission(log, 'fail');
                console.warn('Unexpected error searching the product.');
            });
        };
        FeaturedProductCCTView.prototype.logSubmission = function (log, result) {
            log.endTimer();
            log.setParameters({
                activity: 'CCT loading time',
                operationStatus: result,
                totalTime: log.getElapsedTimeForTimer(),
            });
            log.submit();
        };
        FeaturedProductCCTView.prototype.openProductPage = function () {
            InstrumentationHelper_1.InstrumentationHelper.log({
                activity: 'Open product page',
            });
        };
        return FeaturedProductCCTView;
    }(CustomContentTypeBaseView));
    exports.FeaturedProductCCTView = FeaturedProductCCTView;
});
/// <amd-module name="NetSuite.FeaturedProduct.FeaturedProductCCT"/>
define("NetSuite.FeaturedProduct.FeaturedProductCCT", ["require", "exports", "NetSuite.FeaturedProduct.FeaturedProductCCT.View"], function (require, exports, FeaturedProductCCT_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            this.registerCCT(container);
        },
        registerCCT: function (container) {
            container.getComponent('CMS').registerCustomContentType({
                id: 'cct_netsuite_featuredproductcct',
                view: FeaturedProductCCT_View_1.FeaturedProductCCTView,
                options: {
                    container: container,
                },
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.FeaturedProduct.Instrumentation.Log", ["require", "exports", "SuiteCommerce.FeaturedProduct.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return (!!navigator.userAgent.match(/Trident/g) ||
                !!navigator.userAgent.match(/MSIE/g));
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Instrumentation.Logger"/>
define("SuiteCommerce.FeaturedProduct.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.FeaturedProduct.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] }
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { },
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Instrumentation.MockAppender"/>
define("SuiteCommerce.FeaturedProduct.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.prototype.ready = function () {
            return true;
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        MockAppender.prototype.start = function (action, options) {
            return options;
        };
        MockAppender.prototype.end = function (startOptions, options) { };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Instrumentation"/>
define("SuiteCommerce.FeaturedProduct.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.FeaturedProduct.Instrumentation.Logger", "SuiteCommerce.FeaturedProduct.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedProduct.Item.Collection", ["require", "exports", "SuiteCommerce.FeaturedProduct.Item.Model", "SC.FeaturedProduct.Common.Utils", "SC.FeaturedProduct.Common.Configuration", "underscore", "Backbone.CachedCollection"], function (require, exports, Item_Model_1, Common_Utils_1, Common_Configuration_1, _, BackboneCachedCollection) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemCollection = /** @class */ (function (_super) {
        __extends(ItemCollection, _super);
        function ItemCollection(elements, options) {
            var _this = _super.call(this, elements, options) || this;
            _this.url = function () {
                return Common_Utils_1.default.addParamsToUrl('/api/items', _this.getSearchApiParams());
            };
            if (options) {
                _this.environment = options.environment;
                _this.ids = options.ids || [];
            }
            return _this;
        }
        ItemCollection.prototype.getSearchApiParams = function () {
            return _({}).extend(this.getSearchApiMasterOptions(), this.getSessionSearchApiParams(), this.getItemsParams());
        };
        ItemCollection.prototype.getSearchApiMasterOptions = function () {
            return this.getConfigurationFieldSetParam() || Common_Configuration_1.Configuration.get('searchApiMasterOptions.itemDetails') || {};
        };
        ItemCollection.prototype.getConfigurationFieldSetParam = function () {
            var fieldsetID = Common_Configuration_1.Configuration.getFieldSetID();
            if (!fieldsetID) {
                return null;
            }
            return {
                fieldset: fieldsetID
            };
        };
        ItemCollection.prototype.getSessionSearchApiParams = function () {
            var searchApiParams = {};
            var sessionInfo = this.environment.getSession();
            var locale = (sessionInfo.language && sessionInfo.language.locale) || '';
            var language = '';
            var country = '';
            var currency = (sessionInfo.currency && sessionInfo.currency.code) || '';
            var priceLevel = sessionInfo.priceLevel || '';
            var localeTokens;
            if (locale.indexOf('_') >= 0) {
                localeTokens = locale.split('_');
                language = localeTokens[0];
                country = localeTokens[1];
            }
            else {
                language = locale;
            }
            // SET API PARAMS
            if (language) {
                searchApiParams.language = language;
            }
            if (country) {
                searchApiParams.country = country;
            }
            if (currency) {
                searchApiParams.currency = currency;
            }
            searchApiParams.pricelevel = priceLevel;
            // No cache
            if (_(window.location.search).parseUrlOptions().nocache === 'T') {
                searchApiParams.nocache = 'T';
            }
            return searchApiParams;
        };
        ItemCollection.prototype.getItemsParams = function () {
            return {
                id: this.ids.join(','),
            };
        };
        ItemCollection.prototype.parse = function (response) {
            var items = _.map(response.items, function (item) { return new Item_Model_1.default(item); });
            return _(items).compact() || null;
        };
        return ItemCollection;
    }(BackboneCachedCollection));
    exports.default = ItemCollection;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.ImageHelper"/>
define("SuiteCommerce.FeaturedProduct.Item.ImageHelper", ["require", "exports", "underscore", "SC.FeaturedProduct.Common.Utils", "SC.FeaturedProduct.Common.Configuration"], function (require, exports, _, Common_Utils_1, Common_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        getThumbnailExisting: function (itemModel, itemImagesDetailArg) {
            var itemImagesDetail = itemImagesDetailArg;
            itemImagesDetail = this.filterImagesBySelectedOption(itemModel, itemImagesDetail.thumbnail);
            if (_.isArray(itemImagesDetail.thumbnail.urls) &&
                itemImagesDetail.thumbnail.urls.length) {
                return itemImagesDetail.thumbnail.urls[0];
            }
            return itemImagesDetail.thumbnail;
        },
        getThumbnailFromAll: function (itemModel, itemImagesDetailArg) {
            var flattenedImages;
            var itemImagesDetail = itemImagesDetailArg;
            itemImagesDetail = itemImagesDetail.media || itemImagesDetail;
            itemImagesDetail = this.filterImagesBySelectedOption(itemModel, itemImagesDetail);
            flattenedImages = Common_Utils_1.default.imageFlatten(itemImagesDetail);
            if (flattenedImages.length) {
                return flattenedImages[0];
            }
            return null;
        },
        filterImagesBySelectedOption: function (itemModel, itemImagesDetail) {
            var filterImageOptionIds = Common_Configuration_1.Configuration.get('productline.multiImageOption') || [];
            var itemOptions = itemModel.getItemOptions();
            var filteredImages = itemImagesDetail;
            _(filterImageOptionIds).each(function (itemIoptionId) {
                var itemOptionToFilter = itemOptions.findWhere({
                    cartOptionId: itemIoptionId,
                });
                var filterValue;
                var label;
                // if the option/dimension has a value set
                if (itemOptionToFilter) {
                    filterValue = itemOptionToFilter.get('value');
                    if (filterValue.label) {
                        label = filterValue.label.toLowerCase();
                        _(filteredImages).each(function (value, key) {
                            if (key.toLowerCase() === label) {
                                filteredImages = value;
                            }
                        });
                    }
                }
            });
            return filteredImages;
        },
    };
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedProduct.Item.Model", ["require", "exports", "SuiteCommerce.FeaturedProduct.Common.DependencyProvider", "SuiteCommerce.FeaturedProduct.Item.ImageHelper", "SuiteCommerce.FeaturedProduct.Item.Option.Collection"], function (require, exports, DependencyProvider_1, Item_ImageHelper_1, Item_Option_Collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemModel = /** @class */ (function (_super) {
        __extends(ItemModel, _super);
        function ItemModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ItemModel.prototype.getInternalId = function () {
            return this.get('internalid');
        };
        ItemModel.prototype.getParentItem = function () {
            return this.get('parentItem');
        };
        ItemModel.prototype.getMatrixChildItems = function () {
            return this.get('matrixChildItems');
        };
        ItemModel.prototype.isMatrixParent = function () {
            return !!this.getMatrixChildItems();
        };
        ItemModel.prototype.isMatrixChild = function () {
            return this.get('itemoptions_detail').matrixtype === 'child';
        };
        ItemModel.prototype.getItemOptions = function () {
            return this.get('itemOptions');
        };
        ItemModel.prototype.getMatrixItemOptions = function () {
            var itemOptions;
            var filtered = [];
            if (!this.itemOptionsMatrix) {
                itemOptions = this.getItemOptions();
                if (itemOptions) {
                    filtered = itemOptions.where({ ismatrixdimension: true });
                }
                this.itemOptionsMatrix = new Item_Option_Collection_1.default(filtered);
            }
            return this.itemOptionsMatrix;
        };
        ItemModel.prototype.getName = function () {
            return (this.get('storedisplayname2') ||
                this.get('displayname') ||
                this.get('itemid') ||
                '');
        };
        ItemModel.prototype.getDescription = function () {
            var description = this.get('storedetaileddescription');
            var parentItem = this.getParentItem();
            if (!description && parentItem && parentItem.getInternalId()) {
                return parentItem.getDescription();
            }
            return description;
        };
        ItemModel.prototype.getPrice = function () {
            var onlinePriceDetails = this.get('onlinecustomerprice_detail');
            var parentItem = this.getParentItem();
            if (!onlinePriceDetails && parentItem && parentItem.getInternalId()) {
                return parentItem.getPrice();
            }
            return {
                number: onlinePriceDetails.onlinecustomerprice,
                formatted: onlinePriceDetails.onlinecustomerprice_formatted,
            };
        };
        ItemModel.prototype.getThumbnail = function () {
            var itemImagesDetail = this.get('itemimages_detail') || {};
            var parentItem = this.getParentItem();
            if (itemImagesDetail.thumbnail) {
                return Item_ImageHelper_1.default.getThumbnailExisting(this, itemImagesDetail);
            }
            if (parentItem && parentItem.getInternalId()) {
                return parentItem.getThumbnail();
            }
            return Item_ImageHelper_1.default.getThumbnailFromAll(this, itemImagesDetail);
        };
        ItemModel.prototype.parse = function (data) {
            if (data.itemoptions_detail) {
                this.parseItemOptions(data);
            }
            if (data.matrixchilditems_detail) {
                this.parseMatrixChildItems(data);
            }
            return data;
        };
        ItemModel.prototype.parseItemOptions = function (data) {
            if (data.itemoptions_detail.fields) {
                data.itemOptions = new Item_Option_Collection_1.default(data.itemoptions_detail.fields);
            }
        };
        ItemModel.prototype.parseMatrixChildItems = function (data) {
            var _this = this;
            var ItemCollection = this.getCollectionClass();
            data.matrixChildItems = new ItemCollection(data.matrixchilditems_detail);
            data.matrixChildItems.each(function (childItem) {
                childItem.set('parentItem', _this);
            });
        };
        // Workaround to avoid circular dependencies with the collection
        ItemModel.prototype.getCollectionClass = function () {
            return require('SuiteCommerce.FeaturedProduct.Item.Collection'); // eslint-disable-line global-require
        };
        ItemModel.prototype.getMatrixChildForOptions = function () {
            var matrixOptions = this.getMatrixItemOptions();
            var whereObject = {};
            var result = matrixOptions.every(function (matrixOption) {
                var optionValue = matrixOption.getValue();
                if (optionValue && (optionValue.label || optionValue.internalid)) {
                    whereObject[matrixOption.getItemOptionId()] =
                        optionValue.label || optionValue.internalid;
                    return true;
                }
                return false;
            });
            if (result) {
                return this.getMatrixChildItems().findWhere(whereObject);
            }
            return null;
        };
        return ItemModel;
    }(DependencyProvider_1.BackboneCachedModel));
    exports.default = ItemModel;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.Option.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedProduct.Item.Option.Collection", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemOptionCollection = /** @class */ (function (_super) {
        __extends(ItemOptionCollection, _super);
        function ItemOptionCollection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ItemOptionCollection;
    }(Backbone_1.Collection));
    exports.default = ItemOptionCollection;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.Option.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedProduct.Item.Option.Model", ["require", "exports", "Backbone", "SuiteCommerce.FeaturedProduct.Item.Option.Value.Collection"], function (require, exports, Backbone_1, Item_Option_Value_Collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemOptionModel = /** @class */ (function (_super) {
        __extends(ItemOptionModel, _super);
        function ItemOptionModel() {
            var _this = _super.call(this) || this;
            _this.parseData();
            return _this;
        }
        ItemOptionModel.prototype.getItemOptionId = function () {
            return this.get('itemOptionid');
        };
        ItemOptionModel.prototype.getCartOptionId = function () {
            return this.get('cartOptionId');
        };
        ItemOptionModel.prototype.getLabel = function () {
            return this.get('label');
        };
        ItemOptionModel.prototype.getType = function () {
            return this.get('type');
        };
        ItemOptionModel.prototype.getValue = function () {
            return this.get('value');
        };
        ItemOptionModel.prototype.getValues = function () {
            return this.get('values');
        };
        ItemOptionModel.prototype.getColors = function () {
            return this.get('colors');
        };
        ItemOptionModel.prototype.getTemplateSelector = function () {
            return this.get('templateSelector');
        };
        ItemOptionModel.prototype.getTemplateSelected = function () {
            return this.get('templateSelected');
        };
        ItemOptionModel.prototype.isTypeTextArea = function () {
            return this.getType() === 'textarea';
        };
        ItemOptionModel.prototype.isTypeEmail = function () {
            return this.getType() === 'email';
        };
        ItemOptionModel.prototype.isTypeText = function () {
            return this.getType() === 'text';
        };
        ItemOptionModel.prototype.isTypeCheckbox = function () {
            return this.getType() === 'checkbox';
        };
        ItemOptionModel.prototype.isTypeDate = function () {
            return this.getType() === 'date';
        };
        ItemOptionModel.prototype.isTypeSelect = function () {
            return this.getType() === 'select';
        };
        ItemOptionModel.prototype.parseData = function () {
            this.parseIds();
            this.parseValues();
        };
        ItemOptionModel.prototype.parseIds = function () {
            var internalId = this.get('internalid');
            var cartOptionId = this.get('cartOptionId');
            var sourceFrom = this.get('sourcefrom');
            var itemOptionId = this.get('itemOptionId');
            if (!cartOptionId && internalId) {
                this.set('cartOptionId', internalId.toLowerCase());
            }
            if (!itemOptionId && sourceFrom) {
                this.set('itemOptionId', sourceFrom.toLowerCase());
            }
        };
        ItemOptionModel.prototype.parseValues = function () {
            var values = this.get('values');
            var collection = new Item_Option_Value_Collection_1.default(values);
            this.set('values', collection);
        };
        ItemOptionModel.prototype.setValue = function (valueModel) {
            var value = null;
            var internalId;
            var label;
            if (valueModel) {
                internalId = valueModel.getInternalId();
                label = valueModel.getLabel();
                if (internalId || label) {
                    value = {
                        internalid: internalId ? internalId + '' : label,
                        label: label || internalId + '',
                    };
                }
            }
            this.setValueModel(valueModel);
            this.set('value', value);
        };
        ItemOptionModel.prototype.setValueModel = function (valueModel) {
            this.valueModel = valueModel;
        };
        ItemOptionModel.prototype.getValueModel = function () {
            return this.valueModel;
        };
        ItemOptionModel.prototype.clearValue = function () {
            this.setValueModel(null);
            this.set('value', null);
        };
        ItemOptionModel.prototype.isSingleValue = function () {
            var values = this.getValues();
            return values && values.length === 1;
        };
        return ItemOptionModel;
    }(Backbone_1.Model));
    exports.default = ItemOptionModel;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.Option.Value.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedProduct.Item.Option.Value.Collection", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemOptionValueCollection = /** @class */ (function (_super) {
        __extends(ItemOptionValueCollection, _super);
        function ItemOptionValueCollection(values) {
            return _super.call(this) || this;
        }
        return ItemOptionValueCollection;
    }(Backbone_1.Collection));
    exports.default = ItemOptionValueCollection;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Item.Option.Value.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.FeaturedProduct.Item.Option.Value.Model", ["require", "exports", "underscore", "Backbone", "SC.FeaturedProduct.Common.Configuration"], function (require, exports, _, Backbone_1, Common_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ItemOptionValueModel = /** @class */ (function (_super) {
        __extends(ItemOptionValueModel, _super);
        function ItemOptionValueModel(options) {
            var _this = _super.call(this, options) || this;
            _this.item = options.item;
            return _this;
        }
        ItemOptionValueModel.prototype.getInternalId = function () {
            return this.get('internalid');
        };
        ItemOptionValueModel.prototype.getLabel = function () {
            return this.get('label');
        };
        ItemOptionValueModel.prototype.getUrl = function () {
            return this.get('url');
        };
        ItemOptionValueModel.prototype.isAvailable = function () {
            return this.get('isAvailable');
        };
        ItemOptionValueModel.prototype.isSelected = function (selectedId) {
            var internalId = this.getInternalId();
            return (internalId &&
                selectedId &&
                parseInt(internalId, 10) === parseInt(selectedId, 10));
        };
        ItemOptionValueModel.prototype.getColorInfo = function (colors) {
            var color = '';
            var label = this.getLabel();
            var isColorTile = true;
            var image = {};
            if (colors) {
                color = colors[label] || colors.defaultColor;
                if (_.isObject(color)) {
                    image = color;
                    color = '';
                    isColorTile = false;
                }
            }
            return {
                color: color,
                image: image,
                isColorTile: isColorTile,
            };
        };
        ItemOptionValueModel.prototype.isLightColor = function () {
            return _(Common_Configuration_1.Configuration.get('layout.lightColors') || []).contains(this.getLabel());
        };
        return ItemOptionValueModel;
    }(Backbone_1.Model));
    exports.default = ItemOptionValueModel;
});
/// <amd-module name="SuiteCommerce.FeaturedProduct.Main"/>
define("SuiteCommerce.FeaturedProduct.Main", ["require", "exports", "SC.FeaturedProduct.Common.Configuration", "SuiteCommerce.FeaturedProduct.Common.InstrumentationHelper", "NetSuite.FeaturedProduct.FeaturedProductCCT", "SC.FeaturedProduct.Common.Utils"], function (require, exports, Common_Configuration_1, InstrumentationHelper_1, FeaturedProductCCT, Common_Utils_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            var environment = container.getComponent('Environment');
            Common_Configuration_1.Configuration.environment = environment;
            var userProfile = container.getComponent('UserProfile');
            if (userProfile) {
                userProfile
                    .getUserProfile()
                    .then(function (userProfileData) {
                    Common_Utils_1.default.userProfileData = userProfileData;
                });
            }
            InstrumentationHelper_1.InstrumentationHelper.initializeInstrumentation(environment);
            FeaturedProductCCT.mountToApp(container);
        },
    };
});
};
extensions['SuiteCommerce.InfiniteScrollExtension.1.1.4'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/InfiniteScrollExtension/1.1.4/' + asset;
};
/// <amd-module name="SuiteCommerce.InfiniteScroll.Configuration"/>
define("SuiteCommerce.InfiniteScroll.Configuration", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var environment = null;
    var Configuration = /** @class */ (function () {
        function Configuration() {
        }
        Object.defineProperty(Configuration, "environment", {
            set: function (environmentComponent) {
                environment = environmentComponent;
            },
            enumerable: true,
            configurable: true
        });
        Configuration.get = function (key) {
            if (environment) {
                return environment.getConfig(key);
            }
            console.error('Please set the Environment Component in the Configuration.');
            return null;
        };
        return Configuration;
    }());
    exports.Configuration = Configuration;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Common.InstrumentationHelper"/>
define("SuiteCommerce.InfiniteScroll.Common.InstrumentationHelper", ["require", "exports", "SuiteCommerce.InfiniteScroll.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueueNameSuffix = '-InfiniteScroll';
    var ExtensionVersion = '1.1.4';
    var ComponentArea = 'SC Infinite Scroll';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (environment) {
            setInterval(InstrumentationHelper.logPageLoads, 60000);
            Instrumentation_1.default.initialize({
                environment: environment,
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                },
            });
        };
        InstrumentationHelper.addLoadTime = function (time) {
            InstrumentationHelper.pageLoadTimes.push(time);
        };
        InstrumentationHelper.logPageLoads = function () {
            var activity = 'Page loads per minute';
            var quantity = InstrumentationHelper.pageLoadTimes.length;
            if (quantity === 0)
                return;
            var totalTime = Math.ceil(InstrumentationHelper.pageLoadTimes.reduce(function (a, b) { return a + b; }) / quantity);
            InstrumentationHelper.pageLoadTimes = [];
            var log = Instrumentation_1.default.getLog('PageLoads');
            log.setParameters({
                activity: activity,
                quantity: quantity,
                totalTime: totalTime,
            });
            log.submit();
        };
        InstrumentationHelper.pageLoadTimes = [];
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.BottomControlView"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.InfiniteScroll.BottomControlView", ["require", "exports", "SuiteCommerce.InfiniteScroll.ControlView", "infinitescroll_button_bottom.tpl", "SuiteCommerce.InfiniteScroll.Pagination", "SuiteCommerce.InfiniteScroll.ControlConfiguration", "jQuery", "underscore", "SuiteCommerce.InfiniteScroll.InfiniteScroll"], function (require, exports, ControlView_1, template, Pagination_1, Control_Configuration_1, jQuery, _, InfiniteScroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BottomControlView = /** @class */ (function (_super) {
        __extends(BottomControlView, _super);
        function BottomControlView() {
            var _this = _super.call(this, {
                label: Control_Configuration_1.default.getBottomControlLabel(),
            }) || this;
            _this.template = template;
            _this.visible = true;
            _this.hideIfAutoScroll();
            InfiniteScroll_1.default.bottomControl = _this;
            return _this;
        }
        BottomControlView.prototype.hideIfAutoScroll = function () {
            if (Control_Configuration_1.default.isAutoScrollEnabled() && this.model.isActive) {
                this.visible = false;
                this.setAutoScroll();
            }
        };
        BottomControlView.prototype.getPageNumber = function () {
            return Pagination_1.default.getNextPageNumber();
        };
        BottomControlView.prototype.hasMorePages = function () {
            return Pagination_1.default.hasMorePagesBelow;
        };
        BottomControlView.prototype.setAutoScroll = function () {
            var _this = this;
            var autoScroll = function () {
                if (_this.isVisible()) {
                    jQuery(document).off('scroll.InfiniteScrollAutoScroll');
                    _this.loadPage()
                        .then(function () {
                        if (Pagination_1.default.hasMorePagesBelow) {
                            jQuery(document).on('scroll.InfiniteScrollAutoScroll', _.throttle(autoScroll, 500));
                        }
                    })
                        .fail(function () {
                        if (Pagination_1.default.hasMorePagesBelow) {
                            jQuery(document).on('scroll.InfiniteScrollAutoScroll', _.throttle(autoScroll, 500));
                        }
                    });
                }
            };
            jQuery(document).off('scroll.InfiniteScrollAutoScroll');
            jQuery(document).on('scroll.InfiniteScrollAutoScroll', _.throttle(autoScroll, 500));
        };
        BottomControlView.prototype.isVisible = function () {
            var viewportHeight = jQuery(window).height();
            var distanceScrolled = jQuery(window).scrollTop();
            var control = jQuery('.infinite-scroll-ctrl-bottom');
            if (control.length == 0) {
                return false;
            }
            var controlPosition = control.offset().top;
            return controlPosition < viewportHeight + distanceScrolled;
        };
        BottomControlView.prototype.undoPageChange = function () {
            Pagination_1.default.restoreNextPage();
        };
        BottomControlView.prototype.getContext = function () {
            return __assign(__assign({}, _super.prototype.getContext.call(this)), { visible: this.visible });
        };
        return BottomControlView;
    }(ControlView_1.default));
    exports.default = BottomControlView;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.ControlConfiguration"/>
define("SuiteCommerce.InfiniteScroll.ControlConfiguration", ["require", "exports", "SuiteCommerce.InfiniteScroll.Configuration"], function (require, exports, Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        getBottomControlLabel: function () {
            return Configuration_1.Configuration.get('infiniteScroll.nextBtnText');
        },
        getTopControlLabel: function () {
            return Configuration_1.Configuration.get('infiniteScroll.prevBtnText');
        },
        isAutoScrollEnabled: function () {
            return Configuration_1.Configuration.get('infiniteScroll.enableAutoScroll');
        },
    };
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.ControlModel"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.InfiniteScroll.ControlModel", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlModel = /** @class */ (function (_super) {
        __extends(ControlModel, _super);
        function ControlModel(options) {
            var _this = _super.call(this, options) || this;
            _this.isLoading = false;
            _this.label = options.label;
            _this.isActive = options.isActive;
            return _this;
        }
        return ControlModel;
    }(Backbone_1.Model));
    exports.default = ControlModel;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.ControlView"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.InfiniteScroll.ControlView", ["require", "exports", "Backbone", "SuiteCommerce.InfiniteScroll.ControlModel", "SuiteCommerce.InfiniteScroll.Pagination", "SuiteCommerce.InfiniteScroll.ItemsHandler", "SuiteCommerce.InfiniteScroll.InfiniteScroll", "SuiteCommerce.InfiniteScroll.Common.InstrumentationHelper"], function (require, exports, Backbone_1, ControlModel_1, Pagination_1, ItemsHandler_1, InfiniteScroll_1, InstrumentationHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlView = /** @class */ (function (_super) {
        __extends(ControlView, _super);
        function ControlView(options) {
            var _this = _super.call(this, options) || this;
            _this.loadBelow = true;
            _this.events = {
                'click [data-action="load-pages"]': 'loadPage',
            };
            Pagination_1.default.reset();
            _this.model = new ControlModel_1.default({
                label: options.label,
                isActive: _this.hasMorePages(),
            });
            return _this;
        }
        ControlView.prototype.loadPage = function () {
            var _this = this;
            var pageNumber = this.getPageNumber();
            if (InfiniteScroll_1.default.isEnabled) {
                var startTime_1 = new Date().getTime();
                this.showSpinner();
                var pageURL = Pagination_1.default.getSearchApiUrl();
                var loadingPage = ItemsHandler_1.default.loadPage(pageURL, pageNumber, this.loadBelow);
                loadingPage
                    .then(function () {
                    if (_this.hasMorePages()) {
                        _this.showSpinner(false);
                    }
                    else {
                        _this.hideControl();
                    }
                    InstrumentationHelper_1.InstrumentationHelper.addLoadTime(new Date().getTime() - startTime_1);
                })
                    .fail(function () {
                    _this.undoPageChange();
                    _this.showSpinner(false);
                });
                return loadingPage;
            }
            else {
                return Pagination_1.default.setCurrentPage(pageNumber);
            }
        };
        ControlView.prototype.showSpinner = function (show) {
            if (show === void 0) { show = true; }
            this.model.isLoading = show;
            this.render();
        };
        ControlView.prototype.hideControl = function () {
            this.model.isActive = false;
            this.render();
        };
        ControlView.prototype.getContext = function () {
            return {
                label: this.model.label,
                showSpinner: this.model.isLoading,
                isActive: this.model.isActive,
            };
        };
        return ControlView;
    }(Backbone_1.View));
    exports.default = ControlView;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.TopControlView"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.InfiniteScroll.TopControlView", ["require", "exports", "SuiteCommerce.InfiniteScroll.ControlView", "infinitescroll_button_top.tpl", "SuiteCommerce.InfiniteScroll.Pagination", "SuiteCommerce.InfiniteScroll.ControlConfiguration"], function (require, exports, ControlView_1, template, Pagination_1, Control_Configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TopControlView = /** @class */ (function (_super) {
        __extends(TopControlView, _super);
        function TopControlView() {
            var _this = _super.call(this, {
                label: Control_Configuration_1.default.getTopControlLabel(),
            }) || this;
            _this.loadBelow = false;
            _this.template = template;
            return _this;
        }
        TopControlView.prototype.getPageNumber = function () {
            return Pagination_1.default.getPreviousPageNumber();
        };
        TopControlView.prototype.hasMorePages = function () {
            return Pagination_1.default.hasMorePagesAbove;
        };
        TopControlView.prototype.undoPageChange = function () {
            Pagination_1.default.restorePreviousPage();
        };
        return TopControlView;
    }(ControlView_1.default));
    exports.default = TopControlView;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.GoToTop.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.InfiniteScroll.GoToTop.View", ["require", "exports", "Backbone", "infinite_scroll_gototop.tpl", "jQuery", "underscore"], function (require, exports, Backbone_1, template, jQuery, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SCROLL_OFFSET = 1500;
    var GoToTopView = /** @class */ (function (_super) {
        __extends(GoToTopView, _super);
        function GoToTopView() {
            var _this = _super.call(this) || this;
            _this.template = template;
            _this.events = {
                'click [data-action="scroll-to-top"]': 'scrollToTop',
            };
            jQuery(document).on('scroll.infiniteScroll', _.debounce(_this.updateVisibility, 500));
            jQuery(function () {
                jQuery('.infinite-scroll-top').css('display', 'none');
            });
            return _this;
        }
        GoToTopView.prototype.scrollToTop = function () {
            jQuery('html, body').animate({
                scrollTop: 0,
            }, 700);
            this.updateVisibility();
        };
        GoToTopView.prototype.updateVisibility = function () {
            var currentScroll = jQuery(document).scrollTop();
            if (currentScroll > SCROLL_OFFSET) {
                jQuery('.infinite-scroll-top').fadeIn('slow');
            }
            else {
                jQuery('.infinite-scroll-top').fadeOut('slow');
            }
        };
        return GoToTopView;
    }(Backbone_1.View));
    exports.GoToTopView = GoToTopView;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.InfiniteScroll"/>
define("SuiteCommerce.InfiniteScroll.InfiniteScroll", ["require", "exports", "SuiteCommerce.InfiniteScroll.BottomControlView", "SuiteCommerce.InfiniteScroll.URLHelper", "jQuery", "underscore", "SuiteCommerce.InfiniteScroll.TopControlView", "SuiteCommerce.InfiniteScroll.GoToTop.View", "SuiteCommerce.InfiniteScroll.Pagination"], function (require, exports, BottomControlView_1, URLHelper_1, jQuery, _, TopControl_View_1, GoToTop_View_1, Pagination_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        bottomControl: null,
        isEnabled: true,
        replacePagination: function (PLP) {
            this.removePagination(PLP);
            this.manageControls(PLP);
            this.addGoToTopButton(PLP);
        },
        removePagination: function (PLP) {
            PLP.removeChildView(PLP.PLP_VIEW, 'GlobalViews.Pagination', 'GlobalViews.Pagination');
        },
        manageControls: function (PLP) {
            this.addBottomControl(PLP);
            this.addTopControl(PLP);
        },
        addBottomControl: function (PLP) {
            PLP.addChildViews(PLP.PLP_VIEW, {
                'GlobalViews.Pagination': {
                    'InfiniteScroll.BottomControl': {
                        childViewIndex: 1,
                        childViewConstructor: BottomControlView_1.default,
                    },
                },
            });
        },
        addTopControl: function (PLP) {
            PLP.addChildViews(PLP.PLP_VIEW, {
                'Facets.FacetsDisplay': {
                    'InfiniteScroll.TopControl': {
                        childViewIndex: 3,
                        childViewConstructor: TopControl_View_1.default,
                    },
                },
            });
        },
        updatePageURLOnScrollEvent: function () {
            jQuery(document).off('scroll.InfiniteScroll');
            jQuery(document).on('scroll.InfiniteScroll', _.throttle(this.updatePageURL, 500, { leading: false }));
        },
        updatePageURL: function () {
            var currentPage;
            var closestPosToTop;
            var scroll = jQuery(document).scrollTop();
            var firstItemPerPage = Pagination_1.default.getFirstItemPerPage();
            var itemsIds = Object.keys(firstItemPerPage);
            var firstItemsPos = itemsIds.map(function (id) {
                var element = jQuery("[data-view=\"Facets.Items\"] [data-item-id=\"" + id + "\"]");
                if (element.length === 1)
                    return element.offset().top - scroll;
                return Infinity;
            });
            var posiblePagesPositions = firstItemsPos.filter(function (itemPos) { return itemPos <= 0; });
            if (!posiblePagesPositions.length) {
                closestPosToTop = Math.min.apply(Math, firstItemsPos);
            }
            else {
                closestPosToTop = Math.max.apply(Math, posiblePagesPositions);
            }
            var closestItemToTop = itemsIds[firstItemsPos.indexOf(closestPosToTop)];
            currentPage = firstItemPerPage[closestItemToTop];
            if (Pagination_1.default.validPage(currentPage))
                URLHelper_1.default.updateURL(currentPage);
        },
        addGoToTopButton: function (PLP) {
            PLP.addChildViews(PLP.PLP_VIEW, {
                'GlobalViews.Pagination': {
                    'InfiniteScroll.GoToTop': {
                        childViewIndex: 6,
                        childViewConstructor: GoToTop_View_1.GoToTopView,
                    },
                },
            });
        },
        disable: function (PLP) {
            this.isEnabled = false;
            this.bottomControl.visible = true;
            this.bottomControl.render();
            jQuery(document).off('scroll.InfiniteScrollAutoScroll');
        },
        enable: function (PLP) {
            this.isEnabled = true;
            this.bottomControl.hideIfAutoScroll();
            this.bottomControl.render();
        },
    };
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.ItemsHandler"/>
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define("SuiteCommerce.InfiniteScroll.ItemsHandler", ["require", "exports", "SuiteCommerce.InfiniteScroll.Pagination", "SuiteCommerce.InfiniteScroll.InfiniteScroll"], function (require, exports, Pagination_1, InfiniteScroll_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var facetsItems;
    var collection;
    exports.default = {
        initialize: function (PLP) {
            var facetsItems;
            // @ts-ignore
            if (PLP.current_view) {
                // @ts-ignore
                facetsItems = PLP.current_view.getChildViewInstance('Facets.Items');
            }
            if (!facetsItems ||
                (!facetsItems.collection.fetch && !facetsItems.collection[0]) ||
                (!!facetsItems.collection.fetch && !facetsItems.collection.models[0]))
                return false;
            if (!facetsItems.collection.fetch) {
                facetsItems.collection = facetsItems.collection[0].collection;
            }
            this.collection = facetsItems.collection;
            this.facetsItems = facetsItems;
            Pagination_1.default.addFirstItemOfPage("" + this.collection.models[0].get('internalid'), Pagination_1.default.currentPage);
            return true;
        },
        loadPage: function (searchApiUrl, pageNumber, loadBelow) {
            var _this = this;
            if (!searchApiUrl) {
                return jQuery.Deferred().reject();
            }
            this.collection.url = function () { return searchApiUrl; };
            var oldItems = __spreadArrays(this.collection.models);
            return this.collection
                .fetch()
                .then(function () {
                Pagination_1.default.addFirstItemOfPage("" + _this.collection.models[0].get('internalid'), pageNumber);
                if (loadBelow) {
                    _this.facetsItems.collection.add(oldItems, { at: 0 });
                }
                else {
                    _this.facetsItems.collection.add(oldItems);
                }
                _this.renderContent(pageNumber, loadBelow);
            });
        },
        renderContent: function (pageNumber, loadBelow) {
            var $itemsContainer = jQuery('.facets-facet-browse-items');
            $itemsContainer.css('min-height', $itemsContainer.height());
            if (!loadBelow) {
                var append = this.facetsItems.$el.append;
                this.facetsItems.$el.append = this.facetsItems.$el.prepend;
                this.facetsItems.render();
                InfiniteScroll_1.default.updatePageURL();
                this.facetsItems.$el.append = append;
            }
            else {
                this.facetsItems.render();
            }
            $itemsContainer.css('min-height', '');
        },
    };
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.URLHelper"/>
define("SuiteCommerce.InfiniteScroll.URLHelper", ["require", "exports", "underscore", "Backbone"], function (require, exports, _, Backbone) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        updateURL: function (pageNumber) {
            var oldFragment = Backbone.history.getFragment();
            var newFragment = this.generateNewFragment(oldFragment, 'page', pageNumber);
            this.setNewURL(newFragment);
        },
        generateNewFragment: function (oldFragment, parameter, newValue) {
            if (oldFragment.indexOf('?') > -1) {
                if (oldFragment.indexOf(parameter + "=") > -1) {
                    return this.parseFragment(oldFragment, parameter, newValue);
                }
                return oldFragment + ("&" + parameter + "=" + newValue);
            }
            return oldFragment + ("?" + parameter + "=" + newValue);
        },
        parseFragment: function (oldFragment, parameter, newValue) {
            var tempFragment = oldFragment.split('?');
            if (tempFragment && tempFragment[0] && tempFragment[1]) {
                if (tempFragment[1].indexOf(parameter + "=") > -1) {
                    var setParams = _.map(tempFragment[1].split('&'), function (curr) {
                        if (curr.indexOf(parameter) > -1) {
                            return parameter + "=" + newValue;
                        }
                        return curr;
                    });
                    return tempFragment[0] + '?' + setParams.join('&');
                }
            }
            return oldFragment;
        },
        setNewURL: function (newFragment) {
            if (newFragment.length !== 0) {
                Backbone.history.navigate(newFragment, {
                    trigger: false,
                    replace: true,
                });
            }
        },
    };
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.InfiniteScroll.Instrumentation.Log", ["require", "exports", "SuiteCommerce.InfiniteScroll.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return (!!navigator.userAgent.match(/Trident/g) ||
                !!navigator.userAgent.match(/MSIE/g));
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Instrumentation.Logger"/>
define("SuiteCommerce.InfiniteScroll.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.InfiniteScroll.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger').LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] },
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { },
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Instrumentation.MockAppender"/>
define("SuiteCommerce.InfiniteScroll.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.prototype.ready = function () {
            return true;
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        MockAppender.prototype.start = function (action, options) {
            return options;
        };
        MockAppender.prototype.end = function (startOptions, options) { };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Instrumentation"/>
define("SuiteCommerce.InfiniteScroll.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.InfiniteScroll.Instrumentation.Logger", "SuiteCommerce.InfiniteScroll.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Pagination"/>
define("SuiteCommerce.InfiniteScroll.Pagination", ["require", "exports", "SuiteCommerce.InfiniteScroll.URLHelper"], function (require, exports, URLHelper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PLP;
    var pagination;
    var lowestLoadedPage;
    var highestLoadedPage;
    var lastPage;
    var firstItemPerPage;
    exports.default = {
        initialize: function (PLP) {
            this.PLP = PLP;
            this.pagination = this.PLP.getPagination();
            this.lowestLoadedPage = this.highestLoadedPage = this.currentPage;
            this.firstItemPerPage = {};
        },
        getPreviousPageNumber: function () {
            if (this.hasMorePagesAbove)
                this.lowestLoadedPage--;
            this.lastPage = this.currentPage;
            this.currentPage = this.lowestLoadedPage;
            return this.currentPage;
        },
        getNextPageNumber: function () {
            if (this.hasMorePagesBelow)
                this.highestLoadedPage++;
            this.lastPage = this.currentPage;
            this.currentPage = this.highestLoadedPage;
            return this.currentPage;
        },
        getSearchApiUrl: function () {
            var url = this.PLP.getUrl(this.pagination);
            if (url.lastIndexOf('commercecategoryid') == -1 && url.lastIndexOf('commercecategoryurl') == -1)
                url = this.appendCategoryToURL(url);
            return url;
        },
        appendCategoryToURL: function (url) {
            var categoryInfo = this.PLP.getCategoryInfo();
            if (categoryInfo && categoryInfo.internalid) {
                url = URLHelper_1.default.generateNewFragment(url, 'commercecategoryid', categoryInfo.internalid);
                url = url.replace('sort=relevance', 'sort=commercecategory');
            }
            return url;
        },
        reset: function () {
            this.pagination = this.PLP.getPagination();
            this.lowestLoadedPage = this.highestLoadedPage = this.currentPage;
        },
        restoreNextPage: function () {
            this.highestLoadedPage--;
            this.currentPage = this.lastPage;
        },
        restorePreviousPage: function () {
            this.lowestLoadedPage++;
            this.currentPage = this.lastPage;
        },
        setCurrentPage: function (currentPage) {
            return this.PLP.setCurrentPage({
                currentPage: currentPage,
            });
        },
        get currentPage() {
            if (this.pagination) {
                return this.pagination.currentPage;
            }
            return null;
        },
        set currentPage(pageNumber) {
            this.pagination.currentPage = pageNumber;
        },
        get hasMorePagesBelow() {
            return this.highestLoadedPage < this.pagination.pageCount;
        },
        get hasMorePagesAbove() {
            return this.lowestLoadedPage > 1 && this.validPage(this.currentPage);
        },
        getFirstItemPerPage: function () {
            return this.firstItemPerPage;
        },
        addFirstItemOfPage: function (itemId, page) {
            this.firstItemPerPage[itemId] = page;
        },
        validPage: function (page) {
            return page > 0 && page <= this.pagination.pageCount;
        }
    };
});
/// <amd-module name="SuiteCommerce.InfiniteScroll.Shopping"/>
define("SuiteCommerce.InfiniteScroll.Shopping", ["require", "exports", "SuiteCommerce.InfiniteScroll.InfiniteScroll", "SuiteCommerce.InfiniteScroll.Pagination", "SuiteCommerce.InfiniteScroll.ItemsHandler", "SuiteCommerce.InfiniteScroll.Configuration", "SuiteCommerce.InfiniteScroll.Common.InstrumentationHelper", "jQuery"], function (require, exports, InfiniteScroll_1, Pagination_1, ItemsHandler_1, Configuration_1, InstrumentationHelper_1, jQuery) {
    "use strict";
    return {
        mountToApp: function (container) {
            var environment = container.getComponent('Environment');
            var PLP = container.getComponent('PLP');
            var PDP = container.getComponent('PDP');
            PDP.on('afterShowContent', function () {
                jQuery(document).off('scroll.InfiniteScroll');
            });
            InstrumentationHelper_1.InstrumentationHelper.initializeInstrumentation(environment);
            Configuration_1.Configuration.environment = environment;
            this.initializeInfiniteScroll(PLP);
        },
        initializeInfiniteScroll: function (PLP) {
            PLP.on('beforeShowContent', function () {
                Pagination_1.default.initialize(PLP);
                InfiniteScroll_1.default.replacePagination(PLP);
            });
            PLP.on('afterShowContent', function () {
                InfiniteScroll_1.default.enable(PLP);
                if (ItemsHandler_1.default.initialize(PLP)) {
                    InfiniteScroll_1.default.updatePageURLOnScrollEvent();
                }
                else {
                    InfiniteScroll_1.default.disable(PLP);
                }
            });
        },
    };
});
};
extensions['SuiteCommerce.ItemBadges.1.1.3'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/ItemBadges/1.1.3/' + asset;
};
define('SuiteCommerce.ItemBadges.Configuration', [], function Configuration() {
  'use strict';
  return {
    environment: null,
    initialize: function initialize(application)
    {
      this.environment = application.getComponent('Environment');
    },
    get: function get(name) {
      if (this.environment) {
        return this.environment.getConfig(name);
      }
      return null;
    }
  }
});
define('SuiteCommerce.ItemBadges.Instrumentation.FallbackLogger', [
  'Url',
  'jQuery'
], function define(
  Url,
  $
) {
  'use strict';
  var instance = null;
  var environment = null;
  function FallbackLogger() {
    var queueErrorTemp = [];
    var queueInfoTemp = [];
    var QUEUE_NAME_SUFFIX = '-ItemBadges';
    var QUEUE_ERROR_NAME = 'queueError' + QUEUE_NAME_SUFFIX;
    var QUEUE_INFO_NAME = 'queueInfo' + QUEUE_NAME_SUFFIX;
    var isWaiting = false;
    var self = this;
    if (this instanceof FallbackLogger) {
      throw new Error('Is not possible to create a new Logger. Please use getLogger method instead.');
    }
    this.isEnabled = function isEnabled() {
      return environment && !environment.isPageGenerator();
    };
    function clearQueues() {
      localStorage.setItem(QUEUE_ERROR_NAME, JSON.stringify(queueErrorTemp));
      localStorage.setItem(QUEUE_INFO_NAME, JSON.stringify(queueInfoTemp));
      queueErrorTemp.length = 0;
      queueInfoTemp.length = 0;
      isWaiting = false;
    }
    function appendTemp() {
      var queueError = localStorage.getItem(QUEUE_ERROR_NAME);
      var queueInfo = localStorage.getItem(QUEUE_INFO_NAME);
      if (queueErrorTemp.length > 0) {
        queueError = queueError == null ? [] : JSON.parse(queueError);
        localStorage.setItem(QUEUE_ERROR_NAME, JSON.stringify(queueError.concat(queueErrorTemp)));
      }
      if (queueInfoTemp.length > 0) {
        queueInfo = queueInfo == null ? [] : JSON.parse(queueInfo);
        localStorage.setItem(QUEUE_INFO_NAME, JSON.stringify(queueInfo.concat(queueInfoTemp)));
      }
      isWaiting = false;
    }
    function sendDataThroughUserAgent(url, data) {
      var successfullyTransfer = navigator.sendBeacon(url, JSON.stringify(data));
      if (successfullyTransfer) clearQueues();
      else appendTemp();
    }
    function sendDataThroughAjaxRequest(url, data, isAsync) {
      $.ajax({
        type: 'POST',
        url: url,
        data: JSON.stringify(data),
        async: isAsync
      }).success(clearQueues)
        .fail(appendTemp);
    }
    // eslint-disable-next-line complexity
    function processQueues(isAsync) {
      if (!self.isEnabled()) {
        return;
      }
      var data;
      var parsedURL = new Url().parse(SC.ENVIRONMENT.baseUrl);
      var product = SC.ENVIRONMENT.BuildTimeInf.product;
      var URL = parsedURL.schema + '://'
        + parsedURL.netLoc + '/app/site/hosting/scriptlet.nl?script=customscript_'
        + product.toLowerCase() + '_loggerendpoint&deploy=customdeploy_'
        + product.toLowerCase() + '_loggerendpoint';
      var queueError = JSON.parse(localStorage.getItem(QUEUE_ERROR_NAME));
      var queueInfo = JSON.parse(localStorage.getItem(QUEUE_INFO_NAME));
      if ((queueInfo && queueInfo.length > 0) || (queueError && queueError.length > 0)) {
        isWaiting = true;
        data = { type: product, info: queueInfo, error: queueError };
        if (navigator.sendBeacon) {
          sendDataThroughUserAgent(URL, data);
        } else {
          sendDataThroughAjaxRequest(URL, data, isAsync);
        }
      }
    }
    this.info = function info(obj) {
      var objWrapper = obj;
      var queueInfo;
      if (!this.isEnabled()) {
        return;
      }
      objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
      objWrapper.message = 'clientSideLogDateTime: ' + (new Date()).toISOString();
      if (isWaiting) {
        queueInfoTemp.push(objWrapper);
      } else {
        queueInfo = JSON.parse(localStorage.getItem(QUEUE_INFO_NAME)) || [];
        queueInfo.push(objWrapper);
        localStorage.setItem(QUEUE_INFO_NAME, JSON.stringify(queueInfo));
      }
    };
    this.error = function error(obj) {
      var queueError;
      var objWrapper = obj;
      if (!this.isEnabled()) {
        return;
      }
      objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
      objWrapper.message = 'clientSideLogDateTime: ' + (new Date()).toISOString();
      if (isWaiting) {
        queueErrorTemp.push(objWrapper);
      } else {
        queueError = JSON.parse(localStorage.getItem(QUEUE_ERROR_NAME)) || [];
        queueError.push(objWrapper);
        localStorage.setItem(QUEUE_ERROR_NAME, JSON.stringify(queueError));
      }
    };
    if (!this.isEnabled()) {
      return this;
    }
    setInterval(function setInterval() {
      processQueues(true);
    }, 60000);
    window.addEventListener('beforeunload', function addListener() {
      processQueues(false);
    });
    return this;
  }
  FallbackLogger.getLogger = function getLogger(localEnvironment) {
    environment=localEnvironment;
    instance = instance || FallbackLogger.apply({});
    return instance;
  };
  return FallbackLogger;
});
define(
  'SuiteCommerce.ItemBadges.Instrumentation.MockAppender', [],
  function define() {
    'use strict';
    return  {
     info : function info(data) {
        console.info('MockAppender - Info', data);
      },
      error : function error(data) {
        console.error('MockAppender - Error', data);
      },
      ready : function ready() {
        return true;
      },
      getInstance : function getInstance() {
        if (!this.instance) {
          this.instance = this;
        }
        return this.instance;
      },
      start : function start(action, options) {
        return options;
      },
      end : function end(startOptions, options) {}
    };
  });
define(
  'SuiteCommerce.ItemBadges.Instrumentation.Collection',
  [
    'SuiteCommerce.ItemBadges.Instrumentation.Model',
    'underscore',
    'Backbone'
  ],
  function define(
    model,
    _,
    Backbone
  ) {
    'use strict';
    return Backbone.Collection.extend({
      model: model
    });
  }
);
define(
  'SuiteCommerce.ItemBadges.Instrumentation.Model',
  [
    'SuiteCommerce.ItemBadges.Instrumentation.Logger',
    'Backbone',
    'underscore'
  ],
  function define(
    Logger,
    Backbone,
    _
  ) {
    'use strict';
    var DEFAULT_SEVERITY = 'info';
    return Backbone.Model.extend({
      defaults: function defaults() {
        return {
          parametersToSubmit: {},
          timer: {},
          severity: DEFAULT_SEVERITY
        };
      },
      startTimer: function startTimer() {
        var startTime = this.getTimestamp();
        var timer = this.get('timer');
        timer.startTime = startTime;
        this.set('timer', timer);
      },
      endTimer: function endTimer() {
        var endTime = this.getTimestamp();
        var timer = this.get('timer');
        timer.endTime = endTime;
        this.set('timer', timer);
      },
      getTimestamp: function getTimestamp() {
        if (!this.isOldInternetExplorer()) {
          return performance.now() || Date.now();
        }
        return Date.now();
      },
      getElapsedTimeForTimer: function getElapsedTimeForTimer() {
        var timer = this.get('timer');
        if (timer.startTime && timer.endTime) {
          if (timer.startTime > timer.endTime) {
            console.warn('Start time should be minor that end time in timer');
            return null;
          }
          return timer.endTime - timer.startTime;
        }
        if (!timer.startTime) console.warn('The Start time is not defined');
        if (!timer.endTime) console.warn('The End time is not defined');
        return null;
      },
      setParametersToSubmit: function setParametersToSubmit(data) {
        var self = this;
        _.each(data, function setLogParameter(value, parameter) {
          self.setParameterToSubmit(parameter, data[parameter]);
        });
      },
      setParameterToSubmit: function setParameterToSubmit(parameter, value) {
        var logData = this.get('parametersToSubmit');
        logData[parameter] = value;
        this.set('parametersToSubmit', logData);
      },
      setSeverity: function setSeverity(severity) {
        this.set('severity', severity);
      },
      submit: function submit() {
        if (!this.isOldInternetExplorer()) {
          switch (this.get('severity')) {
            case 'error':
              this.submitAsError();
              break;
            default:
              this.submitAsInfo();
          }
        }
      },
      isOldInternetExplorer: function isOldInternetExplorer() {
        return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
      },
      submitAsError: function submitAsError() {
        Logger.getLogger().error(this.get('parametersToSubmit'));
      },
      submitAsInfo: function submitAsInfo() {
        Logger.getLogger().info(this.get('parametersToSubmit'));
      }
    });
  }
);
define(
  'SuiteCommerce.ItemBadges.Instrumentation.InstrumentationHelper',
  [
    'SuiteCommerce.ItemBadges.Instrumentation.Model',
    'SuiteCommerce.ItemBadges.Instrumentation.Collection',
    'SuiteCommerce.ItemBadges.Instrumentation.Logger'
  ],
  function define(
    Log,
    LogCollection,
    Logger
  ) {
    'use strict';
    var logs = new LogCollection();
    return {
      logs: logs,
      initialize: function initialize(container) {
        Logger.initialize(container.getComponent('Environment'));
      },
      getLog: function getLog(logLabel) {
        return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
      },
      getLogModelByLabel: function getLogModelByLabel(label) {
        return this.logs.findWhere({
          label: label
        });
      },
      registerNewLog: function registerNewLog(label) {
        var log = new Log();
        log.set('label', label);
        this.logs.add(log);
        return log;
      },
      setParameterToSubmitForAllLogs: function setParameterToSubmitForAllLogs(parameter, value) {
        this.logs.each(function updateLog(log) {
          log.setParameterToSubmit(parameter, value);
        });
      },
      setParametersToSubmitForAllLogs: function setParametersToSubmitForAllLogs(data) {
        this.logs.each(function updateLog(log) {
          log.setParametersToSubmit(data);
        });
      },
      submitAllLogs: function submitAllLogs() {
        this.logs.each(function submitLog(log) {
          log.submit();
        });
      }
    };
  }
);
define(
  'SuiteCommerce.ItemBadges.Instrumentation.Logger',
  [
    'SuiteCommerce.ItemBadges.Instrumentation.FallbackLogger',
    'SuiteCommerce.ItemBadges.Instrumentation.MockAppender'
  ], function define(
    InstrumentationFallbackLogger,
    InstrumentationMockAppender
  ) {
    'use strict';
    var environment = null;
    var instance = null;
    var QUEUE_NAME_SUFFIX = '-ItemBadges';
    return {
      initialize: function initialize(localEnvironment) {
        environment = localEnvironment;
      },
      getLogger: function getLogger() {
        instance = instance || this.buildLoggerInstance();
        return instance;
      },
      buildLoggerInstance: function buildLoggerInstance() {
        var logConfig = {};
        try {
          var LoggersModule = require('Loggers').Loggers;
          var elasticAppender = require('Loggers.Appender.ElasticLogger')
            .LoggersAppenderElasticLogger.getInstance();
          var mockAppender = InstrumentationMockAppender.getInstance();
          var configurationModule = require('Loggers.Configuration');
          var loggerName = 'CommerceExtensions' + QUEUE_NAME_SUFFIX;
          logConfig[loggerName] = {
            log: [
              { profile: configurationModule.prod, appenders: [elasticAppender] },
              { profile: configurationModule.dev, appenders: [mockAppender] },
            ],
            actions: {},
            loggers: {},
          };
          LoggersModule.setConfiguration(logConfig);
          return LoggersModule.getLogger(loggerName);
        } catch (e) {
          return InstrumentationFallbackLogger.getLogger(environment);
        }
      },
    };
  });
define('SuiteCommerce.ItemBadges.BadgesList.View', [
  'Backbone',
  'itembadges_list.tpl',
  'itembadges_svg_bookmark.tpl',
  'itembadges_svg_diagonal_banner.tpl',
  'itembadges_svg_flag.tpl',
  'itembadges_svg_rectangle_banner.tpl',
  'itembadges_svg_tag.tpl',
  'itembadges_svg_tapered_banner.tpl'
], function ItemBadgesBadgesListView(
  Backbone,
  itembadgesListTpl,
  bookmark,
  diagonalBanner,
  flag,
  rectangleBanner,
  tag,
  taperedBanner
) {
  'use strict';
  return Backbone.View.extend({
    template: itembadgesListTpl,
    initialize: function initialize(options) {
      this.model = options.model;
      this.position = options.position;
      this.currentView = options.currentView;
    },
    calculateWeight: function calculateWeight() {
      var weight = this.model.get('weight');
      switch (weight) {
        case '1':
          this.model.set('textWeight', '300');
          break;
        case '2':
          this.model.set('textWeight', '400');
          break;
        case '3':
          this.model.set('textWeight', '600');
          break;
        case '4':
          this.model.set('textWeight', '700');
          break;
        default:
          this.model.set('textWeight', '400');
      }
    },
    selectTemplate: function selectTemplate() {
      var modifier = this.model.get('text').length * 8;
      var padding = this.currentView === 'plp' ? 5 : 10;
      var totalPadding = padding * 2;
      switch (this.model.get('shape').shape) {
        case 'Bookmark':
          this.defineBookmark(totalPadding, modifier);
          break;
        case 'Diagonal Banner':
          this.defineDiangonalBanner();
          break;
        case 'Flag':
          this.defineFlag(totalPadding, modifier);
          break;
        case 'Rectangle Banner':
          this.defineRectangleBanner(totalPadding, modifier);
          break;
        case 'Tag':
          this.defineTag(totalPadding, modifier);
          break;
        case 'Tapered Banner':
          this.defineTaperedBanner(totalPadding, modifier);
          break;
        default:
          if (!this.model.get('shape').image) {
            this.defineRectangleBanner(totalPadding, modifier);
          }
      }
    },
    defineBookmark: function defineBookmark(totalPadding, modifier) {
      var textSpace = totalPadding + modifier;
      var shape = this.calculateBookmarkShape(textSpace);
      this.model.set('svg',
        {
          width: textSpace + 34.5,
          shape: shape,
          textEnd: this.currentView === 'plp' ? textSpace : textSpace - 10,
          textStart: this.currentView === 'plp' ? 30 : 40,
          height: this.currentView === 'plp' ? 54 : 64
        });
      this.template = bookmark;
    },
    calculateBookmarkShape: function calculateBookmarkShape(textSpace) {
      var plpModifier = this.currentView === 'plp' ? 10 : 0;
      if (this.position.match('right')) {
        return 'M' + (textSpace + 1 + plpModifier) + ',0 L' + (textSpace + 1 + plpModifier) + ','+(62-plpModifier)+' L' + (textSpace + 18 + (plpModifier/2)) + ','+(55-plpModifier)+' L' + (textSpace + 35.5) + ','+(62-plpModifier)+' L' + (textSpace + 35.5) + ',0 L' + (textSpace + 79) + ',0 Z';
      }
      return 'M1,0 L1,'+(62-plpModifier)+' L'+(18-(plpModifier/2))+','+(55-plpModifier)+' L'+(35.5-(plpModifier))+','+(62-plpModifier)+' L'+(35.5-(plpModifier))+',0 L79,0 Z';
    },
    defineDiangonalBanner: function defineDiangonalBanner() {
      this.model.set('svg',
        {
          textCenter: this.currentView === 'plp' ? 18 : 23,
          height: this.currentView === 'plp' ? 25 : 35
        });
      this.template = diagonalBanner;
    },
    defineFlag: function defineFlag(totalPadding, modifier) {
      var additionalPixels = 7.5;
      var totalPixels = totalPadding + additionalPixels;
      var width = totalPixels + modifier;
      var textMiddle = this.calculateTextMiddle(totalPadding, modifier, additionalPixels);
      var textHeight = this.currentView === 'plp' ? 16.75 : 21.75;
      this.model.set('svg',
        {
          shape: 'M0,0 L' + (totalPixels + modifier) + ',0 L' + (totalPadding + modifier) + ','+(7.5+(totalPadding/2))+' L' + (totalPixels + modifier) + ','+(15+totalPadding)+' L0,'+(15+totalPadding)+' Z',
          width: width,
          textMiddle: textMiddle,
          textHeight: textHeight,
          height: totalPadding + 15
        });
      this.template = flag;
    },
    defineRectangleBanner: function defineRectangleBanner(totalPadding, modifier) {
      var width = totalPadding + modifier;
      var textMiddle = this.calculateTextMiddle(totalPadding, modifier);
      var textHeight = this.currentView === 'plp' ? 16.75 : 21.75;
      this.model.set('svg',
        {
          width: width,
          textMiddle: textMiddle,
          textHeight: textHeight,
          height: totalPadding + 15
        });
      this.template = rectangleBanner;
    },
    defineTag: function defineTag(totalPadding, modifier) {
      var additionalPixels = 14;
      var totalPixels = totalPadding + additionalPixels;
      var width = totalPixels + modifier;
      var textMiddle = this.calculateTextMiddle(totalPadding, modifier, additionalPixels);
      var textHeight = this.currentView === 'plp' ? 16.75 : 21.75;
      this.model.set('svg',
        {
          shape: 'M' + (totalPadding + modifier) + ',0 L' + (totalPixels + modifier) + ','+(7.5+(totalPadding/2))+' L' + (totalPadding + modifier) + ','+(15+totalPadding)+' L0,'+(15+totalPadding)+' L0,0 L' + (totalPadding + modifier) + ',0 Z',
          width: width,
          textMiddle: textMiddle,
          textHeight: textHeight,
          height: totalPadding + 15
        });
      this.template = tag;
    },
    defineTaperedBanner: function defineTaperedBanner(totalPadding, modifier) {
      var additionalPixels = 13;
      var totalPixels = totalPadding + additionalPixels;
      var width = totalPixels + modifier;
      var textMiddle = this.calculateTextMiddle(totalPadding, modifier, additionalPixels);
      var textHeight = this.currentView === 'plp' ? 16.75 : 21.75;
      this.model.set('svg',
        {
          shape: 'M0,0 L' + (totalPixels + modifier) + ',0 L' + (totalPadding + modifier) + ','+(15+totalPadding)+' L0,'+(15+totalPadding)+' Z',
          width: width,
          textMiddle: textMiddle,
          textHeight: textHeight,
          height: totalPadding + 15
        });
      this.template = taperedBanner;
    },
    calculateTextMiddle: function calculateTextMiddle(totalPadding, modifier, additionalPixels) {
      if (this.position.match('right') && additionalPixels) {
        return additionalPixels + ((totalPadding + modifier) / 2);
      }
      return (totalPadding + modifier) / 2;
    },
    flipVertical: function flipVertical() {
      return !!this.position.match('right');
    },
    getContext: function getContext() {
      var showText = !!this.model.get('text');
      var showImage = !!this.model.get('shape').image;
      this.selectTemplate();
      this.calculateWeight();
      return {
        model: this.model,
        name: this.model.get('name'),
        alt: this.model.get('alt'),
        showText: showText,
        text: this.model.get('text'),
        textColor: this.model.get('color') || '#FFFFFF',
        textBgColor: this.model.get('background'),
        textWeight: this.model.get('textWeight'),
        showImage: showImage,
        shapeId: this.model.get('shape').id,
        shapeName: this.model.get('shape').name,
        shapeImage: this.model.get('shape').image,
        areBothElementsVisibile: showText && showImage,
        svg: this.model.get('svg'),
        position: this.position,
        flipVertical: this.flipVertical(),
        isPlp: this.currentView === 'plp'
      };
    }
  });
});
define('SuiteCommerce.ItemBadges.Collection', [
  'Backbone',
  'Backbone.CachedCollection',
  'SuiteCommerce.ItemBadges.Model',
  'underscore'
], function ItemBadgesCollection(
  Backbone,
  BackboneCachedCollection,
  Model,
  _
) {
  'use strict';
  return BackboneCachedCollection.extend({
    model: Model,
    url: '/app/site/hosting/scriptlet.nl?script=customscript_ns_sc_sl_itembadges&deploy=customdeploy_ns_sc_sl_itembadges',
    filterBadges: function filterBadges(badges) {
      var self = this;
      var itemBadges;
      var data;
      if (badges) {
        itemBadges = badges.split(',');
        _.each(itemBadges, function each(value, key) {
          itemBadges[key] = value.trim();
        });
        data = _.filter(self.models, function filter(badge) {
          return _.contains(itemBadges, badge.get('name').trim());
        });
      }
      return new Backbone.Collection(data);
    }
  });
});
define('SuiteCommerce.ItemBadges.GlobalViews', [
  'SuiteCommerce.ItemBadges.View'
], function ItemBadgesGlobalViews(
  ItemBadgesView
) {
  'use strict';
  return {
    loadGlobalViewsItemBadges: function loadGlobalViewsItemBadges(application, collection) {
      var layout = application.getComponent('Layout');
      this.addGlobalViewsChildViews(layout, collection);
    },
    addGlobalViewsChildViews: function addGlobalViewsChildViews(layout, collection) {
      layout.addChildViews(
        'ItemRelations.RelatedItem.View', {
          'Item.Price': {
            'Itembadges.View': {
              childViewIndex: 5,
              childViewConstructor: function childViewConstructor() {
                return new ItemBadgesView({
                  view: 'global',
                  collection: collection
                });
              }
            }
          }
        }
      );
    }
  };
});
define('SuiteCommerce.ItemBadges.Model', [
  'Backbone.CachedModel'
], function ItemBadgesModel(
  CachedModel
) {
  'use strict';
  return CachedModel.extend({
  });
});
define('SuiteCommerce.ItemBadges.ProductDetail', [
  'SuiteCommerce.ItemBadges.View'
], function ItemBadgesProductDetail(
  ItemBadgesView
) {
  'use strict';
  return {
    loadProductDetailItemBadges: function loadProductDetailItemBadges(application, collection) {
      var pdp = application.getComponent('PDP');
      this.addProductDetailChildViews(pdp, collection);
    },
    addProductDetailChildViews: function addProductDetailChildViews(pdp, collection) {
      pdp.addChildViews(
        pdp.PDP_FULL_VIEW, {
          'Product.ImageGallery': {
            'Itembadges.View': {
              childViewIndex: 5,
              childViewConstructor: function childViewConstructor() {
                return new ItemBadgesView({
                  view: 'pdp',
                  items: pdp.getItemInfo(),
                  collection: collection
                });
              }
            }
          }
        }
      );
      pdp.addChildViews(
        pdp.PDP_QUICK_VIEW, {
          'Product.ImageGallery': {
            'Itembadges.View': {
              childViewIndex: 5,
              childViewConstructor: function childViewConstructor() {
                return new ItemBadgesView({
                  view: 'pdp',
                  items: pdp.getItemInfo(),
                  collection: collection
                });
              }
            }
          }
        }
      );
    }
  };
});
define('SuiteCommerce.ItemBadges.ProductList', [
  'SuiteCommerce.ItemBadges.View'
], function ItemBadgesProductList(
  ItemBadgesView
) {
  'use strict';
  return {
    loadProductListItemBadges: function loadPDPItemBadges(application, collection) {
      var plp = application.getComponent('PLP');
      this.addProductListChildViews(plp, collection);
    },
    addProductListChildViews: function addProductListChildViews(plp, collection) {
      plp.addChildViews(
        plp.PLP_VIEW, {
          'ItemDetails.Options': {
            'Itembadges.View': {
              childViewIndex: 5,
              childViewConstructor: function childViewConstructor() {
                return new ItemBadgesView({
                  view: 'plp',
                  collection: collection
                });
              }
            }
          }
        }
      );
    }
  };
});
define('SuiteCommerce.ItemBadges.View', [
  'Backbone',
  'Backbone.CollectionView',
  'SuiteCommerce.ItemBadges.BadgesList.View',
  'SuiteCommerce.ItemBadges.Configuration',
  'underscore',
  'itembadges_view.tpl',
  'SuiteCommerce.ItemBadges.Instrumentation.InstrumentationHelper'
], function ItemBadgesView(
  Backbone,
  BackboneCollectionView,
  ItemBadgesbadgesListView,
  Configuration,
  _,
  itembadgesViewTpl,
  InstrumentationHelper
) {
  'use strict';
  return Backbone.View.extend({
    template: itembadgesViewTpl,
    contextDataRequest: ['item'],
    initialize: function initialize(options) {
      var self = this;
      this.items = options.items;
      this.collection = options.collection;
      this.currentView = options.view;
      this.position = Configuration.get('itemBadges').position.toLowerCase().replace(/\s/, '-');
      _.defer(function deferedRender() {
        self.registerInstrumentationLog();
        self.render();
      });
    },
    registerInstrumentationLog: function registerInstrumentationLog() {
      var instrumentationLog;
      var activity;
      if (this.badgeCollection.length) {
        switch (this.currentView) {
          case 'pdp':
            activity = 'Item badges loaded on PDP';
            break;
          case 'plp':
            activity = 'Item badges loaded on PLP';
            break;
          default:
        }
        instrumentationLog = InstrumentationHelper.getLog('instrumentationLog');
        instrumentationLog.setParametersToSubmit({
          componentArea: 'SC Item Badges',
          activity: activity,
          quantity: this.badgeCollection.length
        });
        instrumentationLog.submit();
      }
    },
    getContext: function getContext() {
      var itemBadges;
      var item;
      var showBadges;
      switch (this.currentView) {
        case 'pdp':
          showBadges = this.items.item.custitem_ns_ib_show_badges;
          itemBadges = this.items.item.custitem_ns_ib_badges;
          break;
        default:
          item = this.contextData.item();
          showBadges = item.custitem_ns_ib_show_badges;
          itemBadges = item.custitem_ns_ib_badges;
      }
      if (itemBadges && itemBadges.split(',').length >= 3) {
        itemBadges = itemBadges.split(',').slice(0, 3) + '';
      }
      this.badgeCollection = this.collection.filterBadges(itemBadges || false);
      return {
        hasBadges: showBadges && !!this.badgeCollection,
        position: this.position
      };
    },
    childViews: {
      'Itembadges.List.View': function ItembadgesListView() {
        return new BackboneCollectionView({
          collection: this.badgeCollection,
          childView: ItemBadgesbadgesListView,
          childViewOptions: {
            currentView: this.currentView,
            position: this.position
          }
        });
      }
    }
  });
});
define('SuiteCommerce.ItemBadges.EntryPoint', [
  'SuiteCommerce.ItemBadges.Collection',
  'SuiteCommerce.ItemBadges.ProductDetail',
  'SuiteCommerce.ItemBadges.ProductList',
  'SuiteCommerce.ItemBadges.GlobalViews',
  'SuiteCommerce.ItemBadges.Instrumentation.InstrumentationHelper',
  'SuiteCommerce.ItemBadges.Configuration'
], function ItemBadgesEntryPoint(
  ItemBadgesCollection,
  ItemBadgesProductDetail,
  ItemBadgesProductList,
  ItemBadgesGlobalViews,
  InstrumentationHelper,
  Configuration
) {
  'use strict';
  return {
    mountToApp: function mountToApp(application) {
      var log = InstrumentationHelper.initialize(application);
      Configuration.initialize(application);
      var collection = new ItemBadgesCollection();
      var collectionPromise;
      ItemBadgesProductDetail.loadProductDetailItemBadges(application, collection);
      ItemBadgesProductList.loadProductListItemBadges(application, collection);
      ItemBadgesGlobalViews.loadGlobalViewsItemBadges(application, collection);
      collectionPromise = collection.fetch();
      this.registerFetchTimer(collectionPromise);
    },
    registerFetchTimer: function registerFetchTimer(collectionPromise) {
      var fetchTimer = InstrumentationHelper.getLog('fetchTimer');
      fetchTimer.startTimer();
      collectionPromise.done(function promiseDone() {
        fetchTimer.endTimer();
        fetchTimer.setParametersToSubmit({
          componentArea: 'SC Item Badges',
          activity: 'Fetch Timer',
          totalTime: fetchTimer.getElapsedTimeForTimer()
        });
        fetchTimer.submit();
      });
    }
  };
});
};
extensions['NetSuite.LogoList.1.0.2'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/NetSuite/LogoList/1.0.2/' + asset;
};
define('jQuery.bxSlider@4.2.14', ['jQuery'], function () {
  ;(function($) {
    var defaults = {
      // GENERAL
      mode: 'horizontal',
      slideSelector: '',
      infiniteLoop: true,
      hideControlOnEnd: false,
      speed: 500,
      easing: null,
      slideMargin: 0,
      startSlide: 0,
      randomStart: false,
      captions: false,
      ticker: false,
      tickerHover: false,
      adaptiveHeight: false,
      adaptiveHeightSpeed: 500,
      video: false,
      useCSS: true,
      preloadImages: 'visible',
      responsive: true,
      slideZIndex: 50,
      wrapperClass: 'bx-wrapper',
      // TOUCH
      touchEnabled: true,
      swipeThreshold: 50,
      oneToOneTouch: true,
      preventDefaultSwipeX: true,
      preventDefaultSwipeY: false,
      // ACCESSIBILITY
      ariaLive: true,
      ariaHidden: true,
      // KEYBOARD
      keyboardEnabled: false,
      // PAGER
      pager: true,
      pagerType: 'full',
      pagerShortSeparator: ' / ',
      pagerSelector: null,
      buildPager: null,
      pagerCustom: null,
      // CONTROLS
      controls: true,
      nextText: 'Next',
      prevText: 'Prev',
      nextSelector: null,
      prevSelector: null,
      autoControls: false,
      startText: 'Start',
      stopText: 'Stop',
      autoControlsCombine: false,
      autoControlsSelector: null,
      // AUTO
      auto: false,
      pause: 4000,
      autoStart: true,
      autoDirection: 'next',
      stopAutoOnClick: false,
      autoHover: false,
      autoDelay: 0,
      autoSlideForOnePage: false,
      // CAROUSEL
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 0,
      slideWidth: 0,
      shrinkItems: false,
      // CALLBACKS
      onSliderLoad: function() { return true; },
      onSlideBefore: function() { return true; },
      onSlideAfter: function() { return true; },
      onSlideNext: function() { return true; },
      onSlidePrev: function() { return true; },
      onSliderResize: function() { return true; },
      onAutoChange: function() { return true; } //calls when auto slides starts and stops
    };
    $.fn.bxSliderNew = function(options) {
      if (this.length === 0) {
        return this;
      }
      // support multiple elements
      if (this.length > 1) {
        this.each(function() {
          $(this).bxSliderNew(options);
        });
        return this;
      }
      // create a namespace to be used throughout the plugin
      var slider = {},
        // set a reference to our slider element
        el = this,
        // get the original window dimens (thanks a lot IE)
        windowWidth = $(window).width(),
        windowHeight = $(window).height();
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      /**
       * ===================================================================================
       * = PRIVATE FUNCTIONS
       * ===================================================================================
       */
      /**
       * Initializes namespace settings to be used throughout plugin
       */
      var init = function() {
        // Return if slider is already initialized
        if ($(el).data('bxSlider')) { return; }
        // merge user-supplied options with the defaults
        slider.settings = $.extend({}, defaults, options);
        // parse slideWidth setting
        slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
        // store the original children
        slider.children = el.children(slider.settings.slideSelector);
        // check if actual number of slides is less than minSlides / maxSlides
        if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
        if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
        // if random start, set the startSlide setting to random number
        if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
        // store active slide information
        slider.active = { index: slider.settings.startSlide };
        // store if the slider is in carousel mode (displaying / moving multiple slides)
        slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
        // if carousel, force preloadImages = 'all'
        if (slider.carousel) { slider.settings.preloadImages = 'all'; }
        // calculate the min / max width thresholds based on min / max number of slides
        // used to setup and update carousel slides dimensions
        slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
        slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        // store the current state of the slider (if currently animating, working is true)
        slider.working = false;
        // initialize the controls object
        slider.controls = {};
        // initialize an auto interval
        slider.interval = null;
        // determine which property to use for transitions
        slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
        // determine if hardware acceleration can be used
        slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
          // create our test div element
          var div = document.createElement('div'),
            // css transition properties
            props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          // test for each property
          for (var i = 0; i < props.length; i++) {
            if (div.style[props[i]] !== undefined) {
              slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
              slider.animProp = '-' + slider.cssPrefix + '-transform';
              return true;
            }
          }
          return false;
        }());
        // if vertical mode always make maxSlides and minSlides equal
        if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
        // save original style data
        el.data('origStyle', el.attr('style'));
        el.children(slider.settings.slideSelector).each(function() {
          $(this).data('origStyle', $(this).attr('style'));
        });
        // perform all DOM / CSS modifications
        setup();
      };
      /**
       * Performs all DOM and CSS modifications
       */
      var setup = function() {
        var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)
        // wrap el in a wrapper
        el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
        // store a namespace reference to .bx-viewport
        slider.viewport = el.parent();
        // add aria-live if the setting is enabled and ticker mode is disabled
        if (slider.settings.ariaLive && !slider.settings.ticker) {
          slider.viewport.attr('aria-live', 'polite');
        }
        // add a loading div to display while images are loading
        slider.loader = $('<div class="bx-loading" />');
        slider.viewport.prepend(slider.loader);
        // set el to a massive width, to hold any needed slides
        // also strip any margin and padding from el
        el.css({
          width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
          position: 'relative'
        });
        // if using CSS, add the easing property
        if (slider.usingCSS && slider.settings.easing) {
          el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
          // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
        } else if (!slider.settings.easing) {
          slider.settings.easing = 'swing';
        }
        // make modifications to the viewport (.bx-viewport)
        slider.viewport.css({
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        });
        slider.viewport.parent().css({
          maxWidth: getViewportMaxWidth()
        });
        // apply css to all slider children
        slider.children.css({
          // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
          'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
          listStyle: 'none',
          position: 'relative'
        });
        // apply the calculated width after the float is applied to prevent scrollbar interference
        slider.children.css('width', getSlideWidth());
        // if slideMargin is supplied, add the css
        if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
        if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
        // if "fade" mode, add positioning and z-index CSS
        if (slider.settings.mode === 'fade') {
          slider.children.css({
            position: 'absolute',
            zIndex: 0,
            display: 'none'
          });
          // prepare the z-index on the showing element
          slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
        }
        // create an element to contain all slider controls (pager, start / stop, etc)
        slider.controls.el = $('<div class="bx-controls" />');
        // if captions are requested, add them
        if (slider.settings.captions) { appendCaptions(); }
        // check if startSlide is last slide
        slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
        // if video is true, set up the fitVids plugin
        if (slider.settings.video) { el.fitVids(); }
        //preloadImages
        if (slider.settings.preloadImages === 'none') {
          preloadSelector = null;
        }
        else if (slider.settings.preloadImages === 'all' || slider.settings.ticker) {
          preloadSelector = slider.children;
        }
        // only check for control addition if not in "ticker" mode
        if (!slider.settings.ticker) {
          // if controls are requested, add them
          if (slider.settings.controls) { appendControls(); }
          // if auto is true, and auto controls are requested, add them
          if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
          // if pager is requested, add it
          if (slider.settings.pager) { appendPager(); }
          // if any control option is requested, add the controls wrapper
          if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
          // if ticker mode, do not allow a pager
        } else {
          slider.settings.pager = false;
        }
        if (preloadSelector === null) {
          start();
        } else {
          loadElements(preloadSelector, start);
        }
      };
      var loadElements = function(selector, callback) {
        var total = selector.find('img:not([src=""]), iframe').length,
          count = 0;
        if (total === 0) {
          callback();
          return;
        }
        selector.find('img:not([src=""]), iframe').each(function() {
          $(this).one('load error', function() {
            if (++count === total) { callback(); }
          }).each(function() {
            if (this.complete || this.src == '') { $(this).trigger('load'); }
          });
        });
      };
      /**
       * Start the slider
       */
      var start = function() {
        // if infinite loop, prepare additional slides
        if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
          var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
            sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
            slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
          if (slider.settings.ariaHidden) {
            sliceAppend.attr('aria-hidden', true);
            slicePrepend.attr('aria-hidden', true);
          }
          el.append(sliceAppend).prepend(slicePrepend);
        }
        // remove the loading DOM element
        slider.loader.remove();
        // set the left / top position of "el"
        setSlidePosition();
        // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
        if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
        // set the viewport height
        slider.viewport.height(getViewportHeight());
        // make sure everything is positioned just right (same as a window resize)
        el.redrawSlider();
        // onSliderLoad callback
        slider.settings.onSliderLoad.call(el, slider.active.index);
        // slider has been fully initialized
        slider.initialized = true;
        // add the resize call to the window
        if (slider.settings.responsive) { $(window).on('resize', resizeWindow); }
        // if auto is true and has more than 1 page, start the show
        if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
        // if ticker is true, start the ticker
        if (slider.settings.ticker) { initTicker(); }
        // if pager is requested, make the appropriate pager link active
        if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
        // check for any updates to the controls (like hideControlOnEnd updates)
        if (slider.settings.controls) { updateDirectionControls(); }
        // if touchEnabled is true, setup the touch events
        if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
        // if keyboardEnabled is true, setup the keyboard events
        if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
          $(document).keydown(keyPress);
        }
      };
      /**
       * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
       */
      var getViewportHeight = function() {
        var height = 0;
        // first determine which children (slides) should be used in our height calculation
        var children = $();
        // if mode is not "vertical" and adaptiveHeight is false, include all children
        if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
          children = slider.children;
        } else {
          // if not carousel, return the single active child
          if (!slider.carousel) {
            children = slider.children.eq(slider.active.index);
            // if carousel, return a slice of children
          } else {
            // get the individual slide index
            var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
            // add the current slide to the children
            children = slider.children.eq(currentIndex);
            // cycle through the remaining "showing" slides
            for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
              // if looped back to the start
              if (currentIndex + i >= slider.children.length) {
                children = children.add(slider.children.eq(i - 1));
              } else {
                children = children.add(slider.children.eq(currentIndex + i));
              }
            }
          }
        }
        // if "vertical" mode, calculate the sum of the heights of the children
        if (slider.settings.mode === 'vertical') {
          children.each(function(index) {
            height += $(this).outerHeight();
          });
          // add user-supplied margins
          if (slider.settings.slideMargin > 0) {
            height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
          }
          // if not "vertical" mode, calculate the max height of the children
        } else {
          height = Math.max.apply(Math, children.map(function() {
            return $(this).outerHeight(false);
          }).get());
        }
        if (slider.viewport.css('box-sizing') === 'border-box') {
          height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
            parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
        } else if (slider.viewport.css('box-sizing') === 'padding-box') {
          height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
        }
        return height;
      };
      /**
       * Returns the calculated width to be used for the outer wrapper / viewport
       */
      var getViewportMaxWidth = function() {
        var width = '100%';
        if (slider.settings.slideWidth > 0) {
          if (slider.settings.mode === 'horizontal') {
            width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
          } else {
            width = slider.settings.slideWidth;
          }
        }
        return width;
      };
      /**
       * Returns the calculated width to be applied to each slide
       */
      var getSlideWidth = function() {
        var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
          wrapWidth      = slider.viewport.width();    // get the current viewport width
        // if slide width was not supplied, or is larger than the viewport use the viewport width
        if (slider.settings.slideWidth === 0 ||
          (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
          slider.settings.mode === 'vertical') {
          newElWidth = wrapWidth;
          // if carousel, use the thresholds to determine the width
        } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
          if (wrapWidth > slider.maxThreshold) {
            return newElWidth;
          } else if (wrapWidth < slider.minThreshold) {
            newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
          } else if (slider.settings.shrinkItems) {
            newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
          }
        }
        return newElWidth;
      };
      /**
       * Returns the number of slides currently visible in the viewport (includes partially visible slides)
       */
      var getNumberSlidesShowing = function() {
        var slidesShowing = 1,
          childWidth = null;
        if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
          // if viewport is smaller than minThreshold, return minSlides
          if (slider.viewport.width() < slider.minThreshold) {
            slidesShowing = slider.settings.minSlides;
            // if viewport is larger than maxThreshold, return maxSlides
          } else if (slider.viewport.width() > slider.maxThreshold) {
            slidesShowing = slider.settings.maxSlides;
            // if viewport is between min / max thresholds, divide viewport width by first child width
          } else {
            childWidth = slider.children.first().width() + slider.settings.slideMargin;
            slidesShowing = Math.floor((slider.viewport.width() +
              slider.settings.slideMargin) / childWidth) || 1;
          }
          // if "vertical" mode, slides showing will always be minSlides
        } else if (slider.settings.mode === 'vertical') {
          slidesShowing = slider.settings.minSlides;
        }
        return slidesShowing;
      };
      /**
       * Returns the number of pages (one full viewport of slides is one "page")
       */
      var getPagerQty = function() {
        var pagerQty = 0,
          breakPoint = 0,
          counter = 0;
        // if moveSlides is specified by the user
        if (slider.settings.moveSlides > 0) {
          if (slider.settings.infiniteLoop) {
            pagerQty = Math.ceil(slider.children.length / getMoveBy());
          } else {
            // when breakpoint goes above children length, counter is the number of pages
            while (breakPoint < slider.children.length) {
              ++pagerQty;
              breakPoint = counter + getNumberSlidesShowing();
              counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
            }
            return counter;
          }
          // if moveSlides is 0 (auto) divide children length by sides showing, then round up
        } else {
          pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
        }
        return pagerQty;
      };
      /**
       * Returns the number of individual slides by which to shift the slider
       */
      var getMoveBy = function() {
        // if moveSlides was set by the user and moveSlides is less than number of slides showing
        if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
          return slider.settings.moveSlides;
        }
        // if moveSlides is 0 (auto)
        return getNumberSlidesShowing();
      };
      /**
       * Sets the slider's (el) left or top position
       */
      var setSlidePosition = function() {
        var position, lastChild, lastShowingIndex;
        // if last slide, not infinite loop, and number of children is larger than specified maxSlides
        if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child's position
            lastChild = slider.children.last();
            position = lastChild.position();
            // set the left position
            setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
          } else if (slider.settings.mode === 'vertical') {
            // get the last showing index's position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
            // set the top position
            setPositionProperty(-position.top, 'reset', 0);
          }
          // if not last slide
        } else {
          // get the position of the first showing slide
          position = slider.children.eq(slider.active.index * getMoveBy()).position();
          // check for last slide
          if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
          // set the respective position
          if (position !== undefined) {
            if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
            else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
          }
        }
      };
      /**
       * Sets the el's animating property position (which in turn will sometimes animate el).
       * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
       *
       * @param value (int)
       *  - the animating property's value
       *
       * @param type (string) 'slide', 'reset', 'ticker'
       *  - the type of instance for which the function is being
       *
       * @param duration (int)
       *  - the amount of time (in ms) the transition should occupy
       *
       * @param params (array) optional
       *  - an optional parameter containing any variables that need to be passed in
       */
      var setPositionProperty = function(value, type, duration, params) {
        var animateObj, propValue;
        // use CSS transform
        if (slider.usingCSS) {
          // determine the translate3d value
          propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
          // add the CSS transition-duration
          el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
          if (type === 'slide') {
            // set the property value
            el.css(slider.animProp, propValue);
            if (duration !== 0) {
              // add a callback method - executes when CSS transition completes
              el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                //make sure it's the correct one
                if (!$(e.target).is(el)) { return; }
                // remove the callback
                el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                updateAfterSlideTransition();
              });
            } else { //duration = 0
              updateAfterSlideTransition();
            }
          } else if (type === 'reset') {
            el.css(slider.animProp, propValue);
          } else if (type === 'ticker') {
            // make the transition use 'linear'
            el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
            el.css(slider.animProp, propValue);
            if (duration !== 0) {
              el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
                //make sure it's the correct one
                if (!$(e.target).is(el)) { return; }
                // remove the callback
                el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                // reset the position
                setPositionProperty(params.resetValue, 'reset', 0);
                // start the loop again
                tickerLoop();
              });
            } else { //duration = 0
              setPositionProperty(params.resetValue, 'reset', 0);
              tickerLoop();
            }
          }
          // use JS animate
        } else {
          animateObj = {};
          animateObj[slider.animProp] = value;
          if (type === 'slide') {
            el.animate(animateObj, duration, slider.settings.easing, function() {
              updateAfterSlideTransition();
            });
          } else if (type === 'reset') {
            el.css(slider.animProp, value);
          } else if (type === 'ticker') {
            el.animate(animateObj, duration, 'linear', function() {
              setPositionProperty(params.resetValue, 'reset', 0);
              // run the recursive loop after animation
              tickerLoop();
            });
          }
        }
      };
      /**
       * Populates the pager with proper amount of pages
       */
      var populatePager = function() {
        var pagerHtml = '',
          linkContent = '',
          pagerQty = getPagerQty();
        // loop through each pager item
        for (var i = 0; i < pagerQty; i++) {
          linkContent = '';
          // if a buildPager function is supplied, use it to get pager link value, else use index + 1
          if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
            linkContent = slider.settings.buildPager(i);
            slider.pagerEl.addClass('bx-custom-pager');
          } else {
            linkContent = i + 1;
            slider.pagerEl.addClass('bx-default-pager');
          }
          // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
          // add the markup to the string
          pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
        }
        // populate the pager element with pager links
        slider.pagerEl.html(pagerHtml);
      };
      /**
       * Appends the pager to the controls element
       */
      var appendPager = function() {
        if (!slider.settings.pagerCustom) {
          // create the pager DOM element
          slider.pagerEl = $('<div class="bx-pager" />');
          // if a pager selector was supplied, populate it with the pager
          if (slider.settings.pagerSelector) {
            $(slider.settings.pagerSelector).html(slider.pagerEl);
            // if no pager selector was supplied, add it after the wrapper
          } else {
            slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
          }
          // populate the pager
          populatePager();
        } else {
          slider.pagerEl = $(slider.settings.pagerCustom);
        }
        // assign the pager click binding
        slider.pagerEl.on('click touchend', 'a', clickPagerBind);
      };
      /**
       * Appends prev / next controls to the controls element
       */
      var appendControls = function() {
        slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
        slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
        // add click actions to the controls
        slider.controls.next.on('click touchend', clickNextBind);
        slider.controls.prev.on('click touchend', clickPrevBind);
        // if nextSelector was supplied, populate it
        if (slider.settings.nextSelector) {
          $(slider.settings.nextSelector).append(slider.controls.next);
        }
        // if prevSelector was supplied, populate it
        if (slider.settings.prevSelector) {
          $(slider.settings.prevSelector).append(slider.controls.prev);
        }
        // if no custom selectors were supplied
        if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
          // add the controls to the DOM
          slider.controls.directionEl = $('<div class="bx-controls-direction" />');
          // add the control elements to the directionEl
          slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
          // slider.viewport.append(slider.controls.directionEl);
          slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
        }
      };
      /**
       * Appends start / stop auto controls to the controls element
       */
      var appendControlsAuto = function() {
        slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
        slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
        // add the controls to the DOM
        slider.controls.autoEl = $('<div class="bx-controls-auto" />');
        // on click actions to the controls
        slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
        slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
        // if autoControlsCombine, insert only the "start" control
        if (slider.settings.autoControlsCombine) {
          slider.controls.autoEl.append(slider.controls.start);
          // if autoControlsCombine is false, insert both controls
        } else {
          slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
        }
        // if auto controls selector was supplied, populate it with the controls
        if (slider.settings.autoControlsSelector) {
          $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
          // if auto controls selector was not supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
        }
        // update the auto controls
        updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
      };
      /**
       * Appends image captions to the DOM
       */
      var appendCaptions = function() {
        // cycle through each child
        slider.children.each(function(index) {
          // get the image title attribute
          var title = $(this).find('img:first').attr('title');
          // append the caption
          if (title !== undefined && ('' + title).length) {
            $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
          }
        });
      };
      /**
       * Click next binding
       *
       * @param e (event)
       *  - DOM event object
       */
      var clickNextBind = function(e) {
        e.preventDefault();
        if (slider.controls.el.hasClass('disabled')) { return; }
        // if auto show is running, stop it
        if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
        el.goToNextSlide();
      };
      /**
       * Click prev binding
       *
       * @param e (event)
       *  - DOM event object
       */
      var clickPrevBind = function(e) {
        e.preventDefault();
        if (slider.controls.el.hasClass('disabled')) { return; }
        // if auto show is running, stop it
        if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
        el.goToPrevSlide();
      };
      /**
       * Click start binding
       *
       * @param e (event)
       *  - DOM event object
       */
      var clickStartBind = function(e) {
        el.startAuto();
        e.preventDefault();
      };
      /**
       * Click stop binding
       *
       * @param e (event)
       *  - DOM event object
       */
      var clickStopBind = function(e) {
        el.stopAuto();
        e.preventDefault();
      };
      /**
       * Click pager binding
       *
       * @param e (event)
       *  - DOM event object
       */
      var clickPagerBind = function(e) {
        var pagerLink, pagerIndex;
        e.preventDefault();
        if (slider.controls.el.hasClass('disabled')) {
          return;
        }
        // if auto show is running, stop it
        if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
        pagerLink = $(e.currentTarget);
        if (pagerLink.attr('data-slide-index') !== undefined) {
          pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
          // if clicked pager link is not active, continue with the goToSlide call
          if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
        }
      };
      /**
       * Updates the pager links with an active class
       *
       * @param slideIndex (int)
       *  - index of slide to make active
       */
      var updatePagerActive = function(slideIndex) {
        // if "short" pager type
        var len = slider.children.length; // nb of children
        if (slider.settings.pagerType === 'short') {
          if (slider.settings.maxSlides > 1) {
            len = Math.ceil(slider.children.length / slider.settings.maxSlides);
          }
          slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
          return;
        }
        // remove all pager active classes
        slider.pagerEl.find('a').removeClass('active');
        // apply the active class for all pagers
        slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
      };
      /**
       * Performs needed actions after a slide transition
       */
      var updateAfterSlideTransition = function() {
        // if infinite loop is true
        if (slider.settings.infiniteLoop) {
          var position = '';
          // first slide
          if (slider.active.index === 0) {
            // set the new position
            position = slider.children.eq(0).position();
            // carousel, last slide
          } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
            position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
            // last slide
          } else if (slider.active.index === slider.children.length - 1) {
            position = slider.children.eq(slider.children.length - 1).position();
          }
          if (position) {
            if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
            else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
          }
        }
        // declare that the transition is complete
        slider.working = false;
        // onSlideAfter callback
        slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
      };
      /**
       * Updates the auto controls state (either active, or combined switch)
       *
       * @param state (string) "start", "stop"
       *  - the new state of the auto show
       */
      var updateAutoControls = function(state) {
        // if autoControlsCombine is true, replace the current control with the new state
        if (slider.settings.autoControlsCombine) {
          slider.controls.autoEl.html(slider.controls[state]);
          // if autoControlsCombine is false, apply the "active" class to the appropriate control
        } else {
          slider.controls.autoEl.find('a').removeClass('active');
          slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
        }
      };
      /**
       * Updates the direction controls (checks if either should be hidden)
       */
      var updateDirectionControls = function() {
        if (getPagerQty() === 1) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.addClass('disabled');
        } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
          // if first slide
          if (slider.active.index === 0) {
            slider.controls.prev.addClass('disabled');
            slider.controls.next.removeClass('disabled');
            // if last slide
          } else if (slider.active.index === getPagerQty() - 1) {
            slider.controls.next.addClass('disabled');
            slider.controls.prev.removeClass('disabled');
            // if any slide in the middle
          } else {
            slider.controls.prev.removeClass('disabled');
            slider.controls.next.removeClass('disabled');
          }
        }
      };
      /* auto start and stop functions */
      var windowFocusHandler = function() { el.startAuto(); };
      var windowBlurHandler = function() { el.stopAuto(); };
      /**
       * Initializes the auto process
       */
      var initAuto = function() {
        // if autoDelay was supplied, launch the auto show using a setTimeout() call
        if (slider.settings.autoDelay > 0) {
          setTimeout(el.startAuto, slider.settings.autoDelay);
          // if autoDelay was not supplied, start the auto show normally
        } else {
          el.startAuto();
          //add focus and blur events to ensure its running if timeout gets paused
          $(window).focus(windowFocusHandler).blur(windowBlurHandler);
        }
        // if autoHover is requested
        if (slider.settings.autoHover) {
          // on el hover
          el.hover(function() {
            // if the auto show is currently playing (has an active interval)
            if (slider.interval) {
              // stop the auto show and pass true argument which will prevent control update
              el.stopAuto(true);
              // create a new autoPaused value which will be used by the relative "mouseout" event
              slider.autoPaused = true;
            }
          }, function() {
            // if the autoPaused value was created be the prior "mouseover" event
            if (slider.autoPaused) {
              // start the auto show and pass true argument which will prevent control update
              el.startAuto(true);
              // reset the autoPaused value
              slider.autoPaused = null;
            }
          });
        }
      };
      /**
       * Initializes the ticker process
       */
      var initTicker = function() {
        var startPosition = 0,
          position, transform, value, idx, ratio, property, newSpeed, totalDimens;
        // if autoDirection is "next", append a clone of the entire slider
        if (slider.settings.autoDirection === 'next') {
          el.append(slider.children.clone().addClass('bx-clone'));
          // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
        } else {
          el.prepend(slider.children.clone().addClass('bx-clone'));
          position = slider.children.first().position();
          startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
        }
        setPositionProperty(startPosition, 'reset', 0);
        // do not allow controls in ticker mode
        slider.settings.pager = false;
        slider.settings.controls = false;
        slider.settings.autoControls = false;
        // if autoHover is requested
        if (slider.settings.tickerHover) {
          if (slider.usingCSS) {
            idx = slider.settings.mode === 'horizontal' ? 4 : 5;
            slider.viewport.hover(function() {
              transform = el.css('-' + slider.cssPrefix + '-transform');
              value = parseFloat(transform.split(',')[idx]);
              setPositionProperty(value, 'reset', 0);
            }, function() {
              totalDimens = 0;
              slider.children.each(function(index) {
                totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
              });
              // calculate the speed ratio (used to determine the new speed to finish the paused animation)
              ratio = slider.settings.speed / totalDimens;
              // determine which property to use
              property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
              // calculate the new speed
              newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
              tickerLoop(newSpeed);
            });
          } else {
            // on el hover
            slider.viewport.hover(function() {
              el.stop();
            }, function() {
              // calculate the total width of children (used to calculate the speed ratio)
              totalDimens = 0;
              slider.children.each(function(index) {
                totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
              });
              // calculate the speed ratio (used to determine the new speed to finish the paused animation)
              ratio = slider.settings.speed / totalDimens;
              // determine which property to use
              property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
              // calculate the new speed
              newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
              tickerLoop(newSpeed);
            });
          }
        }
        // start the ticker loop
        tickerLoop();
      };
      /**
       * Runs a continuous loop, news ticker-style
       */
      var tickerLoop = function(resumeSpeed) {
        var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
          position = {left: 0, top: 0},
          reset = {left: 0, top: 0},
          animateProperty, resetValue, params;
        // if "next" animate left position to last child, then reset left to 0
        if (slider.settings.autoDirection === 'next') {
          position = el.find('.bx-clone').first().position();
          // if "prev" animate left position to 0, then reset left to first non-clone child
        } else {
          reset = slider.children.first().position();
        }
        animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
        resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
        params = {resetValue: resetValue};
        setPositionProperty(animateProperty, 'ticker', speed, params);
      };
      /**
       * Check if el is on screen
       */
      var isOnScreen = function(el) {
        var win = $(window),
          viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
          },
          bounds = el.offset();
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        bounds.right = bounds.left + el.outerWidth();
        bounds.bottom = bounds.top + el.outerHeight();
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
      };
      /**
       * Initializes keyboard events
       */
      var keyPress = function(e) {
        var activeElementTag = document.activeElement.tagName.toLowerCase(),
          tagFilters = 'input|textarea',
          p = new RegExp(activeElementTag,['i']),
          result = p.exec(tagFilters);
        if (result == null && isOnScreen(el)) {
          if (e.keyCode === 39) {
            clickNextBind(e);
            return false;
          } else if (e.keyCode === 37) {
            clickPrevBind(e);
            return false;
          }
        }
      };
      /**
       * Initializes touch events
       */
      var initTouch = function() {
        // initialize object to contain all touch values
        slider.touch = {
          start: {x: 0, y: 0},
          end: {x: 0, y: 0}
        };
        slider.viewport.on('touchstart MSPointerDown pointerdown', onTouchStart);
        //for browsers that have implemented pointer events and fire a click after
        //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
        slider.viewport.on('click', '.bxslider a', function(e) {
          if (slider.viewport.hasClass('click-disabled')) {
            e.preventDefault();
            slider.viewport.removeClass('click-disabled');
          }
        });
      };
      /**
       * Event handler for "touchstart"
       *
       * @param e (event)
       *  - DOM event object
       */
      var onTouchStart = function(e) {
        // watch only for left mouse, touch contact and pen contact
        // touchstart event object doesn`t have button property
        if (e.type !== 'touchstart' && e.button !== 0) {
          return;
        }
        // !!! We don't want to prevent default handler to be able to scroll vertically in mobile devices and to select text !!!
        //e.preventDefault();
        //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
        slider.controls.el.addClass('disabled');
        if (slider.working) {
          slider.controls.el.removeClass('disabled');
        } else {
          // record the original position when touch starts
          slider.touch.originalPos = el.position();
          var orig = e.originalEvent,
            touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
          var chromePointerEvents = typeof PointerEvent === 'function';
          if (chromePointerEvents) {
            if (orig.pointerId === undefined) {
              return;
            }
          }
          // record the starting touch x, y coordinates
          slider.touch.start.x = touchPoints[0].pageX;
          slider.touch.start.y = touchPoints[0].pageY;
          if (slider.viewport.get(0).setPointerCapture) {
            slider.pointerId = orig.pointerId;
            slider.viewport.get(0).setPointerCapture(slider.pointerId);
          }
          // store original event data for click fixation
          slider.originalClickTarget = orig.originalTarget || orig.target;
          slider.originalClickButton = orig.button;
          slider.originalClickButtons = orig.buttons;
          slider.originalEventType = orig.type;
          // at this moment we don`t know what it is click or swipe
          slider.hasMove = false;
          // on a "touchmove" event to the viewport
          slider.viewport.on('touchmove MSPointerMove pointermove', onTouchMove);
          // on a "touchend" event to the viewport
          slider.viewport.on('touchend MSPointerUp pointerup', onTouchEnd);
          slider.viewport.on('MSPointerCancel pointercancel', onPointerCancel);
        }
      };
      /**
       * Cancel Pointer for Windows Phone
       *
       * @param e (event)
       *  - DOM event object
       */
      var onPointerCancel = function(e) {
        e.preventDefault();
        /* onPointerCancel handler is needed to deal with situations when a touchend
        doesn't fire after a touchstart (this happens on windows phones only) */
        setPositionProperty(slider.touch.originalPos.left, 'reset', 0);
        //remove handlers
        slider.controls.el.removeClass('disabled');
        slider.viewport.off('MSPointerCancel pointercancel', onPointerCancel);
        slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
        slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
        if (slider.viewport.get(0).releasePointerCapture) {
          slider.viewport.get(0).releasePointerCapture(slider.pointerId);
        }
      };
      /**
       * Event handler for "touchmove"
       *
       * @param e (event)
       *  - DOM event object
       */
      var onTouchMove = function(e) {
        var orig = e.originalEvent,
          touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
          // if scrolling on y axis, do not prevent default
          xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
          yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
          value = 0,
          change = 0;
        // this is swipe
        slider.hasMove = true;
        // x axis swipe
        if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
          e.preventDefault();
          // y axis swipe
        } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
          e.preventDefault();
        }
        if (e.type !== 'touchmove') {
          e.preventDefault();
        }
        if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
          // if horizontal, drag along x axis
          if (slider.settings.mode === 'horizontal') {
            change = touchPoints[0].pageX - slider.touch.start.x;
            value = slider.touch.originalPos.left + change;
            // if vertical, drag along y axis
          } else {
            change = touchPoints[0].pageY - slider.touch.start.y;
            value = slider.touch.originalPos.top + change;
          }
          setPositionProperty(value, 'reset', 0);
        }
      };
      /**
       * Event handler for "touchend"
       *
       * @param e (event)
       *  - DOM event object
       */
      var onTouchEnd = function(e) {
        e.preventDefault();
        slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
        //enable slider controls as soon as user stops interacing with slides
        slider.controls.el.removeClass('disabled');
        var orig    = e.originalEvent,
          touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
          value       = 0,
          distance    = 0;
        // record end x, y positions
        slider.touch.end.x = touchPoints[0].pageX;
        slider.touch.end.y = touchPoints[0].pageY;
        // if fade mode, check if absolute x distance clears the threshold
        if (slider.settings.mode === 'fade') {
          distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
          if (distance >= slider.settings.swipeThreshold) {
            if (slider.touch.start.x > slider.touch.end.x) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          }
          // not fade mode
        } else {
          // calculate distance and el's animate property
          if (slider.settings.mode === 'horizontal') {
            distance = slider.touch.end.x - slider.touch.start.x;
            value = slider.touch.originalPos.left;
          } else {
            distance = slider.touch.end.y - slider.touch.start.y;
            value = slider.touch.originalPos.top;
          }
          // if not infinite loop and first / last slide, do not attempt a slide transition
          if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
            setPositionProperty(value, 'reset', 200);
          } else {
            // check if distance clears threshold
            if (Math.abs(distance) >= slider.settings.swipeThreshold) {
              if (distance < 0) {
                el.goToNextSlide();
              } else {
                el.goToPrevSlide();
              }
              el.stopAuto();
            } else {
              // el.animate(property, 200);
              setPositionProperty(value, 'reset', 200);
            }
          }
        }
        slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
        if (slider.viewport.get(0).releasePointerCapture) {
          slider.viewport.get(0).releasePointerCapture(slider.pointerId);
        }
        // if slider had swipe with left mouse, touch contact and pen contact
        if (slider.hasMove === false && (slider.originalClickButton === 0 || slider.originalEventType === 'touchstart')) {
          // trigger click event (fix for Firefox59 and PointerEvent standard compatibility)
          $(slider.originalClickTarget).trigger({
            type: 'click',
            button: slider.originalClickButton,
            buttons: slider.originalClickButtons
          });
        }
      };
      /**
       * Window resize event callback
       */
      var resizeWindow = function(e) {
        // don't do anything if slider isn't initialized.
        if (!slider.initialized) { return; }
        // Delay if slider working.
        if (slider.working) {
          window.setTimeout(resizeWindow, 10);
        } else {
          // get the new window dimens (again, thank you IE)
          var windowWidthNew = $(window).width(),
            windowHeightNew = $(window).height();
          // make sure that it is a true window resize
          // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
          // are resized. Can you just die already?*
          if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
            // set the new window dimens
            windowWidth = windowWidthNew;
            windowHeight = windowHeightNew;
            // update all dynamic elements
            el.redrawSlider();
            // Call user resize handler
            slider.settings.onSliderResize.call(el, slider.active.index);
          }
        }
      };
      /**
       * Adds an aria-hidden=true attribute to each element
       *
       * @param startVisibleIndex (int)
       *  - the first visible element's index
       */
      var applyAriaHiddenAttributes = function(startVisibleIndex) {
        var numberOfSlidesShowing = getNumberSlidesShowing();
        // only apply attributes if the setting is enabled and not in ticker mode
        if (slider.settings.ariaHidden && !slider.settings.ticker) {
          // add aria-hidden=true to all elements
          slider.children.attr('aria-hidden', 'true');
          // get the visible elements and change to aria-hidden=false
          slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
        }
      };
      /**
       * Returns index according to present page range
       *
       * @param slideOndex (int)
       *  - the desired slide index
       */
      var setSlideIndex = function(slideIndex) {
        if (slideIndex < 0) {
          if (slider.settings.infiniteLoop) {
            return getPagerQty() - 1;
          }else {
            //we don't go to undefined slides
            return slider.active.index;
          }
          // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
        } else if (slideIndex >= getPagerQty()) {
          if (slider.settings.infiniteLoop) {
            return 0;
          } else {
            //we don't move to undefined pages
            return slider.active.index;
          }
          // set active index to requested slide
        } else {
          return slideIndex;
        }
      };
      /**
       * ===================================================================================
       * = PUBLIC FUNCTIONS
       * ===================================================================================
       */
      /**
       * Performs slide transition to the specified slide
       *
       * @param slideIndex (int)
       *  - the destination slide's index (zero-based)
       *
       * @param direction (string)
       *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
       */
      el.goToSlide = function(slideIndex, direction) {
        // onSlideBefore, onSlideNext, onSlidePrev callbacks
        // Allow transition canceling based on returned value
        var performTransition = true,
          moveBy = 0,
          position = {left: 0, top: 0},
          lastChild = null,
          lastShowingIndex, eq, value, requestEl;
        // store the old index
        slider.oldIndex = slider.active.index;
        //set new index
        slider.active.index = setSlideIndex(slideIndex);
        // if plugin is currently in motion, ignore request
        if (slider.working || slider.active.index === slider.oldIndex) { return; }
        // declare that plugin is in motion
        slider.working = true;
        performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        // If transitions canceled, reset and return
        if (typeof (performTransition) !== 'undefined' && !performTransition) {
          slider.active.index = slider.oldIndex; // restore old index
          slider.working = false; // is not in motion
          return;
        }
        if (direction === 'next') {
          // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
          if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
            performTransition = false;
          }
        } else if (direction === 'prev') {
          // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
          if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
            performTransition = false;
          }
        }
        // check if last slide
        slider.active.last = slider.active.index >= getPagerQty() - 1;
        // update the pager with active class
        if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
        // // check for direction control update
        if (slider.settings.controls) { updateDirectionControls(); }
        // if slider is set to mode: "fade"
        if (slider.settings.mode === 'fade') {
          // if adaptiveHeight is true and next height is different from current height, animate to the new height
          if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
            slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
          }
          // fade out the visible child and reset its z-index value
          slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
          // fade in the newly requested slide
          slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
            $(this).css('zIndex', slider.settings.slideZIndex);
            updateAfterSlideTransition();
          });
          // slider mode is not "fade"
        } else {
          // if adaptiveHeight is true and next height is different from current height, animate to the new height
          if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
            slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
          }
          // if carousel and not infinite loop
          if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
            if (slider.settings.mode === 'horizontal') {
              // get the last child position
              lastChild = slider.children.eq(slider.children.length - 1);
              position = lastChild.position();
              // calculate the position of the last slide
              moveBy = slider.viewport.width() - lastChild.outerWidth();
            } else {
              // get last showing index position
              lastShowingIndex = slider.children.length - slider.settings.minSlides;
              position = slider.children.eq(lastShowingIndex).position();
            }
            // horizontal carousel, going previous while on first slide (infiniteLoop mode)
          } else if (slider.carousel && slider.active.last && direction === 'prev') {
            // get the last child position
            eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
            lastChild = el.children('.bx-clone').eq(eq);
            position = lastChild.position();
            // if infinite loop and "Next" is clicked on the last slide
          } else if (direction === 'next' && slider.active.index === 0) {
            // get the last clone position
            position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
            slider.active.last = false;
            // normal non-zero requests
          } else if (slideIndex >= 0) {
            //parseInt is applied to allow floats for slides/page
            requestEl = slideIndex * parseInt(getMoveBy());
            position = slider.children.eq(requestEl).position();
          }
          /* If the position doesn't exist
           * (e.g. if you destroy the slider on a next click),
           * it doesn't throw an error.
           */
          if (typeof (position) !== 'undefined') {
            value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
            // plugin values to be animated
            setPositionProperty(value, 'slide', slider.settings.speed);
          }
          slider.working = false;
        }
        if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
      };
      /**
       * Transitions to the next slide in the show
       */
      el.goToNextSlide = function() {
        // if infiniteLoop is false and last page is showing, disregard call
        if (!slider.settings.infiniteLoop && slider.active.last) { return; }
        if (slider.working === true){ return ;}
        var pagerIndex = parseInt(slider.active.index) + 1;
        el.goToSlide(pagerIndex, 'next');
      };
      /**
       * Transitions to the prev slide in the show
       */
      el.goToPrevSlide = function() {
        // if infiniteLoop is false and last page is showing, disregard call
        if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
        if (slider.working === true){ return ;}
        var pagerIndex = parseInt(slider.active.index) - 1;
        el.goToSlide(pagerIndex, 'prev');
      };
      /**
       * Starts the auto show
       *
       * @param preventControlUpdate (boolean)
       *  - if true, auto controls state will not be updated
       */
      el.startAuto = function(preventControlUpdate) {
        // if an interval already exists, disregard call
        if (slider.interval) { return; }
        // create an interval
        slider.interval = setInterval(function() {
          if (slider.settings.autoDirection === 'next') {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
        }, slider.settings.pause);
        //allback for when the auto rotate status changes
        slider.settings.onAutoChange.call(el, true);
        // if auto controls are displayed and preventControlUpdate is not true
        if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
      };
      /**
       * Stops the auto show
       *
       * @param preventControlUpdate (boolean)
       *  - if true, auto controls state will not be updated
       */
      el.stopAuto = function(preventControlUpdate) {
        // if slider is auto paused, just clear that state
        if (slider.autoPaused) slider.autoPaused = false;
        // if no interval exists, disregard call
        if (!slider.interval) { return; }
        // clear the interval
        clearInterval(slider.interval);
        slider.interval = null;
        //allback for when the auto rotate status changes
        slider.settings.onAutoChange.call(el, false);
        // if auto controls are displayed and preventControlUpdate is not true
        if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
      };
      /**
       * Returns current slide index (zero-based)
       */
      el.getCurrentSlide = function() {
        return slider.active.index;
      };
      /**
       * Returns current slide element
       */
      el.getCurrentSlideElement = function() {
        return slider.children.eq(slider.active.index);
      };
      /**
       * Returns a slide element
       * @param index (int)
       *  - The index (zero-based) of the element you want returned.
       */
      el.getSlideElement = function(index) {
        return slider.children.eq(index);
      };
      /**
       * Returns number of slides in show
       */
      el.getSlideCount = function() {
        return slider.children.length;
      };
      /**
       * Return slider.working variable
       */
      el.isWorking = function() {
        return slider.working;
      };
      /**
       * Update all dynamic slider elements
       */
      el.redrawSlider = function() {
        // resize all children in ratio to new screen size
        slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
        // adjust the height
        slider.viewport.css('height', getViewportHeight());
        // update the slide position
        if (!slider.settings.ticker) { setSlidePosition(); }
        // if active.last was true before the screen resize, we want
        // to keep it last no matter what screen size we end on
        if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
        // if the active index (page) no longer exists due to the resize, simply set the index as last
        if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
        // if a pager is being displayed and a custom pager is not being used, update it
        if (slider.settings.pager && !slider.settings.pagerCustom) {
          populatePager();
          updatePagerActive(slider.active.index);
        }
        if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
      };
      /**
       * Destroy the current instance of the slider (revert everything back to original state)
       */
      el.destroySlider = function() {
        // don't do anything if slider has already been destroyed
        if (!slider.initialized) { return; }
        slider.initialized = false;
        $('.bx-clone', this).remove();
        slider.children.each(function() {
          if ($(this).data('origStyle') !== undefined) {
            $(this).attr('style', $(this).data('origStyle'));
          } else {
            $(this).removeAttr('style');
          }
        });
        if ($(this).data('origStyle') !== undefined) {
          this.attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
        $(this).unwrap().unwrap();
        if (slider.controls.el) { slider.controls.el.remove(); }
        if (slider.controls.next) { slider.controls.next.remove(); }
        if (slider.controls.prev) { slider.controls.prev.remove(); }
        if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
        $('.bx-caption', this).remove();
        if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
        clearInterval(slider.interval);
        if (slider.settings.responsive) { $(window).off('resize', resizeWindow); }
        if (slider.settings.keyboardEnabled) { $(document).off('keydown', keyPress); }
        //remove self reference in data
        $(this).removeData('bxSlider');
        // remove global window handlers
        $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
      };
      /**
       * Reload the slider (revert all DOM changes, and re-initialize)
       */
      el.reloadSlider = function(settings) {
        if (settings !== undefined) { options = settings; }
        el.destroySlider();
        init();
        //store reference to self in order to access public functions later
        $(el).data('bxSlider', this);
      };
      init();
      $(el).data('bxSlider', this);
      // returns the current jQuery object
      return this;
    };
  })(jQuery);
  return;
});
/// <amd-module name="NetSuite.LogoList.Common.Instrumentation.Helper"/>
define("NetSuite.LogoList.Common.Instrumentation.Helper", ["require", "exports", "NetSuite.LogoList.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentArea = 'SC Logo List';
    var ExtensionVersion = '1.0.2';
    var QueueNameSuffix = '-LogoList';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (container) {
            Instrumentation_1.default.initialize({
                environment: container.getComponent('Environment'),
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                },
            });
        };
        InstrumentationHelper.log = function (activity, subType) {
            var label = activity.replace(' ', '');
            var log = Instrumentation_1.default.getLog(label);
            log.setParameter('activity', activity);
            if (subType) {
                log.setParameter('subType', subType);
            }
            log.submit();
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="NetSuite.LogoList.Common.Utils"/>
define("NetSuite.LogoList.Common.Utils", ["require", "exports", "jQuery"], function (require, exports, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Device;
    (function (Device) {
        Device[Device["phone"] = 0] = "phone";
        Device[Device["tablet"] = 1] = "tablet";
        Device[Device["desktop"] = 2] = "desktop";
    })(Device = exports.Device || (exports.Device = {}));
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.isPhoneDevice = function () {
            return this.getDeviceType() === Device.phone;
        };
        Utils.isTabletDevice = function () {
            return this.getDeviceType() === Device.tablet;
        };
        Utils.isDesktopDevice = function () {
            return this.getDeviceType() === Device.desktop;
        };
        Utils.getDeviceType = function (widthToCheck) {
            var width = widthToCheck || this.getViewportWidth();
            if (width < 768) {
                return Device.phone;
            }
            if (width < 992) {
                return Device.tablet;
            }
            return Device.desktop;
        };
        Utils.getViewportWidth = function () {
            return jQuery(window).width();
        };
        Utils.trim = function (text) {
            return jQuery.trim(text);
        };
        Utils.oldIE = function (version) {
            var ie_version = version || 7;
            // IE7 detection courtesy of Backbone
            // More info: http://www.glennjones.net/2006/02/getattribute-href-bug/
            var isExplorer = /msie [\w.]+/;
            var docMode = document.documentMode;
            return (isExplorer.exec(navigator.userAgent.toLowerCase()) &&
                (!docMode || docMode <= ie_version));
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
/// <amd-module name="NetSuite.LogoList.Instrumentation.Fallback.Logger"/>
define("NetSuite.LogoList.Instrumentation.Fallback.Logger", ["require", "exports", "jQuery", "Url"], function (require, exports, jQuery, Url) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var queueErrorTemp = [];
    var queueInfoTemp = [];
    var FallbackLogger = /** @class */ (function () {
        function FallbackLogger(options) {
            var _this = this;
            this.options = options;
            if (!this.isEnabled()) {
                return;
            }
            this.isWaiting = false;
            setInterval(function () {
                _this.processQueues(true);
            }, 60000);
            window.addEventListener('beforeunload', function () {
                _this.processQueues(false);
            });
        }
        Object.defineProperty(FallbackLogger.prototype, "environment", {
            get: function () {
                if (this.options.environment) {
                    return this.options.environment;
                }
                console.error('Please initialize instrumentation with the Environment Component.');
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FallbackLogger.prototype, "queueErrorName", {
            get: function () {
                return "queueError" + this.options.queueNameSuffix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FallbackLogger.prototype, "queueInfoName", {
            get: function () {
                return "queueInfo" + this.options.queueNameSuffix;
            },
            enumerable: true,
            configurable: true
        });
        FallbackLogger.prototype.info = function (obj) {
            if (!this.isEnabled()) {
                return;
            }
            var objWrapper = obj;
            objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
            objWrapper.message = "clientSideLogDateTime: " + new Date().toISOString();
            if (this.isWaiting) {
                queueInfoTemp.push(objWrapper);
            }
            else {
                var queueInfo = JSON.parse(localStorage.getItem(this.queueInfoName)) || [];
                queueInfo.push(objWrapper);
                localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfo));
            }
        };
        FallbackLogger.prototype.error = function (obj) {
            if (!this.isEnabled()) {
                return;
            }
            var objWrapper = obj;
            objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
            objWrapper.message = "clientSideLogDateTime: " + new Date().toISOString();
            if (this.isWaiting) {
                queueErrorTemp.push(objWrapper);
            }
            else {
                var queueError = JSON.parse(localStorage.getItem(this.queueErrorName)) || [];
                queueError.push(objWrapper);
                localStorage.setItem(this.queueErrorName, JSON.stringify(queueError));
            }
        };
        FallbackLogger.prototype.processQueues = function (isAsync) {
            if (!this.isEnabled()) {
                return;
            }
            var parsedURL = new Url().parse(SC.ENVIRONMENT.baseUrl);
            var product = SC.ENVIRONMENT.BuildTimeInf.product;
            var url = parsedURL.schema + "://" + parsedURL.netLoc + "/app/site/hosting/scriptlet.nl" +
                ("?script=customscript_" + product.toLowerCase() + "_loggerendpoint") +
                ("&deploy=customdeploy_" + product.toLowerCase() + "_loggerendpoint");
            var queueError = JSON.parse(localStorage.getItem(this.queueErrorName));
            var queueInfo = JSON.parse(localStorage.getItem(this.queueInfoName));
            if ((queueInfo && queueInfo.length > 0) ||
                (queueError && queueError.length > 0)) {
                this.isWaiting = true;
                var data = {
                    type: product,
                    info: queueInfo,
                    error: queueError,
                };
                if (navigator.sendBeacon) {
                    this.sendDataThroughUserAgent(url, data);
                }
                else {
                    this.sendDataThroughAjaxRequest(url, data, isAsync);
                }
            }
        };
        FallbackLogger.prototype.isEnabled = function () {
            return !this.environment.isPageGenerator();
        };
        FallbackLogger.prototype.sendDataThroughUserAgent = function (url, data) {
            var successfullyTransfer = navigator.sendBeacon(url, JSON.stringify(data));
            if (successfullyTransfer) {
                this.clearQueues();
            }
            else {
                this.appendTemp();
            }
        };
        FallbackLogger.prototype.sendDataThroughAjaxRequest = function (url, data, isAsync) {
            var _this = this;
            jQuery
                .ajax({
                url: url,
                data: JSON.stringify(data),
                type: 'POST',
                async: isAsync,
            })
                .done(function () { return _this.clearQueues(); })
                .fail(function () { return _this.appendTemp(); });
        };
        FallbackLogger.prototype.clearQueues = function () {
            localStorage.setItem(this.queueErrorName, JSON.stringify(queueErrorTemp));
            localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfoTemp));
            queueErrorTemp.length = 0;
            queueInfoTemp.length = 0;
            this.isWaiting = false;
        };
        FallbackLogger.prototype.appendTemp = function () {
            var queueErrorStr = localStorage.getItem(this.queueErrorName);
            var queueInfoStr = localStorage.getItem(this.queueInfoName);
            if (queueErrorTemp.length > 0) {
                var queueError = queueErrorStr == null ? [] : JSON.parse(queueErrorStr);
                localStorage.setItem(this.queueErrorName, JSON.stringify(queueError.concat(queueErrorTemp)));
            }
            if (queueInfoTemp.length > 0) {
                var queueInfo = queueInfoStr == null ? [] : JSON.parse(queueInfoStr);
                localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfo.concat(queueInfoTemp)));
            }
            this.isWaiting = false;
        };
        return FallbackLogger;
    }());
    exports.FallbackLogger = FallbackLogger;
});
/// <amd-module name="NetSuite.LogoList.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("NetSuite.LogoList.Instrumentation.Log", ["require", "exports", "NetSuite.LogoList.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign({}, defaultAttributes, attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return (!!navigator.userAgent.match(/Trident/g) ||
                !!navigator.userAgent.match(/MSIE/g));
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="NetSuite.LogoList.Instrumentation.Logger"/>
define("NetSuite.LogoList.Instrumentation.Logger", ["require", "exports", "NetSuite.LogoList.Instrumentation.Fallback.Logger", "NetSuite.LogoList.Instrumentation.MockAppender"], function (require, exports, Instrumentation_FallbackLogger_1, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger').LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] },
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return new Instrumentation_FallbackLogger_1.FallbackLogger(this.options);
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="NetSuite.LogoList.Instrumentation.MockAppender"/>
define("NetSuite.LogoList.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="NetSuite.LogoList.Instrumentation"/>
define("NetSuite.LogoList.Instrumentation", ["require", "exports", "underscore", "NetSuite.LogoList.Instrumentation.Logger", "NetSuite.LogoList.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="NetSuite.LogoList.LogoListCCT.Logo.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("NetSuite.LogoList.LogoListCCT.Logo.View", ["require", "exports", "Backbone", "netsuite_logolist_logo.tpl"], function (require, exports, Backbone_1, netsuite_logolist_logo_tpl) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogoView = /** @class */ (function (_super) {
        __extends(LogoView, _super);
        function LogoView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = netsuite_logolist_logo_tpl;
            _this.target = options.target;
            return _this;
        }
        LogoView.prototype.getContext = function () {
            return {
                image: this.model.get('image'),
                link: this.model.get('link'),
                hasLink: this.model.get('hasLink'),
                alt: this.model.get('alt'),
                title: this.model.get('alt'),
                target: this.target,
                label: this.model.get('label'),
                hasLabel: !!this.model.get('label'),
            };
        };
        return LogoView;
    }(Backbone_1.View));
    exports.LogoView = LogoView;
});
/// <amd-module name="NetSuite.LogoListCCT.Utils"/>
define("NetSuite.LogoListCCT.Utils", ["require", "exports", "NetSuite.LogoList.Common.Utils"], function (require, exports, Utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fieldNamePrefix = 'custrecord_cct_ns_llcct_';
    function getSetting(settings, fieldName, defaultValue) {
        if (!settings) {
            return null;
        }
        var value = defaultValue ? defaultValue : '';
        var setValue = Utils_1.Utils.trim(settings[this.fieldNamePrefix + fieldName]);
        return setValue || value;
    }
    exports.getSetting = getSetting;
    function getSettings(settings, params, prefix) {
        var settingsObject = {};
        var okPrefix = prefix || '';
        for (var i = 0; i < params.length; i++) {
            var param = params[i];
            var simpleParam = typeof param === 'string';
            var name_1 = simpleParam ? param : param.name;
            var fieldName = okPrefix +
                (simpleParam
                    ? param
                    : param.fieldName
                        ? param.fieldName
                        : param.name);
            var defaultValue = simpleParam || !param.default
                ? ''
                : param.default;
            settingsObject[name_1] = this.getSetting(settings, fieldName, defaultValue);
        }
        return settingsObject;
    }
    exports.getSettings = getSettings;
});
/// <amd-module name="NetSuite.LogoList.LogoListCCT.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("NetSuite.LogoList.LogoListCCT.View", ["require", "exports", "CustomContentType.Base.View", "Backbone.CollectionView", "Backbone", "jQuery", "NetSuite.LogoList.Common.Utils", "NetSuite.LogoList.LogoListCCT.Logo.View", "NetSuite.LogoList.Common.Instrumentation.Helper", "NetSuite.LogoListCCT.Utils", "netsuite_logolist_logolistcct.tpl", "jQuery.bxSlider@4.2.14"], function (require, exports, CustomContentTypeBaseView, BackboneCollectionView, Backbone, jQuery, Utils_1, LogoListCCT_Logo_View_1, Instrumentation_Helper_1, LogoListUtils, netsuite_logolist_logolistcct_tpl) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogoListCCTView = /** @class */ (function (_super) {
        __extends(LogoListCCTView, _super);
        function LogoListCCTView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = netsuite_logolist_logolistcct_tpl;
            _this.events = {
                'click [data-action="sc-logolist-linkclick"]': 'logLinkClick',
            };
            _this.MAX_LOGO_COUNT = 12;
            _this.WRAPPER_CLASS = 'logolistcct-wrapper';
            _this.GRID_MARGIN_WRAPPER_CLASS = 'logolistcct-grid-margin-wrapper';
            _this.CAROUSEL_CONTROLS_WRAPPER_CLASS = 'logolistcct-carousel-controls-wrapper';
            _this.CAROUSEL_CONTAINER_CLASS = 'logolistcct-carousel-container';
            _this.BXSLIDER_WRAPPER_CLASS = 'logolistcct-bx-wrapper';
            _this.RESIZE_RERENDER_THRESHOLD = 100;
            _this.TEXT_COLOR_CLASS = {
                1: '',
                2: 'logolistcct-text-color-dark',
                3: 'logolistcct-text-color-light',
            };
            _this.preventLinkClickLog = false;
            if (options) {
                _this.container = options.container;
            }
            return _this;
        }
        LogoListCCTView.prototype.install = function (settings, contextData) {
            var _this = this;
            _super.prototype.install.call(this, settings, contextData);
            this.parseSettings();
            this.windowWidth = $(window).width();
            this.on('afterViewRender', function () {
                _this.initSlider();
            });
            this.logInformation();
            return jQuery.Deferred().resolve();
        };
        LogoListCCTView.prototype.update = function (settings) {
            _super.prototype.update.call(this, settings);
            this.parseSettings();
            return jQuery.Deferred().resolve();
        };
        LogoListCCTView.prototype.validateContextDataRequest = function () {
            return true;
        };
        LogoListCCTView.prototype.parseSettings = function () {
            this.logoList = {
                header: LogoListUtils.getSetting(this.settings, 'header', ''),
                cntDesktop: +LogoListUtils.getSetting(this.settings, 'cnt_desktop', '6'),
                cntTablet: +LogoListUtils.getSetting(this.settings, 'cnt_tablet', '3'),
                cntPhone: +LogoListUtils.getSetting(this.settings, 'cnt_phone', '2'),
                style: +LogoListUtils.getSetting(this.settings, 'style', '1'),
                newTab: LogoListUtils.getSetting(this.settings, 'newtab', 'F'),
                textColor: LogoListUtils.getSetting(this.settings, 'textcolor', '1'),
                logos: [],
                isEmpty: null,
                isCarousel: null,
                isGrid: null,
            };
            for (var i = 1; i <= this.MAX_LOGO_COUNT; i++) {
                var logo = LogoListUtils.getSettings(this.settings, [{ name: 'image', fieldName: 'image_url' }, 'link', 'alt', 'label'], i + "_");
                if (logo.image) {
                    logo.hasLink = !!logo.link;
                    this.logoList.logos.push(logo);
                }
            }
            this.logoList.isEmpty =
                !this.logoList.header && this.logoList.logos.length == 0;
            this.logoList.isCarousel =
                this.logoList.style == 2 &&
                    !Utils_1.Utils.oldIE() &&
                    this.logoList.logos.length > 0;
            this.logoList.isGrid = !this.logoList.isCarousel;
        };
        LogoListCCTView.prototype.getLogoCountPerLine = function () {
            var cnt = this.logoList.cntDesktop;
            if (Utils_1.Utils.isTabletDevice()) {
                cnt = this.logoList.cntTablet;
            }
            else if (Utils_1.Utils.isPhoneDevice()) {
                cnt = this.logoList.cntPhone;
            }
            return cnt;
        };
        LogoListCCTView.prototype.initSlider = function () {
            var _this = this;
            if (this.logoList.isCarousel) {
                setTimeout(function () {
                    _this._createSlider();
                }, 10);
            }
        };
        LogoListCCTView.prototype._createSlider = function () {
            var _this = this;
            var logoCount = this.getLogoCountPerLine();
            var renderSlider = logoCount < this.logoList.logos.length;
            var showControls = !!(renderSlider && Utils_1.Utils.isDesktopDevice());
            var wrapper = this.$('.' + this.WRAPPER_CLASS);
            if (showControls) {
                wrapper.removeClass(this.GRID_MARGIN_WRAPPER_CLASS);
                if (!wrapper.hasClass(this.CAROUSEL_CONTROLS_WRAPPER_CLASS)) {
                    wrapper.addClass(this.CAROUSEL_CONTROLS_WRAPPER_CLASS);
                }
            }
            else {
                wrapper.removeClass(this.CAROUSEL_CONTROLS_WRAPPER_CLASS);
                if (logoCount <= this.logoList.logos.length &&
                    !wrapper.hasClass(this.GRID_MARGIN_WRAPPER_CLASS)) {
                    wrapper.addClass(this.GRID_MARGIN_WRAPPER_CLASS);
                }
            }
            if (renderSlider) {
                if (!this.currentSlide) {
                    this.currentSlide = 0;
                }
                var sliderSettings = {
                    moveSlides: 1,
                    maxSlides: logoCount,
                    minSlides: 1,
                    slideWidth: this.$('.' + this.CAROUSEL_CONTAINER_CLASS).width() / logoCount,
                    infiniteLoop: true,
                    slideMargin: 0,
                    hideControlOnEnd: true,
                    responsive: true,
                    pager: true,
                    nextText: '<a class="logolistcct-next-icon"></a>',
                    prevText: '<a class="logolistcct-prev-icon"></a>',
                    controls: showControls,
                    wrapperClass: this.BXSLIDER_WRAPPER_CLASS,
                    startSlide: this.currentSlide,
                    onSlideAfter: function () {
                        _this.currentSlide = _this.sliderContainer
                            ? _this.sliderContainer.getCurrentSlide()
                            : 0;
                    },
                    onSliderResize: function () {
                        _this.resizeSlider();
                    },
                };
                if (!this.$('.' + this.BXSLIDER_WRAPPER_CLASS).length) {
                    this.sliderContainer = this.$('.' + this.CAROUSEL_CONTAINER_CLASS).bxSliderNew(sliderSettings);
                }
            }
        };
        LogoListCCTView.prototype.resizeSlider = function () {
            var newWidth = $(window).width();
            if (Math.abs(newWidth - this.windowWidth) > this.RESIZE_RERENDER_THRESHOLD) {
                this.windowWidth = newWidth;
                var newType = Utils_1.Utils.getDeviceType(newWidth);
                var oldType = Utils_1.Utils.getDeviceType(this.windowWidth);
                if (this.logoList.isCarousel && newType == oldType) {
                    if (this.sliderContainer) {
                        this.sliderContainer.destroySlider();
                        this.sliderContainer = null;
                        this._createSlider();
                    }
                }
            }
        };
        Object.defineProperty(LogoListCCTView.prototype, "childViews", {
            get: function () {
                var _this = this;
                return {
                    'NetSuite.LogoList.LogoListCCT.Logo.View': function () {
                        return new BackboneCollectionView({
                            childView: LogoListCCT_Logo_View_1.LogoView,
                            collection: new Backbone.Collection(_this.logoList.logos),
                            childViewOptions: {
                                target: _this.logoList.newTab == 'T' ? '_blank' : '_self',
                            },
                        });
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        LogoListCCTView.prototype.getContext = function () {
            return {
                hasHeader: !!this.logoList.header,
                header: this.logoList.header,
                cntDesktop: this.logoList.cntDesktop,
                cntTablet: this.logoList.cntTablet,
                cntPhone: this.logoList.cntPhone,
                isEmpty: this.logoList.isEmpty,
                type: this.logoList.isGrid ? 'grid' : 'carousel',
                wrapperClass: this.logoList.isGrid ? this.GRID_MARGIN_WRAPPER_CLASS : '',
                textColorClass: this.TEXT_COLOR_CLASS[+this.logoList.textColor],
            };
        };
        LogoListCCTView.prototype.logLinkClick = function (event) {
            var _this = this;
            // Prevents double logs apparently caused by bxSlider
            if (this.preventLinkClickLog) {
                return;
            }
            this.preventLinkClickLog = true;
            setTimeout(function () {
                _this.preventLinkClickLog = false;
            }, 100);
            Instrumentation_Helper_1.InstrumentationHelper.log('Link clicked');
        };
        LogoListCCTView.prototype.logInformation = function () {
            this.logLayout();
            this.logQuantityOfLogos();
        };
        LogoListCCTView.prototype.logLayout = function () {
            var layout;
            if (this.logoList.isCarousel) {
                layout = 'Carousel';
            }
            else {
                layout = 'Grid';
            }
            Instrumentation_Helper_1.InstrumentationHelper.log('Layout', layout);
        };
        LogoListCCTView.prototype.logQuantityOfLogos = function () {
            Instrumentation_Helper_1.InstrumentationHelper.log('Quantity of logos', "" + this.logoList.logos.length);
        };
        return LogoListCCTView;
    }(CustomContentTypeBaseView));
    exports.LogoListCCTView = LogoListCCTView;
});
/// <amd-module name="NetSuite.LogoList.LogoListCCT"/>
define("NetSuite.LogoList.LogoListCCT", ["require", "exports", "NetSuite.LogoList.LogoListCCT.View"], function (require, exports, LogoListCCT_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            this.registerCCT(container);
        },
        registerCCT: function (container) {
            container.getComponent('CMS').registerCustomContentType({
                id: 'cct_netsuite_logolist',
                view: LogoListCCT_View_1.LogoListCCTView,
                options: {
                    container: container,
                },
            });
        },
    };
});
/// <amd-module name="NetSuite.LogoList.LogoListModule"/>
define("NetSuite.LogoList.LogoListModule", ["require", "exports", "NetSuite.LogoList.LogoListCCT", "NetSuite.LogoList.Common.Instrumentation.Helper"], function (require, exports, LogoListCCT, Instrumentation_Helper_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            Instrumentation_Helper_1.InstrumentationHelper.initializeInstrumentation(container);
            LogoListCCT.mountToApp(container);
        },
    };
});
};
extensions['SuiteCommerce.MapContactInfo.1.1.5'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/MapContactInfo/1.1.5/' + asset;
};
/// <amd-module name="SuiteCommerce.MapAndContactUs.Common.DependencyProvider"/>
define("SuiteCommerce.MapAndContactUs.Common.DependencyProvider", ["require", "exports", "underscore", "Utils"], function (require, exports, _, UtilsModuleSC) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UtilsModule = getDependency(UtilsModuleSC);
    function getDependency(module) {
        if (isTranspiledModule(module)) {
            return module[Object.keys(module)[0]];
        }
        return module;
    }
    function isTranspiledModule(module) {
        var moduleKeys = Object.keys(module);
        return !_.isFunction(module) && moduleKeys.length === 1;
    }
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Common.Instrumentation.Helper"/>
define("SuiteCommerce.MapAndContactUs.Common.Instrumentation.Helper", ["require", "exports", "SuiteCommerce.MapAndContactUs.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentArea = 'SC Map and Contact';
    var ExtensionVersion = '1.1.5';
    var QueueNameSuffix = '-MapAndContact';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (container) {
            Instrumentation_1.default.initialize({
                environment: container.getComponent('Environment'),
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                },
            });
        };
        InstrumentationHelper.log = function (parameters) {
            var log = Instrumentation_1.default.getLog(parameters.activity.replace(' ', ''));
            log.setParameters(parameters);
            log.submit();
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Utils"/>
define("SuiteCommerce.MapAndContactUs.Utils", ["require", "exports", "SuiteCommerce.MapAndContactUs.Common.DependencyProvider"], function (require, exports, DependencyProvider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.getAbsoluteUrl = function (file, isServices2) {
            return DependencyProvider_1.UtilsModule.getAbsoluteUrl(file, isServices2);
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
/// <amd-module name="SuiteCommerce.ContactUsForm.CCTSettingsHelper"/>
define("SuiteCommerce.ContactUsForm.CCTSettingsHelper", ["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var additionalFieldsLength = 5;
    var buttonStyles = {
        1: 'primary',
        2: 'secondary',
        3: 'tertiary'
    };
    // Field types mapping for "customlist_sc_cct_cuf_add_field_types" record instances
    var fieldTypesMapping = {
        1: {
            fieldType: "none" /* NONE */,
            validationPattern: false
        },
        2: {
            fieldType: "text" /* TEXT */,
            validationPattern: false
        },
        3: {
            fieldType: "number" /* NUMBER */,
            validationPattern: "number" /* NUMBER */
        },
        4: {
            fieldType: "email" /* EMAIL */,
            validationPattern: "email" /* EMAIL */
        },
        5: {
            fieldType: "url" /* URL */,
            validationPattern: "url" /* URL */
        },
        6: {
            fieldType: "textarea" /* TEXTAREA */,
            validationPattern: false
        },
        7: {
            fieldType: "date" /* DATE */,
            validationPattern: false
        },
        8: {
            fieldType: "checkbox" /* CHECKBOX */,
            validationPattern: false
        }
    };
    function getCCTSettingsMapping(cctSettings) {
        var cctSettingsMapping = {
            formInformation: cctSettings.custrecord_sc_cct_cuf_form_information,
            requiredFieldMessage: cctSettings.custrecord_sc_cct_cuf_required_field_msg,
            feedbackMessages: {
                success: cctSettings.custrecord_sc_cct_cuf_success_msg,
                error: cctSettings.custrecord_sc_cct_cuf_submit_error_msg
            },
            submitButtonStyling: {
                label: cctSettings.custrecord_sc_cct_cuf_button_text,
                helpText: cctSettings.custrecord_sc_cct_cuf_button_help_text,
                style: buttonStyles[cctSettings.custrecord_sc_cct_cuf_button_style]
            },
            hideBackgroundColor: cctSettings.custrecord_sc_cct_cuf_hide_bg_color === 'T',
            mandatoryFieldReference: cctSettings.custrecord_sc_cct_cuf_mtry_field_ref,
            inputFields: [
                {
                    label: cctSettings.custrecord_sc_cct_cuf_name_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_name_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_name_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_name_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_name_field === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_name_field === 'T',
                    fieldId: 'firstname',
                    fieldType: "text" /* TEXT */
                },
                {
                    label: cctSettings.custrecord_sc_cct_cuf_lastname_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_lastname_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_lastname_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_lastname_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_lastname === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_lastname === 'T',
                    fieldId: 'lastname',
                    fieldType: "text" /* TEXT */
                },
                {
                    label: cctSettings.custrecord_sc_cct_cuf_email_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_email_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_email_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_email_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_email === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_email_field === 'T',
                    fieldId: 'email',
                    fieldType: "email" /* EMAIL */,
                    fieldValidationPattern: "email" /* EMAIL */,
                    invalidEmailMessage: cctSettings.custrecord_sc_cct_cuf_invalid_email_msg
                },
                {
                    label: cctSettings.custrecord_sc_cct_cuf_phone_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_phone_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_phone_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_phone_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_phone_field === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_phone_field === 'T',
                    fieldId: 'phone',
                    fieldType: "text" /* TEXT */,
                    fieldValidationPattern: "number" /* NUMBER */
                },
                {
                    label: cctSettings.custrecord_sc_cct_cuf_company_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_company_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_company_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_company_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_company_field === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_company_field === 'T',
                    fieldId: 'company',
                    fieldType: "text" /* TEXT */
                },
                {
                    label: cctSettings.custrecord_sc_cct_cuf_subject_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_subject_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_subject_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_subject_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_subject_field === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_subject_field === 'T',
                    fieldId: 'subject',
                    fieldType: "text" /* TEXT */
                },
                {
                    label: cctSettings.custrecord_sc_cct_cuf_message_label,
                    placeholder: cctSettings.custrecord_sc_cct_cuf_message_placeh,
                    hasHelpText: cctSettings.custrecord_sc_cct_cuf_message_help_text !== '',
                    helpText: cctSettings.custrecord_sc_cct_cuf_message_help_text,
                    isMandatory: cctSettings.custrecord_sc_cct_cuf_mtry_message_field === 'T',
                    hideField: cctSettings.custrecord_sc_cct_cuf_hide_message_field === 'T',
                    fieldId: 'message',
                    fieldType: "textarea" /* TEXTAREA */
                }
            ]
        };
        // Set additional fields for CCT instance
        _.bind(setCCTSettingMappingForAdditionalFields, cctSettingsMapping, cctSettings)();
        // Sort input fields
        _.bind(sortInputFields, cctSettingsMapping, cctSettings)();
        // Ignore hidden input fields
        cctSettingsMapping.inputFields = _.filter(cctSettingsMapping.inputFields, function filterHiddenInputFields(inputField) {
            return !inputField.hideField;
        });
        return cctSettingsMapping;
    }
    exports.getCCTSettingsMapping = getCCTSettingsMapping;
    function setCCTSettingMappingForAdditionalFields(cctSettings) {
        for (var i = 1; i <= additionalFieldsLength; i++) {
            var internalID = cctSettings['custrecord_sc_cct_cuf_add_f_id_' + i];
            var fieldTypeId = +cctSettings['custrecord_sc_cct_cuf_add_f_type_' + i];
            var fieldType = fieldTypesMapping[fieldTypeId].fieldType;
            var fieldValidationPattern = fieldTypesMapping[fieldTypeId].validationPattern;
            var additionalField = {
                internalId: internalID,
                label: cctSettings['custrecord_sc_cct_cuf_add_f_label_' + i],
                placeholder: cctSettings['custrecord_sc_cct_cuf_add_f_placeh_' + i],
                hasHelpText: cctSettings['custrecord_sc_cct_cuf_add_f_help_text_' + i] !== '',
                helpText: cctSettings['custrecord_sc_cct_cuf_add_f_help_text_' + i],
                isMandatory: cctSettings['custrecord_sc_cct_cuf_mtry_add_field_' + i] === 'T',
                hideField: cctSettings['custrecord_sc_cct_cuf_hide_add_field_' + i] === 'T',
                fieldId: internalID,
                fieldType: fieldType,
                fieldValidationPattern: fieldValidationPattern,
            };
            if (additionalField.fieldType === "email" /* EMAIL */) {
                additionalField.invalidEmailMessage = cctSettings.custrecord_sc_cct_cuf_invalid_email_msg;
            }
            this.inputFields.push(additionalField);
        }
    }
    function sortInputFields(cctSettings) {
        var _this = this;
        var inputFieldsSorting = getInputFieldsSorting(cctSettings);
        var inputFields = _.clone(this.inputFields);
        _.each(inputFieldsSorting, function (fieldPosition, index) {
            if (fieldPosition) {
                var inputFieldToRelocate = inputFields[+fieldPosition];
                var inputFieldToRelocateId_1 = inputFieldToRelocate.fieldId;
                var inputFieldToRelocateLabel_1 = inputFieldToRelocate.label;
                var inputFieldCurrentIndex = _.findIndex(_this.inputFields, function (inputField) {
                    if (inputField.fieldId) {
                        return inputFieldToRelocateId_1 === inputField.fieldId;
                    }
                    if (inputField.label) {
                        return inputFieldToRelocateLabel_1 === inputField.label;
                    }
                    return false;
                });
                _this.inputFields.splice(inputFieldCurrentIndex, 1);
                _this.inputFields.splice(index, 0, inputFieldToRelocate);
            }
        });
    }
    function getInputFieldsSorting(cctSettings) {
        var inputFieldsSorting = [];
        var inputFieldsPositionKeys = [
            'custrecord_sc_cct_cuf_field_position_1',
            'custrecord_sc_cct_cuf_field_position_2',
            'custrecord_sc_cct_cuf_field_position_3',
            'custrecord_sc_cct_cuf_field_position_4',
            'custrecord_sc_cct_cuf_field_position_5',
            'custrecord_sc_cct_cuf_field_position_6',
            'custrecord_sc_cct_cuf_field_position_7',
            'custrecord_sc_cct_cuf_field_position_8',
            'custrecord_sc_cct_cuf_field_position_9',
            'custrecord_sc_cct_cuf_field_position_10',
            'custrecord_sc_cct_cuf_field_position_11',
            'custrecord_sc_cct_cuf_field_position_12'
        ];
        _.each(inputFieldsPositionKeys, function (key) {
            var inputFieldPosition = cctSettings[key];
            if (inputFieldPosition === '1') {
                inputFieldPosition = false;
            }
            else {
                inputFieldPosition = parseInt(cctSettings[key], 10) - 2;
            }
            inputFieldsSorting.push(inputFieldPosition);
        });
        return inputFieldsSorting;
    }
});
/// <amd-module name="SuiteCommerce.ContactUsForm.InputField.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.ContactUsForm.InputField.Collection", ["require", "exports", "SuiteCommerce.ContactUsForm.InputField.Model", "Backbone"], function (require, exports, ContactUsForm_InputField_Model_1, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputFieldCollection = /** @class */ (function (_super) {
        __extends(InputFieldCollection, _super);
        function InputFieldCollection() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.model = ContactUsForm_InputField_Model_1.InputFieldModel;
            return _this;
        }
        return InputFieldCollection;
    }(Backbone_1.Collection));
    exports.InputFieldCollection = InputFieldCollection;
});
/// <amd-module name="SuiteCommerce.ContactUsForm.InputField.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.ContactUsForm.InputField.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputFieldModel = /** @class */ (function (_super) {
        __extends(InputFieldModel, _super);
        function InputFieldModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(InputFieldModel.prototype, "isMandatory", {
            get: function () {
                return this.get('isMandatory');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "isTextArea", {
            get: function () {
                return this.get('fieldType') === "textarea" /* TEXTAREA */;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "isCheckbox", {
            get: function () {
                return this.get('fieldType') === "checkbox" /* CHECKBOX */;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "isDate", {
            get: function () {
                return this.get('fieldType') === "date" /* DATE */;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "isSubtitle", {
            get: function () {
                return this.get('fieldType') === "none" /* NONE */;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "label", {
            get: function () {
                return this.get('label');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "placeholder", {
            get: function () {
                return this.get('placeholder');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "hasHelpText", {
            get: function () {
                return !!this.get('hasHelpText');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "helpText", {
            get: function () {
                return this.get('helpText');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFieldModel.prototype, "fieldId", {
            get: function () {
                return this.get('fieldId');
            },
            enumerable: true,
            configurable: true
        });
        return InputFieldModel;
    }(Backbone_1.Model));
    exports.InputFieldModel = InputFieldModel;
});
/// <amd-module name="SuiteCommerce.ContactUsForm.InputField.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.ContactUsForm.InputField.View", ["require", "exports", "Backbone", "contact_us_form_input_field.tpl"], function (require, exports, Backbone_1, template) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var InputFieldView = /** @class */ (function (_super) {
        __extends(InputFieldView, _super);
        function InputFieldView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = template;
            _this.cmsContentId = options.cmsContentId;
            return _this;
        }
        InputFieldView.prototype.getContext = function () {
            var model = this.model;
            return {
                label: model.label,
                placeholder: model.placeholder,
                hasHelpText: model.hasHelpText,
                helpText: model.helpText,
                fieldId: model.fieldId,
                isTextArea: model.isTextArea,
                isCheckbox: model.isCheckbox,
                isDate: model.isDate,
                isMandatory: model.isMandatory,
                isSubtitle: model.isSubtitle,
                cmsContentId: this.cmsContentId,
            };
        };
        return InputFieldView;
    }(Backbone_1.View));
    exports.InputFieldView = InputFieldView;
});
/// <amd-module name="SuiteCommerce.ContactUsForm.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.ContactUsForm.Model", ["require", "exports", "Backbone", "SuiteCommerce.MapAndContactUs.Utils", "underscore"], function (require, exports, Backbone_1, Utils_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUsFormModel = /** @class */ (function (_super) {
        __extends(ContactUsFormModel, _super);
        function ContactUsFormModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.urlRoot = Utils_1.Utils.getAbsoluteUrl(getExtensionAssetsPath('services/ContactUsForm.Service.ss'));
            _this.validation = {};
            return _this;
        }
        ContactUsFormModel.prototype.setFieldsValidation = function (inputFields, requiredFieldMessage) {
            var _this = this;
            // Fields that are not hidden have to be validated
            _.each(inputFields, function (fieldSettings) {
                if (!fieldSettings.hideField && fieldSettings.fieldId) {
                    // create validation object for current field
                    _this.setFieldValidation(fieldSettings, requiredFieldMessage);
                }
            });
        };
        ContactUsFormModel.prototype.setFieldValidation = function (fieldSettings, requiredFieldMessage) {
            var fieldValidation = [{
                    required: fieldSettings.isMandatory,
                    msg: requiredFieldMessage.replace('[[field]]', fieldSettings.label),
                }];
            if (fieldSettings.fieldValidationPattern) {
                var fieldValidationPattern = {
                    pattern: fieldSettings.fieldValidationPattern
                };
                if (fieldSettings.invalidEmailMessage) {
                    fieldValidationPattern.msg = fieldSettings.invalidEmailMessage;
                }
                fieldValidation.push(fieldValidationPattern);
            }
            this.validation[fieldSettings.fieldId] = fieldValidation;
        };
        return ContactUsFormModel;
    }(Backbone_1.Model));
    exports.ContactUsFormModel = ContactUsFormModel;
});
/// <amd-module name="SuiteCommerce.ContactUsForm.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.ContactUsForm.View", ["require", "exports", "CustomContentType.Base.View", "Backbone.FormView", "Backbone.CollectionView", "SuiteCommerce.ContactUsForm.InputField.Collection", "SuiteCommerce.ContactUsForm.CCTSettingsHelper", "SuiteCommerce.ContactUsForm.InputField.View", "underscore", "contact_us_form.tpl", "SuiteCommerce.ContactUsForm.InputField.Model", "SuiteCommerce.MapAndContactUs.Common.Instrumentation.Helper", "SuiteCommerce.MapAndContactUs.Instrumentation", "SuiteCommerce.MapAndContactUs.ExtMessage.View", "SuiteCommerce.MapAndContactUs.ExtMessage.Model"], function (require, exports, CustomContentTypeBaseView, BackboneFormView, BackboneCollectionView, ContactUsForm_InputField_Collection_1, ContactUsForm_CCTSettingsHelper_1, ContactUsForm_InputField_View_1, _, template, ContactUsForm_InputField_Model_1, Instrumentation_Helper_1, Instrumentation_1, ExtMessage_View_1, ExtMessage_Model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUsFormView = /** @class */ (function (_super) {
        __extends(ContactUsFormView, _super);
        function ContactUsFormView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = template;
            _this.bindings = {};
            _this.events = {
                'submit form': 'submitForm',
            };
            _this.cctSettingsMapping;
            BackboneFormView.add(_this);
            return _this;
        }
        ContactUsFormView.prototype.install = function (options, contextData) {
            _super.prototype.install.call(this, options, contextData);
            this.log(options);
            return jQuery.Deferred().resolve();
        };
        ContactUsFormView.prototype.log = function (options) {
            Instrumentation_Helper_1.InstrumentationHelper.log({
                activity: 'Contact Us Form loaded',
            });
            this.logAdditionalFields(options);
        };
        ContactUsFormView.prototype.logAdditionalFields = function (options) {
            var count = 0;
            for (var i = 1; i <= 5; i++) {
                if (options["custrecord_sc_cct_cuf_add_f_id_" + i] &&
                    options["custrecord_sc_cct_cuf_hide_add_field_" + i] === 'F') {
                    count++;
                }
            }
            Instrumentation_Helper_1.InstrumentationHelper.log({
                activity: 'Additional Fields',
                instanceCount: count,
            });
        };
        Object.defineProperty(ContactUsFormView.prototype, "childViews", {
            get: function () {
                var _this = this;
                return {
                    'InputFields.Collection': function () {
                        var inputFieldsCollectionView;
                        if (_this.cctSettingsMapping) {
                            var inputFieldModels_1 = [];
                            _.each(_this.cctSettingsMapping.inputFields, function (inputField) {
                                inputFieldModels_1.push(new ContactUsForm_InputField_Model_1.InputFieldModel(inputField));
                            });
                            inputFieldsCollectionView = new BackboneCollectionView({
                                childView: ContactUsForm_InputField_View_1.InputFieldView,
                                collection: new ContactUsForm_InputField_Collection_1.InputFieldCollection(inputFieldModels_1),
                                childViewOptions: {
                                    cmsContentId: _this.model.get('cmsContentId'),
                                },
                            });
                            // After input fields rendering, input field's bindings between View and Template have to be defined
                            _this.setFieldsBindings(_this.cctSettingsMapping.inputFields);
                            // Following the previous line, model's validation object also has to be defined
                            _this.model.setFieldsValidation(_this.cctSettingsMapping.inputFields, _this.cctSettingsMapping.requiredFieldMessage);
                            return inputFieldsCollectionView;
                        }
                        return;
                    },
                    'Feedback.Messages': function () {
                        if (_this.feedbackMessage) {
                            return new ExtMessage_View_1.ExtMessageView({
                                model: new ExtMessage_Model_1.ExtMessageModel({
                                    message: _this.feedbackMessage.message,
                                    type: _this.feedbackMessage.type,
                                    closable: false
                                })
                            });
                        }
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        ContactUsFormView.prototype.setFieldsBindings = function (inputFields) {
            var _this = this;
            // Set input's fields bindings between template and view
            _.each(inputFields, function (fieldSettings) {
                if (fieldSettings.fieldId) {
                    // !fieldSettings.hideField && fieldSettings.fieldId
                    var fieldSelector = ".contact-us-form form [name=\"" + fieldSettings.fieldId + "\"]";
                    // Set bindings's object for input field
                    _this.bindings[fieldSelector] = fieldSettings.fieldId;
                }
            });
            // Re-bind fields between View and Model
            BackboneFormView.formatBindings(this);
        };
        ContactUsFormView.prototype.submitForm = function (event) {
            var _this = this;
            event.preventDefault();
            var promise = this.saveForm(event);
            var log = Instrumentation_1.default.getLog('SubmittedForm');
            log.startTimer();
            if (promise) {
                promise
                    .fail(function () {
                    _this.logSubmission(log, 'Error');
                    _this.feedbackMessage = {
                        message: _this.cctSettingsMapping.feedbackMessages.error,
                        type: 'error',
                    };
                    _this.render();
                })
                    .done(function () {
                    _this.logSubmission(log, 'Success');
                    _this.clearFiledsValues();
                    _this.feedbackMessage = {
                        message: _this.cctSettingsMapping.feedbackMessages.success,
                        type: 'success',
                    };
                    _this.render();
                });
            }
        };
        ContactUsFormView.prototype.logSubmission = function (log, result) {
            log.endTimer();
            log.setParameters({
                activity: 'Contact Form submitted',
                subType: result,
                totalTime: log.getElapsedTimeForTimer(),
            });
            log.submit();
        };
        ContactUsFormView.prototype.clearFiledsValues = function () {
            var _this = this;
            _.each(this.validationModel.keys(), function (attributeName) {
                if (attributeName !== 'cmsContentId' &&
                    attributeName !== 'defaultSubsidiary' &&
                    attributeName !== 'domain') {
                    _this.validationModel.unset(attributeName);
                }
            });
        };
        ContactUsFormView.prototype.getContext = function () {
            if (_.isEmpty(this.settings)) {
                return;
            }
            var cmsContentId = this.instanceId.split('-')[1];
            // CCT's setting can be accessed in getContext method.
            // For that reason, cctSettingMapping variable is set at this point.
            this.cctSettingsMapping = ContactUsForm_CCTSettingsHelper_1.getCCTSettingsMapping(this.settings);
            // CMS Content ID also can be accessed in this method
            this.model.set('cmsContentId', cmsContentId);
            var hasMandatoryFields = _.find(this.cctSettingsMapping.inputFields, function (field) { return field.isMandatory; });
            return {
                formInformation: this.cctSettingsMapping.formInformation,
                submitButtonStyling: this.cctSettingsMapping.submitButtonStyling,
                hideFormBackgroundColor: this.cctSettingsMapping.hideBackgroundColor,
                mandatoryFieldReference: this.cctSettingsMapping.mandatoryFieldReference,
                hasMandatoryFields: !!hasMandatoryFields,
            };
        };
        return ContactUsFormView;
    }(CustomContentTypeBaseView));
    exports.ContactUsFormView = ContactUsFormView;
});
/// <amd-module name="SuiteCommerce.ContactUsFormCCT"/>
define("SuiteCommerce.ContactUsFormCCT", ["require", "exports", "SuiteCommerce.ContactUsForm.Model", "SuiteCommerce.ContactUsForm.View", "underscore"], function (require, exports, ContactUsForm_Model_1, ContactUsForm_View_1, _) {
    "use strict";
    return {
        mountToApp: function (container) {
            var environment = container.getComponent('Environment');
            var model = new ContactUsForm_Model_1.ContactUsFormModel();
            model.set('defaultSubsidiary', this.getDefaultSubsidiary(environment));
            model.set('domain', this.getSCDomain(environment));
            container.getComponent('CMS').registerCustomContentType({
                id: 'cct_sc_contactusform',
                view: ContactUsForm_View_1.ContactUsFormView,
                options: {
                    container: container,
                    model: model,
                },
            });
        },
        getDefaultSubsidiary: function (environment) {
            var subsidiaries = environment.getSiteSetting().subsidiaries;
            var defaultSubsidiary = _.find(subsidiaries, function (subsidiary) {
                return subsidiary.isdefault === 'T';
            });
            return defaultSubsidiary.internalid;
        },
        getSCDomain: function (environment) {
            var homeUrl = environment.getConfig().siteSettings.touchpoints.home;
            var match = homeUrl.match(/:\/\/((?:www[0-9]?\.)?.[^/:]+)/i);
            if (match !== null && match.length === 2 && typeof match[1] === 'string' && match[1].length > 0) {
                return match[1];
            }
            return null;
        },
    };
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.ExtMessage.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.MapAndContactUs.ExtMessage.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtMessageModel = /** @class */ (function (_super) {
        __extends(ExtMessageModel, _super);
        function ExtMessageModel(options) {
            return _super.call(this, options) || this;
        }
        Object.defineProperty(ExtMessageModel.prototype, "message", {
            get: function () {
                return this.get('message');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExtMessageModel.prototype, "type", {
            get: function () {
                return this.get('type');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExtMessageModel.prototype, "closable", {
            get: function () {
                return this.get('closable');
            },
            enumerable: true,
            configurable: true
        });
        return ExtMessageModel;
    }(Backbone_1.Model));
    exports.ExtMessageModel = ExtMessageModel;
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.ExtMessage.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.MapAndContactUs.ExtMessage.View", ["require", "exports", "Backbone", "sc_ext_message.tpl"], function (require, exports, Backbone_1, MessageViewTemplate) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtMessageView = /** @class */ (function (_super) {
        __extends(ExtMessageView, _super);
        function ExtMessageView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = MessageViewTemplate;
            _this.events = {
                'click [data-action="ext-message-close-message"]': 'closeMessage',
            };
            return _this;
        }
        ;
        ExtMessageView.prototype.closeMessage = function () {
            this.remove();
        };
        ;
        ExtMessageView.prototype.getContext = function () {
            return {
                showMessage: this.model.message.length > 0,
                message: this.model.message,
                isClosable: this.model.closable,
                type: this.model.type ? this.model.type : '',
            };
        };
        return ExtMessageView;
    }(Backbone_1.View));
    exports.ExtMessageView = ExtMessageView;
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.MapAndContactUs.Instrumentation.Log", ["require", "exports", "SuiteCommerce.MapAndContactUs.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Instrumentation.Logger"/>
define("SuiteCommerce.MapAndContactUs.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.MapAndContactUs.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] }
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { }
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Instrumentation.MockAppender"/>
define("SuiteCommerce.MapAndContactUs.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.prototype.ready = function () {
            return true;
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        MockAppender.prototype.start = function (action, options) {
            return options;
        };
        MockAppender.prototype.end = function (startOptions, options) { };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Instrumentation"/>
define("SuiteCommerce.MapAndContactUs.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.MapAndContactUs.Instrumentation.Logger", "SuiteCommerce.MapAndContactUs.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.MapAndContactInfoCCT.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.MapAndContactInfoCCT.View", ["require", "exports", "CustomContentType.Base.View", "jQuery", "map_and_contact_info.tpl", "SuiteCommerce.MapAndContactUs.Common.Instrumentation.Helper"], function (require, exports, CustomContentTypeBaseView, jQuery, template, Instrumentation_Helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapAndContactInfoCCTView = /** @class */ (function (_super) {
        __extends(MapAndContactInfoCCTView, _super);
        function MapAndContactInfoCCTView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = template;
            _this.contextDataRequest = ['item'];
            if (options) {
                _this.container = options.container;
            }
            return _this;
        }
        MapAndContactInfoCCTView.prototype.install = function (options, contextData) {
            _super.prototype.install.call(this, options, contextData);
            Instrumentation_Helper_1.InstrumentationHelper.log({
                activity: 'Map and Contact loaded',
            });
            return jQuery.Deferred().resolve();
        };
        MapAndContactInfoCCTView.prototype.validateContextDataRequest = function () {
            return true;
        };
        MapAndContactInfoCCTView.prototype.getContext = function () {
            var hasHeader = !!this.settings.custrecord_cct_ns_mcicct_header;
            var hasContact = !!this.settings.custrecord_cct_ns_mcicct_busaddrinfo;
            var hasPhone = !!this.settings.custrecord_cct_ns_mcicct_phonenumber;
            var hasEmail = !!this.settings.custrecord_cct_ns_mcicct_primaryemail;
            return {
                mapPositionLeft: this.settings.custrecord_cct_ns_mcicct_mappos === '1',
                header: this.settings.custrecord_cct_ns_mcicct_header,
                hasHeader: hasHeader,
                mapUrl: this.settings.custrecord_cct_ns_mcicct_mapurl,
                hasMapUrl: !!this.settings.custrecord_cct_ns_mcicct_mapurl,
                singleColumnWidthClass: this.settings.custrecord_cct_ns_mcicct_mapurl
                    ? 'width-single-column'
                    : '',
                singleColumnCenterAlignmentClass: this.settings.custrecord_cct_ns_mcicct_mapurl
                    ? ''
                    : 'center-alignment-unique-column',
                contact: this.settings.custrecord_cct_ns_mcicct_busaddrinfo,
                hasContact: hasContact,
                phone: this.settings.custrecord_cct_ns_mcicct_phonenumber,
                hasPhone: hasPhone,
                phoneButtonText: this.settings.custrecord_cct_ns_mcicct_phonebtntext,
                email: this.settings.custrecord_cct_ns_mcicct_primaryemail,
                emailButtonText: this.settings.custrecord_cct_ns_mcicct_emailbtntext,
                hasEmail: hasEmail,
                hasAnyContact: hasContact || hasPhone || hasEmail,
                backgroundClass: this.settings.custrecord_cct_ns_mcicct_hidebackground === 'F' ? 'background-color' : '',
                hideIconsClass: this.settings.custrecord_cct_ns_mcicct_hideicons === 'T' ? 'hide-contact-icons' : '',
                mapAloneClass: !hasContact && !hasPhone && !hasEmail ? 'map-alone-class' : '',
            };
        };
        return MapAndContactInfoCCTView;
    }(CustomContentTypeBaseView));
    exports.MapAndContactInfoCCTView = MapAndContactInfoCCTView;
});
/// <amd-module name="SuiteCommerce.MapAndContactInfoCCT"/>
define("SuiteCommerce.MapAndContactInfoCCT", ["require", "exports", "SuiteCommerce.MapAndContactInfoCCT.View"], function (require, exports, MapAndContactInfoCCT_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            this.registerCCT(container);
        },
        registerCCT: function (container) {
            container.getComponent('CMS').registerCustomContentType({
                id: 'cct_netsuite_mapcontactcct',
                view: MapAndContactInfoCCT_View_1.MapAndContactInfoCCTView,
                options: {
                    container: container,
                },
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.MapAndContactUs.Main"/>
define("SuiteCommerce.MapAndContactUs.Main", ["require", "exports", "SuiteCommerce.MapAndContactInfoCCT", "SuiteCommerce.ContactUsFormCCT", "SuiteCommerce.MapAndContactUs.Common.Instrumentation.Helper"], function (require, exports, MapAndContactInfoCCT, ContactUsFormCCT, Instrumentation_Helper_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            Instrumentation_Helper_1.InstrumentationHelper.initializeInstrumentation(container);
            MapAndContactInfoCCT.mountToApp(container);
            ContactUsFormCCT.mountToApp(container);
        },
    };
});
};
extensions['SuiteCommerce.NewsletterSignUp.1.1.2'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SuiteCommerce/NewsletterSignUp/1.1.2/' + asset;
};
/// <amd-module name="SuiteCommerce.Newsletter.Instrumentation.Helper"/>
define("SuiteCommerce.Newsletter.Instrumentation.Helper", ["require", "exports", "SuiteCommerce.Newsletter.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentArea = 'SC Newsletter Sign Up';
    var ExtensionVersion = '1.1.2';
    var QueueNameSuffix = '-Newsletter';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (container) {
            Instrumentation_1.default.initialize({
                environment: container.getComponent('Environment'),
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                }
            });
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.Newsletter.ExtMessage.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Newsletter.ExtMessage.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtMessageModel = /** @class */ (function (_super) {
        __extends(ExtMessageModel, _super);
        function ExtMessageModel(options) {
            return _super.call(this, options) || this;
        }
        Object.defineProperty(ExtMessageModel.prototype, "message", {
            get: function () {
                return this.get('message');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExtMessageModel.prototype, "type", {
            get: function () {
                return this.get('type');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExtMessageModel.prototype, "closable", {
            get: function () {
                return this.get('closable');
            },
            enumerable: true,
            configurable: true
        });
        return ExtMessageModel;
    }(Backbone_1.Model));
    exports.ExtMessageModel = ExtMessageModel;
});
/// <amd-module name="SuiteCommerce.Newsletter.ExtMessage.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Newsletter.ExtMessage.View", ["require", "exports", "Backbone", "sc_ext_message.tpl"], function (require, exports, Backbone_1, MessageViewTemplate) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ExtMessageView = /** @class */ (function (_super) {
        __extends(ExtMessageView, _super);
        function ExtMessageView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = MessageViewTemplate;
            _this.events = {
                'click [data-action="ext-message-close-message"]': 'closeMessage',
            };
            return _this;
        }
        ;
        ExtMessageView.prototype.closeMessage = function () {
            this.remove();
        };
        ;
        ExtMessageView.prototype.getContext = function () {
            return {
                showMessage: this.model.message.length > 0,
                message: this.model.message,
                isClosable: this.model.closable,
                type: this.model.type ? this.model.type : '',
            };
        };
        return ExtMessageView;
    }(Backbone_1.View));
    exports.ExtMessageView = ExtMessageView;
});
/// <amd-module name="SuiteCommerce.Newsletter.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.Newsletter.Instrumentation.Log", ["require", "exports", "SuiteCommerce.Newsletter.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign(__assign({}, defaultAttributes), attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.Newsletter.Instrumentation.Logger"/>
define("SuiteCommerce.Newsletter.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.Newsletter.Instrumentation.MockAppender"], function (require, exports, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] }
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return {
                    info: function (obj) { },
                    error: function (obj) { }
                };
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.Newsletter.Instrumentation.MockAppender"/>
define("SuiteCommerce.Newsletter.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.Newsletter.Instrumentation"/>
define("SuiteCommerce.Newsletter.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.Newsletter.Instrumentation.Logger", "SuiteCommerce.Newsletter.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.Newsletter.NewsletterCCT.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Newsletter.NewsletterCCT.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NewsletterCCTModel = /** @class */ (function (_super) {
        __extends(NewsletterCCTModel, _super);
        function NewsletterCCTModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.urlRoot = '/app/site/hosting/scriptlet.nl?script=customscript_ns_sc_ext_sl_newsletter_sp&deploy=customdeploy_ns_sc_ext_sl_newsletter_sp';
            return _this;
        }
        return NewsletterCCTModel;
    }(Backbone_1.Model));
    exports.NewsletterCCTModel = NewsletterCCTModel;
});
/// <amd-module name="SuiteCommerce.Newsletter.NewsletterCCT.View"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.Newsletter.NewsletterCCT.View", ["require", "exports", "SuiteCommerce.Newsletter.NewsletterCCT.Model", "CustomContentType.Base.View", "Backbone.FormView", "SuiteCommerce.Newsletter.ExtMessage.View", "netsuite_newslettercct.tpl", "jQuery", "underscore", "SuiteCommerce.Newsletter.Instrumentation", "SuiteCommerce.Newsletter.ExtMessage.Model"], function (require, exports, SuiteCommerce_Newsletter_NewsletterCCT_Model_1, CustomContentTypeBaseView, BackboneFormView, ExtMessage_View_1, NetsuiteNewslettersCCTTpl, jQuery, _, Instrumentation_1, ExtMessage_Model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NewsletterCCTView = /** @class */ (function (_super) {
        __extends(NewsletterCCTView, _super);
        function NewsletterCCTView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = NetsuiteNewslettersCCTTpl;
            _this.model = new SuiteCommerce_Newsletter_NewsletterCCT_Model_1.NewsletterCCTModel();
            _this.fieldNamePrefix = 'custrecord_cct_ns_news_';
            _this.state = {
                code: '',
                message: '',
                messageType: '',
            };
            _this.events = {
                'submit form': 'doSubscribe',
            };
            _this.bindings = {
                '[name="email"]': 'email',
                '[name="firstName"]': 'firstName',
                '[name="lastName"]': 'lastName',
                '[name="company"]': 'company',
            };
            _this.LAYOUT = {
                '1': 'horizontal',
                '2': 'vertical',
                '3': 'left',
                '4': 'right',
            };
            _this.MIN_WIDTH_LAYOUT = 380;
            _this.container = options.container;
            BackboneFormView.add(_this);
            return _this;
        }
        NewsletterCCTView.prototype.parseSettings = function () {
            var resizeId;
            this.newsletterSettings = {
                imgresize: this.getSetting('imgresize'),
                bgimg_url: this.getSetting('bgimg_url'),
                header: this.getSetting('header'),
                subHeader: this.getSetting('subheader'),
                buttonText: this.getSetting('buttontext'),
                showFirstName: this.getSetting('showfirst', 'F') === 'T',
                showLastName: this.getSetting('showlast', 'F') === 'T',
                showCompany: this.getSetting('showcompany', 'F') === 'T',
                optionalFirstName: this.getSetting('optfirst', 'F') === 'T',
                optionalLastName: this.getSetting('optlast', 'F') === 'T',
                optionalCompany: this.getSetting('optcompany', 'F') === 'T',
                firstName: this.getSetting('placefirst'),
                lastName: this.getSetting('placelast'),
                company: this.getSetting('placecompany'),
                email: this.getSetting('placeemail', 'username@domain.com'),
                labelFirstName: this.getSetting('labelfirst'),
                labelLastName: this.getSetting('labellast'),
                labelCompany: this.getSetting('labelcompany'),
                labelEmail: this.getSetting('labelemail'),
                leadSubsidiary: this.container
                    .getComponent('Environment')
                    .getConfig('newsletterSignUp.leadSubsidiary'),
                termsLabel: this.getSetting('termslabel'),
                termsLink: this.getSetting('termslink'),
                hasLink: !!this.getSetting('termslink'),
                layout: this.LAYOUT[this.getSetting('layout', '1')],
            };
            if (this.newsletterSettings.bgimg_url &&
                this.newsletterSettings.imgresize) {
                resizeId = this.findResizeId();
                if (resizeId) {
                    this.newsletterSettings.bgimg_url += '&resizeid=' + resizeId;
                }
            }
            this.newsletterSettings.termsLabel =
                !this.newsletterSettings.termsLabel && !!this.newsletterSettings.termsLink
                    ? this.newsletterSettings.termsLink
                    : this.newsletterSettings.termsLabel;
            this.messages = {
                emailEmpty: this.getSetting('v_emailempty'),
                emailNotValid: this.getSetting('v_emailwrong'),
                firstNameEmpty: this.getSetting('v_fnameempty'),
                lastNameEmpty: this.getSetting('v_lnameempty'),
                companyEmpty: this.getSetting('v_companyempty'),
            };
            this.feedback = {
                OK: {
                    type: 'success',
                    message: this.getSetting('m_ok'),
                },
                ERR_USER_STATUS_ALREADY_SUBSCRIBED: {
                    type: 'warning',
                    message: this.getSetting('m_warn'),
                },
                ERR_USER_STATUS_DISABLED: {
                    type: 'error',
                    message: this.getSetting('m_emailerr'),
                },
                ERROR: {
                    type: 'error',
                    message: this.getSetting('m_err'),
                },
            };
        };
        NewsletterCCTView.prototype.getSetting = function (fieldName, defaultValue) {
            if (defaultValue === void 0) { defaultValue = ''; }
            if (!this.settings) {
                return null;
            }
            var setValue = jQuery.trim(this.settings[this.fieldNamePrefix + fieldName]);
            return setValue || defaultValue;
        };
        NewsletterCCTView.prototype.findResizeId = function () {
            var _this = this;
            var imagesizes = this.container
                .getComponent('Environment')
                .getSiteSetting('imagesizes');
            var found = _.find(imagesizes, function (imagesize) {
                return imagesize.name === _this.newsletterSettings.imgresize;
            });
            return found && found.internalid ? found.internalid : null;
        };
        NewsletterCCTView.prototype.install = function (settings, contextData) {
            var promise = jQuery.Deferred();
            _super.prototype.install.call(this, settings, contextData);
            this.parseSettings();
            this.updateModel();
            return promise.resolve();
        };
        NewsletterCCTView.prototype.update = function (settings) {
            _super.prototype.update.call(this, settings);
            this.parseSettings();
            this.updateModel();
            return jQuery.Deferred().resolve();
        };
        NewsletterCCTView.prototype.updateModel = function () {
            this.model.validation = {
                email: [
                    {
                        required: true,
                        msg: this.messages.emailEmpty,
                    },
                    {
                        pattern: 'email',
                        msg: this.messages.emailNotValid,
                    },
                ],
            };
            if (this.newsletterSettings.showLastName &&
                !this.newsletterSettings.optionalLastName) {
                this.model.validation.lastName = [
                    {
                        required: true,
                        msg: this.messages.lastNameEmpty,
                    },
                ];
            }
            if (this.newsletterSettings.showFirstName &&
                !this.newsletterSettings.optionalFirstName) {
                this.model.validation.firstName = [
                    {
                        required: true,
                        msg: this.messages.firstNameEmpty,
                    },
                ];
            }
            if (this.newsletterSettings.showCompany &&
                !this.newsletterSettings.optionalCompany) {
                this.model.validation.company = [
                    {
                        required: true,
                        msg: this.messages.companyEmpty,
                    },
                ];
            }
            this.model.set('subsidiary', this.getSubsidiary());
        };
        NewsletterCCTView.prototype.getSubsidiary = function () {
            var _this = this;
            var subsidiaries = this.container
                .getComponent('Environment')
                .getSiteSetting('subsidiaries');
            var subsidiary = _.find(subsidiaries, function (subsidiary) {
                return subsidiary.internalid === _this.newsletterSettings.leadSubsidiary;
            });
            if (!subsidiary) {
                subsidiary = _.find(subsidiaries, function (subsidiary) {
                    return subsidiary.isdefault === 'T';
                });
            }
            return subsidiary.internalid;
        };
        NewsletterCCTView.prototype.validateContextDataRequest = function () {
            return true;
        };
        NewsletterCCTView.prototype.getContext = function () {
            var context = __assign(__assign({}, _(this.newsletterSettings).clone()), { isFeedback: !!this.state.code, model: this.model });
            return context;
        };
        Object.defineProperty(NewsletterCCTView.prototype, "childViews", {
            get: function () {
                var _this = this;
                return {
                    GlobalMessageFeedback: function () {
                        return new ExtMessage_View_1.ExtMessageView({ model: new ExtMessage_Model_1.ExtMessageModel({
                                message: _this.state.message,
                                type: _this.state.messageType,
                                closable: true,
                            }) });
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        NewsletterCCTView.prototype.doSubscribe = function (e) {
            var _this = this;
            var promise;
            var errorCode;
            var response;
            var leadRequestLog = Instrumentation_1.default.getLog('leadRequestLog');
            var errorCorrectionTrackingLog = Instrumentation_1.default.getLog('errorCorrectionTrackingLog');
            var leadProcessedLog = Instrumentation_1.default.getLog('leadProcessedLog');
            leadRequestLog.setParameters({
                activity: 'Time it takes for saving the entered values in newsletter form',
                clientContextURL: window.location.href,
            });
            errorCorrectionTrackingLog.setParameter('activity', 'Error correction tracking before submits newsletter form.');
            leadProcessedLog.setParameter('activity', 'Lead processed');
            e.preventDefault();
            promise = this.saveForm(e);
            if (promise) {
                leadRequestLog.startTimer();
                if (errorCorrectionTrackingLog.parametersToSubmit.submitAttemptsWithError) {
                    errorCorrectionTrackingLog.submit();
                    errorCorrectionTrackingLog.setParameter('submitAttemptsWithError', 0);
                }
                promise
                    .fail(function (jqXhr) {
                    response = jqXhr;
                    response.preventDefault = true;
                    var responseCauseName = jqXhr && jqXhr.responseJSON && jqXhr.responseJSON.cause && jqXhr.responseJSON.cause.name
                        ? jqXhr.responseJSON.cause.name
                        : '';
                    errorCode =
                        responseCauseName && _this.feedback[responseCauseName]
                            ? responseCauseName
                            : 'ERROR';
                    _this.state.code = errorCode;
                    _this.state.message = _this.feedback[errorCode].message;
                    _this.state.messageType = _this.feedback[errorCode].type;
                })
                    .done(function () {
                    leadRequestLog.endTimer();
                    var code = _this.model.get('code');
                    _this.state.code = code;
                    _this.state.message = _this.feedback[code].message;
                    _this.state.messageType = _this.feedback[code].type;
                    _this.model.set('email', '');
                    _this.model.set('firstName', '');
                    _this.model.set('lastName', '');
                    _this.model.set('company', '');
                    leadRequestLog.setParameters({
                        totalTime: leadRequestLog.getElapsedTimeForTimer(),
                    });
                    leadRequestLog.submit();
                    leadProcessedLog.setParameter('subType', _this.container
                        .getComponent('Environment')
                        .getConfig('newsletterSignUp.createCompanyLeads')
                        ? 'Company'
                        : 'Individual');
                    leadProcessedLog.submit();
                })
                    .always(_.bind(this.render, this));
            }
            else {
                this.trackErrorInFormBeforeSubmit();
            }
        };
        NewsletterCCTView.prototype.trackErrorInFormBeforeSubmit = function () {
            var errorCorrectionTrackingLog = Instrumentation_1.default.getLog('errorCorrectionTrackingLog');
            var submitAttemptsWithError = errorCorrectionTrackingLog.parametersToSubmit.submitAttemptsWithError;
            if (!submitAttemptsWithError) {
                errorCorrectionTrackingLog.setParameter('submitAttemptsWithError', 0);
                submitAttemptsWithError = 0;
            }
            errorCorrectionTrackingLog.setParameter('submitAttemptsWithError', submitAttemptsWithError + 1);
        };
        NewsletterCCTView.prototype.render = function () {
            var view = _super.prototype.render.call(this);
            if (this.isUsingHorizontalLayout()) {
                this.forceVerticalLayoutInSmallPlaceholders();
            }
            return view;
        };
        NewsletterCCTView.prototype.isUsingHorizontalLayout = function () {
            var horizontalLayout = this.LAYOUT['1'];
            return this.newsletterSettings.layout === horizontalLayout;
        };
        NewsletterCCTView.prototype.forceVerticalLayoutInSmallPlaceholders = function () {
            var _this = this;
            _.defer(_.bind(function () {
                if (_this.isRenderedInSmallPlaceholder()) {
                    _this.forceVerticalLayout();
                }
            }));
        };
        NewsletterCCTView.prototype.isRenderedInSmallPlaceholder = function () {
            var htmlElementWidth = this.$el.width();
            return htmlElementWidth < this.MIN_WIDTH_LAYOUT;
        };
        NewsletterCCTView.prototype.forceVerticalLayout = function () {
            this.newsletterSettings.layout = this.LAYOUT['2'];
            _super.prototype.render.call(this);
        };
        return NewsletterCCTView;
    }(CustomContentTypeBaseView));
    exports.NewsletterCCTView = NewsletterCCTView;
});
/// <amd-module name="SuiteCommerce.Newsletter.NewsletterCCT"/>
define("SuiteCommerce.Newsletter.NewsletterCCT", ["require", "exports", "SuiteCommerce.Newsletter.Instrumentation.Helper", "SuiteCommerce.Newsletter.NewsletterCCT.View"], function (require, exports, Instrumentation_Helper_1, SuiteCommerce_Newsletter_NewsletterCCT_View_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            Instrumentation_Helper_1.InstrumentationHelper.initializeInstrumentation(container);
            this.registerCCT(container);
        },
        registerCCT: function (container) {
            var cms = container.getComponent('CMS');
            cms.registerCustomContentType({
                id: 'cct_netsuite_newsletter',
                view: SuiteCommerce_Newsletter_NewsletterCCT_View_1.NewsletterCCTView,
                options: {
                    container: container,
                },
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.Newsletter.Main.Module"/>
define("SuiteCommerce.Newsletter.Main.Module", ["require", "exports", "SuiteCommerce.Newsletter.NewsletterCCT"], function (require, exports, NewsletterCCT) {
    "use strict";
    return {
        mountToApp: function (container) {
            NewsletterCCT.mountToApp(container);
        },
    };
});
};
extensions['NetSuite.PhotoGallery.1.1.2'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/NetSuite/PhotoGallery/1.1.2/' + asset;
};
// BxSlider v4.2.14
define('BxSlider', ['jQuery'], function () {
  (function ($) {
    var defaults = {
      // GENERAL
      mode: 'horizontal',
      slideSelector: '',
      infiniteLoop: true,
      hideControlOnEnd: false,
      speed: 500,
      easing: null,
      slideMargin: 0,
      startSlide: 0,
      randomStart: false,
      captions: false,
      ticker: false,
      tickerHover: false,
      adaptiveHeight: false,
      adaptiveHeightSpeed: 500,
      video: false,
      useCSS: true,
      preloadImages: 'visible',
      responsive: true,
      slideZIndex: 50,
      wrapperClass: 'bx-wrapper',
      // TOUCH
      touchEnabled: true,
      swipeThreshold: 50,
      oneToOneTouch: true,
      preventDefaultSwipeX: true,
      preventDefaultSwipeY: false,
      // ACCESSIBILITY
      ariaLive: true,
      ariaHidden: true,
      // KEYBOARD
      keyboardEnabled: false,
      // PAGER
      pager: true,
      pagerType: 'full',
      pagerShortSeparator: ' / ',
      pagerSelector: null,
      buildPager: null,
      pagerCustom: null,
      // CONTROLS
      controls: true,
      nextText: 'Next',
      prevText: 'Prev',
      nextSelector: null,
      prevSelector: null,
      autoControls: false,
      startText: 'Start',
      stopText: 'Stop',
      autoControlsCombine: false,
      autoControlsSelector: null,
      // AUTO
      auto: false,
      pause: 4000,
      autoStart: true,
      autoDirection: 'next',
      stopAutoOnClick: false,
      autoHover: false,
      autoDelay: 0,
      autoSlideForOnePage: false,
      // CAROUSEL
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 0,
      slideWidth: 0,
      shrinkItems: false,
      // CALLBACKS
      onSliderLoad: function () { return true; },
      onSlideBefore: function () { return true; },
      onSlideAfter: function () { return true; },
      onSlideNext: function () { return true; },
      onSlidePrev: function () { return true; },
      onSliderResize: function () { return true; },
      onAutoChange: function () { return true; } // calls when auto slides starts and stops
    };
    $.fn.bxSliderNew = function (options) {
      if (this.length === 0) {
        return this;
      }
      // support multiple elements
      if (this.length > 1) {
        this.each(function () {
          $(this).bxSliderNew(options);
        });
        return this;
      }
      // create a namespace to be used throughout the plugin
      var slider = {};
      // set a reference to our slider element
      var el = this;
      // get the original window dimens (thanks a lot IE)
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      /**
             * ===================================================================================
             * = PRIVATE FUNCTIONS
             * ===================================================================================
             */
      /**
             * Initializes namespace settings to be used throughout plugin
             */
      var init = function () {
        // Return if slider is already initialized
        if ($(el).data('bxSlider')) { return; }
        // merge user-supplied options with the defaults
        slider.settings = $.extend({}, defaults, options);
        // parse slideWidth setting
        slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
        // store the original children
        slider.children = el.children(slider.settings.slideSelector);
        // check if actual number of slides is less than minSlides / maxSlides
        if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
        if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
        // if random start, set the startSlide setting to random number
        if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
        // store active slide information
        slider.active = { index: slider.settings.startSlide };
        // store if the slider is in carousel mode (displaying / moving multiple slides)
        slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
        // if carousel, force preloadImages = 'all'
        if (slider.carousel) { slider.settings.preloadImages = 'all'; }
        // calculate the min / max width thresholds based on min / max number of slides
        // used to setup and update carousel slides dimensions
        slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
        slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        // store the current state of the slider (if currently animating, working is true)
        slider.working = false;
        // initialize the controls object
        slider.controls = {};
        // initialize an auto interval
        slider.interval = null;
        // determine which property to use for transitions
        slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
        // determine if hardware acceleration can be used
        slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function () {
          // create our test div element
          var div = document.createElement('div');
          // css transition properties
          var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          // test for each property
          for (var i = 0; i < props.length; i++) {
            if (div.style[props[i]] !== undefined) {
              slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
              slider.animProp = '-' + slider.cssPrefix + '-transform';
              return true;
            }
          }
          return false;
        }());
        // if vertical mode always make maxSlides and minSlides equal
        if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
        // save original style data
        el.data('origStyle', el.attr('style'));
        el.children(slider.settings.slideSelector).each(function () {
          $(this).data('origStyle', $(this).attr('style'));
        });
        // perform all DOM / CSS modifications
        setup();
      };
      /**
             * Performs all DOM and CSS modifications
             */
      var setup = function () {
        var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)
        // wrap el in a wrapper
        el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
        // store a namespace reference to .bx-viewport
        slider.viewport = el.parent();
        // add aria-live if the setting is enabled and ticker mode is disabled
        if (slider.settings.ariaLive && !slider.settings.ticker) {
          slider.viewport.attr('aria-live', 'polite');
        }
        // add a loading div to display while images are loading
        slider.loader = $('<div class="bx-loading" />');
        slider.viewport.prepend(slider.loader);
        // set el to a massive width, to hold any needed slides
        // also strip any margin and padding from el
        el.css({
          width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
          position: 'relative'
        });
        // if using CSS, add the easing property
        if (slider.usingCSS && slider.settings.easing) {
          el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
          // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
        } else if (!slider.settings.easing) {
          slider.settings.easing = 'swing';
        }
        // make modifications to the viewport (.bx-viewport)
        slider.viewport.css({
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        });
        slider.viewport.parent().css({
          maxWidth: getViewportMaxWidth()
        });
        // apply css to all slider children
        slider.children.css({
          // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
          float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
          listStyle: 'none',
          position: 'relative'
        });
        // apply the calculated width after the float is applied to prevent scrollbar interference
        slider.children.css('width', getSlideWidth());
        // if slideMargin is supplied, add the css
        if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
        if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
        // if "fade" mode, add positioning and z-index CSS
        if (slider.settings.mode === 'fade') {
          slider.children.css({
            position: 'absolute',
            zIndex: 0,
            display: 'none'
          });
          // prepare the z-index on the showing element
          slider.children.eq(slider.settings.startSlide).css({ zIndex: slider.settings.slideZIndex, display: 'block' });
        }
        // create an element to contain all slider controls (pager, start / stop, etc)
        slider.controls.el = $('<div class="bx-controls" />');
        // if captions are requested, add them
        if (slider.settings.captions) { appendCaptions(); }
        // check if startSlide is last slide
        slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
        // if video is true, set up the fitVids plugin
        if (slider.settings.video) { el.fitVids(); }
        // preloadImages
        if (slider.settings.preloadImages === 'none') {
          preloadSelector = null;
        } else if (slider.settings.preloadImages === 'all' || slider.settings.ticker) {
          preloadSelector = slider.children;
        }
        // only check for control addition if not in "ticker" mode
        if (!slider.settings.ticker) {
          // if controls are requested, add them
          if (slider.settings.controls) { appendControls(); }
          // if auto is true, and auto controls are requested, add them
          if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
          // if pager is requested, add it
          if (slider.settings.pager) { appendPager(); }
          // if any control option is requested, add the controls wrapper
          if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
          // if ticker mode, do not allow a pager
        } else {
          slider.settings.pager = false;
        }
        if (preloadSelector === null) {
          start();
        } else {
          loadElements(preloadSelector, start);
        }
      };
      var loadElements = function (selector, callback) {
        var total = selector.find('img:not([src=""]), iframe').length;
        var count = 0;
        if (total === 0) {
          callback();
          return;
        }
        selector.find('img:not([src=""]), iframe').each(function () {
          $(this).one('load error', function () {
            if (++count === total) { callback(); }
          }).each(function () {
            if (this.complete || this.src == '') { $(this).trigger('load'); }
          });
        });
      };
      /**
             * Start the slider
             */
      var start = function () {
        // if infinite loop, prepare additional slides
        if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
          var slice = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
          var sliceAppend = slider.children.slice(0, slice).clone(true).addClass('bx-clone');
          var slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
          if (slider.settings.ariaHidden) {
            sliceAppend.attr('aria-hidden', true);
            slicePrepend.attr('aria-hidden', true);
          }
          el.append(sliceAppend).prepend(slicePrepend);
        }
        // remove the loading DOM element
        slider.loader.remove();
        // set the left / top position of "el"
        setSlidePosition();
        // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
        if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
        // set the viewport height
        slider.viewport.height(getViewportHeight());
        // make sure everything is positioned just right (same as a window resize)
        el.redrawSlider();
        // onSliderLoad callback
        slider.settings.onSliderLoad.call(el, slider.active.index);
        // slider has been fully initialized
        slider.initialized = true;
        // add the resize call to the window
        if (slider.settings.responsive) { $(window).on('resize', resizeWindow); }
        // if auto is true and has more than 1 page, start the show
        if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
        // if ticker is true, start the ticker
        if (slider.settings.ticker) { initTicker(); }
        // if pager is requested, make the appropriate pager link active
        if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
        // check for any updates to the controls (like hideControlOnEnd updates)
        if (slider.settings.controls) { updateDirectionControls(); }
        // if touchEnabled is true, setup the touch events
        if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
        // if keyboardEnabled is true, setup the keyboard events
        if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
          $(document).keydown(keyPress);
        }
      };
      /**
             * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
             */
      var getViewportHeight = function () {
        var height = 0;
        // first determine which children (slides) should be used in our height calculation
        var children = $();
        // if mode is not "vertical" and adaptiveHeight is false, include all children
        if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
          children = slider.children;
        } else {
          // if not carousel, return the single active child
          if (!slider.carousel) {
            children = slider.children.eq(slider.active.index);
            // if carousel, return a slice of children
          } else {
            // get the individual slide index
            var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
            // add the current slide to the children
            children = slider.children.eq(currentIndex);
            // cycle through the remaining "showing" slides
            for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
              // if looped back to the start
              if (currentIndex + i >= slider.children.length) {
                children = children.add(slider.children.eq(i - 1));
              } else {
                children = children.add(slider.children.eq(currentIndex + i));
              }
            }
          }
        }
        // if "vertical" mode, calculate the sum of the heights of the children
        if (slider.settings.mode === 'vertical') {
          children.each(function (index) {
            height += $(this).outerHeight();
          });
          // add user-supplied margins
          if (slider.settings.slideMargin > 0) {
            height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
          }
          // if not "vertical" mode, calculate the max height of the children
        } else {
          height = Math.max.apply(Math, children.map(function () {
            return $(this).outerHeight(false);
          }).get());
        }
        if (slider.viewport.css('box-sizing') === 'border-box') {
          height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'))
                        + parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
        } else if (slider.viewport.css('box-sizing') === 'padding-box') {
          height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
        }
        return height;
      };
      /**
             * Returns the calculated width to be used for the outer wrapper / viewport
             */
      var getViewportMaxWidth = function () {
        var width = '100%';
        if (slider.settings.slideWidth > 0) {
          if (slider.settings.mode === 'horizontal') {
            width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
          } else {
            width = slider.settings.slideWidth;
          }
        }
        return width;
      };
      /**
             * Returns the calculated width to be applied to each slide
             */
      var getSlideWidth = function () {
        var newElWidth = slider.settings.slideWidth; // start with any user-supplied slide width
        var wrapWidth = slider.viewport.width(); // get the current viewport width
        // if slide width was not supplied, or is larger than the viewport use the viewport width
        if (slider.settings.slideWidth === 0
                    || (slider.settings.slideWidth > wrapWidth && !slider.carousel)
                    || slider.settings.mode === 'vertical') {
          newElWidth = wrapWidth;
          // if carousel, use the thresholds to determine the width
        } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
          if (wrapWidth > slider.maxThreshold) {
            return newElWidth;
          } if (wrapWidth < slider.minThreshold) {
            newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
          } else if (slider.settings.shrinkItems) {
            newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
          }
        }
        return newElWidth;
      };
      /**
             * Returns the number of slides currently visible in the viewport (includes partially visible slides)
             */
      var getNumberSlidesShowing = function () {
        var slidesShowing = 1;
        var childWidth = null;
        if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
          // if viewport is smaller than minThreshold, return minSlides
          if (slider.viewport.width() < slider.minThreshold) {
            slidesShowing = slider.settings.minSlides;
            // if viewport is larger than maxThreshold, return maxSlides
          } else if (slider.viewport.width() > slider.maxThreshold) {
            slidesShowing = slider.settings.maxSlides;
            // if viewport is between min / max thresholds, divide viewport width by first child width
          } else {
            childWidth = slider.children.first().width() + slider.settings.slideMargin;
            slidesShowing = Math.floor((slider.viewport.width()
                            + slider.settings.slideMargin) / childWidth) || 1;
          }
          // if "vertical" mode, slides showing will always be minSlides
        } else if (slider.settings.mode === 'vertical') {
          slidesShowing = slider.settings.minSlides;
        }
        return slidesShowing;
      };
      /**
             * Returns the number of pages (one full viewport of slides is one "page")
             */
      var getPagerQty = function () {
        var pagerQty = 0;
        var breakPoint = 0;
        var counter = 0;
        // if moveSlides is specified by the user
        if (slider.settings.moveSlides > 0) {
          if (slider.settings.infiniteLoop) {
            pagerQty = Math.ceil(slider.children.length / getMoveBy());
          } else {
            // when breakpoint goes above children length, counter is the number of pages
            while (breakPoint < slider.children.length) {
              ++pagerQty;
              breakPoint = counter + getNumberSlidesShowing();
              counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
            }
            return counter;
          }
          // if moveSlides is 0 (auto) divide children length by sides showing, then round up
        } else {
          pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
        }
        return pagerQty;
      };
      /**
             * Returns the number of individual slides by which to shift the slider
             */
      var getMoveBy = function () {
        // if moveSlides was set by the user and moveSlides is less than number of slides showing
        if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
          return slider.settings.moveSlides;
        }
        // if moveSlides is 0 (auto)
        return getNumberSlidesShowing();
      };
      /**
             * Sets the slider's (el) left or top position
             */
      var setSlidePosition = function () {
        var position; var lastChild; var
          lastShowingIndex;
        // if last slide, not infinite loop, and number of children is larger than specified maxSlides
        if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child's position
            lastChild = slider.children.last();
            position = lastChild.position();
            // set the left position
            setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
          } else if (slider.settings.mode === 'vertical') {
            // get the last showing index's position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
            // set the top position
            setPositionProperty(-position.top, 'reset', 0);
          }
          // if not last slide
        } else {
          // get the position of the first showing slide
          position = slider.children.eq(slider.active.index * getMoveBy()).position();
          // check for last slide
          if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
          // set the respective position
          if (position !== undefined) {
            if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); } else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
          }
        }
      };
      /**
             * Sets the el's animating property position (which in turn will sometimes animate el).
             * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
             *
             * @param value (int)
             *  - the animating property's value
             *
             * @param type (string) 'slide', 'reset', 'ticker'
             *  - the type of instance for which the function is being
             *
             * @param duration (int)
             *  - the amount of time (in ms) the transition should occupy
             *
             * @param params (array) optional
             *  - an optional parameter containing any variables that need to be passed in
             */
      var setPositionProperty = function (value, type, duration, params) {
        var animateObj; var
          propValue;
        // use CSS transform
        if (slider.usingCSS) {
          // determine the translate3d value
          propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
          // add the CSS transition-duration
          el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
          if (type === 'slide') {
            // set the property value
            el.css(slider.animProp, propValue);
            if (duration !== 0) {
              // add a callback method - executes when CSS transition completes
              el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
                // make sure it's the correct one
                if (!$(e.target).is(el)) { return; }
                // remove the callback
                el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                updateAfterSlideTransition();
              });
            } else { // duration = 0
              updateAfterSlideTransition();
            }
          } else if (type === 'reset') {
            el.css(slider.animProp, propValue);
          } else if (type === 'ticker') {
            // make the transition use 'linear'
            el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
            el.css(slider.animProp, propValue);
            if (duration !== 0) {
              el.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function (e) {
                // make sure it's the correct one
                if (!$(e.target).is(el)) { return; }
                // remove the callback
                el.off('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
                // reset the position
                setPositionProperty(params.resetValue, 'reset', 0);
                // start the loop again
                tickerLoop();
              });
            } else { // duration = 0
              setPositionProperty(params.resetValue, 'reset', 0);
              tickerLoop();
            }
          }
          // use JS animate
        } else {
          animateObj = {};
          animateObj[slider.animProp] = value;
          if (type === 'slide') {
            el.animate(animateObj, duration, slider.settings.easing, function () {
              updateAfterSlideTransition();
            });
          } else if (type === 'reset') {
            el.css(slider.animProp, value);
          } else if (type === 'ticker') {
            el.animate(animateObj, duration, 'linear', function () {
              setPositionProperty(params.resetValue, 'reset', 0);
              // run the recursive loop after animation
              tickerLoop();
            });
          }
        }
      };
      /**
             * Populates the pager with proper amount of pages
             */
      var populatePager = function () {
        var pagerHtml = '';
        var linkContent = '';
        var pagerQty = getPagerQty();
        // loop through each pager item
        for (var i = 0; i < pagerQty; i++) {
          linkContent = '';
          // if a buildPager function is supplied, use it to get pager link value, else use index + 1
          if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
            linkContent = slider.settings.buildPager(i);
            slider.pagerEl.addClass('bx-custom-pager');
          } else {
            linkContent = i + 1;
            slider.pagerEl.addClass('bx-default-pager');
          }
          // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
          // add the markup to the string
          pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
        }
        // populate the pager element with pager links
        slider.pagerEl.html(pagerHtml);
      };
      /**
             * Appends the pager to the controls element
             */
      var appendPager = function () {
        if (!slider.settings.pagerCustom) {
          // create the pager DOM element
          slider.pagerEl = $('<div class="bx-pager" />');
          // if a pager selector was supplied, populate it with the pager
          if (slider.settings.pagerSelector) {
            $(slider.settings.pagerSelector).html(slider.pagerEl);
            // if no pager selector was supplied, add it after the wrapper
          } else {
            slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
          }
          // populate the pager
          populatePager();
        } else {
          slider.pagerEl = $(slider.settings.pagerCustom);
        }
        // assign the pager click binding
        slider.pagerEl.on('click touchend', 'a', clickPagerBind);
      };
      /**
             * Appends prev / next controls to the controls element
             */
      var appendControls = function () {
        slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
        slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
        // add click actions to the controls
        slider.controls.next.on('click touchend', clickNextBind);
        slider.controls.prev.on('click touchend', clickPrevBind);
        // if nextSelector was supplied, populate it
        if (slider.settings.nextSelector) {
          $(slider.settings.nextSelector).append(slider.controls.next);
        }
        // if prevSelector was supplied, populate it
        if (slider.settings.prevSelector) {
          $(slider.settings.prevSelector).append(slider.controls.prev);
        }
        // if no custom selectors were supplied
        if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
          // add the controls to the DOM
          slider.controls.directionEl = $('<div class="bx-controls-direction" />');
          // add the control elements to the directionEl
          slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
          // slider.viewport.append(slider.controls.directionEl);
          slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
        }
      };
      /**
             * Appends start / stop auto controls to the controls element
             */
      var appendControlsAuto = function () {
        slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
        slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
        // add the controls to the DOM
        slider.controls.autoEl = $('<div class="bx-controls-auto" />');
        // on click actions to the controls
        slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
        slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
        // if autoControlsCombine, insert only the "start" control
        if (slider.settings.autoControlsCombine) {
          slider.controls.autoEl.append(slider.controls.start);
          // if autoControlsCombine is false, insert both controls
        } else {
          slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
        }
        // if auto controls selector was supplied, populate it with the controls
        if (slider.settings.autoControlsSelector) {
          $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
          // if auto controls selector was not supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
        }
        // update the auto controls
        updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
      };
      /**
             * Appends image captions to the DOM
             */
      var appendCaptions = function () {
        // cycle through each child
        slider.children.each(function (index) {
          // get the image title attribute
          var title = $(this).find('img:first').attr('title');
          // append the caption
          if (title !== undefined && ('' + title).length) {
            $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
          }
        });
      };
      /**
             * Click next binding
             *
             * @param e (event)
             *  - DOM event object
             */
      var clickNextBind = function (e) {
        e.preventDefault();
        if (slider.controls.el.hasClass('disabled')) { return; }
        // if auto show is running, stop it
        if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
        el.goToNextSlide();
      };
      /**
             * Click prev binding
             *
             * @param e (event)
             *  - DOM event object
             */
      var clickPrevBind = function (e) {
        e.preventDefault();
        if (slider.controls.el.hasClass('disabled')) { return; }
        // if auto show is running, stop it
        if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
        el.goToPrevSlide();
      };
      /**
             * Click start binding
             *
             * @param e (event)
             *  - DOM event object
             */
      var clickStartBind = function (e) {
        el.startAuto();
        e.preventDefault();
      };
      /**
             * Click stop binding
             *
             * @param e (event)
             *  - DOM event object
             */
      var clickStopBind = function (e) {
        el.stopAuto();
        e.preventDefault();
      };
      /**
             * Click pager binding
             *
             * @param e (event)
             *  - DOM event object
             */
      var clickPagerBind = function (e) {
        var pagerLink; var
          pagerIndex;
        e.preventDefault();
        if (slider.controls.el.hasClass('disabled')) {
          return;
        }
        // if auto show is running, stop it
        if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
        pagerLink = $(e.currentTarget);
        if (pagerLink.attr('data-slide-index') !== undefined) {
          pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
          // if clicked pager link is not active, continue with the goToSlide call
          if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
        }
      };
      /**
             * Updates the pager links with an active class
             *
             * @param slideIndex (int)
             *  - index of slide to make active
             */
      var updatePagerActive = function (slideIndex) {
        // if "short" pager type
        var len = slider.children.length; // nb of children
        if (slider.settings.pagerType === 'short') {
          if (slider.settings.maxSlides > 1) {
            len = Math.ceil(slider.children.length / slider.settings.maxSlides);
          }
          slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
          return;
        }
        // remove all pager active classes
        slider.pagerEl.find('a').removeClass('active');
        // apply the active class for all pagers
        slider.pagerEl.each(function (i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
      };
      /**
             * Performs needed actions after a slide transition
             */
      var updateAfterSlideTransition = function () {
        // if infinite loop is true
        if (slider.settings.infiniteLoop) {
          var position = '';
          // first slide
          if (slider.active.index === 0) {
            // set the new position
            position = slider.children.eq(0).position();
            // carousel, last slide
          } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
            position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
            // last slide
          } else if (slider.active.index === slider.children.length - 1) {
            position = slider.children.eq(slider.children.length - 1).position();
          }
          if (position) {
            if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); } else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
          }
        }
        // declare that the transition is complete
        slider.working = false;
        // onSlideAfter callback
        slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
      };
      /**
             * Updates the auto controls state (either active, or combined switch)
             *
             * @param state (string) "start", "stop"
             *  - the new state of the auto show
             */
      var updateAutoControls = function (state) {
        // if autoControlsCombine is true, replace the current control with the new state
        if (slider.settings.autoControlsCombine) {
          slider.controls.autoEl.html(slider.controls[state]);
          // if autoControlsCombine is false, apply the "active" class to the appropriate control
        } else {
          slider.controls.autoEl.find('a').removeClass('active');
          slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
        }
      };
      /**
             * Updates the direction controls (checks if either should be hidden)
             */
      var updateDirectionControls = function () {
        if (getPagerQty() === 1) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.addClass('disabled');
        } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
          // if first slide
          if (slider.active.index === 0) {
            slider.controls.prev.addClass('disabled');
            slider.controls.next.removeClass('disabled');
            // if last slide
          } else if (slider.active.index === getPagerQty() - 1) {
            slider.controls.next.addClass('disabled');
            slider.controls.prev.removeClass('disabled');
            // if any slide in the middle
          } else {
            slider.controls.prev.removeClass('disabled');
            slider.controls.next.removeClass('disabled');
          }
        }
      };
      /* auto start and stop functions */
      var windowFocusHandler = function () { el.startAuto(); };
      var windowBlurHandler = function () { el.stopAuto(); };
      /**
             * Initializes the auto process
             */
      var initAuto = function () {
        // if autoDelay was supplied, launch the auto show using a setTimeout() call
        if (slider.settings.autoDelay > 0) {
          setTimeout(el.startAuto, slider.settings.autoDelay);
          // if autoDelay was not supplied, start the auto show normally
        } else {
          el.startAuto();
          // add focus and blur events to ensure its running if timeout gets paused
          $(window).focus(windowFocusHandler).blur(windowBlurHandler);
        }
        // if autoHover is requested
        if (slider.settings.autoHover) {
          // on el hover
          el.hover(function () {
            // if the auto show is currently playing (has an active interval)
            if (slider.interval) {
              // stop the auto show and pass true argument which will prevent control update
              el.stopAuto(true);
              // create a new autoPaused value which will be used by the relative "mouseout" event
              slider.autoPaused = true;
            }
          }, function () {
            // if the autoPaused value was created be the prior "mouseover" event
            if (slider.autoPaused) {
              // start the auto show and pass true argument which will prevent control update
              el.startAuto(true);
              // reset the autoPaused value
              slider.autoPaused = null;
            }
          });
        }
      };
      /**
             * Initializes the ticker process
             */
      var initTicker = function () {
        var startPosition = 0;
        var position; var transform; var value; var idx; var ratio; var property; var newSpeed; var
          totalDimens;
        // if autoDirection is "next", append a clone of the entire slider
        if (slider.settings.autoDirection === 'next') {
          el.append(slider.children.clone().addClass('bx-clone'));
          // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
        } else {
          el.prepend(slider.children.clone().addClass('bx-clone'));
          position = slider.children.first().position();
          startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
        }
        setPositionProperty(startPosition, 'reset', 0);
        // do not allow controls in ticker mode
        slider.settings.pager = false;
        slider.settings.controls = false;
        slider.settings.autoControls = false;
        // if autoHover is requested
        if (slider.settings.tickerHover) {
          if (slider.usingCSS) {
            idx = slider.settings.mode === 'horizontal' ? 4 : 5;
            slider.viewport.hover(function () {
              transform = el.css('-' + slider.cssPrefix + '-transform');
              value = parseFloat(transform.split(',')[idx]);
              setPositionProperty(value, 'reset', 0);
            }, function () {
              totalDimens = 0;
              slider.children.each(function (index) {
                totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
              });
              // calculate the speed ratio (used to determine the new speed to finish the paused animation)
              ratio = slider.settings.speed / totalDimens;
              // determine which property to use
              property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
              // calculate the new speed
              newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
              tickerLoop(newSpeed);
            });
          } else {
            // on el hover
            slider.viewport.hover(function () {
              el.stop();
            }, function () {
              // calculate the total width of children (used to calculate the speed ratio)
              totalDimens = 0;
              slider.children.each(function (index) {
                totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
              });
              // calculate the speed ratio (used to determine the new speed to finish the paused animation)
              ratio = slider.settings.speed / totalDimens;
              // determine which property to use
              property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
              // calculate the new speed
              newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
              tickerLoop(newSpeed);
            });
          }
        }
        // start the ticker loop
        tickerLoop();
      };
      /**
             * Runs a continuous loop, news ticker-style
             */
      var tickerLoop = function (resumeSpeed) {
        var speed = resumeSpeed || slider.settings.speed;
        var position = { left: 0, top: 0 };
        var reset = { left: 0, top: 0 };
        var animateProperty;
        var resetValue;
        var params;
        // if "next" animate left position to last child, then reset left to 0
        if (slider.settings.autoDirection === 'next') {
          position = el.find('.bx-clone').first().position();
          // if "prev" animate left position to 0, then reset left to first non-clone child
        } else {
          reset = slider.children.first().position();
        }
        animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
        resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
        params = { resetValue: resetValue };
        setPositionProperty(animateProperty, 'ticker', speed, params);
      };
      /**
             * Check if el is on screen
             */
      var isOnScreen = function (el) {
        var win = $(window);
        var viewport = {
          top: win.scrollTop(),
          left: win.scrollLeft()
        };
        var bounds = el.offset();
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        bounds.right = bounds.left + el.outerWidth();
        bounds.bottom = bounds.top + el.outerHeight();
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
      };
      /**
             * Initializes keyboard events
             */
      var keyPress = function (e) {
        var activeElementTag = document.activeElement.tagName.toLowerCase();
        var tagFilters = 'input|textarea';
        var p = new RegExp(activeElementTag, ['i']);
        var result = p.exec(tagFilters);
        if (result == null && isOnScreen(el)) {
          if (e.keyCode === 39) {
            clickNextBind(e);
            return false;
          } if (e.keyCode === 37) {
            clickPrevBind(e);
            return false;
          }
        }
      };
      /**
             * Initializes touch events
             */
      var initTouch = function () {
        // initialize object to contain all touch values
        slider.touch = {
          start: { x: 0, y: 0 },
          end: { x: 0, y: 0 }
        };
        slider.viewport.on('touchstart MSPointerDown pointerdown', onTouchStart);
        // for browsers that have implemented pointer events and fire a click after
        // every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
        slider.viewport.on('click', '.bxslider a', function (e) {
          if (slider.viewport.hasClass('click-disabled')) {
            e.preventDefault();
            slider.viewport.removeClass('click-disabled');
          }
        });
      };
      /**
             * Event handler for "touchstart"
             *
             * @param e (event)
             *  - DOM event object
             */
      var onTouchStart = function (e) {
        // watch only for left mouse, touch contact and pen contact
        // touchstart event object doesn`t have button property
        if (e.type !== 'touchstart' && e.button !== 0) {
          return;
        }
        // !!! We don't want to prevent default handler to be able to scroll vertically in mobile devices and to select text !!!
        // e.preventDefault();
        // disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
        slider.controls.el.addClass('disabled');
        if (slider.working) {
          slider.controls.el.removeClass('disabled');
        } else {
          // record the original position when touch starts
          slider.touch.originalPos = el.position();
          var orig = e.originalEvent;
          var touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
          var chromePointerEvents = typeof PointerEvent === 'function';
          if (chromePointerEvents) {
            if (orig.pointerId === undefined) {
              return;
            }
          }
          // record the starting touch x, y coordinates
          slider.touch.start.x = touchPoints[0].pageX;
          slider.touch.start.y = touchPoints[0].pageY;
          if (slider.viewport.get(0).setPointerCapture) {
            slider.pointerId = orig.pointerId;
            slider.viewport.get(0).setPointerCapture(slider.pointerId);
          }
          // store original event data for click fixation
          slider.originalClickTarget = orig.originalTarget || orig.target;
          slider.originalClickButton = orig.button;
          slider.originalClickButtons = orig.buttons;
          slider.originalEventType = orig.type;
          // at this moment we don`t know what it is click or swipe
          slider.hasMove = false;
          // on a "touchmove" event to the viewport
          slider.viewport.on('touchmove MSPointerMove pointermove', onTouchMove);
          // on a "touchend" event to the viewport
          slider.viewport.on('touchend MSPointerUp pointerup', onTouchEnd);
          slider.viewport.on('MSPointerCancel pointercancel', onPointerCancel);
        }
      };
      /**
             * Cancel Pointer for Windows Phone
             *
             * @param e (event)
             *  - DOM event object
             */
      var onPointerCancel = function (e) {
        e.preventDefault();
        /* onPointerCancel handler is needed to deal with situations when a touchend
                doesn't fire after a touchstart (this happens on windows phones only) */
        setPositionProperty(slider.touch.originalPos.left, 'reset', 0);
        // remove handlers
        slider.controls.el.removeClass('disabled');
        slider.viewport.off('MSPointerCancel pointercancel', onPointerCancel);
        slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
        slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
        if (slider.viewport.get(0).releasePointerCapture) {
          slider.viewport.get(0).releasePointerCapture(slider.pointerId);
        }
      };
      /**
             * Event handler for "touchmove"
             *
             * @param e (event)
             *  - DOM event object
             */
      var onTouchMove = function (e) {
        var orig = e.originalEvent;
        var touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // if scrolling on y axis, do not prevent default
        var xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x);
        var yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y);
        var value = 0;
        var change = 0;
        // this is swipe
        slider.hasMove = true;
        // x axis swipe
        if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
          e.preventDefault();
          // y axis swipe
        } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
          e.preventDefault();
        }
        if (e.type !== 'touchmove') {
          e.preventDefault();
        }
        if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
          // if horizontal, drag along x axis
          if (slider.settings.mode === 'horizontal') {
            change = touchPoints[0].pageX - slider.touch.start.x;
            value = slider.touch.originalPos.left + change;
            // if vertical, drag along y axis
          } else {
            change = touchPoints[0].pageY - slider.touch.start.y;
            value = slider.touch.originalPos.top + change;
          }
          setPositionProperty(value, 'reset', 0);
        }
      };
      /**
             * Event handler for "touchend"
             *
             * @param e (event)
             *  - DOM event object
             */
      var onTouchEnd = function (e) {
        e.preventDefault();
        slider.viewport.off('touchmove MSPointerMove pointermove', onTouchMove);
        // enable slider controls as soon as user stops interacing with slides
        slider.controls.el.removeClass('disabled');
        var orig = e.originalEvent;
        var touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        var value = 0;
        var distance = 0;
        // record end x, y positions
        slider.touch.end.x = touchPoints[0].pageX;
        slider.touch.end.y = touchPoints[0].pageY;
        // if fade mode, check if absolute x distance clears the threshold
        if (slider.settings.mode === 'fade') {
          distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
          if (distance >= slider.settings.swipeThreshold) {
            if (slider.touch.start.x > slider.touch.end.x) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          }
          // not fade mode
        } else {
          // calculate distance and el's animate property
          if (slider.settings.mode === 'horizontal') {
            distance = slider.touch.end.x - slider.touch.start.x;
            value = slider.touch.originalPos.left;
          } else {
            distance = slider.touch.end.y - slider.touch.start.y;
            value = slider.touch.originalPos.top;
          }
          // if not infinite loop and first / last slide, do not attempt a slide transition
          if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
            setPositionProperty(value, 'reset', 200);
          } else {
            // check if distance clears threshold
            if (Math.abs(distance) >= slider.settings.swipeThreshold) {
              if (distance < 0) {
                el.goToNextSlide();
              } else {
                el.goToPrevSlide();
              }
              el.stopAuto();
            } else {
              // el.animate(property, 200);
              setPositionProperty(value, 'reset', 200);
            }
          }
        }
        slider.viewport.off('touchend MSPointerUp pointerup', onTouchEnd);
        if (slider.viewport.get(0).releasePointerCapture) {
          slider.viewport.get(0).releasePointerCapture(slider.pointerId);
        }
        // if slider had swipe with left mouse, touch contact and pen contact
        if (slider.hasMove === false && (slider.originalClickButton === 0 || slider.originalEventType === 'touchstart')) {
          // trigger click event (fix for Firefox59 and PointerEvent standard compatibility)
          $(slider.originalClickTarget).trigger({
            type: 'click',
            button: slider.originalClickButton,
            buttons: slider.originalClickButtons
          });
        }
      };
      /**
             * Window resize event callback
             */
      var resizeWindow = function (e) {
        // don't do anything if slider isn't initialized.
        if (!slider.initialized) { return; }
        // Delay if slider working.
        if (slider.working) {
          window.setTimeout(resizeWindow, 10);
        } else {
          // get the new window dimens (again, thank you IE)
          var windowWidthNew = $(window).width();
          var windowHeightNew = $(window).height();
          // make sure that it is a true window resize
          // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
          // are resized. Can you just die already?*
          if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
            // set the new window dimens
            windowWidth = windowWidthNew;
            windowHeight = windowHeightNew;
            // update all dynamic elements
            el.redrawSlider();
            // Call user resize handler
            slider.settings.onSliderResize.call(el, slider.active.index);
          }
        }
      };
      /**
             * Adds an aria-hidden=true attribute to each element
             *
             * @param startVisibleIndex (int)
             *  - the first visible element's index
             */
      var applyAriaHiddenAttributes = function (startVisibleIndex) {
        var numberOfSlidesShowing = getNumberSlidesShowing();
        // only apply attributes if the setting is enabled and not in ticker mode
        if (slider.settings.ariaHidden && !slider.settings.ticker) {
          // add aria-hidden=true to all elements
          slider.children.attr('aria-hidden', 'true');
          // get the visible elements and change to aria-hidden=false
          slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
        }
      };
      /**
             * Returns index according to present page range
             *
             * @param slideOndex (int)
             *  - the desired slide index
             */
      var setSlideIndex = function (slideIndex) {
        if (slideIndex < 0) {
          if (slider.settings.infiniteLoop) {
            return getPagerQty() - 1;
          }
          // we don't go to undefined slides
          return slider.active.index;
          // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
        } if (slideIndex >= getPagerQty()) {
          if (slider.settings.infiniteLoop) {
            return 0;
          }
          // we don't move to undefined pages
          return slider.active.index;
          // set active index to requested slide
        }
        return slideIndex;
      };
      /**
             * ===================================================================================
             * = PUBLIC FUNCTIONS
             * ===================================================================================
             */
      /**
             * Performs slide transition to the specified slide
             *
             * @param slideIndex (int)
             *  - the destination slide's index (zero-based)
             *
             * @param direction (string)
             *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
             */
      el.goToSlide = function (slideIndex, direction) {
        // onSlideBefore, onSlideNext, onSlidePrev callbacks
        // Allow transition canceling based on returned value
        var performTransition = true;
        var moveBy = 0;
        var position = { left: 0, top: 0 };
        var lastChild = null;
        var lastShowingIndex; var eq; var value; var
          requestEl;
        // store the old index
        slider.oldIndex = slider.active.index;
        // set new index
        slider.active.index = setSlideIndex(slideIndex);
        // if plugin is currently in motion, ignore request
        if (slider.working || slider.active.index === slider.oldIndex) { return; }
        // declare that plugin is in motion
        slider.working = true;
        performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
        // If transitions canceled, reset and return
        if (typeof (performTransition) !== 'undefined' && !performTransition) {
          slider.active.index = slider.oldIndex; // restore old index
          slider.working = false; // is not in motion
          return;
        }
        if (direction === 'next') {
          // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
          if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
            performTransition = false;
          }
        } else if (direction === 'prev') {
          // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
          if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
            performTransition = false;
          }
        }
        // check if last slide
        slider.active.last = slider.active.index >= getPagerQty() - 1;
        // update the pager with active class
        if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
        // // check for direction control update
        if (slider.settings.controls) { updateDirectionControls(); }
        // if slider is set to mode: "fade"
        if (slider.settings.mode === 'fade') {
          // if adaptiveHeight is true and next height is different from current height, animate to the new height
          if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
            slider.viewport.animate({ height: getViewportHeight() }, slider.settings.adaptiveHeightSpeed);
          }
          // fade out the visible child and reset its z-index value
          slider.children.filter(':visible').fadeOut(slider.settings.speed).css({ zIndex: 0 });
          // fade in the newly requested slide
          slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function () {
            $(this).css('zIndex', slider.settings.slideZIndex);
            updateAfterSlideTransition();
          });
          // slider mode is not "fade"
        } else {
          // if adaptiveHeight is true and next height is different from current height, animate to the new height
          if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
            slider.viewport.animate({ height: getViewportHeight() }, slider.settings.adaptiveHeightSpeed);
          }
          // if carousel and not infinite loop
          if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
            if (slider.settings.mode === 'horizontal') {
              // get the last child position
              lastChild = slider.children.eq(slider.children.length - 1);
              position = lastChild.position();
              // calculate the position of the last slide
              moveBy = slider.viewport.width() - lastChild.outerWidth();
            } else {
              // get last showing index position
              lastShowingIndex = slider.children.length - slider.settings.minSlides;
              position = slider.children.eq(lastShowingIndex).position();
            }
            // horizontal carousel, going previous while on first slide (infiniteLoop mode)
          } else if (slider.carousel && slider.active.last && direction === 'prev') {
            // get the last child position
            eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
            lastChild = el.children('.bx-clone').eq(eq);
            position = lastChild.position();
            // if infinite loop and "Next" is clicked on the last slide
          } else if (direction === 'next' && slider.active.index === 0) {
            // get the last clone position
            position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
            slider.active.last = false;
            // normal non-zero requests
          } else if (slideIndex >= 0) {
            // parseInt is applied to allow floats for slides/page
            requestEl = slideIndex * parseInt(getMoveBy());
            position = slider.children.eq(requestEl).position();
          }
          /* If the position doesn't exist
                     * (e.g. if you destroy the slider on a next click),
                     * it doesn't throw an error.
                     */
          if (typeof (position) !== 'undefined') {
            value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
            // plugin values to be animated
            setPositionProperty(value, 'slide', slider.settings.speed);
          }
          slider.working = false;
        }
        if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
      };
      /**
             * Transitions to the next slide in the show
             */
      el.goToNextSlide = function () {
        // if infiniteLoop is false and last page is showing, disregard call
        if (!slider.settings.infiniteLoop && slider.active.last) { return; }
        if (slider.working === true) { return; }
        var pagerIndex = parseInt(slider.active.index) + 1;
        el.goToSlide(pagerIndex, 'next');
      };
      /**
             * Transitions to the prev slide in the show
             */
      el.goToPrevSlide = function () {
        // if infiniteLoop is false and last page is showing, disregard call
        if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
        if (slider.working === true) { return; }
        var pagerIndex = parseInt(slider.active.index) - 1;
        el.goToSlide(pagerIndex, 'prev');
      };
      /**
             * Starts the auto show
             *
             * @param preventControlUpdate (boolean)
             *  - if true, auto controls state will not be updated
             */
      el.startAuto = function (preventControlUpdate) {
        // if an interval already exists, disregard call
        if (slider.interval) { return; }
        // create an interval
        slider.interval = setInterval(function () {
          if (slider.settings.autoDirection === 'next') {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
        }, slider.settings.pause);
        // allback for when the auto rotate status changes
        slider.settings.onAutoChange.call(el, true);
        // if auto controls are displayed and preventControlUpdate is not true
        if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
      };
      /**
             * Stops the auto show
             *
             * @param preventControlUpdate (boolean)
             *  - if true, auto controls state will not be updated
             */
      el.stopAuto = function (preventControlUpdate) {
        // if slider is auto paused, just clear that state
        if (slider.autoPaused) slider.autoPaused = false;
        // if no interval exists, disregard call
        if (!slider.interval) { return; }
        // clear the interval
        clearInterval(slider.interval);
        slider.interval = null;
        // allback for when the auto rotate status changes
        slider.settings.onAutoChange.call(el, false);
        // if auto controls are displayed and preventControlUpdate is not true
        if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
      };
      /**
             * Returns current slide index (zero-based)
             */
      el.getCurrentSlide = function () {
        return slider.active.index;
      };
      /**
             * Returns current slide element
             */
      el.getCurrentSlideElement = function () {
        return slider.children.eq(slider.active.index);
      };
      /**
             * Returns a slide element
             * @param index (int)
             *  - The index (zero-based) of the element you want returned.
             */
      el.getSlideElement = function (index) {
        return slider.children.eq(index);
      };
      /**
             * Returns number of slides in show
             */
      el.getSlideCount = function () {
        return slider.children.length;
      };
      /**
             * Return slider.working variable
             */
      el.isWorking = function () {
        return slider.working;
      };
      /**
             * Update all dynamic slider elements
             */
      el.redrawSlider = function () {
        // resize all children in ratio to new screen size
        slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
        // adjust the height
        slider.viewport.css('height', getViewportHeight());
        // update the slide position
        if (!slider.settings.ticker) { setSlidePosition(); }
        // if active.last was true before the screen resize, we want
        // to keep it last no matter what screen size we end on
        if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
        // if the active index (page) no longer exists due to the resize, simply set the index as last
        if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
        // if a pager is being displayed and a custom pager is not being used, update it
        if (slider.settings.pager && !slider.settings.pagerCustom) {
          populatePager();
          updatePagerActive(slider.active.index);
        }
        if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
      };
      /**
             * Destroy the current instance of the slider (revert everything back to original state)
             */
      el.destroySlider = function () {
        // don't do anything if slider has already been destroyed
        if (!slider.initialized) { return; }
        slider.initialized = false;
        $('.bx-clone', this).remove();
        slider.children.each(function () {
          if ($(this).data('origStyle') !== undefined) {
            $(this).attr('style', $(this).data('origStyle'));
          } else {
            $(this).removeAttr('style');
          }
        });
        if ($(this).data('origStyle') !== undefined) {
          this.attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
        $(this).unwrap().unwrap();
        if (slider.controls.el) { slider.controls.el.remove(); }
        if (slider.controls.next) { slider.controls.next.remove(); }
        if (slider.controls.prev) { slider.controls.prev.remove(); }
        if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
        $('.bx-caption', this).remove();
        if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
        clearInterval(slider.interval);
        if (slider.settings.responsive) { $(window).off('resize', resizeWindow); }
        if (slider.settings.keyboardEnabled) { $(document).off('keydown', keyPress); }
        // remove self reference in data
        $(this).removeData('bxSlider');
        // remove global window handlers
        $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
      };
      /**
             * Reload the slider (revert all DOM changes, and re-initialize)
             */
      el.reloadSlider = function (settings) {
        if (settings !== undefined) { options = settings; }
        el.destroySlider();
        init();
        // store reference to self in order to access public functions later
        $(el).data('bxSlider', this);
      };
      init();
      $(el).data('bxSlider', this);
      // returns the current jQuery object
      return this;
    };
  }(jQuery));
});
/// <amd-module name="NetSuite.ImageTextOverlay.Instrumentation.Helper"/>
define("NetSuite.ImageTextOverlay.Instrumentation.Helper", ["require", "exports", "SuiteCommerce.PhotoGallery.Instrumentation"], function (require, exports, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ComponentArea = 'SC Photo Gallery';
    var ExtensionVersion = '1.1.2';
    var QueueNameSuffix = '-PhotoGallery';
    var InstrumentationHelper = /** @class */ (function () {
        function InstrumentationHelper() {
        }
        InstrumentationHelper.initializeInstrumentation = function (container) {
            Instrumentation_1.default.initialize({
                environment: container.getComponent('Environment'),
                queueNameSuffix: QueueNameSuffix,
                defaultParameters: {
                    componentArea: ComponentArea,
                    extensionVersion: ExtensionVersion,
                },
            });
        };
        return InstrumentationHelper;
    }());
    exports.InstrumentationHelper = InstrumentationHelper;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Common.Utils"/>
define("SuiteCommerce.PhotoGallery.Common.Utils", ["require", "exports", "jQuery"], function (require, exports, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Device;
    (function (Device) {
        Device[Device["phone"] = 0] = "phone";
        Device[Device["tablet"] = 1] = "tablet";
        Device[Device["desktop"] = 2] = "desktop";
    })(Device || (Device = {}));
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.isPhoneDevice = function () {
            return this.getDeviceType() === Device.phone;
        };
        Utils.isTabletDevice = function () {
            return this.getDeviceType() === Device.tablet;
        };
        Utils.isDesktopDevice = function () {
            return this.getDeviceType() === Device.desktop;
        };
        Utils.getDeviceType = function (widthToCheck) {
            var width = widthToCheck || this.getViewportWidth();
            if (width < 768) {
                return Device.phone;
            }
            if (width < 992) {
                return Device.tablet;
            }
            return Device.desktop;
        };
        Utils.getViewportWidth = function () {
            return jQuery(window).width();
        };
        Utils.trim = function (text) {
            return jQuery.trim(text);
        };
        return Utils;
    }());
    exports.Utils = Utils;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Instrumentation.Fallback.Logger"/>
define("SuiteCommerce.PhotoGallery.Instrumentation.Fallback.Logger", ["require", "exports", "jQuery", "Url"], function (require, exports, jQuery, Url) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var queueErrorTemp = [];
    var queueInfoTemp = [];
    var FallbackLogger = /** @class */ (function () {
        function FallbackLogger(options) {
            var _this = this;
            this.options = options;
            if (!this.isEnabled()) {
                return;
            }
            this.isWaiting = false;
            setInterval(function () {
                _this.processQueues(true);
            }, 60000);
            window.addEventListener('beforeunload', function () {
                _this.processQueues(false);
            });
        }
        Object.defineProperty(FallbackLogger.prototype, "environment", {
            get: function () {
                if (this.options.environment) {
                    return this.options.environment;
                }
                console.error('Please initialize instrumentation with the Environment Component.');
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FallbackLogger.prototype, "queueErrorName", {
            get: function () {
                return "queueError" + this.options.queueNameSuffix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FallbackLogger.prototype, "queueInfoName", {
            get: function () {
                return "queueInfo" + this.options.queueNameSuffix;
            },
            enumerable: true,
            configurable: true
        });
        FallbackLogger.prototype.info = function (obj) {
            if (!this.isEnabled()) {
                return;
            }
            var objWrapper = obj;
            objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
            objWrapper.message = "clientSideLogDateTime: " + new Date().toISOString();
            if (this.isWaiting) {
                queueInfoTemp.push(objWrapper);
            }
            else {
                var queueInfo = JSON.parse(localStorage.getItem(this.queueInfoName)) || [];
                queueInfo.push(objWrapper);
                localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfo));
            }
        };
        FallbackLogger.prototype.error = function (obj) {
            if (!this.isEnabled()) {
                return;
            }
            var objWrapper = obj;
            objWrapper.suiteScriptAppVersion = SC.ENVIRONMENT.RELEASE_METADATA.version;
            objWrapper.message = "clientSideLogDateTime: " + new Date().toISOString();
            if (this.isWaiting) {
                queueErrorTemp.push(objWrapper);
            }
            else {
                var queueError = JSON.parse(localStorage.getItem(this.queueErrorName)) || [];
                queueError.push(objWrapper);
                localStorage.setItem(this.queueErrorName, JSON.stringify(queueError));
            }
        };
        FallbackLogger.prototype.processQueues = function (isAsync) {
            if (!this.isEnabled()) {
                return;
            }
            var parsedURL = new Url().parse(SC.ENVIRONMENT.baseUrl);
            var product = SC.ENVIRONMENT.BuildTimeInf.product;
            var url = parsedURL.schema + "://" + parsedURL.netLoc + "/app/site/hosting/scriptlet.nl" +
                ("?script=customscript_" + product.toLowerCase() + "_loggerendpoint") +
                ("&deploy=customdeploy_" + product.toLowerCase() + "_loggerendpoint");
            var queueError = JSON.parse(localStorage.getItem(this.queueErrorName));
            var queueInfo = JSON.parse(localStorage.getItem(this.queueInfoName));
            if ((queueInfo && queueInfo.length > 0) ||
                (queueError && queueError.length > 0)) {
                this.isWaiting = true;
                var data = {
                    type: product,
                    info: queueInfo,
                    error: queueError,
                };
                if (navigator.sendBeacon) {
                    this.sendDataThroughUserAgent(url, data);
                }
                else {
                    this.sendDataThroughAjaxRequest(url, data, isAsync);
                }
            }
        };
        FallbackLogger.prototype.isEnabled = function () {
            return !this.environment.isPageGenerator();
        };
        FallbackLogger.prototype.sendDataThroughUserAgent = function (url, data) {
            var successfullyTransfer = navigator.sendBeacon(url, JSON.stringify(data));
            if (successfullyTransfer) {
                this.clearQueues();
            }
            else {
                this.appendTemp();
            }
        };
        FallbackLogger.prototype.sendDataThroughAjaxRequest = function (url, data, isAsync) {
            var _this = this;
            jQuery
                .ajax({
                url: url,
                data: JSON.stringify(data),
                type: 'POST',
                async: isAsync,
            })
                .done(function () { return _this.clearQueues(); })
                .fail(function () { return _this.appendTemp(); });
        };
        FallbackLogger.prototype.clearQueues = function () {
            localStorage.setItem(this.queueErrorName, JSON.stringify(queueErrorTemp));
            localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfoTemp));
            queueErrorTemp.length = 0;
            queueInfoTemp.length = 0;
            this.isWaiting = false;
        };
        FallbackLogger.prototype.appendTemp = function () {
            var queueErrorStr = localStorage.getItem(this.queueErrorName);
            var queueInfoStr = localStorage.getItem(this.queueInfoName);
            if (queueErrorTemp.length > 0) {
                var queueError = queueErrorStr == null ? [] : JSON.parse(queueErrorStr);
                localStorage.setItem(this.queueErrorName, JSON.stringify(queueError.concat(queueErrorTemp)));
            }
            if (queueInfoTemp.length > 0) {
                var queueInfo = queueInfoStr == null ? [] : JSON.parse(queueInfoStr);
                localStorage.setItem(this.queueInfoName, JSON.stringify(queueInfo.concat(queueInfoTemp)));
            }
            this.isWaiting = false;
        };
        return FallbackLogger;
    }());
    exports.FallbackLogger = FallbackLogger;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Instrumentation.Log"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
define("SuiteCommerce.PhotoGallery.Instrumentation.Log", ["require", "exports", "SuiteCommerce.PhotoGallery.Instrumentation.Logger"], function (require, exports, Instrumentation_Logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogSeverity;
    (function (LogSeverity) {
        LogSeverity["INFO"] = "info";
        LogSeverity["ERROR"] = "error";
    })(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
    var Log = /** @class */ (function () {
        function Log(attributes) {
            if (attributes === void 0) { attributes = { label: '' }; }
            this.setInitialAttributes(attributes);
        }
        Log.prototype.setInitialAttributes = function (attributes) {
            var defaultAttributes = {
                label: null,
                timer: {},
                severity: LogSeverity.INFO,
            };
            var _a = __assign({}, defaultAttributes, attributes), label = _a.label, parametersToSubmit = _a.parametersToSubmit, timer = _a.timer, severity = _a.severity;
            this.label = label;
            this.parametersToSubmit = parametersToSubmit;
            this.timer = timer;
            this.severity = severity;
        };
        Log.prototype.startTimer = function () {
            this.timer.startTime = this.getTimestamp();
        };
        Log.prototype.endTimer = function () {
            this.timer.endTime = this.getTimestamp();
        };
        Log.prototype.getTimestamp = function () {
            if (!this.isOldInternetExplorer()) {
                return performance.now() || Date.now();
            }
            return Date.now();
        };
        Log.prototype.getElapsedTimeForTimer = function () {
            var timer = this.timer;
            if (timer.startTime && timer.endTime) {
                if (timer.startTime > timer.endTime) {
                    console.warn('Start time should be minor that end time in timer');
                    return null;
                }
                return timer.endTime - timer.startTime;
            }
            if (!timer.startTime)
                console.warn('The Start time is not defined');
            if (!timer.endTime)
                console.warn('The End time is not defined');
            return null;
        };
        Log.prototype.setParameters = function (data) {
            var _this = this;
            Object.keys(data).forEach(function (parameter) {
                _this.setParameter(parameter, data[parameter]);
            });
        };
        Log.prototype.setParameter = function (parameter, value) {
            var logData = this.parametersToSubmit;
            logData[parameter] = value;
            this.parametersToSubmit = logData;
        };
        Log.prototype.submit = function () {
            if (!this.isOldInternetExplorer()) {
                switch (this.severity) {
                    case LogSeverity.ERROR:
                        this.submitAsError();
                        break;
                    case LogSeverity.INFO:
                    default:
                        this.submitAsInfo();
                }
            }
        };
        Log.prototype.isOldInternetExplorer = function () {
            return !!navigator.userAgent.match(/Trident/g) || !!navigator.userAgent.match(/MSIE/g);
        };
        Log.prototype.submitAsError = function () {
            Instrumentation_Logger_1.Logger.getLogger().error(this.parametersToSubmit);
        };
        Log.prototype.submitAsInfo = function () {
            Instrumentation_Logger_1.Logger.getLogger().info(this.parametersToSubmit);
        };
        return Log;
    }());
    exports.Log = Log;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Instrumentation.Logger"/>
define("SuiteCommerce.PhotoGallery.Instrumentation.Logger", ["require", "exports", "SuiteCommerce.PhotoGallery.Instrumentation.Fallback.Logger", "SuiteCommerce.PhotoGallery.Instrumentation.MockAppender"], function (require, exports, Instrumentation_FallbackLogger_1, Instrumentation_MockAppender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.getLogger = function () {
            this.instance = this.instance || this.buildLoggerInstance();
            return this.instance;
        };
        Logger.buildLoggerInstance = function () {
            var _a;
            try {
                // @ts-ignore
                var LoggersModule = require('Loggers').Loggers;
                // @ts-ignore
                var elasticAppender = require('Loggers.Appender.ElasticLogger')
                    .LoggersAppenderElasticLogger.getInstance();
                // Just for test purposes in local environments: the output of MockApppender is the browser console.
                var mockAppender = Instrumentation_MockAppender_1.MockAppender.getInstance();
                // @ts-ignore
                var configurationModule = require('Loggers.Configuration');
                var loggerName = "CommerceExtensions" + Logger.options.queueNameSuffix;
                LoggersModule.setConfiguration((_a = {},
                    _a[loggerName] = {
                        log: [
                            { profile: configurationModule.prod, appenders: [elasticAppender] },
                            { profile: configurationModule.dev, appenders: [mockAppender] }
                        ],
                        actions: {},
                        loggers: {},
                    },
                    _a));
                return LoggersModule.getLogger(loggerName);
            }
            catch (e) {
                return new Instrumentation_FallbackLogger_1.FallbackLogger(this.options);
            }
        };
        return Logger;
    }());
    exports.Logger = Logger;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Instrumentation.MockAppender"/>
define("SuiteCommerce.PhotoGallery.Instrumentation.MockAppender", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MockAppender = /** @class */ (function () {
        function MockAppender() {
        }
        MockAppender.prototype.info = function (data) {
            console.info('MockAppender - Info', data);
        };
        MockAppender.prototype.error = function (data) {
            console.error('MockAppender - Error', data);
        };
        MockAppender.getInstance = function () {
            if (!MockAppender.instance) {
                MockAppender.instance = new MockAppender();
            }
            return MockAppender.instance;
        };
        return MockAppender;
    }());
    exports.MockAppender = MockAppender;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Instrumentation"/>
define("SuiteCommerce.PhotoGallery.Instrumentation", ["require", "exports", "underscore", "SuiteCommerce.PhotoGallery.Instrumentation.Logger", "SuiteCommerce.PhotoGallery.Instrumentation.Log"], function (require, exports, _, Instrumentation_Logger_1, Instrumentation_Log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var logs = [];
    exports.default = {
        initialize: function (options) {
            Instrumentation_Logger_1.Logger.options = options;
        },
        getLog: function (logLabel) {
            return this.getLogModelByLabel(logLabel) || this.registerNewLog(logLabel);
        },
        getLogModelByLabel: function (label) {
            return _(logs).findWhere({ label: label });
        },
        registerNewLog: function (label) {
            var defaultParameters = _.clone(Instrumentation_Logger_1.Logger.options.defaultParameters);
            var log = new Instrumentation_Log_1.Log({ label: label, parametersToSubmit: defaultParameters });
            logs.push(log);
            return log;
        },
        setParameterForAllLogs: function (parameter, value) {
            logs.forEach(function (log) {
                log.setParameter(parameter, value);
            });
        },
        setParametersForAllLogs: function (data) {
            logs.forEach(function (log) {
                log.setParameters(data);
            });
        },
        submitLogs: function () {
            logs.forEach(function (log) {
                log.submit();
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.PhotoGallery.CCT.BaseView"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.PhotoGallery.CCT.BaseView", ["require", "exports", "photogallery.tpl", "SuiteCommerce.PhotoGallery.Photo.Collection", "SuiteCommerce.PhotoGallery.CCT.Settings", "SuiteCommerce.Photo.Model", "SuiteCommerce.PhotoGallery.Gallery.View", "CustomContentType.Base.View", "jQuery"], function (require, exports, photoGalleryTemplate, PhotoGallery_Photo_Collection_1, PhotoGallery_CCT_Settings_1, PhotoGallery_Gallery_Model_1, PhotoGallery_Gallery_View_1, CustomContentTypeBaseView, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhotoGalleryCCTBaseView = /** @class */ (function (_super) {
        __extends(PhotoGalleryCCTBaseView, _super);
        function PhotoGalleryCCTBaseView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = photoGalleryTemplate;
            _this.container = options && options.container;
            return _this;
        }
        Object.defineProperty(PhotoGalleryCCTBaseView.prototype, "childViews", {
            get: function () {
                return {
                    GalleryView: function () {
                        var photoGalleryCollectionAttributes = this.cctSettings.getImagesAttributes();
                        var photosCollection = new PhotoGallery_Photo_Collection_1.PhotoCollection(photoGalleryCollectionAttributes);
                        var galleryModel = new PhotoGallery_Gallery_Model_1.GalleryModel({
                            photosCollection: photosCollection,
                            isCarouselEnabled: this.cctSettings.isCarouselEnabled(),
                            openLinksInNewWindow: this.cctSettings.openLinksInNewWindow(),
                            galleryHeightClassName: this.cctSettings.getGalleryHeightClass(),
                            galleryStyle: this.cctSettings.getGalleryStyle(),
                            imageHoverAnimationType: this.cctSettings.getImageHoverAnimationType(),
                            carouselAnimationTime: this.cctSettings.getCarouselAnimationTime(),
                            columnsPerRow: this.cctSettings.getColumnsPerRow(),
                        });
                        return new PhotoGallery_Gallery_View_1.GalleryView({
                            model: galleryModel,
                            container: this.container,
                        });
                    },
                };
            },
            enumerable: true,
            configurable: true
        });
        PhotoGalleryCCTBaseView.prototype.install = function (settings, contextData) {
            this.cctSettings = new PhotoGallery_CCT_Settings_1.PhotoGalleryCCTSettings(settings, this.container);
            return jQuery.Deferred().resolve();
        };
        PhotoGalleryCCTBaseView.prototype.update = function (settings) {
            this.cctSettings = new PhotoGallery_CCT_Settings_1.PhotoGalleryCCTSettings(settings, this.container);
            return jQuery.Deferred().resolve();
        };
        return PhotoGalleryCCTBaseView;
    }(CustomContentTypeBaseView));
    exports.PhotoGalleryCCTBaseView = PhotoGalleryCCTBaseView;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.CCT.Settings" />
define("SuiteCommerce.PhotoGallery.CCT.Settings", ["require", "exports", "Utilities.ResizeImage", "SuiteCommerce.PhotoGallery.Common.Utils", "underscore"], function (require, exports, resizeImage, Utils_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MAX_PHOTOS = 8;
    var COLUMNS_PER_ROW = 4;
    var CAROUSEL_GALLERY_STYLE = 2;
    var GALLERY_HEIGHT = {
        1: 'gallery-height-sm',
        2: 'gallery-height-md',
        3: 'gallery-height-lg',
    };
    var IMAGE_ALIGNMENT = {
        1: 'image-alignment-left-top',
        2: 'image-alignment-left-middle',
        3: 'image-alignment-left-bottom',
        4: 'image-alignment-center-top',
        5: 'image-alignment-center-middle',
        6: 'image-alignment-center-bottom',
        7: 'image-alignment-right-top',
        8: 'image-alignment-right-middle',
        9: 'image-alignment-right-bottom',
    };
    var IMAGE_OVERLAY = {
        1: '',
        2: 'content-dark',
        3: 'content-light',
    };
    var TEXT_COLOR = {
        1: 'text-dark',
        2: 'text-light',
    };
    var TEXT_ALIGNMENT = {
        1: 'text-alignment-left-top',
        2: 'text-alignment-left-middle',
        3: 'text-alignment-left-bottom',
        4: 'text-alignment-center-top',
        5: 'text-alignment-center-middle',
        6: 'text-alignment-center-bottom',
        7: 'text-alignment-right-top',
        8: 'text-alignment-right-middle',
        9: 'text-alignment-right-bottom',
    };
    var IMAGES_HOVER_ANIMATION = {
        1: '',
        2: 'image-scale-up',
        3: 'image-scale-down',
        4: 'image-drop-shadow-center',
        5: 'image-drop-shadow-top',
        6: 'image-drop-shadow-bottom',
    };
    var CAROUSEL_ANIMATION_TIME = {
        1: '0',
        2: '5000',
        3: '7000',
        4: '10000',
    };
    var PhotoGalleryCCTSettings = /** @class */ (function () {
        function PhotoGalleryCCTSettings(cctSettings, container) {
            this.cctSettings = cctSettings;
            this.container = container;
        }
        PhotoGalleryCCTSettings.prototype.getImagesAttributes = function () {
            var imagesAttributes = [];
            for (var i = 1; i <= MAX_PHOTOS; i++) {
                var imageAttributes = this.getImageAttributes(i);
                if (imageAttributes.imageURL) {
                    imagesAttributes.push(imageAttributes);
                }
            }
            return imagesAttributes;
        };
        PhotoGalleryCCTSettings.prototype.getImageAttributes = function (itemNumber) {
            var imageURL = Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_img" + itemNumber + "_url"]);
            var imageAltText = Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_alttext" + itemNumber]);
            var imageAlignment = this.getImageAlignmentClass(parseInt(Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_img_align" + itemNumber]), 10));
            var imageOverlay = this.getImageOverlayClass(parseInt(Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_overlay" + itemNumber]), 10));
            var heading = Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_caption" + itemNumber]);
            var description = Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_desc" + itemNumber]);
            var textAlignment = this.getTextAligmentClass(parseInt(this.cctSettings["custrecord_ns_sc_ext_pg_text_align" + itemNumber], 10));
            var textColor = this.getTextColorClass(parseInt(Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_txtcolor" + itemNumber]), 10));
            var link = Utils_1.Utils.trim(this.cctSettings["custrecord_ns_sc_ext_pg_link" + itemNumber]);
            imageURL = imageURL ? this.getImageResizingURL(imageURL) : '';
            return {
                imageURL: imageURL,
                imageAltText: imageAltText,
                imageAlignment: imageAlignment,
                imageOverlay: imageOverlay,
                heading: heading,
                description: description,
                textAlignment: textAlignment,
                textColor: textColor,
                link: link,
                id: itemNumber,
            };
        };
        PhotoGalleryCCTSettings.prototype.getMaxPhotosQuantity = function () {
            return MAX_PHOTOS;
        };
        PhotoGalleryCCTSettings.prototype.getColumnsPerRow = function () {
            return COLUMNS_PER_ROW;
        };
        PhotoGalleryCCTSettings.prototype.getGalleryHeightClass = function () {
            var galleryHeightId = parseInt(this.cctSettings['custrecord_ns_sc_ext_pg_height'] || '1', 10);
            return GALLERY_HEIGHT[galleryHeightId];
        };
        PhotoGalleryCCTSettings.prototype.getGalleryStyle = function () {
            return Utils_1.Utils.trim(this.cctSettings['custrecord_ns_sc_ext_pg_style']) || '1';
        };
        PhotoGalleryCCTSettings.prototype.getImageHoverAnimationType = function () {
            var imageHoverAnimation = parseInt(Utils_1.Utils.trim(this.cctSettings['custrecord_ns_sc_ext_pg_hover_animation']) || '1', 10);
            return IMAGES_HOVER_ANIMATION[imageHoverAnimation];
        };
        PhotoGalleryCCTSettings.prototype.getCarouselAnimationTime = function () {
            var carouselAnimationTime = parseInt(Utils_1.Utils.trim(this.cctSettings['custrecord_ns_sc_ext_pg_carousel_anim']) || '1', 10);
            return parseInt(CAROUSEL_ANIMATION_TIME[carouselAnimationTime], 10);
        };
        PhotoGalleryCCTSettings.prototype.isCarouselEnabled = function () {
            return parseInt(Utils_1.Utils.trim(this.cctSettings['custrecord_ns_sc_ext_pg_style']), 10) === CAROUSEL_GALLERY_STYLE;
        };
        PhotoGalleryCCTSettings.prototype.openLinksInNewWindow = function () {
            return Utils_1.Utils.trim(this.cctSettings['custrecord_ns_sc_ext_pg_newwindow']) === 'T';
        };
        PhotoGalleryCCTSettings.prototype.getImageAlignmentClass = function (imageAlignmentIndex) {
            return IMAGE_ALIGNMENT[imageAlignmentIndex];
        };
        PhotoGalleryCCTSettings.prototype.getImageOverlayClass = function (imageOverlayIndex) {
            return IMAGE_OVERLAY[imageOverlayIndex];
        };
        PhotoGalleryCCTSettings.prototype.getTextColorClass = function (textColorIndex) {
            return TEXT_COLOR[textColorIndex];
        };
        PhotoGalleryCCTSettings.prototype.getTextAligmentClass = function (textAlignmentIndex) {
            return TEXT_ALIGNMENT[textAlignmentIndex];
        };
        PhotoGalleryCCTSettings.prototype.getImageResizingURL = function (url) {
            var environment = this.container.getComponent('Environment');
            var siteSettings = environment.getSiteSetting();
            var imageSizeDefaultID = 'zoom';
            var imageSizeCustomID = Utils_1.Utils.trim(this.cctSettings['custrecord_sc_ext_pg_image_size_id']);
            var imageSizeCustom = _.find(siteSettings.imagesizes, function (imageResizing) {
                // @ts-ignore
                return imageResizing.name === imageSizeCustomID;
            });
            // @ts-ignore
            var imageSizeID = (imageSizeCustom && imageSizeCustom.name) || imageSizeDefaultID;
            return resizeImage(url, imageSizeID);
        };
        return PhotoGalleryCCTSettings;
    }());
    exports.PhotoGalleryCCTSettings = PhotoGalleryCCTSettings;
});
/// <amd-module name="SuiteCommerce.Photo.Model" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.Photo.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryModel = /** @class */ (function (_super) {
        __extends(GalleryModel, _super);
        function GalleryModel(modelAttributes) {
            return _super.call(this, modelAttributes) || this;
        }
        return GalleryModel;
    }(Backbone_1.Model));
    exports.GalleryModel = GalleryModel;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Gallery.View" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.PhotoGallery.Gallery.View", ["require", "exports", "photogallery_gallery.tpl", "SuiteCommerce.PhotoGallery.Photo.Collection", "Backbone", "SuiteCommerce.PhotoGallery.Common.Utils", "SuiteCommerce.PhotoGallery.Instrumentation", "BxSlider"], function (require, exports, galleryTemplate, PhotoGallery_Photo_Collection_1, Backbone_1, Utils_1, Instrumentation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryView = /** @class */ (function (_super) {
        __extends(GalleryView, _super);
        function GalleryView(options) {
            var _this = _super.call(this, options) || this;
            _this.template = galleryTemplate;
            _this.container = options.container;
            _this.on('afterViewRender', function () {
                var environment = _this.container.getComponent('Environment');
                // Add link to each photo
                _this.model.get('photosCollection').each(function (photo) {
                    _this.addLink(photo);
                });
                // Run carousel plugin is needed
                if (!environment.isPageGenerator() && _this.model.get('isCarouselEnabled')) {
                    var numberOfSlides = _this.$('.gallery-slider').children().length;
                    if (numberOfSlides > _this.model.get('columnsPerRow')) {
                        setTimeout(function () {
                            var gallerySize = _this.$('.photogallerycct-container').width();
                            var galleryOptions = _this.getSliderOptions(gallerySize);
                            // @ts-ignore
                            _this.$('.gallery-slider').bxSliderNew(galleryOptions);
                        }, 10);
                    }
                }
            });
            return _this;
        }
        GalleryView.prototype.getGalleryRows = function (enableCarousel) {
            var photos = this.model.get('photosCollection');
            var rows = enableCarousel ? [photos] : this.separatePhotosIntoRows(photos);
            var galleryRows = [];
            for (var i = 0; i < rows.length; i++) {
                var rowPhotos = rows[i];
                galleryRows.push({
                    photos: rowPhotos.toJSON(),
                    columnSize: 12 / this.getNumberOfPhotosToDisplay(enableCarousel, rowPhotos.length),
                });
            }
            return galleryRows;
        };
        GalleryView.prototype.separatePhotosIntoRows = function (photos) {
            var rows = [];
            var rowPhotos = null;
            for (var i = 0; i < photos.length; i++) {
                if (rowPhotos === null || rowPhotos.length % this.model.get('columnsPerRow') === 0) {
                    rowPhotos = new PhotoGallery_Photo_Collection_1.PhotoCollection();
                    rows.push(rowPhotos);
                }
                rowPhotos.add(photos.at(i));
            }
            return rows;
        };
        GalleryView.prototype.getSliderOptions = function (gallerySize) {
            var slideSize = this.getSlideSize(gallerySize);
            var self = this;
            return {
                slideSelector: '.column-container',
                slideWidth: slideSize,
                nextText: Utils_1.Utils.isPhoneDevice() ? '' : '<a class="next-icon"></a>',
                prevText: Utils_1.Utils.isPhoneDevice() ? '' : '<a class="prev-icon"></a>',
                minSlides: Utils_1.Utils.isPhoneDevice() ? 1 : this.model.get('columnsPerRow'),
                maxSlides: Utils_1.Utils.isPhoneDevice() ? 1 : this.model.get('columnsPerRow'),
                moveSlides: 1,
                touchEnabled: true,
                auto: this.model.get('carouselAnimationTime') > 0,
                pause: this.model.get('carouselAnimationTime'),
                pager: true,
                onSliderResize: function () {
                    self.reloadSliderOnResize(this);
                },
            };
        };
        GalleryView.prototype.getSlideSize = function (gallerySize) {
            if (Utils_1.Utils.isPhoneDevice()) {
                return gallerySize;
            }
            var numberOfSlides = this.$('.gallery-slider').children().length;
            return gallerySize / this.getNumberOfPhotosToDisplay(this.model.get('isCarouselEnabled'), numberOfSlides);
        };
        GalleryView.prototype.getNumberOfPhotosToDisplay = function (enableCarousel, numberOfPhotos) {
            if (Utils_1.Utils.isPhoneDevice()) {
                return 1;
            }
            return enableCarousel ? this.model.get('columnsPerRow') : numberOfPhotos;
        };
        GalleryView.prototype.reloadSliderOnResize = function (el) {
            var elementContainer = $(el).closest('.photogallerycct-container');
            if (elementContainer) {
                var newContainerWidth = $(elementContainer).width();
                var sliderOptions = this.getSliderOptions(newContainerWidth);
                // @ts-ignore
                el.reloadSlider(sliderOptions);
            }
        };
        GalleryView.prototype.addLink = function (photo) {
            var _this = this;
            var linkTarget = this.$('div.photo-id-' + photo.get('id'));
            var isParentNotALinkTag = !this.$(linkTarget).parent().is('a');
            var target = this.model.get('openLinksInNewWindow') ? '_blank' : '';
            if (isParentNotALinkTag && photo.get('link')) {
                var $anchorElement = jQuery('<a>');
                $anchorElement.attr('href', photo.get('link'));
                if (target)
                    $anchorElement.attr('target', target);
                $anchorElement.on('click', function () { return _this.sendInstrumentationHitForClickOnImage(photo.get('link')); });
                this.$(linkTarget).wrap($anchorElement);
            }
        };
        GalleryView.prototype.sendInstrumentationHitForClickOnImage = function (imageLinkUrl) {
            var log = Instrumentation_1.default.getLog('clickOnImage');
            log.setParameters({
                componentArea: 'SC Photo Gallery',
                activity: 'Click on gallery image',
                message: imageLinkUrl,
            });
            log.submit();
        };
        GalleryView.prototype.getContext = function () {
            var photosCollection = this.model.get('photosCollection');
            var isCarouselEnabled = this.model.get('isCarouselEnabled') && photosCollection.length > this.model.get('columnsPerRow');
            var galleryRows = this.getGalleryRows(isCarouselEnabled);
            var galleryStyle = isCarouselEnabled ? 'carousel' : 'grid';
            var imageHoverAnimationType = !isCarouselEnabled ? this.model.get('imageHoverAnimationType') : '';
            return {
                isCarouselEnabled: isCarouselEnabled,
                galleryRows: galleryRows,
                galleryStyle: galleryStyle,
                imageHoverAnimationType: imageHoverAnimationType,
                galleryHeight: this.model.get('galleryHeightClassName'),
            };
        };
        return GalleryView;
    }(Backbone_1.View));
    exports.GalleryView = GalleryView;
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Photo.Collection"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommerce.PhotoGallery.Photo.Collection", ["require", "exports", "SuiteCommercePhotoGallery.Photo.Model", "Backbone"], function (require, exports, PhotoGallery_Photo_Model_1, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhotoCollection = /** @class */ (function (_super) {
        __extends(PhotoCollection, _super);
        function PhotoCollection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PhotoCollection.prototype, "model", {
            get: function () { return PhotoGallery_Photo_Model_1.PhotoModel; },
            enumerable: true,
            configurable: true
        });
        return PhotoCollection;
    }(Backbone_1.Collection));
    exports.PhotoCollection = PhotoCollection;
});
/// <amd-module name="SuiteCommercePhotoGallery.Photo.Model"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("SuiteCommercePhotoGallery.Photo.Model", ["require", "exports", "Backbone"], function (require, exports, Backbone_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PhotoModel = /** @class */ (function (_super) {
        __extends(PhotoModel, _super);
        function PhotoModel(modelAttributes) {
            var _this = _super.call(this, modelAttributes) || this;
            _this.modelAttributes = modelAttributes;
            return _this;
        }
        PhotoModel.prototype.isEmpty = function () {
            return !this.get('imageURL');
        };
        return PhotoModel;
    }(Backbone_1.Model));
    exports.PhotoModel = PhotoModel;
});
/// <amd-module name="SuiteCommerce.PhotoGallery"/>
define("SuiteCommerce.PhotoGallery", ["require", "exports", "SuiteCommerce.PhotoGallery.CCT.BaseView", "NetSuite.ImageTextOverlay.Instrumentation.Helper"], function (require, exports, PhotoGallery_CCT_BaseView_1, Instrumentation_Helper_1) {
    "use strict";
    return {
        mountToApp: function (container) {
            Instrumentation_Helper_1.InstrumentationHelper.initializeInstrumentation(container);
            container.getComponent('CMS').registerCustomContentType({
                id: 'cct_netsuite_photogallerycct',
                view: PhotoGallery_CCT_BaseView_1.PhotoGalleryCCTBaseView,
                options: {
                    container: container,
                },
            });
        },
    };
});
/// <amd-module name="SuiteCommerce.PhotoGallery.Main"/>
define("SuiteCommerce.PhotoGallery.Main", ["require", "exports", "SuiteCommerce.PhotoGallery"], function (require, exports, PhotoGalleryModuleCCT) {
    "use strict";
    return {
        mountToApp: function (container) {
            PhotoGalleryModuleCCT.mountToApp(container);
        },
    };
});
};
extensions['SC.ThreadsThemeExtension.3.3.0'] = function(){
function getExtensionAssetsPath(asset){
return 'extensions/SC/ThreadsThemeExtension/3.3.0/' + asset;
};
define('SC.ThreadsThemeExtension.ApplicationSkeleton.Layout', [
  'SC.ThreadsThemeExtension.Common.UtilitiesHelper'
], function QSApplicationSkeletonLayout(
  Utils
) {
  'use strict';
  return {
    loadModule: function loadModule() {
        var HeaderHeight;
        jQuery(window).scroll(function () {
        if (!HeaderHeight){
          HeaderHeight = jQuery('#site-header').outerHeight(true);
        }
        var y = jQuery(this).scrollTop();
        //Mobile fixed header is not optional, so we'll run it from outside the fixedHeader conditional.
        if ($(window).width() < 992) {//checking the screen-size
          if (jQuery('header').hasClass('checkout-layout-header')) {
            //do nothing
          } else {
            if (y >= 100 && y < 200) {//the header is a lot smaller, so we'll set a 100points scroll instead of 300
              jQuery('body').addClass('fixed-header-mobile');
              jQuery('#main-container').css('padding-top', '0px');//this resolve a weird responsive behavior.
            }
            if (y < 99) {
              jQuery('body').removeClass('fixed-header-mobile');
            }
          }
        }
      });
    }
  }
});
define('SC.ThreadsThemeExtension.Common.Configuration', [], function () {
  'use strict';
  var environment = null;
  return {
    setEnvironment: function (environmentComponent) {
      environment = environmentComponent;
    },
    get: function (key) {
      if (environment) {
        return environment.getConfig(key);
      }
      console.error('Please set the Env.Component in the Layout Helper.');
      return null;
    },
    getOverallConfiguration: function () {
      return environment.application.getConfig();
    },
		getSiteSettings: function() {
    	return environment.getSiteSetting();
		}
  };
});
define('SC.ThreadsThemeExtension.Common.LayoutHelper', [], function () {
  'use strict';
  var layoutComponent = null;
  return {
    setLayoutComponent: function (environmentComponent) {
      layoutComponent = environmentComponent;
    },
    addToViewContextDefinition: function (
      viewId,
      propertyName,
      type,
      callback
    ) {
      if (layoutComponent) {
        return layoutComponent.addToViewContextDefinition(
          viewId,
          propertyName,
          type,
          callback
        );
      }
      console.error('Please set the Layout Component in the Layout Helper.');
      return null;
    }
  };
});
define('SC.ThreadsThemeExtension.Common.UtilitiesHelper', [], function () {
    'use strict';
    return {
      toggleViewportToMobileSupport: function toggleViewportToMobileSupport() {
        var viewport = document.head.querySelector("meta[name='viewport']");
        var mobileSupport = "width=device-width, initial-scale=1.0";
        viewport.content = mobileSupport;
      },
      // This was added because isPhoneDevice property is not exposed yet, 
      // This helper was added because the following enhacement: https://jira.corp.netsuite.com/browse/SCTHEMES-415
      // Snippet extracted from: https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
      isMobile: function isMobile() {
        var hasTouchScreen = false;
        if ("maxTouchPoints" in navigator) {
          hasTouchScreen = navigator.maxTouchPoints > 0;
        } else if ("msMaxTouchPoints" in navigator) {
          hasTouchScreen = navigator.msMaxTouchPoints > 0;
        } else {
          var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
          if (mQ && mQ.media === "(pointer:coarse)") {
            hasTouchScreen = !!mQ.matches;
          } else if ('orientation' in window) {
            hasTouchScreen = true; // deprecated, but good fallback
          } else {
            // Only as a last resort, fall back to user agent sniffing
            var UA = navigator.userAgent;
            hasTouchScreen = (
              /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
              /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
            );
          }
        }
        return hasTouchScreen;
      }
    };
  });
define('SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View', [
  'underscore',
  'SC.ThreadsThemeExtension.Common.Configuration',
  'SC.ThreadsThemeExtension.Common.LayoutHelper'
], function ThemeExtensionErrorManagementPageNotFoundView(
  _,
  Configuration,
  LayoutHelper
) {
  'use strict';
  return {
    loadModule: function loadModule() {
      LayoutHelper.addToViewContextDefinition(
        'ErrorManagement.PageNotFound.View',
        'extraErrorMgtPageNotFoundView',
        'object',
        function () {
          return {
            backgroundImage: Configuration.get(
              'errorManagementPageNotFound.pageNotFoundBgrImg'
            ),
            backgroundColor: Configuration.get(
              'errorManagementPageNotFound.bkgdColor'
            ),
            title: Configuration.get('errorManagementPageNotFound.title'),
            text: Configuration.get('errorManagementPageNotFound.text'),
            btnText: Configuration.get('errorManagementPageNotFound.btnText'),
            btnHref: Configuration.get('errorManagementPageNotFound.btnHref')
          };
        }
      );
    }
  };
});
define('SC.ThreadsThemeExtension.Footer', [
  'underscore',
  'SC.ThreadsThemeExtension.Common.Configuration',
  'SC.ThreadsThemeExtension.Common.LayoutHelper',
  'jQuery'
], function ThemeExtensionFooter(_, Configuration, LayoutHelper, jQuery) {
  'use strict';
  var getColLinks = function getColLinks(whichColumn) {
    // for large format footer with up to four columns of links
    var multiColLinks = Configuration.get('footer.multiColLinks', []);
    var targetColLinks = jQuery.grep(multiColLinks, function targetColLinks(e) {
      return e.column === whichColumn;
    });
    return targetColLinks;
  };
  return {
    loadModule: function loadModule() {
      // for Social Media Links
      var socialMediaLinks = Configuration.get('footer.socialMediaLinks', []);
      // for Copyright message
      var initialConfigYear = Configuration.get('footer.copyright.initialYear');
      var initialYear = initialConfigYear
        ? parseInt(initialConfigYear, 10)
        : new Date().getFullYear();
      var currentYear = new Date().getFullYear();
      LayoutHelper.addToViewContextDefinition(
        'Footer.View',
        'extraFooterViewContext',
        'object',
        function () {
          return {
            col1Links: getColLinks('Column 1'),
            col2Links: getColLinks('Column 2'),
            col3Links: getColLinks('Column 3'),
            col4Links: getColLinks('Column 4'),
            title: Configuration.get('footer.title'),
            socialMediaLinks: socialMediaLinks,
            socialMediaLinksTitle: Configuration.get(
              'footer.socialMediaLinksTitle'
            ),
            copyright: {
              hide: !!Configuration.get('footer.copyright.hide'),
              companyName: Configuration.get('footer.copyright.companyName'),
              initialYear: initialYear,
              currentYear: currentYear,
              showRange: initialYear < currentYear
            },
            showLegacyNewsletter: Configuration.get(
              'footer.showLegacyNewsletter'
            )
          };
        }
      );
    }
  };
});
define('SC.ThreadsThemeExtension.Header', [
  'underscore',
  'SC.ThreadsThemeExtension.Common.Configuration',
  'SC.ThreadsThemeExtension.Common.LayoutHelper'
], function ThemeExtensionHeader(_, Configuration, LayoutHelper) {
  'use strict';
  return {
    loadModule: function loadModule() {
      LayoutHelper.addToViewContextDefinition(
        'Header.View',
        'extraHeaderView',
        'object',
        function () {
          return {
            bannertext: Configuration.get('header.bannerText')
          };
        }
      );
    }
  };
});
define('SC.ThreadsThemeExtension.HeaderLogo', [
  'SC.ThreadsThemeExtension.LogoView'
], function HeaderSideBarLogoView(HeaderLogoView) {
  'use strict';
  return {
    loadModule: function loadModule(application) {
      var layout = application.getComponent('Layout');
      layout.addChildViews(layout.DEFAULT_VIEW, {
        'Header.SideBarLogo.View': {
          LogoView: {
            childViewIndex: 5,
            childViewConstructor: function childViewConstructor() {
              return new HeaderLogoView();
            }
          }
        }
      });
      layout.addChildViews(layout.DEFAULT_VIEW, {
        'Footer.Logo.View': {
          LogoView: {
            childViewIndex: 5,
            childViewConstructor: function childViewConstructor() {
              return new HeaderLogoView();
            }
          }
        }
      });
    }
  };
});
define('SC.ThreadsThemeExtension.LogoView', [
	'sc-threads-logo.tpl',
	'Backbone','Utils',
	'SC.ThreadsThemeExtension.Common.Configuration'
], function (
	Template, 
	Backbone, 
	Utils, 
	Configuration
) {
	'use strict';
	return Backbone.View.extend({
		template: Template,
		getContext: function() {
			return {
				logoUrl: Utils.getAbsoluteUrlOfNonManagedResources(
					Configuration.get('header.logoUrl')
				),
				headerLinkHref: '/',
				headerLinkTouchPoint: 'home',
				headerLinkHashtag: '#',
				headerLinkTitle: Configuration.getSiteSettings().displayname
			}
		}
	})
})
define('SC.ThreadsThemeExtension.Home', [
  'underscore',
  'SC.ThreadsThemeExtension.Common.Configuration',
  'SC.ThreadsThemeExtension.Common.LayoutHelper'
], function ThemeExtensionHome(_, Configuration, LayoutHelper) {
  'use strict';
  return {
    loadModule: function loadModule() {
      var carousel = Configuration.get('home.themeCarouselImages', []);
      var infoblock = Configuration.get('home.infoblock', []);
      var infoblockTile = false;
      var showCarousel = false;
      var carouselObj;
      var isReady = false;
      LayoutHelper.addToViewContextDefinition(
        'Home.View',
        'extraHomeViewContext',
        'object',
        function (context) {
          carouselObj = context.carousel;
          isReady =
            _.has(context, 'isReady') && !_.isUndefined(context.isReady)
              ? context.isReady
              : true;
          if (!_.isEmpty(carouselObj)) {
            _.each(carouselObj, function (carousel) {
              if (!_.isEmpty(carousel.image)) {
                _.extend(carousel, {
                  isAbsoluteUrl: carousel.image.indexOf('core/media') !== -1
                });
              }
            });
          } else {
            carouselObj = carousel;
          }
          return {
            isReady: isReady,
            showCarousel: carouselObj && !!carouselObj.length,
            carousel: carouselObj,
            infoblock: infoblock,
            freeTextText: _(
              Configuration.get('home.freeTextText', '')
            ).translate(),
            freeTextTitle: _(
              Configuration.get('home.freeTextTitle')
            ).translate(),
            freeTextSubtitle: _(
              Configuration.get('home.freeTextSubtitle')
            ).translate(),
            freeTextBtnText: _(
              Configuration.get('home.freeTextBtnText')
            ).translate(),
            freeTextBtnHref: _(
              Configuration.get('home.freeTextBtnHref')
            ).translate()
          };
        }
      );
    }
  };
});
define('SC.ThreadsThemeExtension.HomeCMS', [
    'home_layout_flex.tpl',
    'Utils',
    'underscore'
], function (
    home_layout_flex,
    Utils,
    _
) {
    'use strict';
    return  {
        mountToApp: function mountToApp (application) {
            var pageType = application.getComponent('PageType');
            pageType.registerTemplate({
                pageTypes: ['home-page'],
                template: {
                    name: 'home_layout_flex.tpl',
                    displayName: 'Home Flex',
                    thumbnail: Utils.getThemeAbsoluteUrlOfNonManagedResources('img/layout-home-flex.png')
                }
            });
        }
    };
});
define('SC.ThreadsThemeExtension.ItemRelations.SC.Configuration', [
  'SC.ThreadsThemeExtension.Common.Configuration'
], function ThemeExtensionItemRelations(Configuration) {
  'use strict';
  return {
    loadModule: function loadModule() {
      var overallConfiguration = Configuration.getOverallConfiguration();
      if (
        overallConfiguration.bxSliderDefaults &&
        overallConfiguration.bxSliderDefaults.slideWidth
      ) {
        overallConfiguration.bxSliderDefaults.slideWidth = 296;
        overallConfiguration.bxSliderDefaults.maxSlides = 4;
      }
    }
  };
});
define('SC.ThreadsThemeExtension.LoadWebFont', [
  'SC.ThreadsThemeExtension.Common.Configuration'
], function SCThreadsThemeExtensionLoadWebFont(Configuration) {
  'use strict';
  return {
    loadModule: function loadModule() {
      if (
        Configuration.get('threads.webFonts.isWebFontEnabled') &&
        Configuration.get('threads.webFonts.isWebFontAsync')
      ) {
        window.WebFontConfig = Configuration.get(
          'threads.webFonts.webFontConfig'
        );
        if (SC.ENVIRONMENT.jsEnvironment === 'browser') {
          (function (d) {
            var wf = d.createElement('script'),
              s = d.scripts[0];
            wf.src =
              ('https:' == document.location.protocol ? 'https' : 'http') +
              '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            s.parentNode.insertBefore(wf, s);
          })(document);
        }
      }
    }
  };
});
define('SC.ThreadsThemeExtension.Shopping', [
  'SC.ThreadsThemeExtension.ApplicationSkeleton.Layout',
  'SC.ThreadsThemeExtension.Header',
  'SC.ThreadsThemeExtension.HeaderLogo',
  'SC.ThreadsThemeExtension.Footer',
  'SC.ThreadsThemeExtension.Home',
  'SC.ThreadsThemeExtension.HomeCMS',
  'SC.ThreadsThemeExtension.ItemRelations.SC.Configuration',
  'SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View',
  'SC.ThreadsThemeExtension.LoadWebFont',
  'SC.ThreadsThemeExtension.Common.Configuration',
  'SC.ThreadsThemeExtension.Common.LayoutHelper',
  'SC.ThreadsThemeExtension.Common.UtilitiesHelper',
  'Utils',
  'underscore'
], function threadsThemeExtensionShoppingEntryPoint(
  ThreadsThemeApplicationLayout,
  ThreadsThemeExtHeader,
  ThreadsThemeExtHeaderLogo,
  ThreadsThemeExtFooter,
  ThreadsThemeExtHome,
  ThreadsThemeExtHomeCMS,
  ThreadsThemeExtItemRelations,
  ThreadsThemeExtErrorManagementPageNotFound,
  ThreadsThemeExtLoadWebFont,
  Configuration,
  LayoutHelper,
  UtilitiesHelper,
  Utils,
  _
) {
  'use strict';
  return {
    mountToApp: function (container) {
      UtilitiesHelper.toggleViewportToMobileSupport();
      Configuration.setEnvironment(container.getComponent('Environment'));
      LayoutHelper.setLayoutComponent(container.getComponent('Layout'));
      Utils.initBxSlider = _.initBxSlider = _.wrap(
        _.initBxSlider,
        function initBxSlider(fn) {
          var autoPlayCarousel = Configuration.get('home.autoPlayCarousel');
          var carouselSpeed = Configuration.get('home.carouselSpeed');
          if (
            arguments.length !== 0 &&
            arguments[1] &&
            arguments[1][0] &&
            arguments[1][0].id === 'home-image-slider-list'
          ) {
            arguments[2] = _.extend(arguments[2], {
              auto: autoPlayCarousel,
              pause: carouselSpeed
            });
          }
          return fn.apply(this, _.toArray(arguments).slice(1));
        }
      );
      ThreadsThemeApplicationLayout.loadModule();
      ThreadsThemeExtHeader.loadModule();
      ThreadsThemeExtHeaderLogo.loadModule(container);
      ThreadsThemeExtFooter.loadModule();
      ThreadsThemeExtHome.loadModule();
      ThreadsThemeExtHomeCMS.mountToApp(container);
      ThreadsThemeExtItemRelations.loadModule();
      ThreadsThemeExtErrorManagementPageNotFound.loadModule();
      ThreadsThemeExtLoadWebFont.loadModule();
    }
  };
});
};
try{
	extensions['SuiteCommerce.AdvancedSignUp.1.0.5']();
	SC.addExtensionModule('SuiteCommerce.AdvancedSignUp.Shopping');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['NetSuite.Columns.1.0.3']();
	SC.addExtensionModule('SuiteCommerce.Columns.EntryPoint');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['CXExtensibility.CoreContent.1.0.5']();
	SC.addExtensionModule('CXExtensibility.CoreContent.CoreContentModule');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SuiteCommerce.CustomFields.1.1.4']();
	SC.addExtensionModule('SuiteCommerce.CustomFields.PDP.Main');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['NetSuite.FeaturedCategory.1.3.0']();
	SC.addExtensionModule('SuiteCommerce.FeaturedCategory.EntryPoint');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SuiteCommerce.FeaturedProduct.1.2.0']();
	SC.addExtensionModule('SuiteCommerce.FeaturedProduct.Main');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SuiteCommerce.InfiniteScrollExtension.1.1.4']();
	SC.addExtensionModule('SuiteCommerce.InfiniteScroll.Shopping');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SuiteCommerce.ItemBadges.1.1.3']();
	SC.addExtensionModule('SuiteCommerce.ItemBadges.EntryPoint');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['NetSuite.LogoList.1.0.2']();
	SC.addExtensionModule('NetSuite.LogoList.LogoListModule');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SuiteCommerce.MapContactInfo.1.1.5']();
	SC.addExtensionModule('SuiteCommerce.MapAndContactUs.Main');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SuiteCommerce.NewsletterSignUp.1.1.2']();
	SC.addExtensionModule('SuiteCommerce.Newsletter.Main.Module');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['NetSuite.PhotoGallery.1.1.2']();
	SC.addExtensionModule('SuiteCommerce.PhotoGallery.Main');
}
catch(error)
{
	console.error(error)
}
try{
	extensions['SC.ThreadsThemeExtension.3.3.0']();
	SC.addExtensionModule('SC.ThreadsThemeExtension.Shopping');
}
catch(error)
{
	console.error(error)
}
SC.ENVIRONMENT.EXTENSIONS_JS_MODULE_NAMES = ["SuiteCommerce.AdvancedSignUp.AccessPoints.Configuration","SuiteCommerce.AdvancedSignUp.AccessPoints.Header.View","SuiteCommerce.AdvancedSignUp.AccessPoints.Header","SuiteCommerce.AdvancedSignUp.AccessPoints.Login.View","SuiteCommerce.AdvancedSignUp.AccessPoints.Login","SuiteCommerce.AdvancedSignUp.AccessPoints.Register.View","SuiteCommerce.AdvancedSignUp.AccessPoints.Register","SuiteCommerce.AdvancedSignUp.Common.Configuration","SuiteCommerce.AdvancedSignUp.Common.InstrumentationHelper","SuiteCommerce.AdvancedSignUp.Utils","SuiteCommerce.AdvancedSignUp.Instrumentation.Log","SuiteCommerce.AdvancedSignUp.Instrumentation.Logger","SuiteCommerce.AdvancedSignUp.Instrumentation.MockAppender","SuiteCommerce.AdvancedSignUp.Instrumentation","SuiteCommerce.AdvancedSignUp.Shopping","SuiteCommerce.AdvancedSignUp.RegistrationForm.Configuration","SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Collection","SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.Model","SuiteCommerce.AdvancedSignUp.RegistrationForm.Field.View","SuiteCommerce.AdvancedSignUp.RegistrationForm.Model","SuiteCommerce.AdvancedSignUp.RegistrationForm.View","SuiteCommerce.AdvancedSignUp.RegistrationForm","SuiteCommerce.Columns.Column.Collection","SuiteCommerce.Columns.Column.Model","SuiteCommerce.Columns.Column.View","SuiteCommerce.Columns.ColumnsCCT.Model","SuiteCommerce.Columns.ColumnsCCT.View","SuiteCommerce.Columns.ColumnsCCT","SuiteCommerce.Columns.ColumnsCCT.Configuration","SuiteCommerce.Columns.Common.InstrumentationHelper","SuiteCommerce.Columns.Instrumentation.FallbackLogger","SuiteCommerce.Columns.Instrumentation.Log","SuiteCommerce.Columns.Instrumentation.Logger","SuiteCommerce.Columns.Instrumentation.MockAppender","SuiteCommerce.Columns.Instrumentation","SuiteCommerce.Columns.EntryPoint","CXExtensibility.CoreContent.CMSMerchzoneCCT.View","CXExtensibility.CoreContent.CMSMerchzoneCCT","CXExtensibility.CoreContent.CoreContentModule","SuiteCommerce.CustomFields.Instrumentation.Helper","SuiteCommerce.CustomFields.JavaScript.Utils","SuiteCommerce.CustomFields.Instrumentation.Log","SuiteCommerce.CustomFields.Instrumentation.Logger","SuiteCommerce.CustomFields.Instrumentation.MockAppender","SuiteCommerce.CustomFields.Instrumentation","SuiteCommerce.CustomFields.PDP.Main","SuiteCommerce.CustomFields.Utils","SuiteCommerce.CustomFields.PDP.Configuration","SuiteCommerce.CustomFields.PDP.Main.View","SuiteCommerce.CustomFields.PDP.Model","SuiteCommerce.CustomFields.PDP","SuiteCommerce.FeaturedCategory.Common.Configuration","SuiteCommerce.FeaturedCategory.Common.InstrumentationHelper","SuiteCommerce.FeaturedCategory.Common.Utils","SuiteCommerce.FeaturedCategory.Button.Model","SuiteCommerce.FeaturedCategory.Button.View","SuiteCommerce.FeaturedCategory.CCTConfiguration","SuiteCommerce.FeaturedCategory.Model","SuiteCommerce.FeaturedCategory.View","SuiteCommerce.FeaturedCategory.FeaturedCategory","SuiteCommerce.FeaturedCategory.Instrumentation.Log","SuiteCommerce.FeaturedCategory.Instrumentation.Logger","SuiteCommerce.FeaturedCategory.Instrumentation.MockAppender","SuiteCommerce.FeaturedCategory.Instrumentation","SuiteCommerce.FeaturedCategory.Item.Collection","SuiteCommerce.FeaturedCategory.Item.Configuration","SuiteCommerce.FeaturedCategory.Item.Model","SuiteCommerce.FeaturedCategory.Item.View","SuiteCommerce.FeaturedCategory.EntryPoint","SC.FeaturedProduct.Common.Configuration","SC.FeaturedProduct.Common.Utils","SuiteCommerce.FeaturedProduct.Common.DependencyProvider","SuiteCommerce.FeaturedProduct.Common.InstrumentationHelper","NetSuite.FeaturedProduct.FeaturedProductCCT.View","NetSuite.FeaturedProduct.FeaturedProductCCT","SuiteCommerce.FeaturedProduct.Main","SuiteCommerce.FeaturedProduct.Instrumentation.Log","SuiteCommerce.FeaturedProduct.Instrumentation.Logger","SuiteCommerce.FeaturedProduct.Instrumentation.MockAppender","SuiteCommerce.FeaturedProduct.Instrumentation","SuiteCommerce.FeaturedProduct.Item.Collection","SuiteCommerce.FeaturedProduct.Item.ImageHelper","SuiteCommerce.FeaturedProduct.Item.Model","SuiteCommerce.FeaturedProduct.Item.Option.Collection","SuiteCommerce.FeaturedProduct.Item.Option.Model","SuiteCommerce.FeaturedProduct.Item.Option.Value.Collection","SuiteCommerce.FeaturedProduct.Item.Option.Value.Model","SuiteCommerce.InfiniteScroll.Configuration","SuiteCommerce.InfiniteScroll.Common.InstrumentationHelper","SuiteCommerce.InfiniteScroll.BottomControlView","SuiteCommerce.InfiniteScroll.ControlConfiguration","SuiteCommerce.InfiniteScroll.ControlModel","SuiteCommerce.InfiniteScroll.ControlView","SuiteCommerce.InfiniteScroll.TopControlView","SuiteCommerce.InfiniteScroll.GoToTop.View","SuiteCommerce.InfiniteScroll.InfiniteScroll","SuiteCommerce.InfiniteScroll.ItemsHandler","SuiteCommerce.InfiniteScroll.URLHelper","SuiteCommerce.InfiniteScroll.Instrumentation.Log","SuiteCommerce.InfiniteScroll.Instrumentation.Logger","SuiteCommerce.InfiniteScroll.Instrumentation.MockAppender","SuiteCommerce.InfiniteScroll.Instrumentation","SuiteCommerce.InfiniteScroll.Shopping","SuiteCommerce.InfiniteScroll.Pagination","SuiteCommerce.ItemBadges.Configuration","SuiteCommerce.ItemBadges.Instrumentation.FallbackLogger","SuiteCommerce.ItemBadges.Instrumentation.MockAppender","SuiteCommerce.ItemBadges.Instrumentation.Collection","SuiteCommerce.ItemBadges.Instrumentation.Model","SuiteCommerce.ItemBadges.Instrumentation.InstrumentationHelper","SuiteCommerce.ItemBadges.Instrumentation.Logger","SuiteCommerce.ItemBadges.BadgesList.View","SuiteCommerce.ItemBadges.Collection","SuiteCommerce.ItemBadges.GlobalViews","SuiteCommerce.ItemBadges.Model","SuiteCommerce.ItemBadges.ProductDetail","SuiteCommerce.ItemBadges.ProductList","SuiteCommerce.ItemBadges.View","SuiteCommerce.ItemBadges.EntryPoint","jQuery.bxSlider@4.2.14","NetSuite.LogoList.Common.Instrumentation.Helper","NetSuite.LogoList.Common.Utils","NetSuite.LogoList.Instrumentation.Fallback.Logger","NetSuite.LogoList.Instrumentation.Log","NetSuite.LogoList.Instrumentation.Logger","NetSuite.LogoList.Instrumentation.MockAppender","NetSuite.LogoList.Instrumentation","NetSuite.LogoList.LogoListCCT.Logo.View","NetSuite.LogoListCCT.Utils","NetSuite.LogoList.LogoListCCT.View","NetSuite.LogoList.LogoListCCT","NetSuite.LogoList.LogoListModule","SuiteCommerce.MapAndContactUs.Common.DependencyProvider","SuiteCommerce.MapAndContactUs.Common.Instrumentation.Helper","SuiteCommerce.MapAndContactUs.Utils","SuiteCommerce.ContactUsForm.CCTSettingsHelper","SuiteCommerce.ContactUsForm.InputField.Collection","SuiteCommerce.ContactUsForm.InputField.Model","SuiteCommerce.ContactUsForm.InputField.View","SuiteCommerce.ContactUsForm.Model","SuiteCommerce.ContactUsForm.View","SuiteCommerce.ContactUsFormCCT","SuiteCommerce.MapAndContactUs.ExtMessage.Model","SuiteCommerce.MapAndContactUs.ExtMessage.View","SuiteCommerce.MapAndContactUs.Instrumentation.Log","SuiteCommerce.MapAndContactUs.Instrumentation.Logger","SuiteCommerce.MapAndContactUs.Instrumentation.MockAppender","SuiteCommerce.MapAndContactUs.Instrumentation","SuiteCommerce.MapAndContactUs.Main","SuiteCommerce.MapAndContactInfoCCT.View","SuiteCommerce.MapAndContactInfoCCT","SuiteCommerce.Newsletter.Instrumentation.Helper","SuiteCommerce.Newsletter.ExtMessage.Model","SuiteCommerce.Newsletter.ExtMessage.View","SuiteCommerce.Newsletter.Instrumentation.Log","SuiteCommerce.Newsletter.Instrumentation.Logger","SuiteCommerce.Newsletter.Instrumentation.MockAppender","SuiteCommerce.Newsletter.Instrumentation","SuiteCommerce.Newsletter.Main.Module","SuiteCommerce.Newsletter.NewsletterCCT.Model","SuiteCommerce.Newsletter.NewsletterCCT.View","SuiteCommerce.Newsletter.NewsletterCCT","BxSlider","NetSuite.ImageTextOverlay.Instrumentation.Helper","SuiteCommerce.PhotoGallery.Common.Utils","SuiteCommerce.PhotoGallery.Instrumentation.Fallback.Logger","SuiteCommerce.PhotoGallery.Instrumentation.Log","SuiteCommerce.PhotoGallery.Instrumentation.Logger","SuiteCommerce.PhotoGallery.Instrumentation.MockAppender","SuiteCommerce.PhotoGallery.Instrumentation","SuiteCommerce.PhotoGallery.Main","SuiteCommerce.PhotoGallery.CCT.BaseView","SuiteCommerce.PhotoGallery.CCT.Settings","SuiteCommerce.Photo.Model","SuiteCommerce.PhotoGallery.Gallery.View","SuiteCommerce.PhotoGallery.Photo.Collection","SuiteCommercePhotoGallery.Photo.Model","SuiteCommerce.PhotoGallery","SC.ThreadsThemeExtension.ApplicationSkeleton.Layout","SC.ThreadsThemeExtension.Common.Configuration","SC.ThreadsThemeExtension.Common.LayoutHelper","SC.ThreadsThemeExtension.Common.UtilitiesHelper","SC.ThreadsThemeExtension.ErrorManagement.PageNotFound.View","SC.ThreadsThemeExtension.Footer","SC.ThreadsThemeExtension.Header","SC.ThreadsThemeExtension.HeaderLogo","SC.ThreadsThemeExtension.LogoView","SC.ThreadsThemeExtension.Home","SC.ThreadsThemeExtension.HomeCMS","SC.ThreadsThemeExtension.ItemRelations.SC.Configuration","SC.ThreadsThemeExtension.Shopping","SC.ThreadsThemeExtension.LoadWebFont"];
