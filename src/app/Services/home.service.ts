import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public http: HttpClient) { }


  testimonials: any = [];
  getAllTestimonials() {
    this.http.get('https://localhost:7117/api/Testimonial').subscribe(result => {
      this.testimonials = result;

    }, err => {
      console.log(err.message)
    });
  }


  homePage: any = [];
  getHomePage() {
    this.http.get('https://localhost:7117/api/Home').subscribe(result => {
      this.homePage = result;

    }, err => {
      console.log(err.message)
    });
  }


  contactInfo: any = [];
  getContactInfo() {
    this.http.get('https://localhost:7117/api/Contact').subscribe(result => {
      this.contactInfo = result;

    }, err => {
      console.log(err.message)
    });
  }


  aboutPage: any = [];
  getAboutInfo() {
    this.http.get('https://localhost:7117/api/About').subscribe(result => {
      this.aboutPage = result;

    }, err => {
      console.log(err.message)
    });
  }


}
