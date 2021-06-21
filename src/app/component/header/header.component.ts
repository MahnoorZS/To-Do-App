import { Component, OnInit } from '@angular/core';
import { UIService } from "../../services/ui.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiservice:UIService, private router: Router) { 
    this.subscription = this.uiservice.onToggle()
    .subscribe(( value ) => this.showAddTask = value);

    this.router
  }

  //when the component loads add functionality hee in the oninit method
  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiservice.toggleAddTask();

  //console.log("toggle");
  
  }

  hasRoute(route: string){
    return this.router.url ===route;
  }
}
