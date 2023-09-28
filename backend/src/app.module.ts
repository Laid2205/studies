import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './Users/users.module';
import { RouterModule } from '@nestjs/core';
import  config  from 'src/config/typeorm.config';
import { RolesModule } from './Roles/roles.module';
import { QuestionsModule } from './Questions/questions.module';

@Module({
  imports: [
  
  TypeOrmModule.forRoot(
    config as any,
  ),
    UsersModule,
    RouterModule.register([
        {
          path: 'users',
          module: UsersModule,
        },
    ]),
    RolesModule,
    RouterModule.register([
        {
          path: 'roles',
          module: RolesModule,
        },
    ]),
    QuestionsModule,
    RouterModule.register([
        {
          path: 'questions',
          module: QuestionsModule,
        },
    ]),
  ], 
  controllers: [AppController],
  providers: [AppService],
  //exports: [...config],
})
export class AppModule {}
