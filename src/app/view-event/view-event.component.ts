import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';
import { EventModel } from '../model/school.model';
@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
  @Input() events: EventModel;
  @Output() deleteEvent: EventEmitter<number> = new  EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  delete(): void {
    const eventId = this.events.id;
    this.deleteEvent.emit(eventId);
  }
}

