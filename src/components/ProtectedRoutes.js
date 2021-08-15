// Here we include the components which need to be accesses after successful login.
import { Route, Switch } from 'react-router-dom';
import Users from 'components/Users';
import UserDetails from 'components/UserDetails';
import { Layout } from 'antd';
import NavHeader from 'components/NavHeader';
import NotFoundPage from 'components/pages/NotFound';
import Dashboard from 'components/Dashboard';
import Theaters from 'components/Theaters';

const {Content} = Layout;

export default function ProtectedRoutes() {
  return (
    <Layout className="layout">
      <NavHeader/>
      <Content style={{ padding: '50px' }}>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/theaters">
            <Theaters/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/user/id">
            <UserDetails/>
          </Route>
          <Route
            path={'*'}
            exact={false}
            key={'*'}
          >
            <NotFoundPage/>
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
}
