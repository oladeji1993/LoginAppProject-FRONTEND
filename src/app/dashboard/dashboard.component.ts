import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: Router,
    private SpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }



  logout(){
    this.SpinnerService.show()
    this.route.navigate(['home'])
    this.SpinnerService.hide()
  }

}
