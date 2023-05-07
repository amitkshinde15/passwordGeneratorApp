import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
UtilityService
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  userName;
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp2', res);
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

