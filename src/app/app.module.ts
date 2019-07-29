import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule, BsModalRef, BsModalService, ModalContainerComponent  } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ShowcaseComponent } from './shared/showcase/showcase.component';
import { LetsTalkComponent, ModalLetsTalk } from './shared/letsTalk/letsTalk.component';
import { CallToActionComponent } from './shared/callToAction/callToAction.component';
import { MainHeaderComponent } from './shared/mainHeader/mainHeader.component';

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

import { ContactService } from './services/contact.service';

import { ScrollEventDirective } from './directives/scroll-event.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    StrategyServicesComponent,
    AzureIaasComponent,
    Office365Component,
    SharepointOnlineComponent,
    ApplicationDevelopmentComponent,
    ApplicationModernizationComponent,
    ExtendedTeamsComponent,
    EventsComponent,
    ClientStoriesComponent,
    NewsComponent,
    AboutUsComponent,
    ContactComponent,
    ShowcaseComponent,
    LetsTalkComponent,
    ModalLetsTalk,
    CallToActionComponent,
    MainHeaderComponent,
    ScrollEventDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    FormsModule

  ],
  entryComponents: [
    LetsTalkComponent,
    ModalLetsTalk
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
