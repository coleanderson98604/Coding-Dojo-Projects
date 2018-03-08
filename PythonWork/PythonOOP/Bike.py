class bike(object):
    def __init__(self,price,max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0
    def ride(self):
        print "Riding..."
        self.miles += 10
        return self
    def reverse(self):
        print "Reversing"
        self.miles -= 5
        if self.miles < 0:
            self.miles = 0
        return self
    def displayInfo(self):
        print "price:",self.price,"Max speed:",self.max_speed,"Miles:",self.miles


    



new_bike = bike('45$','25mph')
new_bike1 = bike('32$','250mph')
new_bike2 = bike('35$','203mph')
new_bike2.ride().reverse().displayInfo()