import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html'
})
export class NewProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      // Aquí iría la lógica para guardar el producto
    }
  }
}