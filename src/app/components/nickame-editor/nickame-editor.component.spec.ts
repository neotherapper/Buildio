import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@buildio/material';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatChipListHarness } from '@angular/material/chips/testing';

import { NickameEditorComponent } from './nickame-editor.component';
import { MatIcon } from '@angular/material/icon';

describe('NickameEditorComponent', () => {
  let component: NickameEditorComponent;
  let fixture: ComponentFixture<NickameEditorComponent>;
  let editorDe;
  let editorEl;
  let expectedNicknames: string[];
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NickameEditorComponent],
      imports: [BrowserAnimationsModule, MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NickameEditorComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);

    // find the nickname editor's DebugElement and element
    editorDe = fixture.debugElement.query(By.css('.nickname-editor'));
    editorEl = editorDe.nativeElement;

    // mock the building supplied by the parent component
    expectedNicknames = ['empire', 'shard'];

    // simulate the parent setting the input property with that building
    component.nicknames = expectedNicknames;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the building nicknames', () => {
    const nicknames: HTMLElement = editorEl.querySelector(
      '.mat-chip-list-wrapper'
    );

    for (const nickname of expectedNicknames) {
      expect(nicknames.textContent).toContain(nickname);
    }
  });

  it('should raise add event when clicked with nickname paylod', async (done) => {
    spyOn(component.add, 'emit');
    const matChipList = await loader.getHarness(MatChipListHarness);
    const matChipInput = await matChipList.getInput();
    const expectedNickname = 'Parthenon';

    const inputEl = fixture.debugElement.query(
      By.css('.nickname-editor__input')
    );

    // simulate user entering a new name into the input box
    await matChipInput.setValue(expectedNickname);
    inputEl.triggerEventHandler('keydown', null);

    expect(component.add.emit).toHaveBeenCalledWith(expectedNickname);
    done();
  });

  it('should raise remove event when clicked with nickname payload', () => {
    spyOn(component.remove, 'emit');
    const expectedNickname = 'empire';

    const iconEl = fixture.debugElement.queryAll(By.directive(MatIcon))[0];

    iconEl.triggerEventHandler('click', { stopPropagation: () => {}});

    expect(component.remove.emit).toHaveBeenCalledWith(expectedNickname);
  });
});
