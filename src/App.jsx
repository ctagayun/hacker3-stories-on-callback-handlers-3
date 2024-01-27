/* eslint-disable no-unused-vars */
import * as React from 'react';
 
 const welcome = {
   greeting: "My",
   title: 'Hacker',
   subject: 'Stories',
 };

 //JS Variables:Strings
 //var firstName = 'Chito';
 //var lastName = 'Tagayun';

// function getTitle(title) { - convert to arrow function
// Eliminate "return" statement and enclosing bracket - concise
 const getTitle =(title) => 
    (
      title
     );
  
 //Arrow function - 
 //Eliminate "return" statement and enclosing bracket if no business 
 //business logic. Otherwise retain the {} and put a "return" statement - block
 const App = () => { 
     
      const stories = [
        {
          title: 'React',
          url: 'https://reactjs.org/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0,
        },
        {
          title: 'Redux',
          url: 'https://redux.js.org/',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
       ]
       console.log('App component is rendered. This renders only on first rendering of the App')

       //====================================
       // Define a callback handler
       //====================================
       const handleSearch = (event) => {
        //The implementation of the callback function is in App component.
        //This is the value the was passed by the Search component to the 
        //parent component App. When you type Tochi in the search input field
        //the target.value is "Tochi" is passed to the parent component
        console.log('Value of data passed to parent component named App via  Callback Handler is = ' + event.target.value);
      }

      //We'll use React props to pass the list of stories to the List component
      //We'll use props to pass the "handleSearch" callback handler to search component
       return (
         <div>
           <h1> My Hacker Stories</h1>
           <Search onSearch={handleSearch}/> 
           <hr />
           <List list={stories}/>
         </div>
       );
    }

  //Search component now has a prop with a property of onSearch populated 
  //the name of the callback function named "handleSearch"
  const Search = (props) =>  { 

    //let searchTerm = ''; this will not work because it needs to be 
    //                     stateful value because it changes over time 
    //                     (i.e we type in the search criteria).
        
    //What is a stateful value?
    //Answer: When React pass an immutable prop to a child component,
    //        React creates a "mutable" data structure called stateful value
    //        that can be passed to child components to modify the state
    //       
    //        We need to tell React that searchTerm is a stateful value by using
    //        the convention below. "setSearchTerm" is the method to use 
    //        to modify the state of searchTerm.
    //
    //        By using useState, we are telling React that we want to 
    //        have a stateful value which changes over time. 

    //        And whenever this stateful value changes, the affected components 
    //        (here: Search component) will re-render to use it 
    //        (here: to display the recent value).
    //            1. setSearchTerm is the state updater function
    //            2. searchTerm is the sate
    //            3. React.useState('') this method sets the initial value

    //We added a callback function (stored in props.onSearch property.
    //Now whenever the user types something in the input field, the value of 
    //event.target.value will populate --> setSearchTerm() the updater method 
    //of -->> searchTerm
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleChange = (event) =>{
       console.log('The event is=' + event); 
       console.log('The value of event is=' + event.target.value);
       //assign the value to the updater method of the React.useState  
       //which in turn will update value of searchTerm stateful value
       setSearchTerm(event.target.value); 

       //let's call the callback handler that was passed to the 
       //props.onSearch property. Whenever a user types into the input field 
       //now, the callback function that is passed down from the App component to the 
       //Search component via Props runs. This way, we can notify the App component 
       //when a user types into the input field in the Search component.
       props.onSearch(event);
     }

     const handleBlur = (event) =>{
      console.log(event); 
      console.log("Cursor Moved Out of Focus");
    }
     
     console.log('Search box is rendered. When you start typing on the search box' +
        ' only this component will render. App component will no longer render.')
   
      //When the you type in sommething to the search text box the 
      //onChange event (an attribute of the text box) of the HTML input 
      //will fire and call "handleChange()" defined above.

      //Note without using useState, the searchTerm will not display as
      //you type in the criteria. We need to declare that searchTerm as 
      //stateful value. To do that we need to call useState() hook (see line 99)

      //Work flow of a useState:
      //     When the user types into the input field, the input field's change event 
      //     runs into the event handler. The handler's logic uses the event's value 
      //     of the target and the state updater function to set the updated state. 
      //     Afterward, the component re-renders (read: the component function runs). 
      //     The updated state becomes the current state (here: searchTerm) and is 
      //     displayed in the component's JSX.
      return(
      <div>
          <label htmlFor="Search">Search</label>
          <input id="search" type="text" onChange={handleChange} onBlur={handleBlur}></input>
          <p> 
            Searching for <strong>{searchTerm}</strong>
          </p>
      </div>
      );
      
    }

  //Instantiate Item component and using"map", instantiate "Item"
  //component" and pass each record to Item component as "props". 
  //item={item} means access of the record (item) and 
  //assign it to variable "item"
  const List = (props) =>  (
         <ul>
            {props.list.map((item) => (
              <Item key={item.objectID} item={item} />
            ))}
         </ul>
        
     );
           
  //Create another component that will display list of stories. This component called "Item" encapsulates the task of displaying each stories' record
  const Item = (props) => (
    
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
    
  );     

 

export default App;

//========================================================== 
//Note on Map:
 //Within the map() method, we have access to each object and its properties.

 //concatenating variables into a string
 //var fullName = `${firstName} ${lastName}`
 //console.log(fullName);


 //useState
 //By using useState, we are telling React that we want to have a 
 //stateful value which changes over time. And whenever this stateful value 
 //changes, the affected components (here: Search component) 
 //will re-render to use it (here: to display the recent value).

  //Work flow of a useState:
  //     When the user types into the input field, the input field's change event 
  //     runs into the event handler. The handler's logic uses the event's value 
  //     of the target and the state updater function to set the updated state. 
  //     Afterward, the component re-renders (read: the component function runs). 
  //     The updated state becomes the current state (here: searchTerm) and is 
  //     displayed in the component's JSX.

  //Arrow Function
  // function getTitle(title) { - convert to arrow function
  // Eliminate "return" statement and enclosing bracket - concise
 /*const getTitle =(title) => 
 (
   title
  );

  //Arrow function - 
 //Eliminate "return" statement and enclosing bracket if no business 
 //business logic. Otherwise retain the {} and put a "return" statement - block
const App = () => {} */