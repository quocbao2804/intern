"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EditUserDTO {
}
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'John Zoe Mark' }),
    class_validator_1.Length(10, 20),
    __metadata("design:type", String)
], EditUserDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: '4puma!fcv6' }),
    class_validator_1.Length(10, 20),
    __metadata("design:type", String)
], EditUserDTO.prototype, "password", void 0);
exports.EditUserDTO = EditUserDTO;
//# sourceMappingURL=edit-user.dto.js.map