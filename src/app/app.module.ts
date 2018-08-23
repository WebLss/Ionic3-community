import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { NotificationPage } from '../pages/notification/notification';
import { ChatPage } from '../pages/chat/chat';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { LoginPage } from '../pages/login/login';
import { UserdatalistPage } from '../pages/userdatalist/userdatalist';
import { ComponentsModule } from '../components/components.module';
import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';

@NgModule({
  declarations: [
    MyApp,
    DetailsPage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    TabsPage,
    HomePage,
    LoginPage,
    UserPage,
    RegisterPage,
    UserdatalistPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
    }),
    BrowserModule,
    HttpModule, // 全局需要导入 HTTP
    IonicStorageModule.forRoot(), // 全局定义 storage 的模块
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailsPage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    TabsPage,
    HomePage,
    LoginPage,
    UserPage,
    RegisterPage,
    UserdatalistPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider, // rest 的定义导入
  ]
})
export class AppModule {}
