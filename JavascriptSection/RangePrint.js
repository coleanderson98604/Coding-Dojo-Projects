function RangePrint(x, y, z) {
    if (z > 0) {
        for (var i = x; i < y; i += z) {
            console.log(i);
        }
    } else if (z < 0) {
        for (var i = x; i < y; i -= z) {
            console.log(i);
        }
    } else if (y === undefined && z === undefined) {
        y = 0;
        z = 1;
        if (x > 0) {
            for (var i = y; i < x; i += z) {
                console.log(i);
            }
        } else if (x < 0) {
            for (var i = y; i > x; i -= z) {
                console.log(i);
            }
        }
    } else if (z === undefined) {
        z = 1;
        for (var i = x; i < y; i += z) {
            console.log(i);
        }
    }
}
//RangePrint(-10)