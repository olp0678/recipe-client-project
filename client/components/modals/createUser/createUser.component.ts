import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {User} from '../../interfaces/User';

@Component({
    selector: 'create-user',
    template: require('./createUser.html')
})
export class CreateUserComponent {
    @Input()
    formError: String;

    @Input()
    formInfo: String;

    @Output()
    userToCreate: EventEmitter<User> = new EventEmitter<User>();

    private user: User = {
        __v: undefined,
        _id: undefined,
        address: {
            _id: undefined,
            addressLine1: undefined,
            addressLine2: undefined,
            city: undefined,
            state: undefined,
            zip: undefined,
            __v: undefined
        },
        age: undefined,
        name: {
            _id: undefined,
            firstName: undefined,
            middleName: undefined,
            lastName: undefined
        }
    };

    static parameters = [BsModalRef];

    constructor(public bsModalRef: BsModalRef) {
    }

    createUser() {
        this.userToCreate.emit(this.user);
    }
}
