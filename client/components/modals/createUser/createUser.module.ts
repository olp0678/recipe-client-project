import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CreateUserComponent} from './createUser.component';

@NgModule({
    imports: [
        ModalModule.forRoot(),
        BrowserModule,
        FormsModule
    ],
    declarations: [
        CreateUserComponent
    ],

    exports: [
        CreateUserComponent,
    ],

    providers: [],

    entryComponents: [
        CreateUserComponent,
    ]
})
export class CreateUserModule {
}
