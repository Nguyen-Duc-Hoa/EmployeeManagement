import { Component } from '@angular/core';
import { CommonService } from './Services/CommonService/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  constructor(private common: CommonService){
  }
}


