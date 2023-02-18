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

          <div className="flex justify-end space-x-10 text-[16px] mt-2">
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
    const [index, setIndex] = useState(0);

    const people = [
        {
            name: 'Zaidan',
            image: './img/zaidan-transparent.png',
            position: '0.2px'
        },
        {
            name: 'Alva',
            image: './img/alva-transparent.png',
            position: '0.2px'
        },
        {
            name: 'Syafiq',
            image: './img/syafiq-transparent.png',
            position: '0px'
        },
        {
            name: 'Fajar',
            image: './img/pajar-transparent.png',
            position: '0px'
        },
    ]

   return (
        <div id="header">
          <div className="flex flex-col h-fit bg-[#98B7DE] z-[-2]  mb-[12rem] items-center justify-evenly gap-[10px]">   
            <h1 className="font-bold text-[26px] text-white mb-[4rem] mt-[8rem]">Creative Code House</h1>
            <div className='flex flex-row'>
              {
                  people.map((person) => (
                      <div className={`relative top-[${person.position}] max-w-fit transition grayscale-[100%] hover:grayscale-0 hover:scale-125  hover:-translate-y-[3.5rem] `}>
                          <img src={person.image} />
                      </div>
                  ))
              }            
              </div>
          </div>
            <div class="marquee-w ">
              <div class="marquee">
                  <span>Foursaken ･ Foursaken ･ Foursaken ･ </span>
              </div>
              <div class="marquee marquee2">
                  <span>Foursaken ･ Foursaken ･ Foursaken ･ </span>
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