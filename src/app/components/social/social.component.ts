import { Component, OnInit } from '@angular/core'
import { faLinkedinIn,faGithub,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;
}
