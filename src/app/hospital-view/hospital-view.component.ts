import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  HospitalServiceService } from '../hospital-service.service'

@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.css']
})
export class HospitalViewComponent implements OnInit {

  hospitals: any;
  constructor(private route: Router, private HospitalServiceService: HospitalServiceService) { }
 
  ngOnInit() {
    this.hospitals = this.HospitalServiceService.gethospitalList()
  }
  getdepartments(id){
    if(id) {
      this.route.navigate(['/department', id]);
    }
  }

 sortData(): Array<number | string> {
    return this.hospitals.sort((a, b) => a.hospitalname < b.hospitalname ? -1 : 1);
 }
}
