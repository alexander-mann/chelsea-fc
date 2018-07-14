import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-players',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css'],
  providers: [DataService]
})
export class SquadComponent implements OnInit {

private data: Data[]

constructor(private d: DataService) { }

ngOnInit() {
  this.d.getData().subscribe(data => {
    this.data = data;
  });
}

}
