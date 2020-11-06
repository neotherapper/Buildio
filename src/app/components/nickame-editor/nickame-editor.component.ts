import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-nickame-editor',
  templateUrl: './nickame-editor.component.html',
  styleUrls: ['./nickame-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NickameEditorComponent {
  selectable = true;
  removable = true; // this can be an Input on future refactor
  addOnBlur = true;
  @ViewChild('chipInput') input: ElementRef;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() nicknames!: string[];

  /**
   * Presentational components receive data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */

  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  onAdd(text: string): void {
    this.add.emit(text);
    this.input.nativeElement.value = '';
  }
}
