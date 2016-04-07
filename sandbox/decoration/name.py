import random

def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()

def dble(f):
    name = f()
    return name+name
# Not a closure - doesn't have an inner function

print dble(get_name) 
# pass fxn returning a string, then dble returns that string repeated twice
 
# We can do better
get_name = dble(get_name)
print get_name
