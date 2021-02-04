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
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
    it('should button text equal to default', () => {
        const fixture = TestBed.createComponent(InputTextComponent);
        const component = fixture.componentInstance;
        component.ngOnInit();
        expect(component.buttontext).toBe(component.defaultbuttontext);

    });

    it('should button text equal to default', () => {
        const fixture = TestBed.createComponent(InputTextComponent);
        const component = fixture.componentInstance;
        component.buttontext = "Test button";
        component.placeHolder = "Holder button";
        component.ngOnInit();
        expect(component.buttontext).toBe("Test button");
        expect(component.placeHolder).toBe("Holder button");
    });
});