import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TableBootComponent } from './table-boot.component';
describe('TableBoot', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                TableBootComponent
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(TableBootComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});