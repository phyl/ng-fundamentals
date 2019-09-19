import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component ({
    
    selector: 'event-thumbnail',
    template: `
    
<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div></div>
    <div [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: R{{event?.price}}</div>
    <div *ngIf="event?.location">
        <span>Location: {{event?.location.address}}</span>
        <span>{{event?.location.city}}</span>
        <span>{{event?.location.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
    </div>

</div>
`,
styles: [`
.thumbnail { min-height: 210px;}
`]
})

export class EventThumbnailComponent {
    @Input() event:any

}