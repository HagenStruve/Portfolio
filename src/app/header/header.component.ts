import { Component, HostListener, OnInit, Renderer2, ElementRef} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  lastScrollTop = 0;
  isVisible = true;
  renderer:any;
  el:any;

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > this.lastScrollTop && this.isVisible) {
        this.renderer.addClass(this.el.nativeElement.querySelector('.header'), 'hide');
        this.isVisible = false;
    } else {
      if(scrollPosition < this.lastScrollTop && !this.isVisible){
        this.renderer.removeClass(this.el.nativeElement.querySelector('.header'), 'hide');
        this.isVisible = true;
      }
    }
    this.lastScrollTop = scrollPosition;
  }

  constructor() {  }
  ngOnInit(): void {
  }

}
