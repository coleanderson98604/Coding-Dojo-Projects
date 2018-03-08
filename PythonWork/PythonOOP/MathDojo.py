class Calculator(object):
    def __init__(self):
        self.num = 0
    def add(self,*nums1):
        for i in nums1:
            # print i
            # print self.num
            if type(i) == int:
                self.num += i
            else:
                for z in i:
                    self.num += z
        return self
    def subtract(self,*nums):
        for i in nums:
            # print i
            # print self.num
            if type(i) == int:
                self.num -= i
            else:
                for z in i:
                    # print z
                    self.num -= z
        return self
    def result(self):
        print self.num

md = Calculator()
md.add([1],3,4).add([3,5,7,8],[2,4,3,1.25]).subtract(2,[2,3],[1.1,2.3]).result()