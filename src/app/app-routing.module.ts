import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'timesheets', pathMatch: 'full' },
  {
    path: 'timesheets',
    children: [
      {
        path: '',
        loadChildren: './timesheets/timesheets.module#TimesheetsPageModule',
      },
      {
        path: ':timesheetId',
        loadChildren: './timesheets/timesheet-detail/timesheet-detail.module#TimesheetDetailPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
