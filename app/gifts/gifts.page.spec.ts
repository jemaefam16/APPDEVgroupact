import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiftsPage } from './gifts.page';

describe('GiftsPage', () => {
  let component: GiftsPage;
  let fixture: ComponentFixture<GiftsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
