
import './App.css';
import data from './data'; 
function App() {
  return (
     <main className='container'>
       <ul className='comments-container'>
       
          {data.map((eachComment) =>{
            const {id, name,email,body}=eachComment;
            return ( <ListItem key={id}id={id} email={email} name={name} body={body}/>);
          })
          }
        </ul>
         </main>
  );
}
const ListItem=(props)=>{
  const {name,email,body}=props;
  return(
    <li className="comment">
              <div className="comments-header">
                <h3 className="email">{email}</h3>
                <h3 className="name">{name}</h3>
                </div>
                <p className="message" >{body}</p>
            </li>
  );
}
export default App;
