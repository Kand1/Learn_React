export const updateObjectInArray = (items, key, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === key){
         return {...u, ...newObjProps}
        }
        return u
    })
}