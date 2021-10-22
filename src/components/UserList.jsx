/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { User } from './User';

export function UserList({ users }) {
    return (
        <div>
            <ul>
              {users.map((user) =>(  
                  <User user={user}/>
              ))}  
            </ul>
        </div>
    );
}