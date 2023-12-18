import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ToDoItem from './ToDoItem';
import {useEffect, useState} from 'react'; 

const ToDoList = () => {

    let initialList = [
        {id:1,text:"Clean the kitchen",done:true},
        {id:2,text:"Wash my feet",done:false},
        {id:3,text:"walk the dogs",done:false}
    ]

    let localList = JSON.parse(localStorage.getItem('todos'));
    
    if(localList){
        initialList = localList;
    }
   

    const markAsDone = (id) => {
        const newList = list.map((item) => {
            if(item.id === id){
                item.done = true
            }
            return item;
        });
        setList(newList);
    }
    //activity one
    const deleteTask = (id) => {
        const newList = list.filter((item) => {
            return item.id !== id;
        });
            setList(newList);  
    }

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState("");

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(list))
    }, [list])

    let todoItems = list.map((item, index) => {
        return <ToDoItem key={index} markAsDone={markAsDone} todo={item} deleteTask={deleteTask}/>
    });

   
    const handleTextInput = e => {
        setTextInput(e.target.value);
    }
    const addTodoItem = () => {
        
        let lastItem = list[list.length -1];
        let id = 1;
        if(lastItem){
            id = lastItem.id + 1;
        }
        let newTodo = {
            id:id,
            text:textInput,
            done:false
        };
        
        setList((prevList) => [...prevList,newTodo]);
        setTextInput("");
        
    }
    const handleKeyUp = (e) => {
        if(e.key === 'Enter'){
            addTodoItem();
        }
    };

//  seeing if new commit is working
    return(
      <Card>
        <Card.Header>To-Do List</Card.Header>
        <Card.Body>
            <ListGroup variant="flush">
            {todoItems}
            </ListGroup>
        </Card.Body>
        <Card.Footer>
            <input type="text" onChange={handleTextInput} value={textInput} onKeyUp={handleKeyUp}/>
            <Button variant='primary' className='float-end' onClick={addTodoItem}>Add</Button>
            
        </Card.Footer>
      </Card>
    );
}

export default ToDoList;