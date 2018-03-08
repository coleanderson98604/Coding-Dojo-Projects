def CoinTosser():
    print "Starting the program..."
    head = 0
    tails = 0
    import random
    for i in range(5001):
        coin = random.randint(0,1)
        if coin is 1:
            head += 1
            print "Attempt", "#", i, ":", "Throwing a coin... It's a head! ... Got", head, "Heads so far and", tails, "tails so far"
        elif coin is 0:
            tails += 1
            print "Attempt", "#", i, ":", "Throwing a coin... It's a Tail! ... Got", head, "Heads so far and", tails, "tails so far"
    print "Ending the program, Thank you!"
CoinTosser()
        