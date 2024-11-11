import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";


export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: "get user with a specific id"
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}