// var students = [
//     { first_name: 'Michael', last_name: 'Jordan' },
//     { first_name: 'John', last_name: 'Rosales' },
//     { first_name: 'Mark', last_name: 'Guillen' },
//     { first_name: 'KB', last_name: 'Tonel' }
// ]
// for (var i in students) {
//     console.log(students[i].first_name, students[i].last_name);
// }

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}
for (var Whatever in users) {
    console.log(Whatever);
    for (var i in users[Whatever]) {
        var j = parseInt(i) + 1;
        var totallength = users[Whatever][i].first_name.length + users[Whatever][i].last_name.length;
        console.log(j, users[Whatever][i].first_name, users[Whatever][i].last_name, totallength);
    }
}