# CLOSURES
# 1. A function is declared inside another function
# 2. Inner function accesses a variable from the outer function (outside of the local scope of the inner function)
# 3. The external function binds a value to the variable and finishes (or closes) before the inner function can be completed

def repeat(s):
    def times(x):
        return s * x
    return times
# This is an example of a nested function but NOT a closure because 


#b=h(1)
#print b
#print b(5)

def f(x):
    def g(y):
        return x + y
    return g

# ^ is not a closure, but f(1) is



#print f(1)
#print f(1)(3)

# closures:
#a=f(1)
#b=h(1)


# ----------------------------------- TASK ----------------------------------- #
def repeat(s):
    return lambda n: s*n


#def repeat(word):
#    def times(x):
#        return word*x
#    return times

r1 = repeat("hello")
r2 = repeat("goodbye")

# These create closures because repeat runs, binds s to "hello", and then exits, returning a function (times) with s bound to "hello"

print r1(2)
print r2(2)
print repeat('cool')(3)  
