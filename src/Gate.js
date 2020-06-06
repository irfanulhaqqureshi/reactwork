import React from 'react';
function Gate({isOpen}){
return <h1 style = {{textAlign:"center"}}>GATE {isOpen ? "OPEN" : "CLOSED"}</h1>
}
export default Gate;