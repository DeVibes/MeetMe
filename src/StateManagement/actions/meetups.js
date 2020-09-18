import store from '../store'

export const setMeetups = meetups => {
    console.log(`USER MEETUPS STATE CHANGED (SET)`)
    console.log(meetups)
    store.dispatch({
        type: `SET_MEETUPS`,
        payload: [...meetups]
    })
}

export const addMeetup = meetup => {
    console.log(`USER MEETUPS STATE CHANGED (ADD)`)
    console.log(meetup)
    store.dispatch({
        type: `ADD_MEETUP`,
        payload: meetup
    })
}

export const removeMeetup = meetupId => {
    console.log(`Redux ~ removing meetup ${meetupId}`)
    store.dispatch({
        type: `DELETE_MEETUP`,
        payload: meetupId
    })
}

export const updateMeetup = updatedMeetup => {
    console.log(`Redux ~ updating meetup ${updatedMeetup._id}`)
    console.log(updatedMeetup)
    store.dispatch({
        type: `UPDATE_MEETUP`,
        payload: updatedMeetup
    })
}