export const updateObjectInArray = (items, itemId, objectPropName, newObject) => {
    items.users.map((e) => {
        if (e[objectPropName] === itemId) {
            return {...e, ...newObject};
        }
        return e;
    })
}

