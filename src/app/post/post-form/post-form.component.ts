import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  constructor(private router: Router) {}
  postForm = new FormGroup({
    Title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Year: new FormControl('', [Validators.required]),
    Poster: new FormControl('', [Validators.required]),
  });
  //Hacer el de las pipes
  public onSubmit(event: Event) {
    event.preventDefault();
    this.router.navigate(['post/list']);
  }
}
