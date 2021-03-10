import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AboutComponent, AboutChildComponent } from './about.component';

export const ROUTES: Routes = [
    { path: 'about', component: AboutComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [
        AboutComponent,
        AboutChildComponent
    ],

    exports: [
        AboutComponent,
        AboutChildComponent
    ],
})
export class AboutModule {}
