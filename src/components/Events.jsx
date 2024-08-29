const Events = () => {

    const handleMyEvent = () => {
        console.log("Evento")
    }
    
    const renderSomething = (x) => {
        if(x)
            return <h1> Renderizando isso </h1>
        else
          return <h1> Renderizando isso também </h1>
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                 <button onClick={() => {console.log("Evento 2")}}>Clique Aqui de novo!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;