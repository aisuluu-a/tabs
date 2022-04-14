import {useState} from "react"
import './tabs.css'
  
  function Tabs() {

    const TabContent = ({ title, content }) => (
        <div className="tabcontent">
          <h3>{title}</h3>
          <p>{content}</p> 
        </div>
      );

      const items = [
        { title: 'Abot us', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt rerum autem rem nihil adipisci quisquam quaerat, eos nemo aspernatur optio et temporibus, minus assumenda quam voluptates molestiae suscipit quibusdam.' },
        { title: 'Our mission', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt rerum autem rem nihil adipisci quisquam quaerat, eos nemo aspernatur optio et temporibus, minus assumenda quam voluptates molestiae suscipit quibusdam..' },
        { title: 'Our goals', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, sunt rerum autem rem nihil adipisci quisquam quaerat, eos nemo aspernatur optio et temporibus, minus assumenda quam voluptates molestiae suscipit quibusdam.' },
      ];
      

    const [ active, setActive ] = useState(null);
  
    const openTab = e => setActive(+e.target.dataset.index);
  
    return (
      <div>
        <div className="tab">
          {items.map((n, i) => (
            <button
              className={`tablinks ${i === active ? 'active' : ''}`}
              onClick={openTab}
              data-index={i}
            >{n.title}</button>
          ))}
        </div>
        {items[active] && <TabContent {...items[active]} />}
      </div>
    );
  }

  export default Tabs
  

  //ReactDOM.render(<Tabs items={items} />, document.getElementById('app'));