import {Component,EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {User} from "../../interfaces/User";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'update-user-modal',
    template: require('./updateUser.html')
})
export class UpdateUserComponent implements OnInit {
    user: User;
    title: string;

    @Output() updatedUser: EventEmitter<User> = new EventEmitter();


    static parameters = [BsModalRef];
    constructor(public bsModalRef: BsModalRef) {}

    updateUser() {
        this.bsModalRef.hide();
        this.updatedUser.emit(this.user);
    }

    ngOnInit() {
    }
}


//{{user._id}}
//type="button" class = "btn btn-default"
