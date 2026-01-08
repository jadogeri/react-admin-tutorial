import { Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { UserCreate, UserEdit, UserList } from './components/Users';
import { authProvider } from './AuthProvider';
import { PostList, PostEdit, PostCreate } from './components/Posts';

const dataProvider = restProvider('http://localhost:4000');

function App() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource 
          name="users" 
          list={UserList} 
          edit={UserEdit}
          create={UserCreate}
        />
        <Resource 
          name="posts" 
          list={PostList} 
          edit={PostEdit}
          create={PostCreate}
        />
      </Admin>
    );
  }
export default App;