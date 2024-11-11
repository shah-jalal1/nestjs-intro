import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "../../auth/providers/auth.service";

@Injectable()
export class UsersService {

  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService
  ) {
  }

  public findALl(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number
  ) {

    const isAuth = this.authService.isAuth();
    console.log(isAuth);
    return [
      {
        firstname: "john",
        email: "john@mail.com"
      },
      {
        firstname: "rahim",
        email: "rahim@mail.com"
      }
    ];
  }

  // Find User by id
  public findOneById(id: string) {
    return {
      id: 1,
      firstname: "john",
      email: "john@mail.com"

    };
  }
}