import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatIconModule,
          MatListModule,
           } from '@angular/material';
import { WorkloadComponent } from './workload/workload.component';

import { RouterModule, Routes } from '@angular/router';
import { LoadGenMetricsComponent } from './load-gen-metrics/load-gen-metrics.component';
import { TrafficJvmParametersComponent } from './traffic-jvm-parameters/traffic-jvm-parameters.component';
import { WorkloadSelectionTypeComponent } from './workload-selection-type/workload-selection-type.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { DeploymentComponent } from './deployment/deployment.component';

import {MatTabsModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


  const appRoutes: Routes = [
    { path: 'workload', component: WorkloadComponent },
    { path: 'metrics', component: LoadGenMetricsComponent },
    { path: 'jvm-parameters', component: TrafficJvmParametersComponent },
    { path: 'deployment', component: DeploymentComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WorkloadComponent,
    LoadGenMetricsComponent,
    TrafficJvmParametersComponent,
    WorkloadSelectionTypeComponent,
    UseCasesComponent,
    DeploymentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    PageEvent,
    MatCardModule,
    MatGridListModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
