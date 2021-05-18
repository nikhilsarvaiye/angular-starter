import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from './button';

@NgModule({
    declarations: [ButtonComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [ButtonComponent],
})
export class AppModule {}
