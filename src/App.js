import Navbar from './components/Navbar';
import ContentOne from './components/ContentOne';
import ContentTwo from './components/ContentTwo';
import ContentThree from './components/ContentThree';

function App() {
  return (
    <div className="p-10 space-y-6">
      <Navbar />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
    </div>
  );
}

export default App;