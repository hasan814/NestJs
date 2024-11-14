import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) { }
  @Post()
  create() {
    return this.songsService.create("Animals by Hasan Moosavi");
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
