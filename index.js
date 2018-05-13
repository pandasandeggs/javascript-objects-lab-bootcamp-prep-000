var recipes = {
  eggrolls: 'appetizer',
  enchiladas: 'entree',
  brownie: 'dessert',
}

function updateObjectWithKeyAndValue(obj, key, value){
	obj.key = value;
	return recipes
}

function updateObjectWithKeyAndValue(obj,key,value){
	obj[key] = value;
	return obj
}
