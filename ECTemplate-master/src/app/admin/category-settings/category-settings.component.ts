import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-category-settings',
  templateUrl: './category-settings.component.html',
  styleUrls: ['./category-settings.component.scss']
})
export class CategorySettingsComponent implements OnInit {

  constructor(private mainSer:MainService) { }

  ngOnInit() {
    this.getCategory();
  }
  all_category = [];
  category: any ={};
  update: boolean = false;

  getCategory() {
    this.mainSer.getAllCategory().subscribe(
      (res) => {
        console.log(res)
        this.all_category = res
      },err => {
        console.log(err)
      }
    )
  }

  addNewCategory() {
    this.mainSer.addCategory(this.category).subscribe(
      (res) => {
        console.log(res)
        alert("New Category Addedd Successfully!!!")
        this.getCategory();
      },err => {
        console.log(err)
      }
    )
  }

  editCategory(category) {
    this.update = true
    this.category = category
    // this.mainSer.editOneCategory(category).subscribe(
    //   (res)=> {
    //     console.log(res)
    //     alert("Updated Successfully!!!")
    //     this.getCategory();

    //   },err => {
    //     console.log(err)
    //   }
    // )
  }

  cancel() {
    this.category = {};
    this.update = false
  }

  updateCategory() {
     this.mainSer.editOneCategory(this.category).subscribe(
      (res)=> {
        console.log(res)
        alert("Updated Successfully!!!")
        this.getCategory();
        this.update = false

      },err => {
        this.update = true
        console.log(err)
      }
    )
  }

}
