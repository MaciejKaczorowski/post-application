import { Injectable } from '@angular/core';
import {Post} from "../model/posts-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      userId: 123,
      id: 1,
      title: 'lala',
      body: 'lolo'
    },
    {
      userId: 124,
      id: 2,
      title: 'lama',
      body: 'lomo'
    },
    {
      userId: 125,
      id: 3,
      title: 'lapa',
      body: 'lopo'
    },


  ];

  constructor(
    private http: HttpClient
  ) { }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(BASE_URL)
  }

  public readPost(id: string):Observable<Post> {
    return this.http.get<Post>(BASE_URL + '/' + id)
  }

}
