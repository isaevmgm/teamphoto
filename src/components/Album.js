import {Link, useParams} from 'react-router-dom'


function Album(props) {
    const openAlbumId = parseInt(useParams().id)
    return(
        <li className={`list-group-item ${openAlbumId === props.alb.id ? "list-group-item-info" : ""}`}>
            <Link to={`/${props.alb.id}`}>
                {props.alb.title}
            </Link>
        </li>
    )
}
export default Album