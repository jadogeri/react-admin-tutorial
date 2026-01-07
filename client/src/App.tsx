import { Admin, Resource,ListGuesser } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { UserList } from './components/Users';

const dataProvider = restProvider('http://localhost:4000');

function App() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
      </Admin>
    );
  }
export default App;