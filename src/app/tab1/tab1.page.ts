import {
  Component
} from '@angular/core';
import {
  ViewEncapsulation
} from '@angular/core';

/* --------------------------------- Camera --------------------------------- */
import {
  Plugins,
  CameraResultType
} from '@capacitor/core';

const {
  Camera
} = Plugins;
import {
  DomSanitizer
} from '@angular/platform-browser';
import {
  UtilitiesService
} from '../services/utilities.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page {
  rows: any = [{
      item: 'Milk',
      qty: 1,
      price: '13'
    },
    {
      item: 'Cheese',
      qty: 0,
      price: '10'
    },
    {
      item: 'Eggs',
      qty: 3,
      price: '2'
    }
  ];
  // columns = [
  // {
  //   name: 'Item'
  // }, 
  // {
  //   name: 'Quantity'
  // }, {
  //   name: 'Company'
  // }];
  editing = {};
  labels = [{
    prop: 'item',
    name: 'Item'
  }, {
    prop: 'qty',
    name: 'QTY'
  }, {
    prop: 'price',
    name: 'Price ($)'
  }];
  imageUrl: any = '';
  editingActive: boolean = false;

  /* -------------------------------------------------------------------------- */
  /*                              Totals & Shipping                             */
  /* -------------------------------------------------------------------------- */
  subTotal: any = 0;
  shipping: number = 20;
  estTotal: number = 0;
  orderTotal: any = 0;

  constructor(private sanitizer: DomSanitizer, private utils: UtilitiesService) {}

  ngOnInit() {
    this.updateSubTotal();
  }
  updateSubTotal() {
    this.subTotal = this.rows
      .map(item => parseInt(item.price))
      .reduce((prev, curr) => prev + curr, 0);
    // this.estTotal = this.subTotal + this.shipping;
  }

  totalChanged(e) {
    this.orderTotal = parseInt(e.target.value);
  }


  // call to update cell value
  updateValue(event, cell, rowIndex) {
    let oldQuantity = this.rows[rowIndex].qty;
    let newValue = parseInt(event.target.value);
    // console.log(oldQuantity, newValue);
    let addTo = 0;
    if (cell === 'qty') {
      if (oldQuantity < newValue) {
        addTo = this.rows[rowIndex].price * (newValue - oldQuantity);
        this.subTotal += addTo;
        // this.rows = [...this.rows];
      } else if (oldQuantity === newValue) {
        console.log('Same');
      } else if (oldQuantity > newValue) {
        let subTo = this.rows[rowIndex].price * (newValue - oldQuantity);
        console.log('Less', subTo);
        this.subTotal += subTo;
      }
    } else {
      this.updateSubTotal();
    }
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = newValue;

    /* ------------------------ Update SubToTal and Rows ------------------------ */

    
    this.rows = [...this.rows];
    // this.subTotal = 0;

  }

  // call on double click in cell
  editCell(cell, rowIndex) {
    this.editingActive = true;
    this.editing = {};
    this.editing[rowIndex + '-' + cell] = true;
  }

  save() {
    this.editingActive = false;
    this.editing = {};
    this.imageUrl = '';
  }

  removeImage() {
    this.imageUrl = '';
  }

  async takePicture() {
    this.utils.presentLoading('');
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src. 
    // You can access the original file using image.path, which can be 
    // passed to the Filesystem API to read the raw data of the image, 
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imageUrl = image.webPath;
    this.utils.dismissLoading();
  }

}