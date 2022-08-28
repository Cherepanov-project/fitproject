export const formatMsgTime = (ms) => {
    let localDate = new Date(ms)
    let hours = localDate.getHours()
    let minutes = localDate.getMinutes()<10?'0'.concat(localDate.getMinutes().toString()):localDate.getMinutes()
    return hours+':'+minutes
}