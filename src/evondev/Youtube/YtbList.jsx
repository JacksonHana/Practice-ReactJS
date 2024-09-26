
import YtbData from '../../data/YtbData';
import Ytb from './Ytb_8';

const YtbList = (props) => {
    return (
        <div className="ytb-list">
        {props.children}

            {YtbData.map((item, index) => (
                <Ytb        //Component
                key = {item.id}
                image= {item.image}
                avatar= {item.avatar} 
                title= {item.title} 
                author= {item.author}/>
            ))}
        </div>
    );
};

export default YtbList;