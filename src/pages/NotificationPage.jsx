import React from 'react';
import { useSelector } from 'react-redux';

const NotificationPage = () => {
    const { user } = useSelector((state) => state.user);

    const handleMarkAllRead = () => {
        // Implement marking all notifications as read
    };

    const handleDeleteAllRead = () => {
        // Implement deleting all read notifications
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center">Notifications</h1>
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav nav-tabs" id="notificationTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="unread-tab" data-bs-toggle="tab" data-bs-target="#unread" type="button" role="tab" aria-controls="unread" aria-selected="true">Unread</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="read-tab" data-bs-toggle="tab" data-bs-target="#read" type="button" role="tab" aria-controls="read" aria-selected="false">Read</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="notificationTabsContent">
                        <div className="tab-pane fade show active" id="unread" role="tabpanel" aria-labelledby="unread-tab">
                        <ul className="list-group mt-3">
                                {user?.notification.map((notificationMsg, index) => (
                                    <li key={index} className="list-group-item" onClick={notificationMsg.onClickPath}>
                                        <span className={`badge bg-primary me-2`}>{notificationMsg.type}</span>
                                        {notificationMsg.message}
                                    </li>
                                ))}
                            </ul>

                            <div className="text-end mt-3">
                                <button className="btn btn-primary" onClick={handleMarkAllRead}>Mark All Read</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="read" role="tabpanel" aria-labelledby="read-tab">
                            <ul className="list-group mt-3">

                            </ul>
                            <div className="text-end mt-3">
                                <button className="btn btn-danger" onClick={handleDeleteAllRead}>Delete All Read</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage;
