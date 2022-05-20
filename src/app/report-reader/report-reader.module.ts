import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
//import {reportReaderRoutedComponents, ReportReaderRoutingModule} from './report-reader-routing.module';
import { HttpModule } from '@angular/http';
// services
//import {HeroService} from './shared/hero.service';
import {GoogleBooksService} from './shared/idmReports';
// NgRx elements
//import {StoreModule/*, ActionReducerMap*/} from '@ngrx/store';
//import {EffectsModule} from '@ngrx/effects';
//import {myReportEffects} from './store/myReportEffect';
//import * as reportReaderReducer from './store/myReport.reducer';
//import { reducer } from './store/myReport.reducer';
import {ReportReaderComponent} from './report-reader.component';
import {IdentityComponent} from './identity/identity.component';
import {CertificationComponent} from './certification/certification.component';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicFormComponent } from './shared/dynamic-form/containers/dynamic-form/dynamic-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdDirective } from './ad.directive';
import {ReportDirective} from './shared/report.directive';
import { ReportService} from './shared/report.service';
import { DynamicFormModule } from './shared/dynamic-form/dynamic-form.module';

//import {CertificationDirective} from './certification/certification.directive';


/*export const reducers: ActionReducerMap<any> = {
  reportReader: reportReaderReducer.reducer
};
*/
@NgModule({
  imports: [
    SharedModule,	
  //  ReportReaderRoutingModule,
   /*  StoreModule.provideStore({
      myReport: reducer
    }),*/
//	EffectsModule.run(myReportEffects),
	HttpModule,
	BrowserModule, 
	FormsModule,
	ReactiveFormsModule,
	DynamicFormModule
  ],
   bootstrap: [
    IdentityComponent,DynamicFormComponent
  ],
  exports: [    
    ReportReaderComponent,
	IdentityComponent,    
  ],
  declarations: [
	  ReportReaderComponent,
	  IdentityComponent,	
	  //DynamicFormComponent,
	  CertificationComponent,
	  AdDirective,
	   
	 
	  //CertificationDirective,
	  ReportDirective
	 
	  
  ],
  providers: [
    GoogleBooksService,ReportService
  ],
  entryComponents :[CertificationComponent,DynamicFormComponent]
})
export class ReportReaderModule {
}