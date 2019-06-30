import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	  title = 'secondProject';
	  ComputerForm: FormGroup;

	  constructor(
		  private fb: FormBuilder) {}

    ngOnInit(): void {

		this.ComputerForm = this.fb.group({
			//email: [{value: '123', disabled: true}, [Validators.required]]
			email: [null, [Validators.required]],
			password: [{value: '12345', disabled: false}, [Validators.required]],
			address1: [{value: 'Kolkata', disabled: false}, [Validators.required]],
			address2: [{value: 'Howrah', disabled: false}, [Validators.required]],
			city: [{value: 'Howrah', disabled: false}, [Validators.required]],
			zip: [{value: '711412', disabled: false}, [Validators.required, Validators.max(6)]],
			state: [{value: 'pencil', disabled: false}, [Validators.required]],
			check: [{value: true, disabled: false}, [Validators.required]]
		});



	//   console.log(2 > 3); // false

	//   let details = {
	// 	  email: 'abhaymondal101@gmail.com',
	// 	  password: 'a123m',
	// 	  address: 'Howrah',
	// 	  address2: 'Udaynarayanpur',
	// 	  city: 'Howrah',
	// 	  state: 'West Bengal',
	// 	  zip: 711412,
	// 	  agree: true
	  //}
	  //console.log(details.email)
	  //console.l(og(details['email'])
	//   let det = 'email';
	//   console.log(details)
	//   let val = 10;
	//   val = 100; 
	//   console.log(val);
	//   this.fun();
	}
	
	// fun() {
	// 	console.log('Hello World');
	// }


	formSubmit({value, valid}: {value: any, valid: boolean}): void {
		console.log(this.ComputerForm);
	}
}
