"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const task_entity_1 = require("./task.entity");
const typeorm_1 = require("typeorm");
let TaskRepository = class TaskRepository extends typeorm_1.Repository {
    async getById(id) {
        return this.findOne({ id });
    }
    getAll(projectId) {
        return this.find({ projectId, isDeleted: 0 });
    }
    getByCode(code) {
        return this.findOne({ code });
    }
    async isExistTaskCode(code, projectId) {
        const entity = await this.count({
            where: { code, projectId },
        });
        return entity > 0;
    }
    async isOwner(code, createUserId) {
        const entity = await this.count({
            where: { code, createUserId },
        });
        return entity > 0;
    }
};
TaskRepository = __decorate([
    typeorm_1.EntityRepository(task_entity_1.TaskEntity)
], TaskRepository);
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=task.respository.js.map