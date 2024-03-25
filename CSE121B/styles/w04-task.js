let myProfile = {
    name: "Olivia Smart",
    photo: "me.jpeg",
    favoriteFoods: ['Hamburgers', 'French Fries', 'Pizza', 'Alfredo'],
    hobbies: ['running', 'photography', 'crocheting', 'crafts'],
    placesLived: [],
};

myProfile.placesLived.push(
    {
        place: 'Rancho Cucamonga, CA',
        length: '18 years',
    },
    {
        place: 'Rexburg, ID',
        length: '3 years',
    }
);

document.querySelector('#name').textContent = myProfile.name;

document.getElementById("photo").src = myProfile.photo;

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.innerHTML = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement("dd");
    dd.innerHTML = `<strong>${place.length}</strong>`;
    document.querySelector('#places-lived').appendChild(dd);
});
