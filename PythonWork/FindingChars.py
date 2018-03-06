word_list = ['hello', 'world', 'my', 'name', 'is', 'anna']
char = 'e'
new_list = []
for item in word_list:
    if item.count(char) != 0:
        new_list.append(item)
print new_list