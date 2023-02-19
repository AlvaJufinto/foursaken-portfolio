

const { useState } = React;

const { Link, Route, HashRouter} = ReactRouterDOM;

const App = () => (
    <HashRouter>
      <nav className="flex justify-center font-semibold text-white mb-[-3rem]">
        <ul className="flex w-[1270px] max-w-[1270px] justify-between ml-10 mr-10 pt-3 font-sora bg-transparent">
          <div className="nav-logo flex">
            <img src="./assets/img/arrow-navbar.png" className="max-w-[22px] max-h-[20px] relative top-[7.79px] "/>
            <li><Link to="/"><h1 className="ml-2 text-[24px]">Foursaken</h1></Link></li>
          </div>

          <div className="flex justify-end space-x-10 text-[16px] mt-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/article">Article</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </div>

        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={Login} />
      <Route path="/register" component={Register} />
    </HashRouter>
  )

const Home = () => {
    const people = [
        {
            name: 'Zaidan',
            image: './assets/img/zaidan-transparent.png',
            cardPosition: 'right',
            role: 'Team Leader',
        },
        {
            name: 'Alva',
            image: './assets/img/alva-transparent.png',
            cardPosition: 'right',
            role: 'Front-End Developer'
        },
        {
            name: 'Syafiq',
            image: './assets/img/syafiq-transparent.png',
            cardPosition: 'right',
            role: 'UI/UX Designer'
        },
        {
            name: 'Fajar',
            image: './assets/img/pajar-transparent.png',
            cardPosition: 'left',
            role: 'Back-End Developer',
        },
    ]

   return (
    <HashRouter>
      <div id="content">
        <div className="header bg-transparent w-[100%]">
          <div className="flex flex-col overflow-hidden bg-[#C8B5FD] z-[-2] items-center justify-evenly gap-[100px]">   
            <h1 className="font-bold text-[26px] text-white mt-[8rem] flex">Creative Code House <img src="./img/cch-vektor.png" className="w-[11px] h-[11px] relative right-[2px] top-[7px] " /></h1>
            <div className='flex flex-row justify-between w-[100%] transition max-w-[1270px] h-[100%] max-h-[450px] bg-transparent'>
              { 
                  people.map((person) => (
                    <div className={`header-img w-[300px] py-[100px] transition duration-1000 ease-in-out grayscale-[100%] hover:grayscale-0 hover:scale-125 translate-y-[-10px] hover:w-[350px] hover:translate-y-[-100px] hover:relative  hover:z-[5] translate-x-[-10px]`}>
                      <div className={`${person.cardPosition === 'right' ? 'card' : 'card left' } transition duration-1000 opacity-0 absolute right-[0px] translate-y-[50vw] bg-[#FFFFFF] p-[20px] rounded-[15px]`}>
                        <p className="font-semibold">Hi👋, My name is {person.name}</p>
                        <p className="font-semibold">I'm a <span className="text-[#9747FF]">{person.role}</span></p>
                      </div>
                      <img className="transition duration-500 max-h-[30vw]" src={person.image} />
                    </div>
                  ))
              }            
            </div>
          </div>
          <div className="marquee-w pointer-events-none	">
            <div className="marquee font-bebas">
              <span> Foursaken • Foursaken • Foursaken •</span>
            </div>
            <div className="marquee marquee2 font-bebas">
              <span className="font-bebas">&nbsp;Foursaken • Foursaken • Foursaken • </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row container font-sora mx-auto max-w-[1270px] justify-evenly mt-[10rem] mb-[6rem]">
          <h1 className="max-w-[45rem] text-[36px] text-start font-medium">Our vision is to <span className="underline text-[#15013C]">Build. Develop. Grow.</span> We help you to build <span className="whitespace-nowrap text-[#9747FF]">your dream world</span> with professional standard.</h1>
          <div className="flex flex-col max-w-[19rem] flex-start">
            <p className="text-[20px] font-normal">With our passion in Code, Design, and Build, we make website and app to help your brand stands out. Don't worry about stuff, just leave it to us!</p>
            <div className="relative">
              <Link to="/about">
                <div className="w-[200px] h-[200px] mt-[2rem] bg-[#15013C] text-white rounded-full flex justify-center items-center duration-700 ease-in-out hover:w-[300px] hover:bg-[#230264] relative group">
                  <span className="transition-opacity duration-700 ease-in-out group-hover:opacity-100">About Us</span>
                  <span className="absolute transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 right-[2rem]">
                    <img src="./assets/icons/arrow-forward.svg" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-[200px] bg-[#15013C] py-[75px]">
          <div className="mx-auto max-w-[1270px] flex flex-col items-center"> 
            <div className="flex justify-center gap-[10px] items-center">
              <img src="./assets/icons/arrow-purple.svg" alt="" />
              <h3 className="font-sora text-[#FFFFFF] text-[3rem]">Our Project</h3>
            </div>
            <div className="py-[115px] flex flex-col gap-[115px]">
              <div className="flex gap-[100px] items-center">
                <img src="./assets/img/white-bg.png" />
                <div>
                  <p className="font-sora text-white font-semibold text-[2rem]">Nike 2022 Website</p>
                  <p className="font-sora text-white font-light text-[2rem]">Build for engage 1232321</p>
                </div>
              </div>
              <div className="flex flex-row-reverse  gap-[100px] items-center">
                <img src="./assets/img/white-bg.png" />
                <div>
                  <p className="font-sora text-white font-semibold text-[2rem]">Nike 2022 Website</p>
                  <p className="font-sora text-white font-light text-[2rem]">Build for engage 1232321</p>
                </div>
              </div>
              <div className="flex gap-[100px] items-center">
                <img src="./assets/img/white-bg.png" />
                <div>
                  <p className="font-sora text-white font-semibold text-[2rem]">Nike 2022 Website</p>
                  <p className="font-sora text-white font-light text-[2rem]">Build for engage 1232321</p>
                </div>
              </div>
            </div>
            <button className="h-[95px] w-[264px] rounded-[50px] text-[#FFFFFF] text-[1.5rem] font-sora outline hover:text-[#15013C] hover:bg-[#FFFFFF] transition duration-500">More Work</button>
          </div>
        </div>
      </div>
      </HashRouter>
    );
}



  
  
  const Login = () => <h1>Login</h1>
  const Register = () => <h1>Register</h1>
  


ReactDOM.render(
    <App />,
    document.getElementById('root')
);