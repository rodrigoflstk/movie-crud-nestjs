import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMovieDTO } from '../dtos/CreateMovieDTO';
import { UpdateMovieDTO } from '../dtos/UpdateMovieDTO';
import { MoviesService } from '../services/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesServices: MoviesService) {}

  @Get()
  findAll() {
    return this.moviesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.moviesServices.findOne(id);
  }

  @Post()
  create(@Body() movie: CreateMovieDTO) {
    return this.moviesServices.create(movie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movie: UpdateMovieDTO) {
    return this.moviesServices.update(id, movie);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.moviesServices.delete(id);
  }
}
