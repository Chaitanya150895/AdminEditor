import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  ROLE_INDEX = 2;
  role = [];

  formData = [
    { for: "username", control: "input", type: "text", label: "Username", placeholder: "Enter username", id: "username", control_name: "username" },
    { for: "password", control: "input", type: "text", label: "Password", placeholder: "Enter password", id: "password", control_name: "password" },
    { for: "role", control: "select", type: null, label: "Role", placeholder: "Select Role", id: "role_id", control_name: "role_id", array: null },
    { for: "active", control: "input", type: "hidden", label: " ", placeholder: " ", id: "active", control_name: "active" },

  ]

  customForm = this.fb.group({
    username: [''],
    password: [''],
    role_id: [''],
    active: 1
    });

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getHttp("roles.json").subscribe(data => {
      console.log(data);
      this.formData[this.ROLE_INDEX].array = (data['data']);
    });
  }

  onSubmit() {
    this.httpService.postHttp("users.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
      });
  }
}
