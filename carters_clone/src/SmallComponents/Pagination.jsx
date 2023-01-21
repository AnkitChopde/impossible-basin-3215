function Pagination({page,onChange,total}) {

    const btnArr = new Array(total).fill(0)
     
     return (
     <div>
          {btnArr.map((ele,i)=>{
           return (
             <button key={i+Math.random()}
             onClick={()=>onChange(i+1)}
             style={{padding:"0.5rem",
           margin:"0.5rem",borderRadius:"5px"}}>{i+1}</button>
           )
          })}
     </div>
    
     );
   }

   export default Pagination;