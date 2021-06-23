import React from "react"
import styled from "styled-components"

const ContiainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;

ul{
    display: flex;
}

li{
    list-style: none;
    margin: 10px;
}

`

 export default class Header extends React.Component{
     render() {
         return(
             <div>
                 
             <ContiainerHeader>
                 <h1>LabeNinja</h1>

                 <ul>
                     <li>sessão 1</li>
                     <li>sessão 2</li>
                     <li>sessão 3</li>
                     <li>sessão 4</li>
                 </ul>
             </ContiainerHeader>

             </div>
         )
     }
 }