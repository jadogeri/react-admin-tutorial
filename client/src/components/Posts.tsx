import React from 'react';
import { List, Datagrid, TextField, EmailField, DeleteButton, Edit, SimpleForm, TextInput, Create, NumberInput, NumberField, ReferenceInput, SelectInput, DateTimeInput } from 'react-admin';

// export const PostList = () => {
//     return (
//         <List>
//             <Datagrid rowClick="edit">
//               <TextField source="title" />
//               <TextField source="body" />
//               <TextField source="publishedAt" />
//               <NumberInput source="userId" label="Author ID" />
//               {/* <TextField source="phone" />
//               <TextField source="company" /> */}
//               <DeleteButton />
//             </Datagrid>
//         </List>
//     )
// }

// export const PostEdit = () => {
//     return (
//         <Edit>
//             <SimpleForm>
//                 <TextInput disabled source="id" />
//                 <TextInput source="title" />
//                 <TextInput multiline source="body" />
//                 <TextInput source="publishedAt" label="Published At" />
//                 <NumberInput source="userId" />
//             </SimpleForm>
//         </Edit>
//     )
// }

// export const PostCreate = () => {
//     return (
//         <Create title='Create a Post'>
//             <SimpleForm>
//                 <TextInput source="title" />
//                 <TextInput multiline source="body" />
//                 <TextInput source="publishedAt" label="Published At" />
//                 {/* <NumberInput source="userId" label="Author ID" />         */}
//             </SimpleForm>
//         </Create>
//     )
// }

export const PostList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
              <TextField source="id" />
              <TextField source="title" />
              <TextField source="body" />
              <DateTimeInput source="publishedAt" />
              {/* Use NumberField to display the ID */}
              <NumberField source="userId" label="Author ID" /> 
              
              {/* OR: Use ReferenceField to show the User's Name (Better UX) */}
              {/* <ReferenceField source="userId" reference="users">
                  <TextField source="name" />
              </ReferenceField> */}
              
              <DeleteButton />
            </Datagrid>
        </List>
    );
};

export const PostCreate = () => {
    return (
        <Create title='Create a Post'>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <DateTimeInput source="publishedAt" label="Published At" defaultValue={new Date().toISOString()} />
                {/* Use ReferenceInput to select a user from a dropdown */}
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};


export const PostEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <DateTimeInput source="publishedAt" label="Published At" />
                <NumberInput source="userId" />
            </SimpleForm>
        </Edit>
    )
}