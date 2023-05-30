//import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
//import { Dialog } from '@microsoft/sp-dialog';

//import * as strings from 'ApplicationCustomizerApplicationCustomizerStrings';

//const LOG_SOURCE: string = 'ApplicationCustomizerApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IApplicationCustomizerApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ApplicationCustomizerApplicationCustomizer
  extends BaseApplicationCustomizer<IApplicationCustomizerApplicationCustomizerProperties> {

  public onInit(): Promise<void> {
    console.log("funcionando")

    const applyStyles = (): void => {
      const styles = `
        @media screen and (min-width: 720px) {
          .a_a_50a7110f.b_a_50a7110f{
            display:flex
          }
          .a_a_50a7110f.b_a_50a7110f .e_a_50a7110f {
            width: 75%;
            order: 1;
          }
          .a_a_50a7110f.b_a_50a7110f .f_a_50a7110f {
            width: 25%;
            order: 2;
          }
        }
      `;
    
      const styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
      document.head.appendChild(styleElement);
    };
    
    applyStyles();
    
    
    return Promise.resolve();
  }
}
