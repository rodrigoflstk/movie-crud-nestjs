import { Module } from '@nestjs/common';
import { MoviesService } from './services/movies/movies.service';
import { MoviesController } from './controllers/movies.controller';
import { Movie } from './entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
