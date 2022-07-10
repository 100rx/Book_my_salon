import { Component, OnInit, ViewChild } from '@angular/core';
import { fifaEventsData } from './data';
import { extend } from '@syncfusion/ej2-base';
import {
  EventSettingsModel,
  EventRenderedArgs,
  ScheduleComponent,
  MonthService,
  DayService,
  WeekService,
  ResizeService,
  DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [
    MonthService,
    DayService,
    WeekService,
    ResizeService,
    DragAndDropService,
  ],
})
// providers: [TimelineMonthService, ResizeService, DragAndDropService],

export class AppointmentComponent {

  public data: Object[] = <Object[]>extend([], fifaEventsData, null, true);
  public selectedDate: Date = new Date(2018, 5, 21);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  currentView: any;
  group: any = { resources: ['Crews'], allowGroupEdit: true };
  crews = JSON.parse(
    `[{"id":21,"name":"Sealcoat Crew 1","crewsDivisionId":6,"isActive":true,"order":0,"color":"#21e70c","divisionName":"The Warehouse","officeId":23},{"id":22,"name":"Sealcoat Crew 2","crewsDivisionId":6,"isActive":true,"order":1,"color":"#ffff00","divisionName":"The Warehouse","officeId":23},{"id":23,"name":"Structural Crew 1","crewsDivisionId":7,"isActive":true,"order":2,"color":"#0080ff","divisionName":"Vance Refrigeration","officeId":23},{"id":24,"name":"Structural Crew 2","crewsDivisionId":7,"isActive":true,"order":3,"color":null,"divisionName":"Vance Refrigeration","officeId":23}]`
  );
  currentSchedulerView: any = 'week';
  timeScale: any = { interval: 720, slotCount: 1 };

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
      return;
    }
    if (this.currentView === 'Agenda') {
      (args.element.firstChild as HTMLElement).style.borderLeftColor =
        categoryColor;
    } else {
      args.element.style.backgroundColor = categoryColor;
    }
  }
  switchSchedulerView() {
    switch (this.currentSchedulerView) {
      case 'day':
        this.scheduleObj.currentView = 'Day';
        break;
      case 'week':
        this.scheduleObj.currentView = 'Week';
        (this.scheduleObj.views[1])["interval"] = 1;
        this.scheduleObj.refresh();
        break;
      case '2week':
        this.scheduleObj.currentView = 'Week';
        (this.scheduleObj.views[1])["interval"] = 2;
        this.scheduleObj.refresh();
        break;
      case 'crews-week':
        this.scheduleObj.currentView = 'TimelineWeek';
        break;
    }
  }
}
