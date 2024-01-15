import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // @fullcalendar/daygrid Offers Month and DayGrid views: dayGridYear, dayGridMonth, dayGridWeek, dayGridDay, dayGrid (generic) 
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
// import momentPlugin from '@fullcalendar/moment'; // Permet de formater des dates de facons plus précise: https://fullcalendar.io/docs/moment-plugin
import frLocale from '@fullcalendar/core/locales/fr'; // Importez la locale française
// import timeGridPlugin from '@fullcalendar/timegrid'
// import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
import interactionPlugin from '@fullcalendar/interaction';
//Bootstrap
import bootstrap5Plugin from '@fullcalendar/bootstrap5';




@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('content') content!: TemplateRef<any>; // Pour selectionner la modale qui porte l'attribut #content dans le HTML

  constructor(){}

  ngOnInit(): void {    
  }
// Doc FullCalendar: https://fullcalendar.io/docs
  calendarOptions : CalendarOptions = {
    plugins: [ 
      // https://fullcalendar.io/docs/plugin-index
      dayGridPlugin,
      resourceTimeGridPlugin,
      resourceTimelinePlugin,
      interactionPlugin,
      // bootstrap5Plugin,
    ],
    events: [ // Shits
    // Doc générale event? https://fullcalendar.io/docs/event-model
    // https://fullcalendar.io/docs/event-object

    //Semaine 08/01 -> 14/01
    { title: '', start: '2024-01-08T06:30', end: '2024-01-08T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-09T06:30', end: '2024-01-09T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-10T11:00', end: '2024-01-10T19:00', resourceId: '2', color: 'dodgerblue'},    
    { title: '', start: '2024-01-13T06:30', end: '2024-01-13T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-14T06:30', end: '2024-01-14T14:30', resourceId: '2', color: 'orange'},

    { title: '', start: '2024-01-08T11:00', end: '2024-01-08T19:00', resourceId: '1', color: 'dodgerblue'},
    { title: '', start: '2024-01-09T11:00', end: '2024-01-09T19:00', resourceId: '1', color: 'dodgerblue'},
    { title: '', start: '2024-01-12T11:00', end: '2024-01-12T19:00', resourceId: '1', color: 'dodgerblue'},
    { title: '', start: '2024-01-13T06:30', end: '2024-01-13T14:30', resourceId: '1', color: 'orange'},
    { title: '', start: '2024-01-14T06:30', end: '2024-01-14T14:30', resourceId: '1', color: 'orange'},

    { title: '', start: '2024-01-08T06:30', end: '2024-01-08T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-09T06:30', end: '2024-01-09T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-11T11:00', end: '2024-01-11T19:00', resourceId: '5', color: 'dodgerblue'},
    { title: '', start: '2024-01-12T06:30', end: '2024-01-12T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-14T11:00', end: '2024-01-14T19:00', resourceId: '5', color: 'dodgerblue'},

    { title: '', start: '2024-01-10T06:30', end: '2024-01-10T14:30', resourceId: '4', color: 'orange'},
    { title: '', start: '2024-01-11T06:30', end: '2024-01-11T14:30', resourceId: '4', color: 'orange'},
    { title: '', start: '2024-01-12T06:30', end: '2024-01-12T14:30', resourceId: '4', color: 'orange'},

    { title: '', start: '2024-01-10T06:30', end: '2024-01-10T14:30', resourceId: '3', color: 'orange'},
    { title: '', start: '2024-01-11T06:30', end: '2024-01-11T14:30', resourceId: '3', color: 'orange'},    
    { title: '', start: '2024-01-13T11:00', end: '2024-01-13T19:00', resourceId: '3', color: 'dodgerblue'},
    { title: '', start: '2024-01-14T06:30', end: '2024-01-14T14:30', resourceId: '3', color: 'orange'},

    { title: '', start: '2024-01-10T01:24', end: '2024-01-10T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-11T01:24', end: '2024-01-11T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-12T01:24', end: '2024-01-12T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-13T01:24', end: '2024-01-13T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-14T01:24', end: '2024-01-14T09:24', resourceId: '8', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-08T01:24', end: '2024-01-08T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-09T01:24', end: '2024-01-09T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-10T01:24', end: '2024-01-10T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-13T01:24', end: '2024-01-13T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-14T01:24', end: '2024-01-14T09:24', resourceId: '9', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-10T01:24', end: '2024-01-10T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-11T01:24', end: '2024-01-11T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-12T01:24', end: '2024-01-12T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-13T01:24', end: '2024-01-13T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-14T01:24', end: '2024-01-14T09:24', resourceId: '10', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-08T01:24', end: '2024-01-08T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-09T01:24', end: '2024-01-09T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-10T01:24', end: '2024-01-10T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-11T01:24', end: '2024-01-11T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-12T01:24', end: '2024-01-12T09:24', resourceId: '7', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-08T01:24', end: '2024-01-08T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-09T01:24', end: '2024-01-09T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-12T01:24', end: '2024-01-12T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-13T01:24', end: '2024-01-13T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-14T01:24', end: '2024-01-14T09:24', resourceId: '6', color: 'MediumSeaGreen'},

    //Semaine 15/01 -> 21/01
    { title: '', start: '2024-01-15T06:30', end: '2024-01-15T14:30', resourceId: '1', color: 'orange'},
    { title: '', start: '2024-01-16T06:30', end: '2024-01-16T14:30', resourceId: '1', color: 'orange'},
    { title: '', start: '2024-01-17T11:00', end: '2024-01-17T19:00', resourceId: '1', color: 'dodgerblue'},    
    { title: '', start: '2024-01-20T06:30', end: '2024-01-20T14:30', resourceId: '1', color: 'orange'},
    { title: '', start: '2024-01-21T06:30', end: '2024-01-21T14:30', resourceId: '1', color: 'orange'},

    { title: '', start: '2024-01-15T11:00', end: '2024-01-15T19:00', resourceId: '2', color: 'dodgerblue'},
    { title: '', start: '2024-01-16T11:00', end: '2024-01-16T19:00', resourceId: '2', color: 'dodgerblue'},
    { title: '', start: '2024-01-19T11:00', end: '2024-01-19T19:00', resourceId: '2', color: 'dodgerblue'},
    { title: '', start: '2024-01-20T06:30', end: '2024-01-20T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-21T06:30', end: '2024-01-21T14:30', resourceId: '2', color: 'orange'},

    { title: '', start: '2024-01-15T06:30', end: '2024-01-15T14:30', resourceId: '3', color: 'orange'},
    { title: '', start: '2024-01-16T06:30', end: '2024-01-16T14:30', resourceId: '3', color: 'orange'},
    { title: '', start: '2024-01-18T11:00', end: '2024-01-18T19:00', resourceId: '3', color: 'dodgerblue'},
    { title: '', start: '2024-01-19T06:30', end: '2024-01-19T14:30', resourceId: '3', color: 'orange'},
    { title: '', start: '2024-01-21T11:00', end: '2024-01-21T19:00', resourceId: '3', color: 'dodgerblue'},

    { title: '', start: '2024-01-17T06:30', end: '2024-01-17T14:30', resourceId: '4', color: 'orange'},
    { title: '', start: '2024-01-18T06:30', end: '2024-01-18T14:30', resourceId: '4', color: 'orange'},
    { title: '', start: '2024-01-19T06:30', end: '2024-01-19T14:30', resourceId: '4', color: 'orange'},

    { title: '', start: '2024-01-17T06:30', end: '2024-01-17T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-18T06:30', end: '2024-01-18T14:30', resourceId: '5', color: 'orange'},    
    { title: '', start: '2024-01-20T11:00', end: '2024-01-20T19:00', resourceId: '5', color: 'dodgerblue'},
    { title: '', start: '2024-01-21T06:30', end: '2024-01-21T14:30', resourceId: '5', color: 'orange'},
    
    { title: '', start: '2024-01-17T01:24', end: '2024-01-17T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-18T01:24', end: '2024-01-18T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-19T01:24', end: '2024-01-19T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-20T01:24', end: '2024-01-20T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-21T01:24', end: '2024-01-21T09:24', resourceId: '6', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-15T01:24', end: '2024-01-15T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-16T01:24', end: '2024-01-16T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-17T01:24', end: '2024-01-17T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-20T01:24', end: '2024-01-20T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-21T01:24', end: '2024-01-21T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    
    { title: '', start: '2024-01-17T01:24', end: '2024-01-17T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-18T01:24', end: '2024-01-18T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-19T01:24', end: '2024-01-19T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-20T01:24', end: '2024-01-20T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-21T01:24', end: '2024-01-21T09:24', resourceId: '8', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-15T01:24', end: '2024-01-15T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-16T01:24', end: '2024-01-16T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-17T01:24', end: '2024-01-17T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-18T01:24', end: '2024-01-18T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-19T01:24', end: '2024-01-19T09:24', resourceId: '9', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-15T01:24', end: '2024-01-15T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-16T01:24', end: '2024-01-16T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-19T01:24', end: '2024-01-19T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-20T01:24', end: '2024-01-20T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-21T01:24', end: '2024-01-21T09:24', resourceId: '10', color: 'MediumSeaGreen'},

    //Semaine 22/01 -> 28/01
    { title: '', start: '2024-01-22T06:30', end: '2024-01-22T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-23T06:30', end: '2024-01-23T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-24T11:00', end: '2024-01-24T19:00', resourceId: '2', color: 'dodgerblue'},    
    { title: '', start: '2024-01-27T06:30', end: '2024-01-27T14:30', resourceId: '2', color: 'orange'},
    { title: '', start: '2024-01-28T06:30', end: '2024-01-28T14:30', resourceId: '2', color: 'orange'},

    { title: '', start: '2024-01-22T11:00', end: '2024-01-22T19:00', resourceId: '1', color: 'dodgerblue'},
    { title: '', start: '2024-01-23T11:00', end: '2024-01-23T19:00', resourceId: '1', color: 'dodgerblue'},
    { title: '', start: '2024-01-26T11:00', end: '2024-01-26T19:00', resourceId: '1', color: 'dodgerblue'},
    { title: '', start: '2024-01-27T06:30', end: '2024-01-27T14:30', resourceId: '1', color: 'orange'},
    { title: '', start: '2024-01-28T06:30', end: '2024-01-28T14:30', resourceId: '1', color: 'orange'},

    { title: '', start: '2024-01-22T06:30', end: '2024-01-22T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-23T06:30', end: '2024-01-23T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-25T11:00', end: '2024-01-25T19:00', resourceId: '5', color: 'dodgerblue'},
    { title: '', start: '2024-01-26T06:30', end: '2024-01-26T14:30', resourceId: '5', color: 'orange'},
    { title: '', start: '2024-01-28T11:00', end: '2024-01-28T19:00', resourceId: '5', color: 'dodgerblue'},

    { title: '', start: '2024-01-24T06:30', end: '2024-01-24T14:30', resourceId: '4', color: 'orange'},
    { title: '', start: '2024-01-25T06:30', end: '2024-01-25T14:30', resourceId: '4', color: 'orange'},
    { title: '', start: '2024-01-26T06:30', end: '2024-01-26T14:30', resourceId: '4', color: 'orange'},

    { title: '', start: '2024-01-24T06:30', end: '2024-01-24T14:30', resourceId: '3', color: 'orange'},
    { title: '', start: '2024-01-25T06:30', end: '2024-01-25T14:30', resourceId: '3', color: 'orange'},    
    { title: '', start: '2024-01-27T11:00', end: '2024-01-27T19:00', resourceId: '3', color: 'dodgerblue'},
    { title: '', start: '2024-01-28T06:30', end: '2024-01-28T14:30', resourceId: '3', color: 'orange'},

    { title: '', start: '2024-01-24T01:24', end: '2024-01-24T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-25T01:24', end: '2024-01-25T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-26T01:24', end: '2024-01-26T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-27T01:24', end: '2024-01-27T09:24', resourceId: '8', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-28T01:24', end: '2024-01-28T09:24', resourceId: '8', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-22T01:24', end: '2024-01-22T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-23T01:24', end: '2024-01-23T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-24T01:24', end: '2024-01-24T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-27T01:24', end: '2024-01-27T09:24', resourceId: '9', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-28T01:24', end: '2024-01-28T09:24', resourceId: '9', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-24T01:24', end: '2024-01-24T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-25T01:24', end: '2024-01-25T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-26T01:24', end: '2024-01-26T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-27T01:24', end: '2024-01-27T09:24', resourceId: '10', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-28T01:24', end: '2024-01-28T09:24', resourceId: '10', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-22T01:24', end: '2024-01-22T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-23T01:24', end: '2024-01-23T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-24T01:24', end: '2024-01-24T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-25T01:24', end: '2024-01-25T09:24', resourceId: '7', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-26T01:24', end: '2024-01-26T09:24', resourceId: '7', color: 'MediumSeaGreen'},

    { title: '', start: '2024-01-22T01:24', end: '2024-01-22T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-23T01:24', end: '2024-01-23T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-26T01:24', end: '2024-01-26T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-27T01:24', end: '2024-01-27T09:24', resourceId: '6', color: 'MediumSeaGreen'},
    { title: '', start: '2024-01-28T01:24', end: '2024-01-28T09:24', resourceId: '6', color: 'MediumSeaGreen'},


    ],
    eventSources: [ 
    // https://fullcalendar.io/docs/event-source
      [
        {
          googleCalendarId: 'abcd1234@group.calendar.google.com'
        }
      ]
    ],
    resourceAreaColumns: [ // Nom et heure première colonne
    // https://fullcalendar.io/docs/resourceAreaColumns
      {
        field: 'name',
        headerContent: 'Nom'
      },
      {
        field: 'maximum_contract_hours',
        headerContent: 'h',
        width: 45
      }
    ],
    resources: [ // Employees
    // https://fullcalendar.io/docs/resource-data
      {
        id: '1',
        groupId: 'Employés',
        name: 'Jean Dupont',
        maximum_contract_hours: 38,
        // type1: 10,
        // type2: 55
      },
      {
        id: '2',
        groupId: 'Employés',
        name: 'Marie Martin',
        maximum_contract_hours: 38,
      },
      {
        id: '3',
        groupId: 'Employés',
        name: 'Pierre Dubois',
        maximum_contract_hours: 30.4,
      },
      {
        id: '4',
        groupId: 'Employés',
        name: 'Sophie Lambert',
        maximum_contract_hours: 22.8,
      },
      {
        id: '5',
        groupId: 'Employés',
        name: 'Émilie Leclerc',
        maximum_contract_hours: 30.4,
      },
      {
        id: '6',
        groupId: 'Ouvriers',
        name: 'Alexandre Moreau',
        maximum_contract_hours: 38,
      },
      {
        id: '7',
        groupId: 'Ouvriers',
        name: 'François Mercier',
        maximum_contract_hours: 38,
      },
      {
        id: '8',
        groupId: 'Ouvriers',
        name: 'Charlotte Roussel',
        maximum_contract_hours: 38,
      },
      {
        id: '9',
        groupId: 'Ouvriers',
        name: 'Louis Fournier',
        maximum_contract_hours: 38,
      },
      {
        id: '10',
        groupId: 'Ouvriers',
        name: 'Margaux Girard',
        maximum_contract_hours: 38,
      },
    ],
    headerToolbar: { 
    // https://fullcalendar.io/docs/toolbar
      start: 'prev,next,today', 
      center: 'title', // resourceTimeGridDay,resourceTimeGridWeek
      end: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    },
    views: {
    // https://fullcalendar.io/docs/view-specific-options & https://fullcalendar.io/docs/custom-view-with-settings

      resourceTimelineDay: { // Nom de la vue affectée par les options ci-dessous
        titleFormat: {year: 'numeric', month: 'long', day: 'numeric'}, // Permet de formater la date du 'title' affiché dans le 'headerToolbar'. https://fullcalendar.io/docs/date-formatting // On a utilisé momentPlugin pour formatter la date comme ca: '{MMMM {D}}, YYYY 
        slotLabelFormat: { hour: '2-digit', minute: 'numeric', hour12: false }, 
        slotLabelInterval: '01:00:00', // L'intervalle à laquelle les étiquettes de créneau sont affichées sur l'axe du temps.
        slotDuration: '00:30:00', // La durée de chaque créneau horaire dans la timeline
      },

      resourceTimelineWeek: { // Nom de la vue affectée par les options ci dessous
        titleFormat: { year: 'numeric', month: 'numeric', day: '2-digit' }, // Permet de formater la date du 'title' affiché dans le 'headerToolbar'. https://fullcalendar.io/docs/date-formatting
        resourceAreaWidth : '12%',
        // Slot properties
        slotLabelInterval: '24:00:00',// L'intervalle à laquelle les étiquettes (texte 08am) de créneau sont affichées sur l'axe du temps.
        slotDuration: '24:00:00', // La durée de chaque créneau horaire dans la timeline (ex : '00:30:00' pour 30 minutes).
        slotMinWidth: 10, // Determines how wide each of the time-axis slots will be. Specified as a number of pixels.
        slotLabelFormat: { day: '2-digit', weekday: 'short', month: 'short', hour12: false }, // Determines the text that will be displayed within a time slot. https://fullcalendar.io/docs/slotLabelFormat
      },

      resourceTimelineMonth: { // Nom de la vue affectée par les options ci dessous
        titleFormat: { year: 'numeric', month: 'long', day: '2-digit' } // Permet de formater la date du 'title' affiché dans le 'headerToolbar'. https://fullcalendar.io/docs/date-formatting
      }
    },
    eventClick: this.handleEventClick.bind(this), // .bind(this) : JavaScript a une particularité où la valeur de this dans une fonction peut changer selon la façon dont la fonction est appelée. Utiliser .bind(this) crée une nouvelle fonction avec this fixé à la valeur actuelle (dans ce cas, l'instance de CalendarComponent), peu importe comment la fonction est appelée plus tard. Cela garantit que lorsque FullCalendar appelle handleDateClick, this à l'intérieur de handleDateClick se réfère toujours à l'instance de CalendarComponent.
    dateClick: this.handleDateClick.bind(this),

    
    // Generals
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives', // Cléf de license Creative Commons
    initialView: 'resourceTimelineWeek', // Vue initialement chargée
    editable: true,
    themeSystem: 'bootstrap5', // https://fullcalendar.io/docs/themeSystem

    // Localisation https://fullcalendar.io/docs/localization 
    locale: frLocale, // Utiliser la locale française 
    
    // Date & Time Display https://fullcalendar.io/docs/date-display
    nowIndicator: true, // https://fullcalendar.io/docs/now-indicator Affiche un indicateur pour le moment actuel sur la timeline.
    scrollTime: '08:00:00', // L'heure à laquelle le calendrier se positionnera au chargement.

    // Resources properties https://fullcalendar.io/docs/resource-data
    resourceGroupField: 'groupId', // Visually groups resources by certain criteria.
    resourceAreaWidth: "10%", // Determines the width of the area that contains the list of resources.

    // Sizing
    height: 'auto', // Sets the height of the entire calendar, including header and footer.
    windowResizeDelay : 10, // Permet de redéfinir la fenêtre de la page lorsque l'utilisateur redimensionne la fenêtre.
    eventDisplay : 'auto',
    // eventBackgroundColor : 'red',

    // Events
    displayEventTime : true, // Affiche l'heure de l'event dans la case de l'event. https://fullcalendar.io/docs/displayEventTime
    eventTimeFormat :{ // Permet de formater l'affichage de l'heure de l'event. https://fullcalendar.io/docs/eventTimeFormat 
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    }


  /* A creuser:
    * resourceOrder: Contrôle l'ordre dans lequel les ressources sont affichées.
    * selectHelper: Un composant d'assistance s'affiche lors de la sélection des créneaux horaires.
    * editable: Permet de déplacer et de redimensionner les événements.
    * droppable: Permet de déposer des éléments externes sur le calendrier.
    * businessHours: Met en évidence les heures de travail ou les heures d'ouverture.
    * dateClick: Un callback pour quand une date est cliquée.
    * eventClick: Un callback pour quand un événement est cliqué.
    * eventDrop: Un callback pour quand un événement est déplacé.
    * eventResize: Un callback pour quand un événement est redimensionné.
    * eventRender: Un callback pour personnaliser le rendu d'un événement.
    * resourceRender: Un callback pour personnaliser le rendu d'une ressource.
  */

  }
  // Modal Stuff
  selectedEmployee : any

  handleEventClick(arg: any) {
    let selectedEmployee = arg.ressource.title
    console.log(selectedEmployee);    
    this.openModal(this.content)
  }
  handleDateClick (arg: any){
    let selectedEmployee = arg.ressource.title
    console.log(selectedEmployee);
    this.openModal(this.content)
  }
  openModal(content: TemplateRef<any>) {
		// this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
	}
}

