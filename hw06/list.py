nums = []
for x in range(8):
    nums.append(x)

print nums

squares = []
for x in range(8):
    squares.append(x**2)

print squares


print [x for x in range(8)]
print [x*x for x in range(8)]
print [(x, x*x, x*x*x) for x in range(8)]


p = "myNoobPass1234"

print [x for x in p]
# list of each character in p

print [x for x in "1234"]
# ['1','2','3','4']

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

print [ x for x in p if x in UC_LETTERS ]
# ['N', 'P']

print [ 1 for x in p if x in UC_LETTERS ]
# [1, 1,]

print [ 1 if x in UC_LETTERS else 0 for x in p ]  
# [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]

LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
NUMBERS = "0123456789"

def check_pass(p):
    uc = [True for x in p if x in UC_LETTERS]
    lc = [True for x in p if x in LC_LETTERS]
    num = [True for x in p if x in NUMBERS]
    
    return (sum(uc) > 0) & (sum(lc) > 0) & (sum(num) > 0)
    

print check_pass("Yes432")

NONALPHANUM = ".?!&#,;:-_*"

def pass_strength(p):
    uc = [True for x in p if x in UC_LETTERS]
    lc = [True for x in p if x in LC_LETTERS]
    num = [True for x in p if x in NUMBERS]
    nonanum = [True for x in p if x in NONALPHANUM]
    if (check_pass == False & (sum(nonanum) <= 0)):
        return 1
    
    strength = 0    
    if sum(uc) >= 3:
        strength += 3
    else:
        strength += sum(uc)
    if sum(lc) >= 3:
        strength += 3
    else:
        strength += sum(lc)
    if sum(num) >= 2:
        strength += 2
    else:
        strength += sum(num)
    if sum(nonanum) >= 2:
        strength += 2
    else:
        strength += sum(nonanum)

    return strength

print pass_strength("eeG")
print pass_strength("WDEfff33..")
print pass_strength("33njnj44?")
print pass_strength("g3hdw4hd")

def strength_check(p):
    l = [1 if x in UC_LETTERS else
        2 if x in LC_LETTERS else
        3 if x in NUMBERS else
        0 for x in p]
    return 1 in l and 2 in l and 3 in l

print strength_check("eeG")
print strength_check("WDEfff33..")
print strength_check("33njnj44?")
print strength_check("g3hdw4hd")
