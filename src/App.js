import MyRoute from './MyRoute';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <MyRoute />
    </>
  );
}

export default App;
