var recipes = {
  eggrolls: 'appetizer',
  enchiladas: 'entree',
  brownie: 'dessert',
}

function updateObjectWithKeyAndValue(obj,key,value){
	obj[key] = value;
	return obj
}

function updateObjectWithKeyAndValue(obj,key,value){
	return Object.assign({}, obj, {[key]: value});
}

