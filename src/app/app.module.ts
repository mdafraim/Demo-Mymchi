import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KrishnaComponent } from './krishna/krishna.component';
import { BalajiComponent } from './balaji/balaji.component';
import { VishwajeetComponent } from './vishwajeet/vishwajeet.component';
import { AryaComponent } from './arya/arya.component';
import { KohinoorComponent } from './kohinoor/kohinoor.component';
import { WoodsideComponent } from './woodside/woodside.component';
import { GnpComponent } from './gnp/gnp.component';
import { BirlaComponent } from './birla/birla.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { EventComponent } from './event/event.component';
import { PressComponent } from './press/press.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    KrishnaComponent,
    BalajiComponent,
    VishwajeetComponent,
    AryaComponent,
    KohinoorComponent,
    WoodsideComponent,
    GnpComponent,
    BirlaComponent,
    FooterComponent,
    ExhibitionComponent,
    EventComponent,
    PressComponent,
    IntroductionComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    RouterLink,
    NgbDropdownModule, 
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
