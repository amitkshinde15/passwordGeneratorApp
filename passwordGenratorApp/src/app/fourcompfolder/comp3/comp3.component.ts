import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
UtilityService

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp3', res);
      this.userName = res;
    })
   }

  ngOnInit() {
  }

  updateUserName(fname,lname)
  {
    this.userName = {
      fname: fname,
      lname: lname
    };
    console.log(this.userName);

    this._utilityService.userName.next(this.userName);
  }
}

