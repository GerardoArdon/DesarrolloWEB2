const name='Guillermo'
const departamentos=["San Salvador","Morazan","La Libertad"]
const personal_data={
    firstName:"Guillermo",
    lastName:"Calderon"
}

export const HelloWorldApp=()=>{
    return (

        <div>
            <h1>Hola {name}</h1>

            <h2>{personalData.lastName}</h2>
        </div>
        <div>
            <h2>{departamentos}</h2>
        </div>
        </>
    )
}