import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: any = [
   ];


  constructor(
  		private route: ActivatedRoute,
        private router: Router
  	) { }

  ngOnInit() {

		let tempUsers = JSON.parse(localStorage.getItem('users'));
		console.log(tempUsers);
		if(tempUsers.length){
		this.users = tempUsers;
		}

  }
  onDelete(i) {
		let tempUsers = JSON.parse(localStorage.getItem('users'));
		
		tempUsers.splice(i, 1);
		localStorage.setItem('users',JSON.stringify(tempUsers));
		this.users = tempUsers;
		
    }

}
