import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { EmployeeComponent } from './home/details/details.component';
import { AddEmployeeComponent } from './home/add/add.component';
import { ViewEmployeeComponent } from './home/view/view.component';
import { EditEmployeeComponent } from './home/edit/edit.component';
import { EmployeeData } from './home/employee-data.service';
import { EditEmployeeService } from './home/edit-employee.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GooglePayButtonModule } from "@google-pay/button-angular";

import { FormsModule } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { PaymentComponent } from './payments/payment.component';
import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";

import {
    DropDownListAllModule,
    MultiSelectAllModule
} from "@syncfusion/ej2-angular-dropdowns";

import {
    MaskedTextBoxModule,
    UploaderAllModule
} from "@syncfusion/ej2-angular-inputs";

import {
    ToolbarAllModule,
    ContextMenuAllModule
} from "@syncfusion/ej2-angular-navigations";

import { ButtonAllModule } from "@syncfusion/ej2-angular-buttons";

import { CheckBoxAllModule } from "@syncfusion/ej2-angular-buttons";

import {
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule
} from "@syncfusion/ej2-angular-calendars";

import { NumericTextBoxAllModule } from "@syncfusion/ej2-angular-inputs";

import {
    ScheduleAllModule,
    RecurrenceEditorAllModule
} from "@syncfusion/ej2-angular-schedule";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(EmployeeData),
        AppRoutingModule,
        Ng2SearchPipeModule,
        GooglePayButtonModule,
        ScheduleAllModule,
        RecurrenceEditorAllModule,
        NumericTextBoxAllModule,
        DatePickerAllModule,
        TimePickerAllModule,
        DateTimePickerAllModule,
        CheckBoxAllModule,
        ToolbarAllModule,
        DropDownListAllModule,
        ContextMenuAllModule,
        MaskedTextBoxModule,
        UploaderAllModule,
        FormsModule,
        MultiSelectAllModule,
        TreeViewModule,
        ButtonAllModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        EmployeeComponent, AddEmployeeComponent, ViewEmployeeComponent, EditEmployeeComponent, AppointmentComponent, PaymentComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        EmployeeData, EditEmployeeService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };