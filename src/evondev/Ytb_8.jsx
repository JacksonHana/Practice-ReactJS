import PropTypes from 'prop-types'

function Ytb(props) {

    return (
        <div className='ytb-item'>
            <div className='ytb-image'>
                <img src={props.image}/>
            </div>
            <div className='ytb-footer'>
                <img 
                    src={props.avatar}
                    className='ytb-avatar'
                />
                <div className='ytb-info'>
                    <h3 className='ytb-title'>{props.title || "This is the title"}</h3>
                    <h4 className='ytb-author'>{props.author || "This is the author"}</h4>
                </div>
            </div>
        </div>
    )
}

Ytb.propTypes ={        // * propTypes *
    image: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
}



export default Ytb