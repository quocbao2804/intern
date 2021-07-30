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
exports.EditCategoryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class EditCategoryDTO {
}
__decorate([
    swagger_1.ApiProperty({
        type: String,
        example: 'Development',
    }),
    class_validator_1.Length(5, 255),
    __metadata("design:type", String)
], EditCategoryDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, example: 'Category-001' }),
    class_validator_1.Length(5, 20),
    __metadata("design:type", String)
], EditCategoryDTO.prototype, "code", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'The List Category Development' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], EditCategoryDTO.prototype, "description", void 0);
exports.EditCategoryDTO = EditCategoryDTO;
//# sourceMappingURL=edit-category.dto.js.map