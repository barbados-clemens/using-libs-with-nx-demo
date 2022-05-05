import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgLibTwoModule} from "@using-libs-with-jest/ng-lib-two";
import {setup} from "@using-libs-with-jest/testing-utils";

import {CmpComponent} from './cmp.component';

describe('CmpComponent', () => {
  let component: CmpComponent;
  let fixture: ComponentFixture<CmpComponent>;

  beforeEach(async () => {
    console.log('running from within ng',);
    setup()
    await TestBed.configureTestingModule({
      declarations: [CmpComponent],
      imports: [NgLibTwoModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
