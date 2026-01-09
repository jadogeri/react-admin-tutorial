// src/components/Post.js
import { List, Create, Edit, SimpleForm, TextInput, DateInput, Datagrid, TextField, DateField, NumberInput, ReferenceField, AutocompleteInput, ReferenceInput } from 'react-admin'

export const PostList = () => {
    return (
        <List>
            <Datagrid rowClick='show'>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="publishedAt" />
                <ReferenceField source="userId" label="Author" reference="users" />
            </Datagrid>
        </List>
    )
}

// src/components/App.js
export const PostCreate = () => {
  return (
    <Create title="Create a Post">
      <SimpleForm>
        <NumberInput source="id" />
        <ReferenceInput source="userId" reference="users" label="Author" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <ReferenceInput source="userId" reference="users" label="Author" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};