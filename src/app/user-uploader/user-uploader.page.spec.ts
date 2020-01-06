import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserUploaderPage } from './user-uploader.page';

describe('UserUploaderPage', () => {
  let component: UserUploaderPage;
  let fixture: ComponentFixture<UserUploaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUploaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserUploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
