import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 86 / 5;
  }

  @Input() rating: number;
  starWidth: number;
}
