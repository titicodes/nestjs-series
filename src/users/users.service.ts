import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id":1,
            "name":"Anietimfon Effiong",
            "email":"anietimfoneeffiong@gmail.com",
            "role":"ADMIN"
        },
        {
            "id":2,
            "name":"Edet Akpan",
            "email":"titidev@gmail.com",
            "role":"ENGINEER"
        },
        {
            "id":3,
            "name":"Titi Effiong",
            "email":"anietimfondev@gmail.com",
            "role":"INTERN"
        },
        {
            "id":4,
            "name":"Edet Ngozi",
            "email":"titidev@gmail.com",
            "role":"ENGINEER"
        },
        {
            "id":5,
            "name":"Udeme Edet",
            "email":"anietimfondev@gmail.com",
            "role":"INTERN"
        },
    ]

    findAll(role? : 'ADMIN' | 'ENGINEER' | 'INTERN'){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(user:{name:string, email:string, role: 'ADMIN' | 'ENGINEER' | 'INTERN'}){
        const userByHihestId = [...this.users.sort((a,b)=> b.id - a.id)]
        const newUser = {
            id: userByHihestId[0].id + 1,
            // pread other users
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatedUser:{name?:string, email?:string, role?: 'ADMIN' | 'ENGINEER' | 'INTERN'}){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUser}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }

}
