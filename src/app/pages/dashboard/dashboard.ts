import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  emi:any={
    loan_amount:"",
    interest:"",
    tenure:""
  }
  emi_amt:any

  calculator() {

    if (this.emi.loan_amount && this.emi.interest && this.emi.tenure) {

      const P = Number(this.emi.loan_amount);
      const annualRate = Number(this.emi.interest);
      const N = Number(this.emi.tenure);

      // ✅ Convert annual interest to monthly
      const R = annualRate / (12 * 100);

      // ✅ Correct EMI formula
      this.emi_amt =Math.round(
        (P * R * Math.pow(1 + R, N)) /
        (Math.pow(1 + R, N) - 1));

      sessionStorage.setItem('EMI_value', JSON.stringify(this.emi_amt));
alert("Calculated EMI Value Successfully ...")
      // alert("Calculated EMI Value Successfully ..."+Math.round(this.emi_amt));
    }
    else {
      alert("Please fill the form");
    }
  }
}
