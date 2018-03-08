def ScoresAndGrades():
    print "Scores and Grades"
    import random
    for i in range(11):
        num = random.randint(60,100)
        if num >= 60 and num <= 69:
            print "Score:", num, ";", "Your Grade is", "D"
        elif num >= 70 and num <= 79:
            print "Score:", num, ";", "Your Grade is", "C"
        elif num >= 80 and num <= 89:
            print "Score:", num, ";", "Your Grade is", "B"
        elif num >= 90 and num <= 100:
            print "Score:", num, ";", "Your Grade is", "A"
ScoresAndGrades()