"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("./config/typeorm");
const users_module_1 = require("./Users/users.module");
const core_1 = require("@nestjs/core");
const questions_module_1 = require("./Questions/questions.module");
const roles_module_1 = require("./Roles/roles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => (configService.get('typeorm'))
            }),
            users_module_1.UsersModule,
            core_1.RouterModule.register([
                {
                    path: 'users',
                    module: users_module_1.UsersModule,
                },
            ]),
            questions_module_1.QuestionsModule,
            core_1.RouterModule.register([
                {
                    path: 'questions',
                    module: questions_module_1.QuestionsModule,
                },
            ]),
            roles_module_1.RolesModule,
            core_1.RouterModule.register([
                {
                    path: 'roles',
                    module: roles_module_1.RolesModule,
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, ...typeorm_2.config],
        exports: [...typeorm_2.config],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map