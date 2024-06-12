import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get() // get users request
    findAll(@Query("role") role? : 'INTERN' | 'ENGINEER' |'ADMIN'){
        return this.userService.findAll(role)
    }

    //Get a single user
    @Get(":id")
    findOne(@Param("id") id : String){
        return this.userService.findOne(+id)
    }

    // Create Users
    @Post()
    create(@Body() user:{name:string, email:string, role: 'ADMIN' | 'ENGINEER' | 'INTERN'}){
        return this.userService.create(user)
    }

     //UPDATE a single user
     @Patch(":id")
     update(@Param("id") id : String, @Body() updatedUser:{name?:string, email?:string, role?: 'ADMIN' | 'ENGINEER' | 'INTERN'}){
         return this.userService.update(+id, updatedUser)
     }

     //DELETE a single user
    @Delete(":id")
    delete(@Param("id") id : String){
        return this.userService.delete(+id)
    }
     
}
