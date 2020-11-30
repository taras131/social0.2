import profileReducer, {addPost, deletePost} from "./profileReducer";
import React from "react";

let state = {
   postData: [
      {id: 1, name:"Taras", text: "Это мой первый пост", likescount: 200 },
      {id: 2, name:"Taras", text: "Это мой второй пост", likescount: 700 },
      {id: 3, name:"Taras", text: "это я запостил из индекс js, прокинув пропс через Route!!! ", likescount: 500 }
   ],
   profile: null,
   status: ""
}

it(`new post should be added`,() =>{
   let action = addPost(`palich`);
   let newState = profileReducer(state,action)
   expect(newState.postData.length).toBe(4);
});
it(`new post text`,() =>{
   let action = addPost(`palich`);
   let newState = profileReducer(state,action)
   expect(newState.postData[3].text).toBe(`palich`);
});
it(`new post likescount`,() =>{
   let action = addPost(`palich`);
   let newState = profileReducer(state,action)
   expect(newState.postData[3].likescount).toBe(0);
});
it(`post should be delete`,() =>{
   let action = deletePost(2);
   let newState = profileReducer(state,action)
   expect(newState.postData.length).toBe(2);
});