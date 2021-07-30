"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseDataToIntPipe = void 0;
const common_1 = require("@nestjs/common");
let ParseDataToIntPipe = class ParseDataToIntPipe {
    transform(value) {
        const transformedValue = parseInt(value, 10);
        if (isNaN(transformedValue)) {
            throw new common_1.BadRequestException('can not transform data to number');
        }
        return transformedValue;
    }
};
ParseDataToIntPipe = __decorate([
    common_1.Injectable()
], ParseDataToIntPipe);
exports.ParseDataToIntPipe = ParseDataToIntPipe;
//# sourceMappingURL=parse-to-int.pipe.js.map