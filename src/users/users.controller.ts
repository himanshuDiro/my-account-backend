import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'my-account-shared-orm-library';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET /users - Returns a list of all users
   * @returns {Promise<User[]>} Array of all users with their settings
   */
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
