class Product(object):
    def __init__(self,price,item_name,weight,brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = "for sale"
    

    def Sell(self):
        if self.status == "for sale":
            self.status = "Sold"
        return self
    
    def Add_tax(self,float):
        self.price = (self.price * float) + self.price
        return self
    
    def Return(self,reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        elif reason == "in box":
            self.status = "for sale"
        elif reason == "used":
            self.status = "used"
            self.price = self.price - (self.price * 0.20)
        return self
    def displayinfo(self):
        print "Price: {} Item Name: {} Weight: {} Brand: {} Status: {}".format(self.price,self.item_name,self.weight,self.brand,self.status)

Peanut = Product(5,'Nuts',"5lb","coors")
Peanut.Add_tax(0.9).Sell().Return('defective').displayinfo()
    
