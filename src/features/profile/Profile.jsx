import { useGetStatusesQuery } from '../slice/statusesApiSlice'
import { useGetUsersQuery } from "../slice/usersApiSlice"
import { useParams } from "react-router-dom"
import { memo } from 'react'
import useTitle from '../../hooks/useTitle'
import Status from "../status/Status"
import NewStatus from "../status/NewStatus"
import Loading from "../../components/Loading"
import ErrorPage from '../../components/ErrorPage'
import Bar from '../../components/Bar'
import UserDetail from './UserDetail'

const Profile = () => {
    const { username } = useParams()
    useTitle(`Profile: ${username}`)

    const {
        data: users,
        isLoading: loadingUser,
        isSuccess: successUser,
        isError: errorUser,
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    const {
        data: statuses,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetStatusesQuery('statusesList', {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading && loadingUser) content = <Loading />

    if (errorUser) {
        return <ErrorPage message={'User Not Found'} />
    }

    if (isError || errorUser) {
        const { entities: userent } = users
        let arr = []
        Object.keys(userent).forEach(function (key, index) {
            arr.push(userent[key])
        });
        const user = arr.filter(user => user.username === username)[0]
        if (!user) {
            return <ErrorPage message={'User Not Found'} />
        }
        content = (
            <div>
                <Bar title={user.username} />
                <UserDetail user={user} />
                <NewStatus />
                <div className="container-fluid list-group list-group-flush scrollarea">
                    <h1 className='text-center alert alert-danger'>{error?.data?.message}</h1>
                </div>
            </div>
        )
    }

    if (isSuccess && successUser) {
        const { ids, entities } = statuses

        let filteredIds = ids?.filter(statusId => entities[statusId].username === username)

        const tableContent = ids?.length && filteredIds?.map(statusId => <Status key={statusId} statusId={statusId} username={statuses.entities[statusId].username} time={statuses.entities[statusId].createdAt} />).sort((a, b) => {
            return new Date(b.props.time).getTime() - new Date(a.props.time).getTime()
        })

        const { entities: userent } = users
        let arr = []
        Object.keys(userent).forEach(function (key, index) {
            arr.push(userent[key])
        });
        const user = arr.filter(user => user.username === username)[0]
        if (!user) {
            return <ErrorPage message={'User Not Found'} />
        }
        content = (
            <div  >
                <Bar title={user.username} />
                <UserDetail user={user} />
                <NewStatus />
                <div className="container-fluid list-group list-group-flush scrollarea">
                    {tableContent}
                </div>
            </div>
        )
    }
    return content
}

const memoizedProfile = memo(Profile)

export default memoizedProfile