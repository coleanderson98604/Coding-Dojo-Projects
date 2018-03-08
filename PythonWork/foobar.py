def fooBar():
    for x in range (100,100000):
        issquare = False
        isprime = True
        for i in range(2,x):
            if (i * i == x):
                issquare = True
        for y in range (2,x):
            if (x % y == 0):
                isprime = False
        if (issquare):
            print  "Bar"
        elif (isprime):
            print "Foo"
        else:
            print ("FooBar")
        
fooBar()
