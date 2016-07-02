import 'es6-shim';
import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {signIn} from './pages/signIn/signIn';
import {ListPage} from './pages/list/list';
import {HomePage} from './pages/HomePage/HomePage';
import {FORM_PROVIDERS} from 'angular2/common';
import {HttpService} from './pages/services/httpService';

import {addPage} from './pages/AddClass/addclass';

@App({
  templateUrl: 'build/app.html',
  providers: [HttpService,FORM_PROVIDERS],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  rootPage: any = signIn;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign In', component: signIn },
      { title: 'List', component: ListPage },
      { title: 'Approvals', component: HomePage },
      { title: 'AddClass', component: addPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
