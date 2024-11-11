import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/providers/users.service";

@Injectable()
export class PostsService {

  constructor(
    private readonly userService: UsersService
  ) {
  }

  public findAll(userId: string) {
    const user = this.userService.findOneById(userId);

    return [
      {
        user: user,
        title: "test file",
        content: "test content"
      },
      {
        user: user,
        title: "test file 2",
        content: "test content 2"
      }
    ];
  }
}
