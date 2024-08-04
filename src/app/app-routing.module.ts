import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FormatOutputComponent } from './format-output/format-output.component';
import { StateListComponent } from './state-list/state-list.component';

const routes: Routes = [
  { path: '', component: FirstComponent }, // Default route to FirstComponent
  { path: 'format-output', component: FormatOutputComponent }, // Route to FormatOutputComponent
  { path: 'state-list', component: StateListComponent } // Route to StateListComponent (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
