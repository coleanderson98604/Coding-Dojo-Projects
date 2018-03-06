i = 0
sqr = 0
for num in range(2,25):
    sqr = num // 2
    y = set([sqr])
    while sqr * sqr != num:
        sqr = (sqr + (num // sqr)) // 2
        if sqr in y: break
        y.add(sqr)
        
    
        

