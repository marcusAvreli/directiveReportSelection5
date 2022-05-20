import {Component, Inject, Input,OnInit,ViewChild,ViewChildren,OnDestroy,AfterViewInit,AfterContentChecked,ChangeDetectorRef,  ComponentFactoryResolver} from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ReportDirective } from '../shared/report.directive';
import { ReportService } from '../shared/report.service';
import {ReportItem } from '../shared/report.item';


import { DynamicFormComponent } from '../shared/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../shared/dynamic-form/models/field-config.interface';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-identity',
    styleUrls: ['identity.component.scss'],

  templateUrl: './identity.component.html',
 /* template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `,*/
  //styleUrls: ['./identity.component.scss'],
  
})
export class IdentityComponent implements OnInit,AfterViewInit{	
	//@ViewChildren(DynamicFormComponent) form: DynamicFormComponent;
	@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
	//@ViewChild(DynamicFormComponent, {read: false}) form;
	//form: DynamicFormComponent;
	proveedorArray: any[];
	 //  @Input() post: any;

	facturaForm: FormGroup = new FormGroup({
		Id:new FormControl(),
		Factura: new FormControl(),
		Fecha:new FormControl(),
		Ncliente: new FormControl(),
		ClaveEmpresa:new FormControl(),
		ClaveProveedor: new FormControl()
	});
	disabled = false;
	selectorForm: FormGroup = new FormGroup({});
//@ViewChild(DynamicFormComponent) set ft(form: DynamicFormComponent) {
//    console.log(tiles);
//    console.log(tiles);
	/*config:FieldConfig[]=[
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    }];*/
	config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];
  ngOnInit(): void {
		console.log("identity init started identity");	
		console.log("identity init started identity");	
		this.initCatalogos();
	/*	this.config=[
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    }];*/
		//this.initCatalogos();
	}
 /* constructor(
  ){
	  
	  this.config=[
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    }];
  }*/
	
	constructor(
	private reportService: ReportService,
	  private cdref: ChangeDetectorRef

	
	) {}
	
	initCatalogos() {	
		const array = [];
		array.push({"name": "Report_1","id": "1"});
		array.push({"name": "Report_2","id": "2"});
		this.proveedorArray = array;
	}	
	
	
	 ngAfterViewInit() {
		 if(this.form.controls.length <1){
				  console.log("dont have controls");
			  }else{
				  console.log("more");
			  }
		 console.log("ngAfterViewInit started");
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
	this.cdref.detectChanges();
	console.log("ngAfterViewInit finished");
  }
 ngAfterContentChecked(){
	 console.log("ngAfterContentChecked started");
	   /*this.config=[
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    }];*/
	if(this.form.controls.length <1){
	  console.log("dont have controls");
	}else{
	  console.log("more");
	}
	 
	 console.log("ngAfterContentChecked" +this.form);
	/*	let previousValid = this.form.valid;
		console.log("ngAfterContentChecked");
		this.form.changes.subscribe(() => {
		if (this.form.valid !== previousValid) {
		previousValid = this.form.valid;
		console.log("ngAfterContentChecked");
		this.form.setDisabled('submit', !previousValid);
		}
    });
    

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');*/
	console.log("ngAfterContentChecked finished");
	//this.cdref.detectChanges();
  }
proveedor_OnSelect(response){
		console.log("proveedor_OnSelect:"+response);
		if(response!=null){
			//const currentComponent = this.components[response-1];			
			//let	 rI = new ReportItem(currentComponent);			
			//this.reportService.loadComponent(this.adHost.viewContainerRef, rI);
			
		} else {
		 
		}
	}  
  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}