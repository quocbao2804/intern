"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_module_1 = require("../project/project.module");
const category_repository_1 = require("./category.repository");
const category_service_1 = require("./category.service");
const category_controller_1 = require("./category.controller");
const project_middleware_1 = require("../common/middleware/project.middleware");
const auth_module_1 = require("../auth/auth.module");
let CategoryModule = class CategoryModule {
    configure(consumer) {
        consumer.apply(project_middleware_1.ProjectMiddleware).forRoutes(category_controller_1.CategoryController);
    }
};
CategoryModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_repository_1.CategoryRepository]), project_module_1.ProjectModule, auth_module_1.AuthModule],
        providers: [category_service_1.CategoryService],
        controllers: [category_controller_1.CategoryController],
        exports: [category_service_1.CategoryService],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map