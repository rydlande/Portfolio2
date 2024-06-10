import { Layout } from './layout'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <Layout className='flex flex-col min-h-screen'>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
