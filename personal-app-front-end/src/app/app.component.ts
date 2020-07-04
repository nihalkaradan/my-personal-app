import { Component } from '@angular/core';
import { User } from './user/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:String = 'personal-app-front-end';
  users:User[] = [
    new User('naheel','teat@test','male',false),
    new User('nihal','k@k','male',true)
  ];
}
