import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { StrategyServicesComponent } from './components/strategy-services/strategy-services.component';
import { AzureIaasComponent } from './components/azure-iaas/azure-iaas.component';
import { Office365Component } from './components/office365/office365.component';
import { SharepointOnlineComponent } from './components/sharepoint-online/sharepoint-online.component';
import { ApplicationDevelopmentComponent } from './components/application-development/application-development.component';
import { ApplicationModernizationComponent } from './components/application-modernization/application-modernization.component';
import { ExtendedTeamsComponent } from './components/extended-teams/extended-teams.component';
import { EventsComponent } from './components/events/events.component';
import { ClientStoriesComponent } from './components/client-stories/client-stories.component';
import { NewsComponent } from './components/news/news.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './shared/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Services', component: StrategyServicesComponent },
  { path: 'StrategyServices', component: StrategyServicesComponent },
  { path: 'Azure-IaaS', component: AzureIaasComponent },
  { path: 'Office365', component: Office365Component },
  { path: 'SharepointOnline', component: SharepointOnlineComponent },
  { path: 'ApplicationDevelopment', component: ApplicationDevelopmentComponent },
  { path: 'ApplicationModernization', component: ApplicationModernizationComponent },
  { path: 'ExtendedTeams', component: ExtendedTeamsComponent},
  { path: 'Events', component: EventsComponent},
  { path: 'ClientStories', component: ClientStoriesComponent},
  { path: 'News', component: NewsComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  {
    path: 'not-found',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: true,
      initialNavigation: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
