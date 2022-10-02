import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import {  HospitalServiceService } from '../hospital-service.service'
@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {
  id: any;
  depatments: any
  constructor(private route: ActivatedRoute, 
    private hospitalService: HospitalServiceService,
    private Router: Router) { }

  ngOnInit() {
    // this.id = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     let hid = params.get('id');
    //     this.getdepartments(hid);
    //     return hid;
    //   })
    // )
    let id = this.route.snapshot.paramMap.get('id');
    this.getdepartments(id);
  }
  getdepartments(id) {
    this.depatments = this.hospitalService.getDepartmentForId(id);
    console.log(this.depatments)
  }

  back() {
    this.Router.navigate(['hospital'])
  }
}
