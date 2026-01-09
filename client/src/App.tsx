import { Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { UserCreate, UserEdit, UserList } from './components/Users';
import { authProvider } from './AuthProvider';
import { PostList, PostEdit, PostCreate } from './components/Posts';
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";

const api_url = process.env.REACT_APP_API_URL || 'http://localhost:4000';
console.log('API URL:', api_url); 
const dataProvider = restProvider(api_url);

function App() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource 
          name="users" 
          list={UserList} 
          edit={UserEdit}
          create={UserCreate}
          recordRepresentation={(user: any) => user.name}
          icon={PeopleIcon}

        />
        <Resource 
          name="posts" 
          list={PostList} 
          edit={PostEdit}
          create={PostCreate}
          icon={ArticleIcon}
        />
      </Admin>
    );
  }
export default App;