import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewTransactionPage } from './new-transaction.page';

describe('NewTransactionPage', () => {
  let component: NewTransactionPage;
  let fixture: ComponentFixture<NewTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
