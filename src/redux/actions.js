export const loadAlbums = () => {
    return dispatch => {
        dispatch ({
            type: 'albums/load/start'
        })

        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(response => response.json())
            .then(json => {
                dispatch ({
                    type: 'albums/load/success',
                    payload: json
                })
            })
    }
}