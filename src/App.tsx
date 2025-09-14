import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AIChatBox from './containers/AITextChatBox';
import { initOpenAI } from './api/openAIChatCompletion';

function App() {
const [drawerOpen, setDrawerOpen] = useState(true);
console.log(setDrawerOpen)
useEffect(() => {
  initOpenAI()
}, [])
return (
  <div className="min-h-screen h-screen flex flex-col h-[100vh]  bg-gradient-to-r from-[rgba(29,78,216,1)] to-[rgba(124,58,237,1)] text-white">
    <Header />
    <div className="flex-1 min-h-0 pt-14">
    <div className="h-full overflow-hidden flex lg:gap-4 lg:px-4">
      <main
        className={classNames([
          "flex flex-1 min-h-0 lg:ml-auto lg:px-0",
          "lg:ml-auto lg:px-0"], {
            "lg:max-w-[80%]": drawerOpen,
            "lg:max-w-full": !drawerOpen
          }
        )}
      >
        <div className="flex min-h-0 flex-1 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md">
          <div className="flex min-h-0 flex-1">
            <AIChatBox />
          </div>
        </div>
      </main>
      </div>
    </div>
  </div>
);

}

export default App
