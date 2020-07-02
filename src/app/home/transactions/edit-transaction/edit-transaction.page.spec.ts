import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTransactionPage } from './edit-transaction.page';

describe('EditTransactionPage', () => {
  let component: EditTransactionPage;
  let fixture: ComponentFixture<EditTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
