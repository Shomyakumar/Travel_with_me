// import Card from "./Card";

// export default function Tours({plans}){
//     const data0=plans[0];
//     const data1=plans[1];
//     const data2=plans[2];
//     const data3=plans[3];
//     const data4=plans[4];
//     const data5=plans[5];
//     const data6=plans[6];
//     const data7=plans[7];

    
//     return(
//         <div className="wrapper">
//             <h1>Explore With Me</h1>
//             <div className="cards">
//                 <Card {...data0} skipHandler={skipHandler}></Card>
//                 <Card {...data1} skipHandler={skipHandler}></Card>
//                 <Card {...data2} skipHandler={skipHandler}></Card>
//                 <Card {...data3} skipHandler={skipHandler}></Card>
//                 <Card {...data4} skipHandler={skipHandler}></Card>
//                 <Card {...data5} skipHandler={skipHandler}></Card>
//                 <Card {...data6} skipHandler={skipHandler}></Card>
//                 <Card {...data7} skipHandler={skipHandler}></Card>
//             </div>
//         </div>
//     )
// }

import Card from './Card'

export default function Tours({plans,removePlan}){
    function cancelHandler(){
        let newPage=document.querySelector(".travel-now");
        newPage.classList.remove('active');
    }
    function visitHandler(){
        let newPage=document.querySelector(".travel-now");
        newPage.classList.add('active');
    }
    return(
        <div className="wrapper">
            <h1>Explore With Me</h1>
            <div className="cards">
                {
                    plans.map((plan)=>{
                        return <Card {...plan} removePlans={removePlan} visitHandler={visitHandler}></Card>
                    })
                }
            </div>
            <div className="travel-now">
                <div className="travel-contents">
                    <h2>Get ready to enjoy</h2>
                    <p className="joy">You are going to enjoy a great journey with me. It will be an memorable experience.</p>
                    <p className="joy1">You will enjoy every second in this journey</p>
                    <p className='pack'>Pack your bags and get ready</p>
                    <button className='cancel' onClick={cancelHandler}>Cancel Plan</button>
                </div>
            </div>
        </div>
    )
}