import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductListService} from '../product-list.service';
import {Phone} from '../interfaces/phone';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  p: Phone
  constructor(private service: ProductListService,
              private matDialogRef: MatDialogRef<TestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  public close() {
    this.matDialogRef.close();
  }

  public submit(data: string) {
    const obj: Phone = {
      number: data
    };
    this.service.addPhone(obj)
      .subscribe(phone => this.p = phone);
    console.log('phone', this.p);
    this.matDialogRef.close();
    console.warn('Your order has been submitted', data);
  }

}
