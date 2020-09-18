import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DoneDirective } from './done.directive';

const textInside = 'hello kitty';

@Component({
  template: ` <p id="p-true" appDone [isDone]="true" [text]="textInside"></p>
    <p id="p-false" appDone [isDone]="false" [text]="textInside"></p>`,
})
class TestComponent {
  textInside = textInside;
}

describe('DoneDirective', () => {
  let pTrue: DebugElement;
  let pFalse: DebugElement;
  let directive: DoneDirective;
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, DoneDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    pTrue = fixture.debugElement.query(By.css('p#p-true'));
    pFalse = fixture.debugElement.query(By.css('p#p-false'));
    directive = new DoneDirective();
    fixture.detectChanges();
  });

  describe('done = true', () => {
    it('should create an instance', () => {
      expect(directive).toBeTruthy();
    });

    it(`should contain value from textInside: "${textInside}"`, () => {
      expect(pTrue.nativeElement.innerText).toContain(textInside);
    });

    it('should be crossed out', () => {
      expect(pTrue.nativeElement.style.textDecoration).toEqual('line-through');
    });

    it('should contain (: and :)', () => {
      expect(pTrue.nativeElement.innerText).toContain('(:');
      expect(pTrue.nativeElement.innerText).toContain(':)');
    });
  });

  describe('done = false', () => {
    it(`should contain value from textInside: "${textInside}"`, () => {
      expect(pFalse.nativeElement.innerText).toContain(textInside);
    });

    it('should NOT be crossed out', () => {
      expect(pFalse.nativeElement.style.textDecoration).toEqual('');
    });

    it('should NOT contain (: and :)', () => {
      expect(pFalse.nativeElement.innerText).not.toContain('(:');
      expect(pFalse.nativeElement.innerText).not.toContain(':)');
    });
  });
});
