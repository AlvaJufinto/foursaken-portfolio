const { useState } = React;

const { Link, Route, HashRouter} = ReactRouterDOM;

// const Home = () => {
//     const [index, setIndex] = useState(0);

//     const people = [
//         {
//             name: 'Zaidan',
//             color: '#D48C70'
//         },
//         {
//             name: 'Alva',
//             color: '#F4B9B8'
//         },
//         {
//             name: 'Fajar',
//             color: '#EBBBC3'
//         },
//         {
//             name: 'Syafiq',
//             color: '#E98980'
//         },
//     ]

//    return (
//         <div className="h-[100vh] bg-[blue] flex items-center justify-evenly gap-[10px]">   
//             {
//                 people.map((person, i) => (
//                     <div className={`bg-[${person.color}] h-[500px] w-[100px] opacity-50 transition hover:opacity-100 hover:scale-125 hover:mx-[120px]`}>
//                         <h3>{person.name}</h3>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// }

const App = () => (
    <HashRouter>
      <nav className="flex justify-center ">
        <ul className="flex w-[1270px] max-w-[1270px] justify-between ml-10 mr-[34px] mt-3 font-sora  bg-transparent">
          <li><Link to="/">Foursaken</Link></li>
          <div className="flex justify-end space-x-10">
              <li className="justify-self-end"><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
          </div>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </HashRouter>
  )

  const Home = () => <h1>Home</h1>
  const Login = () => <h1>Login</h1>
  const Register = () => <h1>Register</h1>
  


ReactDOM.render(
    <App />,
    document.getElementById('root')
);