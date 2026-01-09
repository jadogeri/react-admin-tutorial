import React from 'react';
import { List, Datagrid, TextField, EmailField, DeleteButton, Edit, SimpleForm, TextInput, Create, NumberInput } from 'react-admin';

export const UserList = () => {
  return (
    <List>
      <Datagrid
        rowClick="edit"
        sx={{
          ".RaDatagrid-rowEven": {
            backgroundColor: "lavender",
          },
          ".RaDatagrid-headerCell": {
            backgroundColor: "MistyRose",
          },
        }}
      >
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export const UserEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="username" />
                <TextInput source="email" />
            </SimpleForm>
        </Edit>
    )
}

export const UserCreate = () => {
    return (
        <Create title='Create User'>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="username" />
                <TextInput source="email" />
        
            </SimpleForm>
        </Create>
    )
}