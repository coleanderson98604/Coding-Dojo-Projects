def odd_even():
    for i in range (1,2001):
        if i % 2 == 0:
            print "Number is", i, ".", "This is an even number"
        elif i % 2 is not 0:
            print "Number is", i, ".", "This is an odd number"
# odd_even()

def Multiply(list,mult):
    for i in range(len(list)):
        list[i] *= mult
    return list
# print(Multiply([1,2,3,4,5,6,7,8,9,10],5))

def layered_multiples(list):
    NewList = []
    for i in list:
        listvalue = []
        # print i
        for z in range(0,i):
            listvalue.append(1)
        NewList.append(listvalue)
    return NewList
print(layered_multiples(Multiply([1,2,3,4,5,6,7],5)))