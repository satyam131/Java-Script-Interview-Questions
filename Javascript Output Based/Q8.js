

let data = "size";
const bird = {
    size:"small",
};

//passing data in bird object will print size.
console.log(bird[data]);

//passing size value key as a string
console.log(bird["size"]);

//access size from bird object
console.log(bird.size);

//data is not present in bird so it will print undefinded
console.log(bird.data);

//Output : small, small, small, undefined.
