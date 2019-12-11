document.querySelector('.sent-it').addEventListener('click', function() {
    createData();
    getData();
})


function createData()
{
    let name = document.querySelector('.input-name').value;
    let age = Number(document.querySelector('.input-age').value);
    let phone = Number(document.querySelector('.input-phone').value);
    let place = document.querySelector('.input-destination').value;
    console.log(name,age,phone,place);
    
    axios.post("/data", {
        name: name,
        age: age,
        phone: phone,
        place: place,
    })
    .then(function (response){
        if(response.status == 201)
        {
            document.querySelector('.sent-it').innerHTML = 'Got it!'
        }
        else
        {
            console.log(`error from server: ${response.status}`);
        }
        
        console.log('response:', response);
    })
    .catch(function (error){
        console.log(error);
        console.log('error');
        
    });
}

function getData()
{
    axios.get('/data')
    .then(function (response){
        
        document.querySelector('.sent-it').innerHTML = 'Got it!'
        data = response.data;
        console.log('good! getData:', data);
        
    })
    .catch(function (error){
        console.log(error);
        
    })
}

