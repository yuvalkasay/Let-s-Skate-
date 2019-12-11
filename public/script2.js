// data[0] = {name: "avi", age: 11, phone: 12345678, place: "eilat", id: 1};
getData();

function getData()
{
    axios.get('/data')
    .then(function (response){
        
        data = response.data;
        console.log('good! data:', data);

        for(let i=0; i<data.length; i++)
        {
            let name_p = document.createElement('p');
            name_p.classList.add('new_data');
            document.querySelector('.float-left.name').appendChild(name_p);
            name_p.innerHTML = data[i].name;

            let age_p = document.createElement('p');
            document.querySelector('.float-left.age').appendChild(age_p);
            age_p.innerHTML = data[i].age;

            let phone_p = document.createElement('p');
            document.querySelector('.float-left.phone').appendChild(phone_p);
            phone_p.innerHTML = data[i].phone;

            let destination_p = document.createElement('p');
            document.querySelector('.float-left.destination').appendChild(destination_p);
            destination_p.innerHTML = data[i].place;
        }
        
    })
    .catch(function (error){
        console.log(error);
        
    })
}



