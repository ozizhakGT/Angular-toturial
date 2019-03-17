import {Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {

  }
  ngOnInit() {
  }
  ngOnDestroy(): void {
    console.log('server element component On Destroy')
  }

}
