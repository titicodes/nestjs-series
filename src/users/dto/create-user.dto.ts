import {IsEmail, IsEnum, IsNotEmpty, IsString} from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    email:string

    @IsEnum(['ENGINEER' , 'INTERN' , 'ADMIN', {
        message:"Valid Role Rquired"
    }])
    role:'ENGINEER' | 'INTERN' | 'ADMIN'
}