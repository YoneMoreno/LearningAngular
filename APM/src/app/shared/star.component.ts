import {Component, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.startWidth = this.rating * 86 / 5;
  }

  rating: number = 4;
  startWidth: number;
}
