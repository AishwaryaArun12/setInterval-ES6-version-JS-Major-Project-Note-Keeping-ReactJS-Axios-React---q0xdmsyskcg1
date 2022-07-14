import React, {Component, useState} from "react";
import '../styles/App.css';
let arr=["sibblings","Friends","Love","Affection","Marriage","Enemy"];
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:'',
            sname:'',
            index:'No Relationship'
    };
    function handleChange1(e)
    {
       this.setState({fname:e.target.value});
    }
   function handleChange2(e)
    {
        this.setState({sname:e.target.value});
    }
   function outputlength(f,s)
    {
        let fmap={};
        let smap={};
        for(let i=0;i<f.length;i++){
            if(!fmap[f[i]])
            fmap[f[i]]=0;
            fmap[f[i]]+=1
        }
        for(let i=0;i<s.length;i++){
            if(!smap[s[i]])
            smap[s[i]]=0;
            smap[s[i]]+=1
        }
        console.log(fmap,smap)
      for(let key1 in fmap)
      {
        for(let key2 in smap)
        {
            if(fmap[key1]!==0&&smap[key1]!==0)
            if(smap[key1])
            {
            fmap[key1]--;
            smap[key1]--;
            }
        }
      }
      let tottal=0;
      for(let key in fmap)
      {
        tottal+=fmap[key]
      }
      for(let key in smap)
      {
        tottal+=smap[key]
      }
      console.log(tottal)
      return tottal%6;
    }
    function clear()
{
    this.setState({fname:''});
    this.setState({sname:''});
    this.setState({index:'No Relationship'});
}
   function calculate(fname,sname)
    {
      
          let mergelength=outputlength(fname.toLowerCase() ,sname.toLowerCase())
          this.setState({index:arr[mergelength]});
    }

    }
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <h3 datatest-id="answer">{this.state.index}</h3>
               <input type="text" value={this.state.fname} datatest-id="input1" onChange={handleChange1}/>First Name
               <input type="text" value={this.state.sname} datatest-id="input2"onChange={handleChange2}/>Last Name
               <div>
                <button datatest-id="calculate-relationship" onClick={calculate}>Calculate Relationship</button>
                <button datatest-id="clear" onClick={this.clear}>Clear</button>
               </div>
            </div>
        )
    }
}


export default App;
