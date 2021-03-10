import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UpdateUserComponent } from '../../components/modals/updateUser/updateUser.component';
import { CreateUserModule } from '../../components/modals/createUser/createUser.module';
import {UserService} from '../../components/services/user.service';
import {SquarePipe} from '../../components/pipes/square.pipe';
import { BsDatepickerModule, BsDatepickerConfig ,BsLocaleService, BsDaterangepickerDirective, BsDaterangepickerConfig} from 'ngx-bootstrap/datepicker';

import { DemoDatepickerBasicComponent } from '../../components/datepicker/datepicker.component';

export const ROUTES: Routes = [
    { path: 'home', component: MainComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        ModalModule,
        CreateUserModule,
        RouterModule.forChild(ROUTES),
        TooltipModule.forRoot(),
        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),

    ],
    declarations: [
        MainComponent,
        SquarePipe,
        UpdateUserComponent
    ],

    exports: [
        MainComponent,
        UpdateUserComponent
    ],

    providers: [
        UserService,
        BsModalService,
        BsModalRef,
        BsLocaleService,
        BsDaterangepickerDirective,
        BsDaterangepickerConfig,
        BsDatepickerConfig
    ],

    entryComponents: [
        UpdateUserComponent
    ]
})
export class MainModule {}
