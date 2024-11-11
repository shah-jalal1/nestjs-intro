import { PostTypeEnum } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { IsEnum, IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @IsEnum(PostTypeEnum)
  @IsNotEmpty()
  postType: PostTypeEnum;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "Slug must contain only lowercase letters, numbers, and hyphens, without spaces or special characters."
  })
  slug: string;

  status: postStatus;
  content?: string;
  schema?: string;
  featuredImageUrl?: string;
  publishOn?: Date;
  tags?: string[];
  metaOption: [{ key: "sidebarEnabled", value: true }];
}