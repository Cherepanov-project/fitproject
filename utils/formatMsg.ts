export const formatMsgTime = (ms) => {
    const localDate = new Date(ms)

    const hours = localDate.getHours()
    const minutes = localDate.getMinutes()<10?'0'.concat(localDate.getMinutes().toString()):localDate.getMinutes()
    const day = localDate.getDate()<10?'0'.concat(localDate.getDate().toString()):localDate.getDate()
    const month = (+localDate.getMonth() + 1)<10?'0'.concat((+localDate.getMonth() + 1).toString()):(+localDate.getMonth()+1)
    if(localDate.toDateString() === new Date().toDateString()){
        return hours+':'+minutes
    }
    return hours+':'+minutes+' / '+day+'.'+month
}