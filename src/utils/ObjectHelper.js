export const updateObjectInArray = (items, id, objPropName, newObjProps) => {
    items.map(u => {
        if (u[objPropName] === id){
         return {...u, ...newObjProps}
        }
        return u
    })
}