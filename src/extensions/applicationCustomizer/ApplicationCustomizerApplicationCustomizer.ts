//import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from "@microsoft/sp-application-base";
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
export default class ApplicationCustomizerApplicationCustomizer extends BaseApplicationCustomizer<IApplicationCustomizerApplicationCustomizerProperties> {
  public onInit(): Promise<void> {
    const applyStyles = (): void => {
      const getNode = document.querySelectorAll(".Canvas");

      if (getNode[0].children.length === 2) {
        const childrens = [];
        const children = getNode[0].children;
        for (let i = 0; i < children.length; i++) {
          childrens.push(children[i].className);
        }
        childrens.sort();

        const styles = `
        @media screen and (min-width: 720px) {
          .Canvas{
            display:flex
          }
          .Canvas .${childrens[0]} {
            width: 75%;
            order: 1;
          }
          .Canvas .${childrens[1]} {
            width: 25%;
            order: 2;
          }
        }
      `;

        const styleElement = document.createElement("style");
        styleElement.innerHTML = styles;
        document.head.appendChild(styleElement);
      }
    };

    applyStyles();

    return Promise.resolve();
  }
}
