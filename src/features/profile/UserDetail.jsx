import React from 'react'

const UserDetail = ({ user }) => {


    return (

        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile-pic" className='profile-pic img-fluid' />
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row border-top border-bottom border-secondary mt-2">
                <div className="row"><strong>{user.name ? user.name : 'name not set'}</strong></div>
                <div className="row"><small className="text-secondary">@{user.username ? user.username : 'username not set'}</small></div>
                <div className="row"><p>{user.description ? user.description : 'bio not set'}</p></div>
                <div className="row">
                    <p><small className="text-secondary">{user.dob ? user.dob : 'date of birth not set'}</small></p>
                </div>
                <div className="row">
                    <p><strong>0</strong><small className="text-secondary"> Total likes</small></p>
                </div>
            </div>
        </div>
    )
}

export default UserDetail