import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.css']
})
export class ChildNodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Reading title from parent */
  @Input()
  parentTitle: string = "Empty";

}
