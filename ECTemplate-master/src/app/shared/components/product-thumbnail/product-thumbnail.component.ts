import { Component, OnInit, Input } from '@angular/core';
import { ProductInfo } from 'src/app/interface/ec-template.interface';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss'],
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0,
        })
      ),
      transition("void <=> *", animate(2000)),
    ]),
  ],
})
export class ProductThumbnailComponent implements OnInit {
  @Input()
  data: ProductInfo;
  @Input()
  width = '300';
  @Input()
  height = '320';

  defaultImage = './assets/images/default-image.png';

  constructor(private router: Router) {}

  ngOnInit() {}

  directTo() {
    this.router.navigate([`/category/product/${this.data.id}`]);
  }
}
