import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgs = [
    { src: '../../../../assets/flyrlabs.png', alt: "Newshore is now a part of FLYR Labs" },
    { src: '../../../../assets/booking.png', alt: "Newshore is now a part of FLYR Labs" },
    { src: '../../../../assets/disruption.png', alt: "newshore_booking" },
    { src: '../../../../assets/services.png', alt: "Digital-Device-3" },
    { src: '../../../../assets/customers.png', alt: "newshore_disruption" },
  ];
}
