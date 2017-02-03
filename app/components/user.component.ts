import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostService]
})
export class UserComponent  { 
  name:string;
  email:string;
  address:address;
  hobbies:string[];
  showHobbies:boolean;
  posts:Post[];
  constructor(private postService:PostService){
    this.name = 'John Doe'; 
    this.email = 'john.doe@email.com';
    this.address = {
        street : '5 Bay St.',
        city : 'Toronto',
        province : 'Ontario'

    };
    this.hobbies = ['Music', 'Movies','Sports'];
    this.showHobbies = false;
    this.postService.getPosts().subscribe( posts=>{
        this.posts = posts;
    })
  }
  toggleHobbies(){
      if( this.showHobbies == true){
          this.showHobbies = false;
      }else{
          this.showHobbies = true;
      }
  }
  addHobby(hobby:string){
      this.hobbies.push(hobby);
  }
  deleteHobby(index:number){
      this.hobbies.splice(index,1);
  }
}
interface address{
    street:string;
    city:string;
    province:string;
}
interface Post{
    id:number;
    title:string;
    body:string;
}