import {View, Component, bootstrap } from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app/app.html'
})
export class App { 
	
}

bootstrap(App, []);




