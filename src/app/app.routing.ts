import { Routes } from '@angular/router';
import { HeaderViewComponent } from './page-parts/header-view/header-view.component';
import { FooterViewComponent } from './page-parts/footer-view/footer-view.component';

export const EVRY_ARCHIVE_ROUTES: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'page-parts/header-view', component: HeaderViewComponent },
  { path: 'page-parts/footer-view', component: FooterViewComponent }
];
