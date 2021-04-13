import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'frontend';
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  message = 'random message';
  mkey = 'gtKFFx';
  productInfo = 'Verification order';
  txnid = this.makeid();
  amount = 234.99;
  id = '2222222';
  email = 'test@test.com';
  phone = 9999999999;
  lastName = 'test';
  firstName = 'fname';
  surl = "http://localhost:3000/PaymentStatus";
  hash = '';

  presubmit = function () {
    var data = { preHashString: this.mkey + '|' + this.txnid + '|' + this.amount + '|' + this.productInfo + '|' + this.firstName + '|' + this.email + '|' + this.id + '||||||||||' };
    var url = 'http://localhost:3000/createHash';
    axios.post(url, data).success(function (data, status) {
        console.log(status);
        if (status == 200) {
            document.getElementById('hash').value = data.hash;
            document.getElementById('paymentForm').submit();
        }
    });
  }
}
