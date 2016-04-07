def inc(x):
    return x + 1

def dec(x):
    return x - 1

f = inc
print f(5)
# prints 6

flist = [inc,dec]

print flist[1](5)
# prints 4

# --------------------------- A simple closure in python -------------------- #

def makeAdder(n):
    def inner(x):
        return x + n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

print add3(10)
# prints 13

print add5(10)
# prints 15


def make_counter():
    # private "instance" data
    # python scoping rules necessitate list
    count = [0]

    # public methods
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    # return dictionary to allow access to all methods
    return {'inc':inc, 'dec':dec, 'reset':reset, 'get':get}

# Instantiate counters:
c1 = make_counter()
c2 = make_counter()

# Must use clunky list notation
c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()
# prints 3
# state is being maintained here

c2['inc']()
print c2['get']()
# prints 1

c1['reset']()
print c1['get']()
# prints 0

