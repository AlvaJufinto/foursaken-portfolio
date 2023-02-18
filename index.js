const { useState } = React;

const { Link, Route, HashRouter} = ReactRouterDOM;

const App = () => (
    <HashRouter>
      <nav className="flex justify-center font-semibold text-white">
        <ul className="flex w-[1270px] max-w-[1270px] justify-between ml-10 mr-10 pt-3 font-sora bg-[#98B7DE]">

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
            color: '#D48C70'
        },
        {
            name: 'Alva',
            color: '#F4B9B8'
        },
        {
            name: 'Fajar',
            color: '#EBBBC3'
        },
        {
            name: 'Syafiq',
            color: '#E98980'
        },
    ]

   return (
        <div className="container mx-auto px-4 h-[100vh] bg-[#98B7DE] relative bottom-[2.99rem] z-[-2] flex items-center justify-evenly gap-[10px]">   
            {
                people.map((person, i) => (
                    <div className={`bg-[${person.color}] h-[500px] w-[100px] opacity-50 transition hover:opacity-100 hover:scale-125 hover:mx-[120px]`}>
                        <h3>{person.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}



  
  
  const Login = () => <h1>Login</h1>
  const Register = () => <h1>Register</h1>
  


ReactDOM.render(
    <App />,
    document.getElementById('root')
);