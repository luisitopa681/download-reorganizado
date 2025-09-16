import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Módulos principales
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

// AWS Amplify
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

// Otros módulos
import { PichinchaDesignSystemModule } from '@pichincha/ds-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    PichinchaDesignSystemModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }