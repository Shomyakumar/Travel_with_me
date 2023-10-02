

export default function Card({id,name,info,image,removePlans,visitHandler}){

    return(
        <div className="card-container">
            <img src={image} alt={name}></img>
            <div className="card-items">
                <p className="name">{name}</p>
                <p>{info}</p>
                <div className="buttons">
                    <button onClick={()=>{visitHandler()}}>Lets go</button>
                    <button onClick={()=>{removePlans(id)}}>Skip this</button>
                </div>
            </div>
        </div>
    )
 
}