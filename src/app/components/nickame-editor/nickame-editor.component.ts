import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nickame-editor',
  templateUrl: './nickame-editor.component.html',
  styleUrls: ['./nickame-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NickameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
