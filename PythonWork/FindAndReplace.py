# words = "It's thanksgiving day. It's my birthday, too!"
# print words.find('day')
# print words.replace('day', 'month')


# x = [2,54,-2,7,12,98]
# print min(x)
# print max(x)

# x = ['hello',2,54,-2,7,12,98,"world"]
# print x[0], x[7]
# y = [x[0],x[7]]
# print y

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
half = len(x) / 2
y = x[:half]
x = x[half:]
x.insert(0,y)
print x