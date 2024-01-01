import React,{useState} from 'react';
import '../Classquiz/Classquiz.scss';
export const Functionquiz=()=>{
    const [arr,setArr]=useState([{id:1,qtn:" How many vowels are there in the English alphabet and name them?",ans:"5 vowels namely a, e, i, o, and u."},
    {id:2,qtn:"Who is the current President of India?",ans:"Droupadi Murmu"},
    {id:3,qtn:"What is the tallest mountain in the world?",ans:" Mount Everest"},
    {id:4,qtn:"Which city is also known as the “Big Apple?",ans:"New York"},
    {id:5,qtn:"In which year the Madras State was renamed as Tamil Nadu?",ans:" 1969"}]);
    const [New,setNew]=useState([{id:1,qtn:" How many vowels are there in the English alphabet and name them?",
    ans:"5 vowels namely a, e, i, o, and u."}]);
    const [qn,setQn]=useState(false);
    const [btn,setBtn]=useState([{id:1,q:"Question No.1"},{id:2,q:"Question No.2"},{id:3,q:"Question No.3"},{id:4,q:"Question No.4"},{id:5,q:"Question No.5"}])
    const btn1=(el)=>{
        let x=arr.filter((e,i)=>{return el[i].id===e.id ?e:''})
        setNew(x)
        setQn(false)
    }
    const answer=()=>{
        setQn(true)
    }

    return(
        <div>
            <div className="btn-row">
            {btn.map((e,i)=>{
            return(
                <div key={i} >
                    <button className="qa-btn"  onClick={()=>btn1(arr.map((el)=>{return el.id===e.id?el:''}))}>{e.q}</button>
                </div>
            )})}
            </div>
            
            <div onClick={()=>answer()}  className="qus-ans">
                <h3>{qn?New.map((e)=>{return "Ans : "+e.ans}):New.map((e)=>{return e.id+"."+e.qtn})}</h3>
            </div>
        </div>
    )
}