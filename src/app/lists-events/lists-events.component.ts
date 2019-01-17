import { Component, OnInit } from '@angular/core';
import { SeviceService } from '../service/sevice.service';
import { EventModel } from '../model/school.model';

@Component({
  selector: 'app-lists-events',
  templateUrl: './lists-events.component.html',
  styleUrls: ['./lists-events.component.css']
})
export class ListsEventsComponent implements OnInit {
  events: EventModel[];

  constructor(private seviceService: SeviceService) { }

  ngOnInit() {
    this.events = this.seviceService.get();
  }

  deleteChild(id: number) {
    this.seviceService.delete(id);
  }

}

