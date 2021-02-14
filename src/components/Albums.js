import {Link, useParams} from 'react-router-dom'


function Albums(props) {
    const openUserId = parseInt(useParams().id)
    return(
        <li className={`list-group-item ${openUserId === props.alb.id ? "list-group-item-info" : ""}`}>
            <Link to={`/${props.alb.id}`}>
                {props.alb.title}
            </Link>
        </li>
    )
}
export default Albums