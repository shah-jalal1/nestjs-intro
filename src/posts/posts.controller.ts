import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dtos/create-post.dto";

@Controller("posts")
export class PostsController {

  constructor(private readonly postService: PostsService) {
  }

  @Get("/:userId?")
  public getPost(
    @Param("userId") userId: string) {
    return this.postService.findAll(userId);
  }

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
  }


}
