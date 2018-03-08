class Animal(object):
    def __init__(self,name,health):
        self.name = name
        self.health = health
    def walk(self,laps):
        for i in range(0,laps):
            self.health -= 1
        return self
    def run(self,laps1):
        for i in range(0,laps1):
            self.health -= 5
        return self
    def health2(self):
        print "{} Remaining health: {}".format(self.name,self.health)
class Dog(Animal):
    def __init__(self,name,health):
        super(Dog,self).__init__(name,150)
    def pet(self,pets):
        for i in range(0,pets):
            self.health += 5
        return self
class Dragon(Animal):
    def __init__(self,name,health):
        super(Dragon,self).__init__(name,170)
    def fly(self,flying):
        for i in range(0,flying):
            self.health -= 10
        return self
    def healthInfo(self):
        super(Dragon,self).health()
        print health
        return self
Doggo = Dog('Peter',150)
Doggo.pet(2).health2()