import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';
UtilityService

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName;
  // DI 
  constructor(private _utilityService: UtilityService) {

    this._utilityService.userName.subscribe(res => {
      console.log('data comming from subject', res)
      this.userName = res;
    }, err => {
      console.log('error occured', err);
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
