import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InputTextComponent } from './input-text.component';
describe('Input Text', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                InputTextComponent
            ],
        }).compileComponents();
    });

    it('should create', () => {
        const fixture = TestBed.createComponent(InputTextComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});