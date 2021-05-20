import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from './button/button.component';
export {ButtonComponent} from './button/button.component';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { StepComponent } from './step/step.component';


@NgModule({
    declarations: [ButtonComponent, InputComponent, LabelComponent, CheckboxComponent, StepComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [ButtonComponent],
    exports : [ButtonComponent],
})
export class AppModule {}
