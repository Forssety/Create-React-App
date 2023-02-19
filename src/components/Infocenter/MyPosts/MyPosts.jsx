import './MyPosts.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className="info__center">
            <Post message='Hello guys, how are you ?' like='64' />
            <Post message='Wow, you are so wonderful' like='13444' />
            <Post message='hi💩' like='43' />
            <Post message='jajajaja🤣' like='645' />
            <Post message='go meeting😏' like='34' />
        </div>
    )
}

export default MyPosts