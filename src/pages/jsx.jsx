export default function Jsx(){
    const a = 8;
    const b = 3;
    console.log(a*b); 
    const titulo = <h1>Jsx é um conceito central</h1>;
    const obj = {nome: 'João, idade: 30'} 

    function subtitulo(){
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            <h2>{a*b}</h2>
            {subtitulo()}
            {Math.random()}<br></br>
            <h3>{"muito legal".toUpperCase()}</h3>
            <h4>{JSON.stringify(obj)}</h4>
        </div>
    )
}