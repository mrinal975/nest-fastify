import { Injectable, NotFoundException } from '@nestjs/common';
import { LocationRepository } from './repositories/location.repository';
import { CreateLocationDto } from './dto/create-location.dto/create-location.dto';
import { Location } from './entities/location.entity';
import { UpdateLocationDto } from './dto/update-location.dto/update-location.dto';
@Injectable()
export class LocationService {
  constructor(private readonly locationRepository: LocationRepository) {}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location = this.locationRepository.create(createLocationDto);
    return await this.locationRepository.save(location);
  }

  async findAll(): Promise<any> {
    return await this.locationRepository.find();
  }

  async findOne(id: number): Promise<Location> {
    const location = await this.locationRepository.findOneBy({ id });
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const location = await this.findOne(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return this.locationRepository.update(id, updateLocationDto);
  }

  async remove(id: number): Promise<void> {
    const location = await this.findOne(id);
    await this.locationRepository.remove(location);
  }
}
