import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAdminComponent } from './material-admin/material-admin.component';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { MaterialAdminListComponent } from './material-admin-list/material-admin-list.component';
import { RedspinnerComponent } from './redspinner/redspinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TwiterComponent } from './twiter/twiter.component';
import { FooterComponent } from './footer/footer.component';
import { GraficComponent } from './grafic/grafic.component';
import { TableComponent } from './table/table.component';
import { SwitchComponent } from './switch/switch.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { SelectmenuComponent } from './selectmenu/selectmenu.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    MaterialAdminComponent,
    SidenavComponent,
    MainComponent,
    LeftnavComponent,
    MaterialAdminListComponent,
    RedspinnerComponent,
    TwiterComponent,
    FooterComponent,
    GraficComponent,
    TableComponent,
    SwitchComponent,
    TextfieldComponent,
    SelectmenuComponent,
    CheckboxComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
