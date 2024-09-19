
import Ytb from "./evondev/Ytb_8";
import YtbData from "./data/YtbData";

function App() {
    console.log(YtbData);
    return(
        <div className="ytb-list">
            {YtbData.map((item, index) => (
                <Ytb
                key = {item.id}
                image= {item.image}
                avatar= {item.avatar} 
                title= {item.title} 
                author= {item.author}/>
            ))}
{/* 
            <Ytb image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                avatar="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                title="Testing frontend" 
                author="Jackson"/>
            <Ytb image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                avatar="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                title="Testing frontend" 
                author="Jackson"/>
            <Ytb image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                avatar="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                title="Testing frontend" 
                author="Jackson"/>
            <Ytb image="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                avatar="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                title="Testing frontend" 
                author="Jackson"/> */}
        </div>
    );

}

export default App
