import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NickameEditorComponent } from './nickame-editor.component';

describe('NickameEditorComponent', () => {
  let component: NickameEditorComponent;
  let fixture: ComponentFixture<NickameEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NickameEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NickameEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
