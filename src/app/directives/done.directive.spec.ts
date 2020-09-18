import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DoneDirective } from './done.directive';

@Component({
  // template: '<p appDone [isDone]="true">should be crossed out</p>'
  templateUrl: './testCrossedOut.component.html',
})
class TestCrossedOutComponent {}

@Component({
  template: `<p [isDone]="false" appDone style="background-color: red;">should be NOT crossed out</p>`,
})
class TestCleanComponent {}

describe('DoneDirective', () => {
  let component: TestCrossedOutComponent;
  let fixture: ComponentFixture<TestCrossedOutComponent>;
  let pElement: DebugElement;
  let directive: DoneDirective;

  beforeAll(() => {
    TestBed.configureTestingModule({
      // imports: [CommonModule],
      declarations: [TestCrossedOutComponent, DoneDirective],
    });
    fixture = TestBed.createComponent(TestCrossedOutComponent);
    component = fixture.componentInstance;
    directive = new DoneDirective();
  });

  beforeEach(() => {
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });


  it('should be crossed out', () => {
    pElement = fixture.debugElement.query(By.css('p'));

    console.log(pElement.nativeElement);

    console.log(pElement.nativeElement.style)

    expect(pElement.nativeElement.style.textDecoration).toEqual('line-through');
  });
});
