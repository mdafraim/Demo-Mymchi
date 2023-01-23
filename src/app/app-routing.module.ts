import { PropertiesComponent } from './properties/properties.component';
import { ManagingComitteeComponent } from './managing-comittee/managing-comittee.component';
import { MembersComponent } from './members/members.component';
import { PeopleComponent } from './people/people.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PressComponent } from './press/press.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { KrishnaComponent } from './krishna/krishna.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'krishna', component: KrishnaComponent},
  { path: 'exhibition', component: ExhibitionComponent },
  { path: 'event', component: EventComponent},
  { path: 'press', component: PressComponent},
  { path: 'introduction', component: IntroductionComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'members', component: MembersComponent},
  { path: 'managing-comittee', component: ManagingComitteeComponent},
  { path: 'properties', component: PropertiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
