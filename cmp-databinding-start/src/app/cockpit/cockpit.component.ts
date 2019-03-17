import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Input() counter: number;
  @ViewChild('serverContent') serverContent: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDochecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Called !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!s')
  }
  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

}
