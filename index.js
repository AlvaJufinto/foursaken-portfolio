const { useState } = React;


const App = () => {
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
        <div className="h-[100vh] bg-[#E9EAE0] flex items-center justify-evenly gap-[10px]">
            <div onClick={() => setIndex(index !== 0 ? index - 1 : index)} className="absolute h-[50px] w-[50px] bg-[#000000] left-[10px]">
                <p className="text-[#FFFFFF]">{index}</p>
            </div>
            <div onClick={() => setIndex(index + 1)} className="absolute h-[50px] w-[50px] bg-[#000000] right-[10px]">
                <p className="text-[#FFFFFF]">{index}</p>
            </div>
            {
                people.map((person, i) => (
                    <div className={`bg-[${person.color}] h-[500px] w-[100px] opacity-50 transition hover:opacity-100 hover:scale-125 hover:mx-[50px]`}>
                        <h3>{person.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);