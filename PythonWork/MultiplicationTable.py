x = 'x'
y = [1,1,2,3,4,5,6,7,8,9,10,11,12]
mult = 0
print x , str(y)[1:-1]
for i in range(1,13):
    y = [1,1,2,3,4,5,6,7,8,9,10,11,12]
    mult += 1
    for z in range(13):
        y[z] *= mult
    print str(y)[1:-1]