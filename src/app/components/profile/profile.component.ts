import { Component, OnInit } from '@angular/core';
import { ProfileService } from  '../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;

  constructor(private profileservice:ProfileService) { 
    this.profileservice.getProfileInfo().subscribe((profile: any) =>{
      console.log(profile);
    });
  }

  ngOnInit(): void {
  }

}
