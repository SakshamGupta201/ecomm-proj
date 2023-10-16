import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SingUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService, private router: Router) { }
  ngOnInit(): void { }



  signUp(formData: SingUp): void {
    console.log(formData);
    this.sellerService.userSignUp(formData).subscribe((result) => {
      if (result) {
        this.router.navigate(['/seller-home'])
      }

    });
  }
}
