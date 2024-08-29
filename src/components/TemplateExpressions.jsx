const TemplateExpressions = () =>  {

    const name = "Itamir"
    const data = {
        age: 38,
        job: "Professor"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem? </h1>
            <p>{data.job} -  {data.age}</p>
            {console.log("oi")}
        </div>
    )
}

export default TemplateExpressions;
