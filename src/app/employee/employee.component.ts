import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

  export class EmployeeComponent implements OnInit {
    regForm: any
    registration:any;
  employees: any=[]   
    constructor(private router:ActivatedRoute) {  // Creating a constructor for the component that initializes the "router" from ActivatedRoute
      this.getemployee() 
    }
    ngOnInit(): void { // Implementing the "OnInit" lifecycle hook to initialize the component when it is loaded
      this.getemployee() // calls the "getemployee()" method to fetch employee data
        this.regForm = new FormGroup({
          Firstname: new FormControl(""),
          Lastname: new FormControl(""),
          Company: new FormControl(""),
          mobile: new FormControl(""),
          Email: new FormControl(""),
          Location: new FormControl("")
        })
    }

    update (employees:any) { // "update" method that takes "employees" as a parameter
      this.regForm=employees // sets the "regForm" property with the "employees" value
      localStorage.setItem('employees',JSON.stringify(employees)) // stores the "employees" data in the localStorage
      window.location.href='/updatedata' //Navigates to '/updatedata' URL:
     }




  
    show() { // Defining a method "show" that sends a POST request to 'http://localhost:3000/employeer/adddata' with the data from "regForm" and logs the result in the console
      console.log(this.regForm.value)
      fetch("http://localhost:3000/employeer/adddata", {
       method:'post',
       headers:{
        "Access-Contol-Allow-Origin": "*",
        "content-Type":'application/json'
       },
       body:JSON.stringify(this.regForm.value)
     }).then(res=> res.json())
     .then(result=>{ 
       console.log(result)
     console.log(this.regForm)
    }).catch(err =>
      console.log(err))
  } 
  
  getemployee() { // Defining a method "getemployee" that sends a GET request to 'http://localhost:3000/employeer/employees' and logs the result in the console, and sets the "employees" property with the fetched data
  fetch("http://localhost:3000/employeer/employees", {
   method:'get',
   headers:{
    "Access-Contol-Allow-Origin": "*",
   },
 }).then(res=> res.json())
 .then(result=>{ 
   console.log(result)
   this.employees=result.employees // this refers to the component itself for which the template was rendered. On the template you can access only members of the component. This means that this is implicitly added to each property which you use in the template. 
 console.log(this.employees)
}).catch(err =>
  console.log(err))
  }

  remove(Firstname: any) { // Defining a method "remove" that takes "Firstname" as a parameter, sends a DELETE request to 'http://localhost:3000/employeer/deletedata/' + Firstname, and logs the result in the console
  fetch("http://localhost:3000/employeer/deletedata/" + Firstname, { 
       method:'delete', // Method Name 
       headers:{
        "Access-Contol-Allow-Origin": "*",
        "content-Type":'application/json'
       },
     }).then(res=> res.json()) // converts result into json format
     .then(result=>{ 
       console.log(result) // Displays the Result in Console
       alert('Employee Data Deleted Succesfully') // Gives An Alert Message With Ok
    }).catch(err => // Display The Error
      console.log(err)) 
   } 
}
