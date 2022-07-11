import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDTO } from 'src/movies/dtos/CreateMovieDTO';
import { UpdateMovieDTO } from 'src/movies/dtos/UpdateMovieDTO';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async create(movie: CreateMovieDTO) {
    const newMovie = this.movieRepository.create(movie);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }

  findOne(id: number) {
    const movie = this.movieRepository.findOne({ where: { id } });

    if (movie) {
      return movie;
    }

    throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
  }

  findAll() {
    return this.movieRepository.find();
  }

  async update(id: number, movie: UpdateMovieDTO) {
    await this.movieRepository.update(id, movie);

    const updatedMovie = await this.movieRepository.findOne({ where: { id } });

    if (updatedMovie) {
      return this.movieRepository.save(updatedMovie);
    }

    throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: number) {
    const deletedMovie = await this.movieRepository.delete(id);
    if (!deletedMovie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
  }
}
