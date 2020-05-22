import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPictureComponent } from './send-picture.component';

describe('SendPictureComponent', () => {
  let component: SendPictureComponent;
  let fixture: ComponentFixture<SendPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
