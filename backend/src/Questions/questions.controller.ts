import { Controller, Get, Param, Delete, Post, Body, Put} from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { Questions } from "src/entities/questions";


@Controller()
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService) {}

    @Get()
    getAll() {
        return this.questionsService.findAll();       
    }   
        
    @Get(':id')
    async getOne(@Param('id') QuestionId: number) {
        const question = await this.questionsService.findOne( QuestionId);
        return question;
    }

    @Delete(':id')
    async remove(@Param('id') QuestionId: number) {
        const deletedQuestion = await this.questionsService.remove( QuestionId);
        return { message: 'Question deleted', deletedQuestion };
    }

    @Post()
    async createQuestion(@Body() question: Questions) {
        console.log(question);
        const newQuestion = await this.questionsService.create(question);
        return { message: 'Question created', newQuestion };
    }

    @Put(':id')
    async update(@Param('id') QuestionId: number,@Body() updatedQuestion: Partial<Questions>){
        return await this.questionsService.update(QuestionId, updatedQuestion);
    }
}