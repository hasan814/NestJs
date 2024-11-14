import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create a new song';
  }
  @Get()
  findAll() {
    return 'find all songs';
  }
  @Get(':id')
  findOne() {
    return 'fetch song on the based on id';
  }
  @Put(':id')
  update() {
    return 'Update song the based on id';
  }
  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}
