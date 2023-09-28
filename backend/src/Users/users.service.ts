import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import {Users} from '@src/entities/users';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {

  constructor(   
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}
       
  async findAll(): Promise<Users[]> {
    return this.usersRepository.find({ relations: ['RoleId'] }); // Load the RoleId relation
  }
    
  findOne(UserId: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ UserId });
  }
    
  async remove(UsersId: number): Promise<void> {
    await this.usersRepository.delete(UsersId);
  }

  async create(newUser: Partial<Users>): Promise<Users> {      
    const createdUser = await this.usersRepository.create(newUser);
    return await this.usersRepository.save(createdUser);
  }

  async update(UserId: number, user: Partial<Users>): Promise<Users> {
    const updateUser = await this.usersRepository.findOneBy( {UserId});
    if (!updateUser) {
      throw new Error('User not found');
    }
    Object.assign(updateUser, user);
    updateUser.Updated_at = new Date();
    return await this.usersRepository.save(updateUser);
  } 
}