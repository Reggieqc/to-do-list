import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserListComponent } from './user-list/user-list.component';

import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UsersRoutingModule,
        HttpClientModule,
    ],
    declarations: [
        UserListComponent,
    ]
})
export class UserModule { }