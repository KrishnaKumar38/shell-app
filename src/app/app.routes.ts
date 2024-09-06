import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        // below routing is one way of integrating mfe app with shell app, check main.ts file we are getting the mfe app details through promise
        path: 'mfeapp',
        loadComponent: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName:'mfeapp',
            exposedModule: './Component', // The module/component being exposed in MFE Webpack config
          }).then(m => m.AppComponent).catch(error =>
            console.log('Error=>', error)), // Replace this with the proper module/component
      }
        //below routing is another way of integrating remote app mfe in shell, using seperate file and declare the module there
        // check remotes.d.ts file.
            /*{
                path: 'mfeapp',
                loadComponent: () => import('mfeapp/Component').then(m => m.AppComponent)
              }*/
];
