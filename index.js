const { useState } = React;

const { Link, Route, HashRouter} = ReactRouterDOM;

const App = () => (
    <HashRouter>
      <nav className="flex justify-center font-semibold text-white mb-[-3rem]">
        <ul className="flex w-[1270px] max-w-[1270px] justify-between ml-10 mr-10 pt-3 font-sora bg-transparent">
          <div className="nav-logo flex">
            <img src="./img/arrow-navbar.png" className="max-w-[22px] max-h-[20px] relative top-[7.79px] "/>
            <li><Link to="/"><h1 className="ml-2 text-[24px]">Foursaken</h1></Link></li>
          </div>

          {/* <div className="flex justify-end space-x-10 text-[16px] mt-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/article">Article</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </div> */}

        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={Login} />
      <Route path="/register" component={Register} />
    </HashRouter>
  )

const Home = () => {
    const [index, setIndex] = useState(0);

    const people = [
        {
            name: 'Zaidan',
            image: './img/zaidan-transparent.png',
            position: '0px',
            role: 'Team Leader',
        },
        {
            name: 'Alva',
            image: './img/alva-transparent.png',
            position: '0px',
            role: 'Front-End Developer'
        },
        {
            name: 'Syafiq',
            image: './img/syafiq-transparent.png',
            position: '0px',
            role: 'UI/UX Designer'
        },
        {
            name: 'Fajar',
            image: './img/pajar-transparent.png',
            position: '0px',
            role: 'Back-End Developer',
        },
    ]

   return (
        <div id="header">
          <div className="flex flex-col w-[100%] overflow-hidden bg-[#C8B5FD] z-[-2] mb-[12rem] items-center justify-evenly gap-[100px]">   
            <h1 className="font-bold text-[26px] text-white mb-[4rem] mt-[8rem]">Creative Code House</h1>
            <div className='flex flex-row justify-between w-[100%] max-w-[1270px] h-[100%] max-h-[450px]'>
              { 
                  people.map((person) => (
                      <div className={`header-img relative top-[${person.position}] w-[300px] h-[500%] transition duration-300 grayscale-[100%] hover:grayscale-0 hover:scale-125 translate-y-[70px]  hover:w-[350px] hover:translate-y-[-50px]`}>
                          <div className="card transition duration-300 opacity-0 absolute right-[0px] top-[-7vw] bg-[#FFFFFF] p-[20px] rounded-[15px]">
                            <p>Hi👋, My name is {person.name}</p>
                            <p>I'm a <span className="text-[#9747FF]">{person.role}</span></p>
                          </div>
                          <img src={person.image} />
                      </div>
                  ))
              }            
              </div>
          </div>
            <div className="marquee-w">
              <div className="marquee font-bebas">
                  <span>Foursaken ･ Foursaken ･ Foursaken ･ </span>
              </div>
              <div className="marquee marquee2 font-bebas">
                  <span className="font-bebas">Foursaken ･ Foursaken ･ Foursaken ･ </span>
              </div>
            </div>
        </div>

    );
}



  
  
  const Login = () => <h1>Login</h1>
  const Register = () => <h1>Register</h1>
  


ReactDOM.render(
    <App />,
    document.getElementById('root')
);