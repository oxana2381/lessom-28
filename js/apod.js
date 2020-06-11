import {dateFormatter} from './utils.js';
import {renderApp} from './utils.js';
import {addPictureOfDay} from './utils.js';

export function Apod(id){
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);
    
   this. dateFormatter = dateFormatter;

    this.renderApp = renderApp;
       
    this.addPictureOfDay=addPictureOfDay ;
}
