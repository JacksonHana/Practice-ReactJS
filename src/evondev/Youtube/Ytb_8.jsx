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

Ytb.defaultProps = {
    image: "https://plus.unsplash.com/premium_photo-1723485688045-b076aa969c9a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://plus.unsplash.com/premium_photo-1681426472026-60d4bf7b69a1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "This is Default Title",
    author: "Default Author"
}

export default Ytb