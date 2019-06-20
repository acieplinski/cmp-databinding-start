import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called - called actually on every change');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestry called');
  }
}
