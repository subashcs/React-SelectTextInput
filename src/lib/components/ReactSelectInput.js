import React,{useState,useEffect,useRef} from 'react';
import '../static/style.css';

const styles={
    selectorStyle:{
        position:"absolute",
        left:1,
        width:'99%',
        overflowY:"scroll",
    },
    wrapper:{
        
        position:"relative",
    },
    textInput:{
        width:'100%',
    }
};

function ReactSelectInput(props){
    const [hidden,setHidden]=useState(true);
    const [items,setItems] =useState([]);
    const selectorRef= useRef();

    const {selectorStyle,wrapper,textInput} = styles;
   
    useEffect(()=>{
        if(props.items){
            setItems(props.items);
        }
          //react-hooks/exhaustive-deps
          //eslint-disable-next-line
    },[]);

    function selector(){
        if(!hidden){
            return (<div style={selectorStyle} className={props.default?"defaultSelector ":props.selectorClass}>
               
               { items.length>0?items.map((item, key) => {
                   return (
                   <option 
                       key={key} 
                       name={item.name}
                       value={item.value} 
                       onClick={e=>{ settextValue(e.target.value);setTimeout(setHidden(true),2000)}}
                       className={props.default?"defaultOptionStyle "+props.optionClass:props.optionClass}
                       >
   
                       {item.name}
   
                   </option>)
               }): (
                    <option className={props.default?"defaultOptionStyle "+props.optionClass:props.optionClass}>
                       {props.NoOptionMessage||"No items Found"}
                   </option>
                   )}
   
           </div>
            );
        }
        else{
            return null;
        }
    }
       


     const settextValue=(value)=>{
         //mutating event object 
         let tempname=props.name;
         let e={
             target:{
                value:value,
                name:tempname
             }
         }
         props.onChangeHandler(e);
     }
     const filterandRedirect=(e)=>{
         if(hidden){
             setHidden(!hidden);
         }
        let newitems=props.items.filter((word) => word.value.match(e.target.value));
        console.log(newitems);
        setItems(newitems);
        props.onChangeHandler(e);
     }

  
    return (
        <div ref={selectorRef} 
             style={wrapper} 
             className={props.default?"defaultWrapper "+props.wrapperClass:props.wrapperClass} >  
   
         <input type="text"
                style={textInput} 
                title="category is required field!"
                name={props.name}  
                value={props.value} 
                placeholder="Add category"
                onClick={()=>setHidden(!hidden)}
                onChange={filterandRedirect}
                autoComplete="off"
                className={props.default?"defaultTextInput "+ props.inputClass:props.inputClass}
                 />
        
          {selector()}
        </div>
    );
};

export default ReactSelectInput;
