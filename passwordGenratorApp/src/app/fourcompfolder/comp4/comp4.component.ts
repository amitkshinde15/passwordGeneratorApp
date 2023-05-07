import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
UtilityService

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  userName = {};
  constructor(private _utilityService: UtilityService) {
    this._utilityService.userName.subscribe(res => {
      console.log('comp4', res);
      this.userName = res;
    });
   }

  ngOnInit() {
  }

  updateUserName(firstname,lastname)
  {
    this.userName = {
      fname: firstname,
      lname: lastname
    };
    console.log(this.userName);

    this._utilityService.userName.next(this.userName);
  }
}

