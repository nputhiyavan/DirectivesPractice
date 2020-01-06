import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 toggleFlag: boolean = true;
 toggleLog = [{}];
 i = 1;
  constructor() { }

  ngOnInit() {
  }
  onClickDisplay(){
    this.toggleFlag == true ? this.toggleFlag = false : this.toggleFlag = true;    
    var currentdate = new Date(); 
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    this.toggleLog.push({id: this.i, timestamp: datetime});
    this.i++;
  }

  getColor(){    
    return this.toggleLog.length >= 5 ? 'red ': 'white';
  }

}
