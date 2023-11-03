import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; // @fullcalendar/daygrid Offers Month and DayGrid views: dayGridYear, dayGridMonth, dayGridWeek, dayGridDay, dayGrid (generic) 
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
// import momentPlugin from '@fullcalendar/moment'; // Permet de formater des dates de facons plus précise: https://fullcalendar.io/docs/moment-plugin
import frLocale from '@fullcalendar/core/locales/fr'; // Importez la locale française
import timeGridPlugin from '@fullcalendar/timegrid'
import resourceDayGridPlugin from '@fullcalendar/resource-daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  calendarOptions : CalendarOptions = {
    plugins: [
      dayGridPlugin,
      resourceTimeGridPlugin,
      resourceTimelinePlugin,
      // momentPlugin,
    ],
    // Events = horaire/personne
    events: [
      {
        id: 'a',
        title: 'my event',
        start: '2023-11-03'
      }
    ],
    // Ressources = employés
    resources: [
      {
        id: '1',
        groupId: 'Employés',
        title: 'Employé 1',
        // type1: 10,
        // type2: 55
      },
      {
        id: '2',
        groupId: 'Employés',
        title: 'Employé 2',
      },
      {
        id: '3',
        groupId: 'Ouvriers',
        title: 'Ouvrier 1',
      },
      {
        id: '4',
        groupId: 'Ouvriers',
        title: 'Ouvrier 2',
      },
    ],
    // Toolbar
    headerToolbar: {
      start: 'prev,title,next,today', 
      center: 'resourceTimeGridDay,resourceTimeGridWeek',
      end: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    },

    // Permet d'appliquer des options spécifiques à certaines vues du calendrier https://fullcalendar.io/docs/view-specific-options
    // Ou de créer nos propres custom views. https://fullcalendar.io/docs/custom-view-with-settings
    views: {
      resourceTimelineDay: { // Nom de la vue affectée par les options ci-dessous
        titleFormat: {year: 'numeric', month: 'long', day: 'numeric'}, // Permet de formater la date du 'title' affiché dans le 'headerToolbar'. https://fullcalendar.io/docs/date-formatting // On a utilisé momentPlugin pour formatter la date comme ca: '{MMMM {D}}, YYYY 
        slotLabelFormat: { hour: '2-digit', minute: 'numeric', hour12: false },
        // other view-specific options here
      },
      resourceTimelineWeek: { // Nom de la vue affectée par les options ci dessous
        titleFormat: { year: 'numeric', month: 'numeric', day: '2-digit' }, // Permet de formater la date du 'title' affiché dans le 'headerToolbar'. https://fullcalendar.io/docs/date-formatting
        
        // Slot properties
        slotLabelInterval: '24:00:00',// L'intervalle à laquelle les étiquettes (texte 08am) de créneau sont affichées sur l'axe du temps.
        slotDuration: '24:00:00', // La durée de chaque créneau horaire dans la timeline (ex : '00:30:00' pour 30 minutes).
        slotMinWidth: 10, // Determines how wide each of the time-axis slots will be. Specified as a number of pixels.
        slotLabelFormat: { day: '2-digit', weekday: 'short', month: 'short', hour12: false }, // Determines the text that will be displayed within a time slot. https://fullcalendar.io/docs/slotLabelFormat
      },
      resourceTimelineMonth: { // Nom de la vue affectée par les options ci dessous
        titleFormat: { year: 'numeric', month: 'long', day: '2-digit' } // Permet de formater la date du 'title' affiché dans le 'headerToolbar'. https://fullcalendar.io/docs/date-formatting
        // other view-specific options here
      }
    },

    // Generals
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives', // Cléf de license Creative Commons
    initialView: 'resourceTimelineWeek',

    // Slot properties
    slotLabelInterval: '01:00:00',// L'intervalle à laquelle les étiquettes de créneau sont affichées sur l'axe du temps.
    slotDuration: '24:00:00', // La durée de chaque créneau horaire dans la timeline (ex : '00:30:00' pour 30 minutes).
    slotMinWidth: 10, // Determines how wide each of the time-axis slots will be. Specified as a number of pixels.

    // Diverse
    scrollTime: '08:00:00', // L'heure à laquelle le calendrier se positionnera au chargement.
    nowIndicator: true, // Affiche un indicateur pour le moment actuel sur la timeline.

    // Resources properties
    resourceGroupField: 'groupId', // Visually groups resources by certain criteria.
    resourceAreaWidth: "10%", // Determines the width of the area that contains the list of resources.

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
  
}
