import React, { Component } from 'react'
import Fathur from "./components/Fathur"

function Welcome(props) {
    return  (    
    <div>
      <h1>Nama Saya {props.name}</h1>
      <p>NIM saya {props.nim}</p>
      <ul>
          {props.hobby.map((post) =>
            <li key={post.id}>
              <b>{post.title}</b> {post.content}
            </li>
          )}
        </ul>
    </div>);
    }

class Home extends Component {
    render() {
        const hobby = [
            {id: 1, title: 'Main Games', content: 'Sangat membantu dalam menaikan mood '},
            {id: 2, title: 'Baca Komik', content: 'Baik dalam mengisi waktu luang'}
          ];
        return (
            <div>
                <p> Anggota Kelompok 5</p> 
                <hr/>
                <Fathur 
                    title = "Fathur Rahman Ar Rasyid" 
                    nim = "21120118140050"
                    asal = "Jakarta" />
                <hr/>
                <Welcome name="Benecditus Steven" nim="21120118130057"  hobby={hobby}/>
            </div>
 
        )
    }
}

export default Home