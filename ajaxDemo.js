var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
exports.$http = {
    get: function (url) {
        return this._sendRequest(url, null, 'GET');
    },
    post: function (url, payload) {
        return this._sendRequest(url, payload, 'POST');
    },
    put: function (url, payload) {
        return this._sendRequest(url, payload, 'PUT');
    },
    delete: function (url, payload) {
        return this._sendRequest(url, null, 'DELETE');
    },
    _sendRequest: function (url, payLoad, type) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open(type, url);
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            req.onload = function () {
                if (req.status == 200) {
                    resolve(JSON.parse(req.response));
                }
                else {
                    reject(JSON.parse(req.response));
                }
            };
            req.onerror = function () {
                reject(JSON.parse(req.response));
            };
            if (payLoad) {
                req.send(JSON.stringify(payLoad));
            }
            else {
                req.send(null);
            }
        });
    }
};
var Name = (function () {
    function Name() {
        this.person = "ehr";
    }
    Name.prototype.GetPerson = function () {
        return this.person.trim();
    };
    return Name;
})();
;
var AppComponent = (function () {
    /*constructor() {
        this.name = "John Doe";
    }*/
    function AppComponent(person) {
        this._name = person.GetPerson();
        this.names = [];
        this.myName = "";
    }
    AppComponent.prototype.hello = function () {
        this.assignValue();
    };
    AppComponent.prototype.assignValue = function () {
        var result;
        var vm = this;
        this.myName = "";
        this.names = [];
        if (this._name.trim().length > 0) {
            exports.$http.get('/Ng2ServiceDemo/service1.svc/DoWork?name=' + this._name).then(function (json) {
                result = json.d;
                var count;
                count = result.length;
                var r;
                result.forEach(function (object, count, result) {
                    vm.myName = object["title"];
                    vm.names.push(object["name"]);
                });
            });
        }
    };
    AppComponent.prototype.getData = function () {
        this.assignValue();
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgIf, angular2_1.NgFor],
            templateUrl: 'ajaxDemo.html'
        }),
        __param(0, angular2_1.Inject(Name)), 
        __metadata('design:paramtypes', [Object])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [(Name)]);
