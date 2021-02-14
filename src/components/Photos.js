import {useParams} from 'react-router-dom';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadPhotos} from "../redux/actions";
import Photo from "./Photo";

function Photos(props) {
    const dispatch = useDispatch();
    const params = useParams();

    const photos = useSelector(state => state.photos.items);

    const loading = useSelector(state => state.photos.loading);

    useEffect(() => {
        if(params.id !== undefined) {
            dispatch(loadPhotos(params.id))
        }
    }, [params])

    if(loading) {
        return (
            <div>
                Loading
            </div>
        )
    }

    return (
        <ul>
            {photos.map(photo => {
                return <Photo photo={photo} key={photo.id}/>
            })}
        </ul>
    );
}

export default Photos;