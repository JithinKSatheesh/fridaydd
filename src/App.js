// import logo from './logo.svg';
import './App.css';

import Noise from './assets/noise.png'
import Text1 from './assets/writing01.svg'
import Text2 from './assets/writing02.svg'

function App() {
  return (
    <div className="App">
      <div 
        className=" bg-now w-full h-screen fixed m-0 flex flex-col items-center justify-center">
          <div className="noise relative  flex flex-col justify-center items-center floating floating-2">
            <img src={Noise} className='mx-auto max-w-[300px] sm:max-w-[450px] ' alt="" />
            <div className='absolute p-[50px] sm:p-[70px]'>
              <img src={Text1} className="w-full"/>
              <div className="text-bold uppercase tracking-[4.1px] text-white text-[5.5px] sm:text-[12px] -translate-y-[7px] sm:-translate-y-[11px] font-[600]">DESIGN & DEVELOPMENT</div>
            </div>
            <div className='absolute max-h-[290px] -translate-x-[150px] -translate-y-[20px]   sm:-translate-x-[220px] sm:-translate-y-[30px]'>
              <img src={Text2} className="min-w-[45px] sm:min-w-[73px] floating floating-3" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
