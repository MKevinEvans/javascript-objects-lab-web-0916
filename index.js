var recipes = {key: "value"}

function updateObjectWithKeyAndValue(object, key, value){
	return Object.assign({}, object, {[key]: value} )

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	object[key] = value
	return object
}
function destructivelyDeleteFromObjectByKey(object, key, value){
	delete object[key]
	return object
}
function deleteFromObjectByKey(object, key, value){
	var clone = Object.assign({}, object)
	delete clone[key]
	return clone
}