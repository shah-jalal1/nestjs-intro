import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./providers/users.service";
import { GetUsersParamDto } from "./dtos/get-users-param.dto";

@Controller("users")
export class UsersController {
  constructor(
    // injecting user service
    private readonly userService: UsersService
  ) {
  }

  @Get("/:id?")
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
  ) {
    return this.userService.findALl(getUserParamDto, limit, page);
  }

  @Post()
  public createUser() {
    return "you sent a post request to users endpoint";
  }

}
