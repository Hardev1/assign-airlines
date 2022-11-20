

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RouteModel } from '../../../models/route.model';
import { GeneralData } from '../../../config/general-data';
// import { InfoComponent } from '../../shared/components/modals/info/info.component';
// import { UserCredentialsModel } from '../../../models/sesion/user-credentials.models';
// import { MD5 } from 'crypto-js';
// import { SecurityService } from 'src/app/services/shared/security.service';
// import { RolModel } from '../../shared/modelos/rol.model';
// import { RolService } from 'src/app/services/shared/rol.service';
// import { LocalStorageService } from 'src/app/services/shared/local-storage.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent {
  //recordList: RolModel[] = []
  form: FormGroup = new FormGroup({
  });
  hide: boolean = true;
  checkToken: any;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm() {
    this.form = this.fb.group({
      origin: [
        'MZL',
        [
          Validators.required,
          Validators.minLength(GeneralData.ROUTE_VALID_LENGHT),
          Validators.maxLength(GeneralData.ROUTE_VALID_LENGHT)
        ],
      ],
      destination: [
        'BCN',
        [
          Validators.required,
          Validators.minLength(GeneralData.ROUTE_VALID_LENGHT),
          Validators.maxLength(GeneralData.ROUTE_VALID_LENGHT)
        ],
      ]
    });
  }

  get GetForm() {
    return this.form.controls;
  }

  SearchRoute() {
    if (this.form.invalid) {
    } else {
      this.RecordDataForm();
      // this.securityService.Login(modelo).subscribe({
      //   next: (data: any) => {
      //     if (data.usuario == null) {
      //       this.clave_incorrecta = "usuario o contra incorrecta";
      //       // this.GetForm.password.invalid;
      //       // this.GetForm.username.invalid;
      //     } else {
      //       this.checkToken = this.securityService.VerificarToken()
      //       if (this.checkToken) {
      //         data.isLoggedIn = true;
      //         this.localStorage.SaveSessionData(data);
      //         this.securityService.RefreshSessionData(data);
      //         this.router.navigate(['/inicio'])
      //       }
      //     }
      //   },
      error: (error: any) => {
        console.log('Error al conectar con el backend');
      }
    }//);
  }

  RecordDataForm() {
    let route = new RouteModel();
      route.origin = this.form.controls["origin"].value;
      route.destination = this.form.controls["destination"].value;
      console.log(route);
  }
}

  // GetRecordList() {
  //   this.service.GetRecordList().subscribe({
  //     next: (data: RolModel[]) => {
  //       this.recordList = data;
  //     }
  //   });
  // }

