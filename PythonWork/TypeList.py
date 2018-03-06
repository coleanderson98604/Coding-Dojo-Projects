l = ['magical unicorns','hello','world']
NewL = ''
Total = 0
Strings = 0
Floats = 0
Nums = 0
for index in range(len(l)):
    if type(l[index]) is float:
        Floats = 1
    elif type(l[index]) is int:
        Nums = 1
    elif type(l[index]) is str:
        Strings = 1

for i in range(len(l)):
    if type(l[i]) is str:
        NewL += l[i] + " "
    elif type(l[i]) is float or type(l[i]) is int:
        Total += l[i]

if Floats > 0 and Nums is 0 and Strings is 0:
    print "The list you entered is of Float type"
elif Nums > 0 and Floats is 0 and Strings is 0:
    print "The list you entered is of Int type"
elif Strings > 0 and Nums is 0 and Floats is 0:
    print "The list you entered is of Str type"
elif Strings > 0 and Nums > 0 or Floats > 0 and Nums > 0 or Strings > 0 and Floats > 0:
    print "The list you entered is of mixed type"

if Strings > 0: print "String:" , NewL
if Nums > 0 or Floats > 0: print "Sum:" , Total


    

