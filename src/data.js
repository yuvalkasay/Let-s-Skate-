function Details(name, age, phone, place, id)
{
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.place = place;
    this.id = id;
}

let data =
[
    {name: 'avi', age: 11, phone: 12345678, place: 'eilat', id: 1},
    {name: 'tony', age: 22, phone: 87654321, place: 'dessert', id: 2}
]

let idCounterData = 3;

function get_data(res)
{
    res.send(data);
}

function create_data(req, res)
{
    const new_data = req.body;
    new_data.id = idCounterData;
    idCounterData++;

    data.push(new_data);
    res.status(201).send(new_data);
}

function update_data(req, res)
{
    const id = req.params.id;
    
    const index = data.findIndex(find => find.id == id)
    if(index == -1)
    {
        res.sendStatus(404);
    }
    else
    {
        data[index].name = req.body.name;
        data[index].age = req.body.age;
        data[index].phone = req.body.phone;
        data[index].place = req.body.place;
        data[index].id = idCounterData;
    }
    idCounterData++;
}

function delete_data(req, res)
{
    const id = req.params.id;

    const index = data.findIndex(find => find.id == id)
    if(index == -1)
    {
        res.sendStatus(404);
    }
    else
    {
        data.splice(index,1);
        res.sendStatus(200);
    }
}

module.exports.get_data = get_data;
module.exports.create_data = create_data;
module.exports.delete_data = delete_data;
module.exports.update_data = update_data;
