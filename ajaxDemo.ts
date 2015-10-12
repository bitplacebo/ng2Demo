/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, FORM_DIRECTIVES, Inject, NgIf, NgFor} from 'angular2/angular2';


export const $http = {
    get: function (url: string) {
        return this._sendRequest(url, null, 'GET');
    },
    post: function (url: string, payload: any) {
        return this._sendRequest(url, payload, 'POST');
    },
    put: function (url: string, payload: any) {
        return this._sendRequest(url, payload, 'PUT');
    },
    delete: function (url: string, payload: any) {
        return this._sendRequest(url, null, 'DELETE');
    },


    _sendRequest(url: string, payLoad: any, type: string): any {
            return new Promise(function (resolve, reject) {
                var req = new XMLHttpRequest();
                req.open(type, url);
                req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

                req.onload = function () {
                    if (req.status == 200) {
                        resolve(JSON.parse(req.response));
                    } else {
                        reject(JSON.parse(req.response));
                    }
                };

                req.onerror = function () {
                    reject(JSON.parse(req.response));
                };

                if (payLoad) {
                    req.send(JSON.stringify(payLoad));
                } else {
                    req.send(null);
                }
            });
    }
}
class Name {
    person: String;
    constructor() {
        this.person = "ehr";
    }
    GetPerson(): String {
        return this.person.trim();
    }
};
@Component({
    selector: 'my-app'
})
    @View({
        directives: [FORM_DIRECTIVES, NgIf, NgFor],
        templateUrl: 'ajaxDemo.html'
       
})
class AppComponent {
    _name: string;
    names: Array<String>;
    myName: String;

     hello(): void {

        this.assignValue();
       
     }

    assignValue(): void {
        var result: Array<String>;
        var vm: AppComponent = this;
        
        this.myName = "";
        this.names = [];
        if (this._name.trim().length > 0) {
            $http.get('/Ng2ServiceDemo/service1.svc/DoWork?name=' + this._name).then(function (json) {
                result = json.d;
                var count: number;
               
                count = result.length;
                var r: Array<String>;
                result.forEach(function (object, count, result) {
                    vm.myName = object["title"];
                    vm.names.push(object["name"]);
                });
            });
           
           

           
        }
    }
    /*constructor() {
        this.name = "John Doe";
    }*/
    constructor( @Inject(Name) person) {
        
        this._name = person.GetPerson();
        this.names = [];
        this.myName = "";
    }
    getData(): void {
        this.assignValue();
    }
}

bootstrap(AppComponent, [(Name)]);