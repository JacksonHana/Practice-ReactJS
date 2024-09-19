import PropTypes from 'prop-types'

const Message = (props) =>{
    const {text, bgColor} = props;
    return(
        <div style={{background: bgColor}}>
            {text}
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
}

export default Message