import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './controllers/movies.controller';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './services/movies.service';
@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
