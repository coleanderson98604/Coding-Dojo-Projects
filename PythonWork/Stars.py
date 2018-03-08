def draw_stars(list):
    for i in list:
        new_str = ""
        if type(i) is int:
            for z in range(0,i):
                new_str += "*"
        elif type(i) is str:
            i = i.lower()
            char = i[0]
            for z in range(len(i)):
                new_str += char
        print new_str
draw_stars([1,"hello",2,3,"Michael",4,5,6])
