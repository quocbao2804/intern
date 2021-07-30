"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionRepository = void 0;
const typeorm_1 = require("typeorm");
const version_entity_1 = require("./version.entity");
let VersionRepository = class VersionRepository extends typeorm_1.Repository {
    getAll(projectId) {
        return this.find({ projectId, isDeleted: 0 });
    }
    getById(id, projectId) {
        return this.findOne({ id, projectId, isDeleted: 0 });
    }
    getByCode(code, projectId) {
        return this.findOne({ code, projectId, isDeleted: 0 });
    }
    async countVersion(projectId, code, id = null) {
        const options = {
            where: { code, projectId, isDeleted: 0 },
        };
        if (id !== null) {
            options.where.id = typeorm_1.Not(id);
        }
        return await this.count(options);
    }
};
VersionRepository = __decorate([
    typeorm_1.EntityRepository(version_entity_1.VersionEntity)
], VersionRepository);
exports.VersionRepository = VersionRepository;
//# sourceMappingURL=version.repository.js.map