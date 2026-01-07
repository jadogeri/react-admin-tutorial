import React from 'react';
import { List, Datagrid, TextField, EmailField, DeleteButton } from 'react-admin';

export const UserList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
              <TextField source="id" />
              <TextField source="name" />
              <TextField source="username" />
              <EmailField source="email" />
              {/* <TextField source="phone" />
              <TextField source="company" /> */}
              <DeleteButton />
            </Datagrid>
        </List>
    )
}