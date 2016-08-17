import { Component } from 'angular2/core';
import { Block } from './IBlock';

@Component({
    selector: 'content-block',
    templateUrl: 'app/content-block.html'
})

export class ComponentBlock {
    block: Block[] = [
        {
            "icon": "asd",
            "title":"Legal Updates",
            "message":"We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers."
        }
    ]
}

