const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storeObj(obj){
  // La consegna chiede di salvare l'object con il nome della sua key "user", ma "user" è il nome dell'object. Forse si intendeva la key "name"?
  localStorage.setItem(obj.name, JSON.stringify(obj));
}

storeObj(user);