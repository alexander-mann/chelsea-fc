import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [DataService]
})
export class InfoComponent implements OnInit {

private data: Data[]

constructor(private d: DataService) { }

ngOnInit() {
  this.d.getData().subscribe(data => {
    this.data = data;
  });
}

}
