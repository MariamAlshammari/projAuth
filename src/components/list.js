import React, { useContext } from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { LoginContext } from '../context/Login-context';
export default function List(props) {
  const logincontext = useContext(LoginContext);
  return (
   
    <Card className="mainItem2">
      <h3 className='list'>Items List</h3>
      {props.activeList.map((item) => (
      <>
          <Card className="listCard" interactive={true} elevation={Elevation.TWO} key={item.id} >
          {logincontext.userCapability > 3 && <Button onClick={() => props.deleteItem(item._id)} icon='cross' id='delete-btn'></Button>}
          <h3><b className="listCard">{item.text}</b></h3>
            <p>
            <b className="listCard">Assigned to customer:</b> {item.assignee}
            </p>
            <p>
            {/* <b>Difficulty:</b> {item.difficulty} */}
            </p>
              {logincontext.userCapability > 2 && <Button onClick={() => props.toggleComplete(item._id)}>Delivered: {item.complete?.toString()}</Button>}
          </Card>
          <br />
       </>
      ))}
   </Card>
   
 
  );
}