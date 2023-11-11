import { Component, ElementRef, ViewChild } from '@angular/core';
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
import { Modal } from 'bootstrap';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {


@ViewChild('modal') modalElement!: ElementRef; 
/* @ViewChild pour selectionner la modal dans le dom
  ViewChild est un décorateur dans le framework Angular qui permet à votre classe de composant d'accéder à un élément enfant dans votre template. 
  Cet élément enfant peut être un autre composant Angular, une directive ou même un élément DOM natif. 
  En gros, ViewChild vous permet de "chercher" dans votre vue pour obtenir une référence directe à cet élément ou à cette classe.

  Sélection de l'élément (ici ElementRef)
  Vous pouvez sélectionner l'élément ou le composant enfant de différentes manières :
    Par le sélecteur de classe du composant ou de la directive.
    Par une référence locale dans le template (par exemple, en utilisant #myElement).
    Par le type de l'élément natif (comme ElementRef pour les éléments DOM).
  
  Accès à l'instance
  Une fois que vous avez mis en place ViewChild, vous obtenez l'accès à l'instance de l'élément ou du composant. 
  Cela signifie que vous pouvez appeler des méthodes sur cet élément, accéder à ses propriétés, ou même écouter ses événements.

  Temps d'accès
  La référence à l'élément n'est disponible qu'après qu'Angular ait terminé de traiter la vue. Cela signifie que vous ne pouvez pas y accéder dans le constructeur de votre classe de composant. 
  Habituellement, vous accédez à votre ViewChild dans le hook de cycle de vie ngAfterViewInit() qui est appelé après l'initialisation de la vue du composant.
*/

// Doc FullCalendar: https://fullcalendar.io/docs
  calendarOptions : CalendarOptions = {
    plugins: [ 
      // https://fullcalendar.io/docs/plugin-index
      dayGridPlugin,
      resourceTimeGridPlugin,
      resourceTimelinePlugin,
      interactionPlugin,
      bootstrap5Plugin,
    ],
    events: [ // Shits
    // Doc générale event? https://fullcalendar.io/docs/event-model
    // https://fullcalendar.io/docs/event-object
      { title: '', start: '2023-11-03T06:30', end: '2023-11-03T14:30', resourceId: '1'},
      { title: '', start: '2023-11-04T06:30', end: '2023-11-04T14:30', resourceId: '1'},
      { title: '', start: '2023-11-03T12:00', end: '2023-11-03T19:00', resourceId: '2'},
      { title: '', start: '2023-11-04T12:00', end: '2023-11-04T19:00', resourceId: '2'}
    ],
    eventSources: [ 
    // https://fullcalendar.io/docs/event-source
      [
        {
          googleCalendarId: 'abcd1234@group.calendar.google.com'
        }
      ]
    ],
    resources: [ // Employees
    // https://fullcalendar.io/docs/resource-data
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
    headerToolbar: { 
    // https://fullcalendar.io/docs/toolbar
      start: 'prev,title,next,today', 
      center: 'resourceTimeGridDay,resourceTimeGridWeek',
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
    eventContent: this.createEventTitleWithTime.bind(this), 
    eventClick: this.handleEventClick.bind(this),
    dateClick: this.handleDateClick.bind(this),

    // Generals
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives', // Cléf de license Creative Commons
    initialView: 'resourceTimelineWeek', // Vue initialement chargée
    editable: true,
    themeSystem: 'Bootstrap5', // https://fullcalendar.io/docs/themeSystem

    // Localisation https://fullcalendar.io/docs/localization 
    locale: frLocale, // Utiliser la locale française 
    
    // Date & Time Display https://fullcalendar.io/docs/date-display
    nowIndicator: true, // https://fullcalendar.io/docs/now-indicator Affiche un indicateur pour le moment actuel sur la timeline.
    scrollTime: '08:00:00', // L'heure à laquelle le calendrier se positionnera au chargement.

    // Resources properties https://fullcalendar.io/docs/resource-data
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
  

  createEventTitleWithTime (arg: any) { // !!!1!!*8!!----------  A REFAIRE  --------!1!!***8!!! RAJOUTER DUREE DU SHIFT! Fonction ChatGPT pour mettre l'heure à la place du titre de chaque event.
    // Créer un élément pour le titre avec les heures de début et de fin
    let titleElement = document.createElement('div');
    titleElement.classList.add('fc-event-title');

    // Formater les heures de début et de fin
    let startTime = arg.event.start ? arg.event.start.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : '';
    let endTime = arg.event.end ? arg.event.end.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) : '';

    // Construire le titre avec les heures de début et de fin
    titleElement.innerHTML = startTime + ' - ' + endTime;

    // Créer le conteneur pour le contenu de l'événement
    let arrayOfDomNodes = [];
    let containerElement = document.createElement('div');
    containerElement.appendChild(titleElement);
    arrayOfDomNodes.push(containerElement);

    // Retourner le contenu personnalisé de l'événement
    return { domNodes: arrayOfDomNodes };
  }
  handleEventClick(arg: any) {
    // Vous pouvez maintenant accéder à l'objet de l'événement via arg.event
    // et faire ce que vous voulez, par exemple :
    alert('Event clicked: ' + arg.event.title);
    this.isHidden = !this.isHidden
  }
  handleDateClick (arg: any){
    alert('Clicked on: ' + arg.dateStr);
    this.isHidden = !this.isHidden
  }

  // Modal stuff
  isHidden: boolean = true; // Booléen de controle d'ouverture de modal


  openModal() {
    const modal = new Modal(this.modalElement.nativeElement);
    modal.show();
  }
  
  closeModal() {
    const modal = new Modal(this.modalElement.nativeElement);
    modal.hide();
  }
  

  // Not Full Calendar Stuff
  dateClicked : boolean = true;
}

