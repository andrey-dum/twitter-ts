import React from 'react'
import { Typography } from '@material-ui/core'
import { useHomeStyles } from '../pages/Home/theme'
import { useDispatch, useSelector } from 'react-redux'
import { selectTagsItems } from '../store/tags/selectors'
import { selectTweetsLoading } from '../store/tweets/selectors'
import { fetchTags } from '../store/tags/actionCreators'
import { Link } from 'react-router-dom'

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({
    classes
}: TagsProps): React.ReactElement => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectTweetsLoading)
    
    const tags = useSelector(selectTagsItems)

    React.useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch])

    return (
        <div className={classes.righBlock}>
            <Typography variant="h6">Актуальные темы</Typography>
            { tags && tags.map(tag => (
                <div key={tag.name} className={classes.actualTheme}>
                    <Link to={`/home/search?q=${tag.name}`} >
                        <div><b> {tag.name}</b></div>
                        <small>Твитов: {tag.count}</small>
                    </Link>
                </div>
            )) }
        </div>
    )
}
