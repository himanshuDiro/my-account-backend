import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'my-account-shared-orm-library';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * Find all users with their associated settings
   * @returns {Promise<User[]>} Array of users with settings
   */
  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['settings'], // Include the settings relation
    });
  }
}
