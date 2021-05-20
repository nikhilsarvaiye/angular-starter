import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectToJunxureComponent } from './connect-to-junxure/connect-to-junxure.component';
import { LoginToJunxureComponent } from './login-to-junxure/login-to-junxure.component';
import { LoginToEnvestnetComponent } from './login-to-envestnet/login-to-envestnet.component';
import { AuthenticationSuccessComponent } from './authentication-success/authentication-success.component';
//import {ButtonComponent} from './library/button/ButtonComponent';

@NgModule({
    declarations: [AppComponent, ConnectToJunxureComponent, LoginToJunxureComponent, LoginToEnvestnetComponent, AuthenticationSuccessComponent],
    imports: [BrowserModule, NzButtonModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
