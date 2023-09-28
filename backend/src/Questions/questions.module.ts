import { Module } from "@nestjs/common";
import { QuestionsController } from "./questions.controller";
import { QuestionsService } from "./questions.service";
import { Questions } from 'src/entities/questions';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Questions]),   
    ],
    controllers:[QuestionsController],
    providers: [QuestionsService],
    })
export class QuestionsModule{}