import React, { Component } from "react";
import './Classquiz.scss';
let arr=[{id:1,qtn:" How many vowels are there in the English alphabet and name them?",ans:"5 vowels namely a, e, i, o, and u."},
{id:2,qtn:"Who is the current President of India?",ans:"Droupadi Murmu"},
{id:3,qtn:"What is the tallest mountain in the world?",ans:" Mount Everest"},
{id:4,qtn:"Which city is also known as the “Big Apple?",ans:"New York"},
{id:5,qtn:"In which year the Madras State was renamed as Tamil Nadu?",ans:" 1969"}];
let arindex=[{id:1,q:"Question No.1"},{id:2,q:"Question No.2"},{id:3,q:"Question No.3"},{id:4,q:"Question No.4"},{id:5,q:"Question No.5"}];
export class Classquiz extends Component{
    constructor(){
        super()
        this.state={qn:false,aindex:arindex,qus:arr,
            new:[{id:1,qtn:" How many vowels are there in the English alphabet and name them?",
            ans:"5 vowels namely a, e, i, o, and u."}]}
    }
    render(){
        let btn1=(val)=>{
                let x=this.state.qus.filter((e,i)=>{
                    return e.id===val[i].id ? e : '';
                })
                this.setState({new:x})
                this.setState({qn:false})
        }
        let answer=()=>{
            this.setState({qn:true})
        }
        return(
            <div className="container">
                <div className="btn-row">
                    {
                        this.state.aindex.map((e,i)=>{
                            return (
                                <div key={i}>
                                    <button className="qa-btn"  onClick={()=>btn1(this.state.qus.map((el)=>{return el.id===e.id? el:""}))}>{e.q}</button>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div onClick={()=>answer()} className="qus-ans">
                                <h3>
                                    {this.state.qn? this.state.new.map((e)=>{return "Ans : "+e.ans}):this.state.new.map((e)=>{return e.id+"."+e.qtn})}
                                </h3>
                </div>
            </div>
        )
    }
}