import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateEditUserComponent } from './user-create-edit-user.component';

describe('UserCreateEditUserComponent', () => {
  let component: UserCreateEditUserComponent;
  let fixture: ComponentFixture<UserCreateEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreateEditUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCreateEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
