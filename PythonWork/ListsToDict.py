def make_dict(list1, list2):
    if len(list1) == len(list2):
        new_list = zip(list1,list2)
        new_dict = dict(new_list)
    elif len(list1) > len(list2):
        new_dict = {}
        for i in range(len(list1)):
            new_dict[list1[i]] = list2[i - 1]
    elif len(list1) < len(list2):
        new_dict = {}
        for i in range(len(list2)):
            new_dict[list2[i]] = list1[i - 1]

    return new_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins"]
print make_dict(name,favorite_animal)
