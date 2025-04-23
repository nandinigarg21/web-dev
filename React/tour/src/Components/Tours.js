import Card from "./Card";

function Tours({tours,removeTour}){
    return(
      <div>
        <div>
          <h2> Plan With Love </h2>
        </div>
        <div className="grid grid-cols-3 gap-10 m-10">
            {
                 tours.map( (tour,index) => {
                    return (
                        <div key={index}>
                            <Card {...tour} removeTour ={removeTour} ></Card>
                        </div>
                    )
                 })
            }
        </div>
      </div>
    );

}

export default Tours;