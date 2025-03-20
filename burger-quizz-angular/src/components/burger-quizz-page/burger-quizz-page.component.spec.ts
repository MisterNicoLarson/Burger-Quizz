import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerQuizzPageComponent } from './burger-quizz-page.component';

describe('BurgerQuizzPageComponent', () => {
  let component: BurgerQuizzPageComponent;
  let fixture: ComponentFixture<BurgerQuizzPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerQuizzPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerQuizzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
