class car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()
    def display_all(self):
        print "Price: {}".format(self.price)
        print "Speed: {}".format(self.speed)
        print "Fuel: {}".format(self.fuel)
        print "Mileage: {}".format(self.mileage)
        print "Tax: {}".format(self.tax)
        print " "
        return self
Car1 = car('400$','3000mph','full','25mpg')
car2 = car('300$','3000mph','full','25mpg')
car3 = car('42200$','3000mph','full','25mpg')
car4 = car('200$','3000mph','full','25mpg')
car5 = car('400$','3000mph','full','25mpg')
car6 = car('100$','3000mph','full','25mpg')
car()