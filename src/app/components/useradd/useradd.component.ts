import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {

	model: any = {};
    loading = false;
    returnUrl: string;
    id: string;


  constructor(
        private route: ActivatedRoute,
        private router: Router,
  		private commonService: CommonService
  	) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id!=undefined) {
		let tempUsers = JSON.parse(localStorage.getItem('users'));
      	this.model = tempUsers[this.id];
      }
  }


    login() {
        this.loading = true;
        if(this.id!=undefined) {
        	this.commonService.update(this.model, this.id)
	            .subscribe(
	                data => {
	                    this.router.navigate(['userlist']);
	                },
	                error => {
	                	 this.router.navigate(['userlist']);
	                    // this.alertService.error(error);
	                    this.loading = false;
	                });
        } else {
	        this.commonService.login(this.model)
	            .subscribe(
	                data => {
	                    this.router.navigate(['userlist']);
	                },
	                error => {
	                	 this.router.navigate(['userlist']);
	                    // this.alertService.error(error);
	                    this.loading = false;
	                });
	    }
    }

    
}
