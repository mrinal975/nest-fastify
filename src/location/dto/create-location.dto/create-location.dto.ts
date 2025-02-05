import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'The name of the location' })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'The latitude of the location' })
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'The longitude of the location' })
  longitude: number;

  @IsOptional()
  @ApiProperty({ description: 'The description of the location' })
  description?: string;
}
