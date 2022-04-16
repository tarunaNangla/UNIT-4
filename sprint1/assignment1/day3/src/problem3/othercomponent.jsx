

import styles from './payment.module.css'

let obj=[
    {date:'17 sep 2020'},
    {data4:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13u0fnkcKWbESup_9R8XtFxHmsAmvAMEQPw&usqp=CAU'},
    {divi:'Case Study'},
    {data1:'Apple Gift'},
    {data2:'Payment'},
    {data3:'MacOS - Mobile'},
]

function AppleData()
{

    return(
        <div className={styles.boxes} >
        {
            obj.map((ele)=>{
            return(
                < >
                <div >
                   

                  <p >{ele.date}</p>
                  {/* <img src={ele.data4} alt="" /> */}
                  
                    <div></div>
                 </div>
                 <div>
                <span className={styles.colo}>{ele.divi}</span>

                <h1>{ele.data1}</h1>
                <h1>{ele.data2}</h1>
                <h3>{ele.data3}</h3>
                 </div>

                </>
            )
            })
        }
        </div>
    )
}


export default AppleData
