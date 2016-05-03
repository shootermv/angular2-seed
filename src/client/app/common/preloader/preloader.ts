import {Component, OnInit, ElementRef, Renderer} from 'angular2/core';
import {Router} from 'angular2/router';
@Component({
  selector: 'preloader',
  template: `
     <div class="preloader-progress">
      <div class="preloader-progress-bar" 
             [ngStyle]="{width: loadCounter + \'%\'}"></div>
     </div>
  `
})
export class Preloader implements OnInit {
  public loadCounter:number;
  private counter:number;
  private viewloaded:boolean;
  constructor(public el: ElementRef,
  private renderer: Renderer,
  private router: Router) {
    this.loadCounter = 0;
    this.counter  = 0;
    this.setUpEvents();
  }

  ngOnInit() {
     this.renderer.setElementClass(this.el.nativeElement, 'preloader', true);
     this.startCounter();
  }
  endCounter() {    
    this.loadCounter = 100;
    setTimeout(() => {
      this.viewloaded = true;
      this.renderer.setElementClass(this.el.nativeElement, 'preloader', false);
    }, 100);  
  }

  startCounter()  {
       let remaining = 100 - this.counter;
       this.counter = this.counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));
       this.loadCounter = parseInt(this.counter.toString(), 10);
       if(!this.viewloaded) { setTimeout(() => {this.startCounter();}, 20); }
  }

	private setUpEvents(): void {
		this.router.subscribe((value: any) => this.onNext(value));
	}

	private onNext(value: any): void {
	  setTimeout(() => {
		  this.endCounter();
	  }, 2000);
	}
}
