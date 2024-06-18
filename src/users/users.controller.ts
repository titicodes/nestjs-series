import { Controller, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get() // get users request
    findAll(@Query("role") role? : 'INTERN' | 'ENGINEER' |'ADMIN'){
        return this.userService.findAll(role)
    }

    //Get a single user
    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id : number){
        return this.userService.findOne(+id)
    }

    // Create Users
    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

     //UPDATE a single user
     @Patch(":id")
     update(@Param("id", ParseIntPipe) id : number, @Body(ValidationPipe) updatedUserDto:UpdateUserDto){
         return this.userService.update(id, updatedUserDto)
     }

     //DELETE a single user
    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id : number){
        return this.userService.delete(id)
    }
     
}
