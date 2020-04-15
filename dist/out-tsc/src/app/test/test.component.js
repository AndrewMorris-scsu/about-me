import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = __decorate([
    Component({
        selector: '[app-test]',
        template: `<div>
    inline template
  </div>`,
        styles: [`
    div {color: red;}
  `]
    })
], TestComponent);
export { TestComponent };
//# sourceMappingURL=test.component.js.map