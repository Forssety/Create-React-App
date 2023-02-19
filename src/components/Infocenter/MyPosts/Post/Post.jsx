import './Post.css'

function Post(props) {
    return (
        <div className="info__center">
        <div className="info__bottom">
            <div className="info__bottom-text">
            <img className="info__bottom-img" src='https://picsum.photos/240' alt='Avatar' width="50px" height="50px"></img>
                { props.message }
            <p className="info__bottom-like">
                like { props.like }
            </p>
            </div>
            </div>
        </div>
    )
}

export default Post