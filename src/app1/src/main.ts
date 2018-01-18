import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngularPlatform } from '../../util/single-spa-angular-platform';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

singleSpaAngularPlatform.mount('app1-root', (unmount) => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(unmount);
});