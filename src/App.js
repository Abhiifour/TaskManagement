
import './App.css';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';

// class sm is created for responsiveness  with max value 576px check : tailwind.config.js -> screen.

function App() {
  return (
    // the app use Recoil for State management.
    <RecoilRoot>
    {/* below div is used for gradient background. */}
    <div className="App bg-gradient-to-r from-fuchsia-200 via-purple-200 to-purple-200 max-sm:w-full">
    {/* toaster is used for  toastmessage  */}
    <div><Toaster/></div>
    <Home/>
    </div>
    </RecoilRoot>
  );
}

export default App;
