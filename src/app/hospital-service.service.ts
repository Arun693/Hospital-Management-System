import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HospitalServiceService {

  hospitalList: any = [{ hospitalname: 'KIMS', contactnumber: '1234567890' }, { hospitalname: 'CSI Mission Hospital', contactnumber: '1234567890' }];
  departmentList: any =  [{ departmentname: 'nephrology', head: 'Dr. A P Kulashekhar', contactnumber: '1234567890', hospitalname: 'KIMS' }, { departmentname: 'neurology', head: 'Dr.B Raj Kumar', contactnumber: '1234567890', hospitalname: 'KIMS' }, { departmentname: 'cardiology', head: 'Dr. L Sri Devi', contactnumber: '1234567890', hospitalname: 'KIMS' }, { departmentname: 'ENT', head: 'Dr. K Ram Prasad', contactnumber: '1234567890', hospitalname: 'CSI Mission Hospital' }, { departmentname: 'opthalmology', head: 'Dr. J Sirisha', contactnumber: '1234567890', hospitalname: 'CSI Mission Hospital' }];

  constructor() { }

  gethospitalList() {
   // return of (this.hospitalList)
   return this.hospitalList
  }

  getDepartmentForId(id) {
   let dept = []
   this.departmentList.forEach(item => {
     if(item.hospitalname == id) {
      dept.push(item);
     }
   });
   return dept;
  }


}
