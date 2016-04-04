# Q1: How would you explain to your ducky what this Scheme code does?
# (lambda (a b) (+ a b))
# lambda creates a function that does not have a name and this function in particular takes the parameters a and b and adds them

# Q2: How would you explain to your ducky what this Scheme code does?
# (define foo (lambda (a b) (+ a b)))
# the function created by lambda (explained in Q1) is named foo


# ---------------------------- CLOSURES IN PYTHON ---------------------------- #
def inc(x):
    return x + 1

f = inc

print f(10)

def h(x):
    return lambda y: x + y

#print h(1)
#print h(2)
#print h(1)(3)
#print h(2)(5)


#Q3: Which of the four h() calls above would you say also created closures?
# h(1) and h(2) create closures because they return a function defined in h

#b=h(1)
#print b
#print b(5)

def f(x):
    def g(y):
        return x + y
    return g

#print f(1)
#print f(1)(3)

# closures:
#a=f(1)
#b=h(1)


# ----------------------------------- TASK ----------------------------------- #
def repeat(s):
    return lambda n: s*n


r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat('cool')(3)  
