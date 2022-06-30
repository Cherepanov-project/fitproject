const generateId = (() => {
    const keysId: number[] = []
    return () => {
        let id: number = Math.floor(Math.random() * 1e8)
        while (true) {
            if (keysId.includes(id)) {
                id = Math.floor(Math.random() * 1e8)
            } else {
                keysId.push(id)
                return id
            }
        }
    }
})()

export default generateId
