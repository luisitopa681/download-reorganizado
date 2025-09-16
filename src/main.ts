import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify } from 'aws-amplify';
import { amplifyConfig } from './config/amplify-config';

// Configurar Amplify
Amplify.configure(amplifyConfig);

// Activar modo de producción si corresponde
if (environment.production) {
  enableProdMode();
}

// Iniciar la aplicación
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));