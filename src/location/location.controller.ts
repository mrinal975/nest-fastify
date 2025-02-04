import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationDto } from './dto/create-location.dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto/update-location.dto';
@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}
  @Get()
  async findAll(): Promise<Location[]> {
    return await this.locationService.findAll();
  }
  @Post()
  async create(
    @Body() createLocationDto: CreateLocationDto,
  ): Promise<Location> {
    return await this.locationService.create(createLocationDto);
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Location> {
    return await this.locationService.findOne(id);
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateLocationDto: UpdateLocationDto,
  ): Promise<any> {
    return await this.locationService.update(id, updateLocationDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.locationService.remove(id);
  }
}
