import React from 'react';
import { List, Datagrid, TextField, EmailField, DeleteButton, Edit, SimpleForm, TextInput, Create, NumberInput } from 'react-admin';

export const PostList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
              <TextField source="title" />
              <TextField source="body" />
              <TextField source="publishedAt" />
              <NumberInput source="userId" label="Author ID" />
              {/* <TextField source="phone" />
              <TextField source="company" /> */}
              <DeleteButton />
            </Datagrid>
        </List>
    )
}

export const PostEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <TextInput source="publishedAt" label="Published At" />
                <NumberInput source="userId" />
            </SimpleForm>
        </Edit>
    )
}

export const PostCreate = () => {
    return (
        <Create title='Create a Post'>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <TextInput source="publishedAt" label="Published At" />
                {/* <NumberInput source="userId" label="Author ID" />         */}
            </SimpleForm>
        </Create>
    )
}