import { Injectable } from '@angular/core';
import { EventModel } from '../model/school.model';
@Injectable({
  providedIn: 'root'
})
export class SeviceService {
  eventList: EventModel[];

  constructor() {
    this.eventList = 
    [
      {
        id:1,
        name:"trip",
       date: new Date(2019,2,15),
       duration: 7,
       classes: [1,2]
      },  {
        id:2,
        name:"meeting",
        date: new Date(2019,3,15),
        duration: 2,
        classes:[3,4]
      },  {
        id:3,
        name:"trip",
        date:new Date(2019,4,15),
        duration:9,
        classes: [2,6]
      },  {
        id:4,
        name: "meeting",
        date:new Date(2019,5,15),
        duration: 7,
        classes: [7,2]
      },  {
        id:5,
        name: "meeting",
        date: new Date(2019,6,15),
        duration: 3,
        classes:[8,2]
      }
    ];
   }

  delete(id: number) {
     
    const idx = this.eventList.findIndex(p => p.id == id);
    this.eventList.splice(idx, 1);
   }

    get(): EventModel[] {
      return this.eventList;
  }
}