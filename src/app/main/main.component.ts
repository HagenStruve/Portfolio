import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
   ngOnInit(): void {
    window.addEventListener("load", this.callbackFunc);
    window.addEventListener("scroll", this.callbackFunc);
   }

   isElementInViewport(element:any) {
    var rect = element.getBoundingClientRect();
    return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }
   
  //  var elements = document.querySelectorAll(".mein-element");
    
   callbackFunc(this: any) {
    var elements = document.querySelectorAll(".scroll");
    for (var i = 0; i < elements.length; i++) {
     if (this.isElementInViewport(elements[i])) {
    elements[i].classList.add("visible");
   }
   
    /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. */
     else { 
      elements[i].classList.remove("visible");
     }
    }
  }
   
    
  //  window.addEventListener("load", this.callbackFunc);
  //  window.addEventListener("scroll", this.callbackFunc);
  

  constructor() { }

  // ngOnInit(): void { }

}
