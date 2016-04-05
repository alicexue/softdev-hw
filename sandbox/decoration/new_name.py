import random

def doubler(f):
    def inner():
        name = f()
        return name+name
    return inner

# not a closure until bound by @doubler

def htmler(f):
    def inner():
        name = f()
        return "<html>" + name + "</html>"
    return inner


@doubler
#@htmler
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)

print get_name()
# with @doubler prints double of one random name, i.e. 'tomtom'
# without @doubler only returns the name, i.e. 'sue'
# encapsulates get_name within doubler
# a Python decorator is shorthand for calling a wrapper-type function like doubler
# a Python decorator encapsulates a closure
# a Python decorator allows you to transparently wrap functionality 
# the decorator will only work if you have an inner function
