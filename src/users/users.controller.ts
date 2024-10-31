import { Controller, Get, Post } from "@nestjs/common";

@Controller("users")
export class UsersController {

  @Get('/:id')
  public getUsers() {
    return "you sent a get request to users endpoint";
  }

  @Post()
  public createUser() {
    return "you sent a post request to users endpoint";
  }
}
