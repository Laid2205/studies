import { Module, forwardRef } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "@src/entities/users";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
    ],
    controllers:[UsersController],
    providers: [UsersService],
    })
export class UsersModule{}