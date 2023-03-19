import { Router } from '@angular/router';
import { ToysService } from './../../core/services/toys/toys.service';
import { ToysInterface } from './../../core/services/toys/models/toys.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.scss']
})
export class ToysListComponent implements OnInit{

  public toy?: ToysInterface;
  public toys: ToysInterface[] = [];

constructor(
private router: Router,
private ToysService: ToysService
){}

public ngOnInit(): void {
  this.ToysService.getToys().subscribe((toysFromApi) => this.toys = toysFromApi);
  }
}
